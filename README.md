# Ardente

Aplicativo web de **saúde sexual e bem-estar íntimo** com recomendações inteligentes.

**Destinado exclusivamente a maiores de 18 anos.**

---

## Funcionalidades

| Módulo | Descrição |
|--------|-----------|
| Age Gate | Confirmação de maioridade (18+) |
| Home | Destaques e chamada para o quiz |
| Quiz | Questionário guiado de preferências |
| Recomendações | Motor de pontuação + motivos de cada sugestão |
| Catálogo | 28 produtos com filtros por categoria |
| Produto | Como usar, dicas de saúde, complementares |
| Chat IA | API real (OpenAI / Grok) + fallback local |
| Carrinho | Adicionar, quantidade, total, localStorage |
| Checkout | Dados pessoais + endereço + pagamento pendente |
| Pedido | Confirmação com número do pedido |
| Lojas | Pontos físicos e vendedores |

---

## Design

- **Vinho** (`#7a1f3d`) — botões e ações principais  
- **Dourado** (`#c9a227`) — logo, preços e destaques  
- **Preto** (`#0a0608`) — fundo  

---

## Como rodar

```bash
cd ardente
npm install
npm run dev
```

Abra: [http://localhost:3000](http://localhost:3000)

### Produção

```bash
npm run build
npm start
```

---

## Configurar a IA do chat (opcional)

```bash
cp .env.example .env.local
```

Edite `.env.local`:

**OpenAI**
```env
AI_API_KEY=sk-sua-chave
AI_BASE_URL=https://api.openai.com/v1
AI_MODEL=gpt-4o-mini
```

**xAI / Grok**
```env
AI_API_KEY=xai-sua-chave
AI_BASE_URL=https://api.x.ai/v1
AI_MODEL=grok-2-latest
```

Sem a chave, o chat funciona com respostas inteligentes locais baseadas no catálogo.

---

## Estrutura do projeto

```
src/
├── app/
│   ├── page.tsx                 # Home
│   ├── quiz/                    # Quiz guiado
│   ├── recomendacoes/           # Resultados personalizados
│   ├── produtos/                # Catálogo + detalhe
│   ├── chat/                    # Chat com IA
│   ├── lojas/                   # Lojas físicas
│   ├── carrinho/                # Carrinho
│   ├── checkout/                # Dados + pagamento pendente
│   ├── pedido-confirmado/       # Confirmação do pedido
│   └── api/chat/                # Endpoint da IA
├── components/
│   ├── AgeGate.tsx
│   ├── Header.tsx
│   ├── AddToCartButton.tsx
│   └── Providers.tsx
├── context/
│   └── CartContext.tsx
├── data/
│   └── products.ts              # 28 produtos
└── lib/
    └── recommendations.ts       # Motor de recomendação
```

---

## Próximos passos (quando retomar)

1. **Mercado Pago** — substituir a etapa “pagamento pendente”
2. **Imagens reais** dos produtos
3. **Banco de dados** (Supabase / Prisma) para produtos e pedidos
4. **Painel admin** para gerenciar catálogo e pedidos
5. **Deploy** (Vercel é o mais simples com Next.js)

---

## Observações

- Conteúdo educativo e de bem-estar — sem material explícito
- Dicas de saúde não substituem orientação médica
- Apenas para maiores de 18 anos
