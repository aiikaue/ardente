"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getRecommendations,
  QuizAnswers,
  ScoredProduct,
} from "@/lib/recommendations";
import { AddToCartButton } from "@/components/AddToCartButton";

export default function RecomendacoesPage() {
  const [recommended, setRecommended] = useState<ScoredProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasAnswers, setHasAnswers] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem("ardente-quiz");
    let answers: QuizAnswers = {};

    if (raw) {
      try {
        answers = JSON.parse(raw);
        setHasAnswers(Object.keys(answers).length > 0);
      } catch {
        // ignore
      }
    }

    const results = getRecommendations(answers, 6);
    setRecommended(results);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center text-zinc-400">
        Analisando suas preferências...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-white">
        {hasAnswers ? "Suas recomendações" : "Sugestões para você"}
      </h1>
      <p className="mb-10 text-zinc-400">
        {hasAnswers
          ? "Com base nas suas respostas, selecionamos produtos que podem fazer sentido para você. Estas são apenas sugestões — consulte um profissional de saúde se tiver dúvidas."
          : "Faça o quiz para receber recomendações ainda mais personalizadas."}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {recommended.map((product, index) => (
          <div
            key={product.id}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-gold/40"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <span className="inline-block rounded-full bg-primary/30 px-2.5 py-0.5 text-xs font-medium text-gold">
                {product.category}
              </span>
              {index === 0 && (
                <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-medium text-gold">
                  Top match
                </span>
              )}
            </div>

            <Link href={`/produtos/${product.id}`}>
              <div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-muted text-4xl">
                🧴
              </div>
              <h2 className="mb-1 text-lg font-semibold text-white hover:text-gold">
                {product.name}
              </h2>
            </Link>

            <p className="mb-3 text-sm text-zinc-400">{product.shortDescription}</p>

            {/* Motivos da recomendação */}
            {product.reasons.length > 0 && (
              <ul className="mb-4 space-y-1">
                {product.reasons.map((reason, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="text-gold">✦</span>
                    {reason}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center justify-between gap-3">
              <p className="text-xl font-bold text-gold">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
              <AddToCartButton
                product={product}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/quiz"
          className="rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-gold hover:border-gold hover:bg-gold/10"
        >
          {hasAnswers ? "Refazer quiz" : "Fazer o quiz"}
        </Link>
        <Link
          href="/produtos"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Ver todos os produtos
        </Link>
        <Link
          href="/chat"
          className="rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-gold hover:border-gold hover:bg-gold/10"
        >
          Tirar dúvidas com a IA
        </Link>
      </div>
    </div>
  );
}
