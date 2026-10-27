import Link from "next/link";

const stores = [
  {
    id: "1",
    name: "Ardente Conceito — Pinheiros",
    address: "Rua dos Pinheiros, 1230 — São Paulo, SP",
    hours: "Seg–Sáb 10h–20h | Dom 12h–18h",
    seller: "Ana Beatriz",
    phone: "(11) 98765-4321",
    maps: "https://maps.google.com/?q=Rua+dos+Pinheiros+1230+São+Paulo",
  },
  {
    id: "2",
    name: "Parceiro Bem-Estar — Moema",
    address: "Av. Ibirapuera, 890 — São Paulo, SP",
    hours: "Seg–Sex 9h–19h | Sáb 10h–16h",
    seller: "Carlos Mendes",
    phone: "(11) 91234-5678",
    maps: "https://maps.google.com/?q=Av+Ibirapuera+890+São+Paulo",
  },
  {
    id: "3",
    name: "Espaço Intimidade — Campinas",
    address: "Rua Barão de Jaguara, 450 — Campinas, SP",
    hours: "Seg–Sáb 10h–19h",
    seller: "Juliana Rocha",
    phone: "(19) 99876-5432",
    maps: "https://maps.google.com/?q=Rua+Barão+de+Jaguara+450+Campinas",
  },
];

export default function LojasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-white">Lojas físicas</h1>
      <p className="mb-10 text-zinc-400">
        Encontre pontos de venda e vendedores parceiros. Você pode comprar online ou visitar uma loja.
      </p>

      <div className="space-y-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="rounded-2xl border border-muted bg-card p-6"
          >
            <h2 className="mb-1 text-xl font-semibold text-white">{store.name}</h2>
            <p className="mb-4 text-zinc-400">{store.address}</p>

            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <p className="text-zinc-500">Horário</p>
                <p className="text-zinc-200">{store.hours}</p>
              </div>
              <div>
                <p className="text-zinc-500">Vendedor(a) responsável</p>
                <p className="text-zinc-200">{store.seller}</p>
              </div>
              <div>
                <p className="text-zinc-500">Contato</p>
                <p className="text-zinc-200">{store.phone}</p>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={store.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-gold transition hover:border-gold hover:bg-gold/10"
              >
                Ver no mapa
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-border p-8 text-center">
        <p className="mb-3 text-zinc-300">Quer ser um ponto de venda parceiro?</p>
        <Link
          href="/chat"
          className="text-gold hover:underline"
        >
          Fale conosco pelo chat
        </Link>
      </div>
    </div>
  );
}
