"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="mb-6 text-5xl">🛒</div>
        <h1 className="mb-3 text-2xl font-bold text-white">Seu carrinho está vazio</h1>
        <p className="mb-8 text-zinc-400">
          Explore o catálogo ou faça o quiz para receber recomendações personalizadas.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/produtos"
            className="rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primary-hover"
          >
            Ver produtos
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-gold/40 px-8 py-3 font-medium text-gold hover:border-gold hover:bg-gold/10"
          >
            Fazer o quiz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Carrinho <span className="text-gold">({totalItems})</span>
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-zinc-400 hover:text-red-400 transition"
        >
          Limpar tudo
        </button>
      </div>

      <div className="space-y-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-muted text-3xl">
              🧴
            </div>

            <div className="flex-1 min-w-0">
              <Link
                href={`/produtos/${product.id}`}
                className="font-medium text-white hover:text-gold"
              >
                {product.name}
              </Link>
              <p className="text-sm text-zinc-400">{product.category}</p>
              <p className="mt-1 font-semibold text-gold">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-3 py-1.5 text-zinc-300 hover:text-white"
                  aria-label="Diminuir"
                >
                  −
                </button>
                <span className="min-w-[2rem] text-center text-sm font-medium text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-3 py-1.5 text-zinc-300 hover:text-white"
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>

              <p className="min-w-[5rem] text-right font-semibold text-white">
                R$ {(product.price * quantity).toFixed(2).replace(".", ",")}
              </p>

              <button
                onClick={() => removeItem(product.id)}
                className="ml-1 text-zinc-500 hover:text-red-400 transition"
                aria-label="Remover"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumo */}
      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <div className="mb-4 flex justify-between text-zinc-300">
          <span>
            Subtotal ({totalItems} {totalItems === 1 ? "item" : "itens"})
          </span>
          <span className="font-semibold text-white">
            R$ {totalPrice.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="mb-6 flex justify-between text-lg">
          <span className="font-medium text-white">Total</span>
          <span className="font-bold text-gold">
            R$ {totalPrice.toFixed(2).replace(".", ",")}
          </span>
        </div>

        <Link
          href="/checkout"
          className="block w-full rounded-full bg-primary py-3.5 text-center font-semibold text-white transition hover:bg-primary-hover"
        >
          Finalizar compra
        </Link>

        <Link
          href="/produtos"
          className="mt-4 block text-center text-sm text-zinc-400 hover:text-gold"
        >
          Continuar comprando
        </Link>
      </div>
    </div>
  );
}
