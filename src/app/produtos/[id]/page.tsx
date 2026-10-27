import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, getProductsByIds } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const complementary = getProductsByIds(product.complementary);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/produtos" className="mb-6 inline-block text-sm text-zinc-400 hover:text-gold">
        ← Voltar ao catálogo
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex h-72 items-center justify-center rounded-2xl bg-muted text-6xl lg:h-96">
          🧴
        </div>

        <div>
          <span className="mb-2 inline-block rounded-full bg-primary/30 px-3 py-1 text-xs font-medium text-gold">
            {product.category}
          </span>
          <h1 className="mb-3 text-3xl font-bold text-white">{product.name}</h1>
          <p className="mb-6 text-zinc-300">{product.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-muted px-3 py-1 text-xs text-zinc-300">
              Intensidade: {product.intensity}
            </span>
            {product.texture.map((t) => (
              <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-zinc-300">
                {t}
              </span>
            ))}
            {product.flavors.map((f) => (
              <span key={f} className="rounded-full bg-muted px-3 py-1 text-xs text-zinc-300">
                {f}
              </span>
            ))}
          </div>

          <p className="mb-6 text-3xl font-bold text-gold">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <AddToCartButton product={product} />
            <Link
              href="/chat"
              className="rounded-full border border-gold/40 px-8 py-3 text-center font-medium text-gold transition hover:border-gold hover:bg-gold/10"
            >
              Tirar dúvida
            </Link>
          </div>
        </div>
      </div>

      {/* Como usar */}
      <section className="mt-14 rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gold">Como usar</h2>
        <ol className="space-y-2">
          {product.howToUse.map((step, i) => (
            <li key={i} className="flex gap-3 text-zinc-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/30 text-sm font-medium text-gold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Dicas de saúde */}
      <section className="mt-6 rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gold">Dicas de saúde e cuidados</h2>
        <ul className="space-y-3">
          {product.healthTips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-zinc-300">
              <span className="text-gold">•</span>
              {tip}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-zinc-500">
          Estas informações têm caráter educativo e não substituem orientação médica profissional.
        </p>
      </section>

      {/* Complementares */}
      {complementary.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-6 text-xl font-semibold text-gold">Produtos complementares</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {complementary.map((p) => (
              <Link
                key={p.id}
                href={`/produtos/${p.id}`}
                className="rounded-xl border border-border bg-card p-4 transition hover:border-gold/40"
              >
                <h3 className="font-medium text-white">{p.name}</h3>
                <p className="text-sm text-zinc-400">{p.shortDescription}</p>
                <p className="mt-2 font-semibold text-gold">
                  R$ {p.price.toFixed(2).replace(".", ",")}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
