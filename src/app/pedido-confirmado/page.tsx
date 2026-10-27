"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Order = {
  id: string;
  date: string;
  status: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  items: { name: string; price: number; quantity: number }[];
  total: number;
};

export default function PedidoConfirmadoPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ardente-last-order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  if (!order) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="mb-3 text-2xl font-bold text-white">Nenhum pedido encontrado</h1>
        <Link href="/produtos" className="text-gold hover:underline">
          Voltar ao catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="mb-6 text-5xl">✓</div>
      <h1 className="mb-2 text-3xl font-bold text-white">Pedido registrado!</h1>
      <p className="mb-8 text-zinc-400">
        Seu pedido foi salvo com status de{" "}
        <span className="font-medium text-gold">pagamento pendente</span>.
      </p>

      <div className="mb-8 rounded-2xl border border-border bg-card p-6 text-left">
        <div className="mb-4 flex justify-between text-sm">
          <span className="text-zinc-400">Número do pedido</span>
          <span className="font-mono font-medium text-gold">{order.id}</span>
        </div>
        <div className="mb-4 flex justify-between text-sm">
          <span className="text-zinc-400">Cliente</span>
          <span className="text-white">{order.customer.name}</span>
        </div>
        <div className="mb-4 flex justify-between text-sm">
          <span className="text-zinc-400">Contato</span>
          <span className="text-white">{order.customer.phone}</span>
        </div>
        <div className="mb-4 border-t border-border pt-4">
          {order.items.map((item, i) => (
            <div key={i} className="mb-2 flex justify-between text-sm">
              <span className="text-zinc-300">
                {item.quantity}× {item.name}
              </span>
              <span className="text-zinc-400">
                R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-border pt-4 text-lg font-bold">
          <span className="text-white">Total</span>
          <span className="text-gold">
            R$ {order.total.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-gold/20 bg-gold/5 p-4 text-sm text-zinc-300">
        Entraremos em contato pelo WhatsApp ou e-mail para combinar o pagamento
        (Pix, cartão ou outra forma). Assim que o Mercado Pago estiver ativo,
        o pagamento será automático.
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/produtos"
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primary-hover"
        >
          Continuar comprando
        </Link>
        <Link
          href="/"
          className="rounded-full border border-border px-8 py-3 text-zinc-300 hover:border-gold hover:text-gold"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
