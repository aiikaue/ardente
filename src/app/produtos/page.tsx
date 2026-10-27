"use client";

import { useState } from "react";
import Link from "next/link";
import { products, categories } from "@/data/products";

export default function ProdutosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-white">Catálogo</h1>
      <p className="mb-8 text-zinc-400">
        Produtos de saúde sexual e bem-estar íntimo. Todos os itens incluem orientações de uso e dicas de cuidados.
      </p>

      {/* Filtros de categoria */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selectedCategory === null
              ? "bg-primary text-white"
              : "border border-border text-zinc-300 hover:border-gold hover:text-gold"
          }`}
        >
          Todos ({products.length})
        </button>
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "border border-border text-zinc-300 hover:border-gold hover:text-gold"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid de produtos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/produtos/${product.id}`}
            className="group rounded-2xl border border-border bg-card p-5 transition hover:border-gold/40"
          >
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-muted text-4xl">
              🧴
            </div>
            <span className="mb-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs text-zinc-300">
              {product.category}
            </span>
            <h2 className="mb-1 font-medium text-white group-hover:text-gold">
              {product.name}
            </h2>
            <p className="mb-3 text-sm text-zinc-400 line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gold">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
              <span className="text-xs text-zinc-500">
                {product.intensity} • {product.forBeginners ? "Iniciante" : "Intermediário+"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-zinc-400">
          Nenhum produto encontrado nesta categoria.
        </p>
      )}
    </div>
  );
}
