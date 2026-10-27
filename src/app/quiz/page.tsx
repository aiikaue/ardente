"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Answers = {
  goal: string;
  interest: string;
  intensity: string;
  flavor: string;
  experience: string;
  sensitivity: string;
};

const questions = [
  {
    id: "goal",
    question: "Qual é o seu principal objetivo agora?",
    options: [
      { value: "conforto", label: "Conforto e hidratação" },
      { value: "prevencao", label: "Prevenção e proteção (camisinha)" },
      { value: "higiene", label: "Higiene e cuidados diários" },
      { value: "exploracao", label: "Explorar novas sensações" },
      { value: "prazer-solo", label: "Prazer individual / solo" },
      { value: "casal", label: "Momentos a dois" },
    ],
  },
  {
    id: "interest",
    question: "O que mais te interessa neste momento?",
    options: [
      { value: "lubrificante", label: "Lubrificantes" },
      { value: "camisinha", label: "Camisinhas" },
      { value: "brinquedo", label: "Brinquedos / vibradores" },
      { value: "anal", label: "Exploração anal (com segurança)" },
      { value: "kit", label: "Um kit pronto" },
      { value: "indiferente", label: "Ainda não sei / me surpreenda" },
    ],
  },
  {
    id: "intensity",
    question: "Qual nível de intensidade você prefere?",
    options: [
      { value: "suave", label: "Suave e discreto" },
      { value: "media", label: "Médio" },
      { value: "intensa", label: "Mais intenso" },
      { value: "indiferente", label: "Sem preferência" },
    ],
  },
  {
    id: "flavor",
    question: "Prefere com sabor/aroma ou neutro?",
    options: [
      { value: "sem", label: "Sem sabor / neutro" },
      { value: "com-sabor", label: "Com sabor ou aroma" },
      { value: "indiferente", label: "Tanto faz" },
    ],
  },
  {
    id: "experience",
    question: "Qual é o seu nível de experiência?",
    options: [
      { value: "iniciante", label: "Iniciante — quero começar com calma" },
      { value: "intermediario", label: "Já usei alguns produtos" },
      { value: "avancado", label: "Tenho bastante experiência" },
    ],
  },
  {
    id: "sensitivity",
    question: "Você tem alguma restrição ou sensibilidade?",
    options: [
      { value: "nenhuma", label: "Nenhuma que eu saiba" },
      { value: "pele-sensivel", label: "Pele sensível" },
      { value: "latex", label: "Alergia (ou suspeita) a látex" },
      { value: "outra", label: "Outra — vou me informar melhor" },
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  function selectOption(value: string) {
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ardente-quiz", JSON.stringify(newAnswers));
      }
      router.push("/recomendacoes");
    }
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-zinc-400">
          <span>
            Pergunta {step + 1} de {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h1 className="mb-8 text-2xl font-semibold text-white">{current.question}</h1>

      <div className="space-y-3">
        {current.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => selectOption(opt.value)}
            className="w-full rounded-xl border border-border bg-card px-5 py-4 text-left text-zinc-200 transition hover:border-gold hover:bg-muted"
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={goBack}
          disabled={step === 0}
          className="text-sm text-zinc-400 disabled:opacity-30 hover:text-white"
        >
          ← Voltar
        </button>
        <Link href="/produtos" className="text-sm text-zinc-400 hover:text-gold">
          Pular e ver catálogo
        </Link>
      </div>
    </div>
  );
}
