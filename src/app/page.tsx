import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Saúde sexual com{" "}
          <span className="text-gold">inteligência</span> e cuidado
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300">
          Descubra produtos de bem-estar íntimo com recomendações personalizadas,
          orientações de uso e dicas de saúde. Conteúdo responsável para maiores de 18 anos.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/quiz"
            className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover"
          >
            Me ajude a escolher
          </Link>
          <Link
            href="/produtos"
            className="rounded-full border border-gold/40 px-8 py-3.5 text-base font-medium text-gold transition hover:border-gold hover:bg-gold/10"
          >
            Ver catálogo
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          <span className="text-gold">✦</span> Destaques
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/produtos/${product.id}`}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:border-gold/40"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-muted text-4xl">
                🧴
              </div>
              <h3 className="mb-1 font-medium text-white group-hover:text-gold">
                {product.name}
              </h3>
              <p className="mb-3 text-sm text-zinc-400">{product.shortDescription}</p>
              <p className="text-lg font-semibold text-gold">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="grid gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
        <div className="text-center">
          <div className="mb-3 text-3xl">🧠</div>
          <h3 className="mb-2 font-semibold text-gold">Recomendações inteligentes</h3>
          <p className="text-sm text-zinc-400">
            Responda algumas perguntas e receba sugestões alinhadas às suas preferências.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-3 text-3xl">💚</div>
          <h3 className="mb-2 font-semibold text-gold">Saúde e cuidados</h3>
          <p className="text-sm text-zinc-400">
            Cada produto traz orientações de uso e dicas de saúde sexual responsáveis.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-3 text-3xl">📍</div>
          <h3 className="mb-2 font-semibold text-gold">Lojas físicas</h3>
          <p className="text-sm text-zinc-400">
            Encontre pontos de venda próximos e informações de vendedores parceiros.
          </p>
        </div>
      </section>
    </div>
  );
}
