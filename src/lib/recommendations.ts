import { products, Product } from "@/data/products";

export type QuizAnswers = {
  goal?: string;
  interest?: string;
  texture?: string;
  intensity?: string;
  flavor?: string;
  experience?: string;
  sensitivity?: string;
};

export type ScoredProduct = Product & {
  score: number;
  reasons: string[];
};

/**
 * Motor de recomendação do Ardente
 * Pontua cada produto com base nas respostas do quiz
 */
export function getRecommendations(
  answers: QuizAnswers,
  limit = 6
): ScoredProduct[] {
  const scored: ScoredProduct[] = products.map((product) => {
    let score = 0;
    const reasons: string[] = [];

    // ----- Experiência -----
    if (answers.experience === "iniciante") {
      if (product.forBeginners) {
        score += 25;
        reasons.push("Indicados para iniciantes");
      } else {
        score -= 15;
      }
    } else if (answers.experience === "intermediario") {
      score += 5;
      if (!product.forBeginners) score += 8;
    } else if (answers.experience === "avancado") {
      if (!product.forBeginners) {
        score += 15;
        reasons.push("Para quem já tem experiência");
      }
    }

    // ----- Objetivo principal -----
    if (answers.goal === "conforto") {
      if (
        product.category === "Lubrificantes" ||
        product.category === "Higiene" ||
        product.id.includes("hidratante")
      ) {
        score += 30;
        reasons.push("Foco em conforto e hidratação");
      }
      if (product.intensity === "suave") score += 10;
    }

    if (answers.goal === "prevencao") {
      if (product.category === "Camisinhas") {
        score += 35;
        reasons.push("Proteção e prevenção");
      }
      if (product.category === "Lubrificantes" && product.intensity === "suave") {
        score += 15;
        reasons.push("Combina bem com camisinha");
      }
    }

    if (answers.goal === "higiene") {
      if (product.category === "Higiene") {
        score += 35;
        reasons.push("Cuidados e higiene íntima");
      }
    }

    if (answers.goal === "exploracao") {
      if (
        product.category === "Brinquedos" ||
        product.category === "Estimulantes" ||
        product.category === "Massagem" ||
        product.category === "Kits"
      ) {
        score += 30;
        reasons.push("Ideal para explorar novas sensações");
      }
      if (product.id.includes("anal") || product.id.includes("plug")) {
        score += 5;
      }
    }

    if (answers.goal === "prazer-solo") {
      if (product.category === "Brinquedos") {
        score += 35;
        reasons.push("Ótimo para uso individual");
      }
      if (product.category === "Lubrificantes") score += 12;
    }

    if (answers.goal === "casal") {
      if (
        product.category === "Camisinhas" ||
        product.category === "Lubrificantes" ||
        product.category === "Massagem" ||
        product.category === "Kits"
      ) {
        score += 25;
        reasons.push("Bom para compartilhar a dois");
      }
    }

    // ----- Interesse específico -----
    if (answers.interest === "lubrificante") {
      if (product.category === "Lubrificantes") {
        score += 40;
        reasons.push("Você pediu lubrificante");
      }
    }
    if (answers.interest === "camisinha") {
      if (product.category === "Camisinhas") {
        score += 40;
        reasons.push("Você pediu camisinha");
      }
    }
    if (answers.interest === "brinquedo") {
      if (product.category === "Brinquedos") {
        score += 40;
        reasons.push("Você pediu brinquedo");
      }
    }
    if (answers.interest === "anal") {
      if (
        product.id.includes("anal") ||
        product.id.includes("plug")
      ) {
        score += 45;
        reasons.push("Foco em exploração anal segura");
      }
      if (product.category === "Lubrificantes" && product.texture.includes("espesso")) {
        score += 20;
      }
    }
    if (answers.interest === "kit") {
      if (product.category === "Kits") {
        score += 40;
        reasons.push("Kits prontos para facilitar");
      }
    }

    // ----- Intensidade -----
    if (answers.intensity && answers.intensity !== "indiferente") {
      const map: Record<string, string> = {
        suave: "suave",
        media: "média",
        intensa: "intensa",
      };
      const wanted = map[answers.intensity] || answers.intensity;
      if (product.intensity === wanted) {
        score += 18;
        reasons.push(`Intensidade ${wanted}`);
      } else if (product.intensity === "suave" && answers.intensity === "media") {
        score += 5;
      }
    }

    // ----- Textura -----
    if (answers.texture && answers.texture !== "indiferente") {
      if (product.texture.some((t) => t.includes(answers.texture!))) {
        score += 12;
        reasons.push("Textura compatível");
      }
      if (answers.texture === "leve" && product.texture.includes("gel")) {
        score += 8;
      }
      if (answers.texture === "cremosa" && (product.texture.includes("densa") || product.texture.includes("espesso"))) {
        score += 10;
      }
    }

    // ----- Sabor -----
    if (answers.flavor === "sem") {
      if (
        product.flavors.includes("sem sabor") ||
        product.flavors.includes("neutro") ||
        product.flavors.includes("sem perfume") ||
        product.flavors.length === 0
      ) {
        score += 10;
        reasons.push("Sem sabor / neutro");
      }
      if (product.flavors.some((f) => f.includes("morango") || f.includes("chocolate"))) {
        score -= 8;
      }
    }
    if (answers.flavor === "com-sabor") {
      if (product.flavors.some((f) => f.includes("morango") || f.includes("chocolate") || f.includes("baunilha"))) {
        score += 18;
        reasons.push("Com sabor / aroma");
      }
    }

    // ----- Sensibilidade / restrições -----
    if (answers.sensitivity === "latex") {
      if (product.category === "Camisinhas") {
        score -= 50; // quase elimina
        reasons.push("Atenção: contém látex");
      } else {
        score += 5;
      }
    }
    if (answers.sensitivity === "pele-sensivel") {
      if (product.intensity === "suave" && product.forBeginners) {
        score += 15;
        reasons.push("Mais suave para pele sensível");
      }
      if (
        product.flavors.some((f) => f.includes("morango") || f.includes("chocolate")) ||
        product.texture.includes("aquecedor")
      ) {
        score -= 12;
      }
    }

    // Bônus para kits quando iniciante
    if (answers.experience === "iniciante" && product.category === "Kits") {
      score += 12;
      reasons.push("Kit facilita o começo");
    }

    // Garante pelo menos uma reason se pontuou
    if (score > 10 && reasons.length === 0) {
      reasons.push("Combina com seu perfil");
    }

    return { ...product, score, reasons: [...new Set(reasons)].slice(0, 3) };
  });

  // Ordena por score e pega os melhores
  const sorted = scored
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score);

  // Se ficou muito pouco, completa com iniciantes
  if (sorted.length < 3) {
    const extra = products
      .filter((p) => p.forBeginners && !sorted.find((s) => s.id === p.id))
      .slice(0, 4)
      .map((p) => ({
        ...p,
        score: 5,
        reasons: ["Sugestão geral para começar"],
      }));
    return [...sorted, ...extra].slice(0, limit);
  }

  return sorted.slice(0, limit);
}
