import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

const SYSTEM_PROMPT = `Você é a assistente oficial do Ardente, um aplicativo de saúde sexual e bem-estar íntimo para maiores de 18 anos.

Seu papel:
- Ajudar com dúvidas sobre produtos de saúde sexual e bem-estar íntimo
- Dar orientações de uso e cuidados de forma educativa e responsável
- Sugerir produtos do catálogo quando fizer sentido
- Priorizar segurança, consentimento, higiene e saúde

Regras importantes:
- NUNCA descreva conteúdo sexual explícito ou pornográfico
- NUNCA dê conselhos médicos definitivos — sempre reforce que você não substitui profissionais de saúde
- Se a pessoa relatar dor, irritação, suspeita de IST ou gravidez, oriente a procurar atendimento médico
- Seja acolhedora, clara, respeitosa e sem julgamento
- Responda em português do Brasil
- Seja objetiva (respostas curtas a médias, não textos enormes)

Catálogo disponível (use os nomes exatos quando recomendar):
${products
  .map(
    (p) =>
      `- ${p.name} (${p.category}) — R$ ${p.price.toFixed(2)} — ${p.shortDescription}`
  )
  .join("\n")}

Quando recomendar produtos, mencione o nome e sugira que a pessoa veja a página do produto no site para mais detalhes (como usar e dicas de saúde).`;

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages || [];

    if (!messages.length) {
      return NextResponse.json(
        { error: "Nenhuma mensagem enviada." },
        { status: 400 }
      );
    }

    const apiKey = process.env.AI_API_KEY;
    const baseUrl = process.env.AI_BASE_URL || "https://api.openai.com/v1";
    const model = process.env.AI_MODEL || "gpt-4o-mini";

    // Se não tiver chave configurada, usa respostas inteligentes locais (fallback)
    if (!apiKey) {
      const lastUser = [...messages].reverse().find((m) => m.role === "user");
      const reply = localFallback(lastUser?.content || "");
      return NextResponse.json({ reply });
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI API error:", response.status, errText);
      return NextResponse.json(
        { error: "Erro ao consultar a IA. Tente novamente." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content?.trim() ||
      "Desculpe, não consegui gerar uma resposta agora.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}

/** Fallback local quando não há API key configurada */
function localFallback(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("lubrificante") || q.includes("lubrific")) {
    return "Temos várias opções de lubrificantes: o **Natural Hidratante** (base aquosa, ótimo para iniciantes), o **Siliconado** (maior duração), versões com sabor (morango e chocolate) e o **Anal Espesso** para maior conforto em práticas anais.\n\nQuer que eu indique o mais adequado para o seu caso? Me diga se prefere sem sabor, com sabor, ou se é para uso anal.";
  }

  if (q.includes("camisinha") || q.includes("preservativo")) {
    return "As camisinhas são essenciais para proteção. No catálogo temos:\n- **Ultrafina** (máxima sensibilidade)\n- **Retardante**\n- **Texturizada**\n- **Sabor Morango**\n- **Tamanho Grande**\n- **Feminina** (preservativo interno)\n\nO uso correto previne ISTs e gravidez. Sempre verifique a validade e nunca reutilize. Posso te ajudar a escolher?";
  }

  if (q.includes("vibrador") || q.includes("bullet") || q.includes("brinquedo")) {
    return "Para quem está começando, o **Bullet Vibrador Clássico** é uma ótima porta de entrada: compacto, discreto e com várias intensidades.\n\nTambém temos o **Vibrador Ponto G**, **Anel Peniano**, **Plug Anal Iniciante** e **Dildo Realístico**.\n\nImportante: sempre limpe antes e depois com o **Limpador de Brinquedos**, use lubrificante de base aquosa e pare se sentir dor. Quer uma recomendação mais específica?";
  }

  if (q.includes("anal") || q.includes("plug")) {
    return "Para exploração anal com segurança, o essencial é: muita lubrificação (recomendamos o **Lubrificante Anal Espesso**), ir devagar, nunca forçar, e usar objetos com base de segurança (como o **Plug Anal Iniciante**).\n\nTemos também o **Kit Exploração Anal**, que já reúne lubrificante + plug + limpador. Dor não é normal — se sentir desconforto, pare. Quer que eu detalhe os cuidados?";
  }

  if (q.includes("higiene") || q.includes("sabonete") || q.includes("limpar")) {
    return "A higiene íntima deve respeitar o pH natural. Recomendamos o **Sabonete Íntimo pH Balanceado** e os **Lenços Íntimos** para o dia a dia.\n\nPara brinquedos, use sempre o **Limpador de Brinquedos Íntimos**. Evite duchas internas e produtos agressivos. Em caso de irritação persistente, procure um profissional de saúde.";
  }

  if (q.includes("iniciante") || q.includes("começar") || q.includes("primeira vez")) {
    return "Para iniciantes, o caminho mais seguro é:\n1. **Camisinha Ultrafina** + **Lubrificante Natural**\n2. Higiene com o **Sabonete Íntimo**\n3. Se quiser explorar brinquedos, o **Bullet Vibrador** é uma boa porta de entrada\n\nTemos o **Kit Iniciante Completo** que já reúne o essencial. Priorize consentimento, comunicação e conforto. Qual parte te interessa mais?";
  }

  if (q.includes("dor") || q.includes("desconforto") || q.includes("irritação") || q.includes("ardência")) {
    return "Desconforto, dor ou irritação não devem ser ignorados. Interrompa o uso do produto, lave com água limpa e, se os sintomas persistirem, procure atendimento médico.\n\nEu não substituo avaliação profissional. Cuide-se e, se quiser, me conte o que estava usando para eu te orientar sobre alternativas mais suaves.";
  }

  if (q.includes("kit")) {
    return "Temos dois kits prontos:\n- **Kit Iniciante Completo** — lubrificante + camisinhas + higiene\n- **Kit Exploração Anal** — lubrificante anal + plug iniciante + limpador\n\nSão ótimas opções para quem quer começar com tudo alinhado. Quer detalhes de algum deles?";
  }

  return "Posso ajudar com dúvidas sobre produtos, formas de uso, cuidados de saúde sexual e recomendações do catálogo Ardente.\n\nExemplos do que posso responder:\n- Qual lubrificante escolher?\n- Diferença entre tipos de camisinha\n- Como usar brinquedos com segurança\n- Cuidados de higiene íntima\n\nO que você gostaria de saber? Lembre-se: sou uma ferramenta educativa e não substituo profissionais de saúde.";
}
