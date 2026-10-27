"use client";

import { useEffect, useState } from "react";

export function AgeGate() {
  const [show, setShow] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ardente-age-confirmed");
    if (stored === "true") {
      setConfirmed(true);
    } else {
      setShow(true);
    }
  }, []);

  function confirmAge() {
    localStorage.setItem("ardente-age-confirmed", "true");
    setConfirmed(true);
    setShow(false);
  }

  function denyAge() {
    window.location.href = "https://www.google.com";
  }

  if (!show || confirmed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-2xl border border-border">
        <div className="mb-6 text-4xl">🔞</div>
        <h2 className="mb-3 text-2xl font-semibold text-gold">
          Conteúdo para maiores de 18 anos
        </h2>
        <p className="mb-8 text-zinc-300 leading-relaxed">
          O Ardente é destinado exclusivamente a pessoas maiores de 18 anos.
          Ao continuar, você confirma que tem idade legal para acessar conteúdo
          sobre saúde sexual e produtos de bem-estar íntimo.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={confirmAge}
            className="rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:bg-primary-hover"
          >
            Tenho 18 anos ou mais
          </button>
          <button
            onClick={denyAge}
            className="rounded-full border border-border px-8 py-3 font-medium text-zinc-300 transition hover:border-gold hover:text-gold"
          >
            Sou menor de idade
          </button>
        </div>
      </div>
    </div>
  );
}
