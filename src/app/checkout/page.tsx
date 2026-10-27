"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

type FormData = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  cpf: "",
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState<"dados" | "pagamento">("dados");
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmitDados(e: React.FormEvent) {
    e.preventDefault();
    // Validação básica
    if (!form.name || !form.email || !form.phone || !form.cep || !form.street || !form.number || !form.city || !form.state) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    setStep("pagamento");
  }

  function handleFinalize() {
    setSubmitting(true);

    // Salva pedido pendente no localStorage (simulação)
    const order = {
      id: `ARD-${Date.now().toString(36).toUpperCase()}`,
      date: new Date().toISOString(),
      status: "pagamento_pendente",
      customer: form,
      items: items.map((i) => ({
        id: i.product.id,
        name: i.product.name,
        price: i.product.price,
        quantity: i.quantity,
      })),
      total: totalPrice,
    };

    const existing = JSON.parse(localStorage.getItem("ardente-orders") || "[]");
    existing.push(order);
    localStorage.setItem("ardente-orders", JSON.stringify(existing));
    localStorage.setItem("ardente-last-order", JSON.stringify(order));

    clearCart();
    router.push("/pedido-confirmado");
  }

  if (items.length === 0 && step === "dados") {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="mb-3 text-2xl font-bold text-white">Carrinho vazio</h1>
        <p className="mb-8 text-zinc-400">Adicione produtos antes de finalizar a compra.</p>
        <Link
          href="/produtos"
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primary-hover"
        >
          Ver produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-white">Checkout</h1>
      <p className="mb-8 text-zinc-400">
        {step === "dados" ? "Preencha seus dados para continuar" : "Forma de pagamento"}
      </p>

      {/* Steps indicator */}
      <div className="mb-10 flex items-center gap-3 text-sm">
        <span className={`font-medium ${step === "dados" ? "text-gold" : "text-zinc-400"}`}>
          1. Dados
        </span>
        <span className="text-zinc-600">→</span>
        <span className={`font-medium ${step === "pagamento" ? "text-gold" : "text-zinc-400"}`}>
          2. Pagamento
        </span>
        <span className="text-zinc-600">→</span>
        <span className="text-zinc-400">3. Confirmação</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Formulário / Pagamento */}
        <div className="lg:col-span-3">
          {step === "dados" && (
            <form onSubmit={handleSubmitDados} className="space-y-5">
              <h2 className="text-lg font-semibold text-gold">Dados pessoais</h2>

              <div>
                <label className="mb-1 block text-sm text-zinc-400">Nome completo *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Telefone / WhatsApp *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm text-zinc-400">CPF (opcional)</label>
                <input
                  value={form.cpf}
                  onChange={(e) => update("cpf", e.target.value)}
                  placeholder="000.000.000-00"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                />
              </div>

              <h2 className="pt-4 text-lg font-semibold text-gold">Endereço de entrega</h2>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">CEP *</label>
                  <input
                    required
                    value={form.cep}
                    onChange={(e) => update("cep", e.target.value)}
                    placeholder="00000-000"
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-zinc-400">Rua / Avenida *</label>
                  <input
                    required
                    value={form.street}
                    onChange={(e) => update("street", e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Número *</label>
                  <input
                    required
                    value={form.number}
                    onChange={(e) => update("number", e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-zinc-400">Complemento</label>
                  <input
                    value={form.complement}
                    onChange={(e) => update("complement", e.target.value)}
                    placeholder="Apto, bloco..."
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Bairro *</label>
                  <input
                    required
                    value={form.neighborhood}
                    onChange={(e) => update("neighborhood", e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Cidade *</label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Estado *</label>
                  <input
                    required
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                    placeholder="SP"
                    maxLength={2}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link
                  href="/carrinho"
                  className="rounded-full border border-border px-6 py-3 text-sm text-zinc-300 hover:border-gold hover:text-gold"
                >
                  Voltar
                </Link>
                <button
                  type="submit"
                  className="flex-1 rounded-full bg-primary py-3 font-semibold text-white hover:bg-primary-hover"
                >
                  Continuar para pagamento
                </button>
              </div>
            </form>
          )}

          {step === "pagamento" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gold">Pagamento</h2>

              {/* Aviso de pendente */}
              <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6">
                <div className="mb-3 flex items-center gap-2 text-gold">
                  <span className="text-xl">⏳</span>
                  <span className="font-semibold">Pagamento em breve</span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-300">
                  A integração com o <strong>Mercado Pago</strong> será ativada em breve.
                  Por enquanto, você pode finalizar o pedido e ele ficará com status{" "}
                  <strong className="text-gold">pagamento pendente</strong>.
                  Entraremos em contato pelo WhatsApp ou e-mail para combinar o pagamento.
                </p>
              </div>

              {/* Métodos futuros (visual) */}
              <div className="space-y-3 opacity-60">
                <p className="text-sm text-zinc-500">Métodos que estarão disponíveis:</p>
                <div className="flex flex-wrap gap-2">
                  {["Pix", "Cartão de crédito", "Cartão de débito", "Boleto"].map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-border px-4 py-2 text-sm text-zinc-400"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setStep("dados")}
                  className="rounded-full border border-border px-6 py-3 text-sm text-zinc-300 hover:border-gold hover:text-gold"
                >
                  Voltar
                </button>
                <button
                  onClick={handleFinalize}
                  disabled={submitting}
                  className="flex-1 rounded-full bg-primary py-3 font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
                >
                  {submitting ? "Registrando pedido..." : "Finalizar pedido (pagamento pendente)"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Resumo do pedido */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-4 font-semibold text-white">Resumo</h3>
            <div className="mb-4 max-h-48 space-y-3 overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between gap-2 text-sm">
                  <span className="text-zinc-300">
                    {quantity}× {product.name}
                  </span>
                  <span className="shrink-0 text-zinc-400">
                    R$ {(product.price * quantity).toFixed(2).replace(".", ",")}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-sm text-zinc-400">
                <span>
                  {totalItems} {totalItems === 1 ? "item" : "itens"}
                </span>
              </div>
              <div className="mt-2 flex justify-between text-lg font-bold">
                <span className="text-white">Total</span>
                <span className="text-gold">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
