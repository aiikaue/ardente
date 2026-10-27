"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type Props = {
  product: Product;
  className?: string;
};

export function AddToCartButton({ product, className }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      onClick={handleClick}
      className={
        className ||
        "rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover"
      }
    >
      {added ? "✓ Adicionado!" : "Adicionar ao carrinho"}
    </button>
  );
}
