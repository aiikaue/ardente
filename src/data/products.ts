export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  description: string;
  texture: string[];
  intensity: "suave" | "média" | "intensa";
  flavors: string[];
  forBeginners: boolean;
  howToUse: string[];
  healthTips: string[];
  complementary: string[]; // ids
};

export const products: Product[] = [
  // ========== LUBRIFICANTES ==========
  {
    id: "lub-natural-01",
    name: "Lubrificante Natural Hidratante",
    category: "Lubrificantes",
    price: 49.9,
    image: "/products/lub-natural.jpg",
    shortDescription: "Base aquosa, hidratante e sem cheiro artificial.",
    description:
      "Lubrificante de base aquosa formulado com ingredientes naturais. Ideal para quem busca conforto e hidratação. Compatível com preservativos de látex e a maioria dos materiais.",
    texture: ["gel", "leve"],
    intensity: "suave",
    flavors: ["sem sabor"],
    forBeginners: true,
    howToUse: [
      "Aplique uma pequena quantidade nas áreas desejadas.",
      "Reaplique conforme necessário.",
      "Evite contato com os olhos.",
      "Lave com água e sabão neutro após o uso.",
    ],
    healthTips: [
      "Prefira produtos de base aquosa se usar preservativos de látex.",
      "Faça teste de sensibilidade em pequena área da pele antes do primeiro uso.",
      "Não use produtos com fragrâncias fortes se tiver irritações.",
      "Mantenha a higiene íntima com produtos específicos e pH balanceado.",
    ],
    complementary: ["preservativo-ultrafino", "higiene-intima-01"],
  },
  {
    id: "lub-siliconado-01",
    name: "Lubrificante Siliconado Longa Duração",
    category: "Lubrificantes",
    price: 69.9,
    image: "/products/lub-siliconado.jpg",
    shortDescription: "Textura sedosa e efeito prolongado.",
    description:
      "Lubrificante à base de silicone, ideal para quem busca maior durabilidade. Não resseca com a água. Não recomendado com brinquedos de silicone.",
    texture: ["sedosa", "densa"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Aplique quantidade moderada nas áreas desejadas.",
      "Não é necessário reaplicar com frequência.",
      "Remova com sabão neutro e água após o uso.",
      "Não combine com outros produtos de silicone.",
    ],
    healthTips: [
      "Evite o uso com brinquedos de silicone (pode degradar o material).",
      "Não é absorvido pela pele — ideal para uso prolongado.",
      "Se sentir desconforto, interrompa e limpe bem a área.",
    ],
    complementary: ["preservativo-ultrafino", "limpador-brinquedos-01"],
  },
  {
    id: "lub-morango-01",
    name: "Lubrificante Sabor Morango",
    category: "Lubrificantes",
    price: 54.9,
    image: "/products/lub-morango.jpg",
    shortDescription: "Base aquosa com sabor e aroma suave de morango.",
    description:
      "Lubrificante comestível de base aquosa, com sabor e aroma leve de morango. Ideal para quem gosta de uma experiência sensorial diferente.",
    texture: ["gel", "leve"],
    intensity: "suave",
    flavors: ["morango"],
    forBeginners: true,
    howToUse: [
      "Aplique nas áreas desejadas.",
      "Pode ser usado em beijos e carícias.",
      "Reaplique se necessário.",
    ],
    healthTips: [
      "Mesmo sendo comestível, evite ingestão em grande quantidade.",
      "Se tiver alergia a corantes ou aromatizantes, prefira a versão sem sabor.",
      "Faça teste de sensibilidade antes do uso completo.",
    ],
    complementary: ["preservativo-ultrafino", "lub-natural-01"],
  },
  {
    id: "lub-chocolate-01",
    name: "Lubrificante Sabor Chocolate",
    category: "Lubrificantes",
    price: 54.9,
    image: "/products/lub-chocolate.jpg",
    shortDescription: "Sabor chocolate, base aquosa e comestível.",
    description:
      "Lubrificante comestível com sabor e aroma de chocolate. Base aquosa, compatível com preservativos de látex.",
    texture: ["gel", "leve"],
    intensity: "suave",
    flavors: ["chocolate"],
    forBeginners: true,
    howToUse: [
      "Aplique nas áreas desejadas.",
      "Pode ser usado em carícias e beijos.",
      "Reaplique conforme necessário.",
    ],
    healthTips: [
      "Evite se tiver alergia a derivados de cacau ou aromatizantes.",
      "Faça teste de sensibilidade.",
    ],
    complementary: ["preservativo-ultrafino", "lub-morango-01"],
  },
  {
    id: "lub-aquecido-01",
    name: "Lubrificante Efeito Aquecido",
    category: "Lubrificantes",
    price: 59.9,
    image: "/products/lub-aquecido.jpg",
    shortDescription: "Sensação de calor suave e agradável.",
    description:
      "Lubrificante de base aquosa com tecnologia de aquecimento suave ao contato com a pele.",
    texture: ["gel", "aquecedor"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Aplique pequena quantidade e massageie suavemente.",
      "Comece com pouca quantidade para avaliar a intensidade.",
      "Não use em áreas irritadas ou feridas.",
    ],
    healthTips: [
      "Se a sensação de calor for intensa demais, interrompa e lave com água.",
      "Não combine com outros produtos estimulantes no mesmo momento.",
    ],
    complementary: ["preservativo-ultrafino", "lub-natural-01"],
  },
  {
    id: "lub-anal-01",
    name: "Lubrificante Anal Espesso",
    category: "Lubrificantes",
    price: 64.9,
    image: "/products/lub-anal.jpg",
    shortDescription: "Textura mais densa, ideal para penetração anal.",
    description:
      "Lubrificante de base aquosa com consistência mais espessa, desenvolvido para maior conforto em práticas anais.",
    texture: ["espesso", "denso"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Use quantidade generosa.",
      "Reaplique sempre que necessário — a região anal não se lubrifica naturalmente.",
      "Combine com penetração gradual e comunicação constante.",
    ],
    healthTips: [
      "A lubrificação generosa é essencial para segurança e conforto anal.",
      "Nunca force. Pare se houver dor.",
      "Use preservativo e troque-o se houver troca de região.",
      "Higiene antes e depois reduz riscos de infecção.",
    ],
    complementary: ["preservativo-ultrafino", "plug-iniciante-01", "limpador-brinquedos-01"],
  },
  {
    id: "lub-retardante-01",
    name: "Gel Retardante Masculino",
    category: "Lubrificantes",
    price: 62.9,
    image: "/products/lub-retard.jpg",
    shortDescription: "Ajuda a prolongar o momento com ação tópica suave.",
    description:
      "Gel com agente retardante de ação local. Aplicado no pênis, ajuda a diminuir a sensibilidade e prolongar a relação.",
    texture: ["gel", "leve"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Aplique pequena quantidade na glande alguns minutos antes.",
      "Massageie suavemente.",
      "Lave as mãos após a aplicação.",
    ],
    healthTips: [
      "Pessoas com hipersensibilidade a anestésicos devem evitar.",
      "Não aplique na parceira(o) — o efeito é local.",
      "Se houver dormência excessiva, lave com água.",
    ],
    complementary: ["preservativo-retardante", "lub-natural-01"],
  },

  // ========== CAMISINHAS ==========
  {
    id: "preservativo-ultrafino",
    name: "Camisinha Ultrafina",
    category: "Camisinhas",
    price: 29.9,
    image: "/products/preservativo.jpg",
    shortDescription: "Máxima sensibilidade com proteção confiável.",
    description:
      "Preservativos ultrafinos de látex natural, lubrificados, com alto padrão de qualidade e testes rigorosos de resistência.",
    texture: ["fino", "lubrificado"],
    intensity: "suave",
    flavors: ["sem sabor"],
    forBeginners: true,
    howToUse: [
      "Verifique a validade e a integridade da embalagem.",
      "Abra com cuidado (não use dentes ou unhas).",
      "Coloque antes de qualquer contato íntimo.",
      "Segure a ponta para retirar o ar e desenrolar até a base.",
    ],
    healthTips: [
      "O uso correto de preservativo é a forma mais eficaz de prevenção de ISTs e gravidez indesejada.",
      "Nunca reutilize um preservativo.",
      "Guarde em local fresco e seco, longe do sol e de objetos pontiagudos.",
      "Combine com lubrificante de base aquosa para maior conforto.",
    ],
    complementary: ["lub-natural-01", "lub-morango-01"],
  },
  {
    id: "preservativo-retardante",
    name: "Camisinha Retardante",
    category: "Camisinhas",
    price: 34.9,
    image: "/products/preservativo-retard.jpg",
    shortDescription: "Ajuda a prolongar o momento com lubrificação especial.",
    description:
      "Preservativos com lubrificante que contém agente retardante suave. Ajuda quem deseja maior controle e duração.",
    texture: ["lubrificado", "retardante"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Use da mesma forma que um preservativo convencional.",
      "O efeito retardante age pelo contato com o lubrificante.",
      "Não use se houver hipersensibilidade a anestésicos tópicos.",
    ],
    healthTips: [
      "Pessoas com pele muito sensível devem testar com cautela.",
      "Não substitui outras formas de cuidado e comunicação.",
      "Verifique sempre a validade.",
    ],
    complementary: ["lub-retardante-01", "lub-natural-01"],
  },
  {
    id: "preservativo-texturizado",
    name: "Camisinha Texturizada",
    category: "Camisinhas",
    price: 32.9,
    image: "/products/preservativo-text.jpg",
    shortDescription: "Textura pontilhada para maior estimulação.",
    description:
      "Preservativos com textura pontilhada e/ou estriada, projetados para aumentar a estimulação de ambos os parceiros.",
    texture: ["pontilhado", "estriado"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Utilize como um preservativo convencional.",
      "A textura fica do lado externo.",
      "Combine com lubrificante se desejar mais conforto.",
    ],
    healthTips: [
      "Se houver irritação, interrompa o uso e prefira modelos lisos.",
      "Sempre verifique a validade e a embalagem.",
    ],
    complementary: ["lub-natural-01", "lub-aquecido-01"],
  },
  {
    id: "preservativo-sabor-01",
    name: "Camisinha Sabor Morango",
    category: "Camisinhas",
    price: 31.9,
    image: "/products/preservativo-sabor.jpg",
    shortDescription: "Com sabor e aroma de morango.",
    description:
      "Preservativos lubrificados com sabor e aroma de morango. Ideais para sexo oral com proteção.",
    texture: ["lubrificado", "fino"],
    intensity: "suave",
    flavors: ["morango"],
    forBeginners: true,
    howToUse: [
      "Use como qualquer preservativo.",
      "O sabor é sentido principalmente no sexo oral.",
      "Não reutilize.",
    ],
    healthTips: [
      "O sabor não elimina a necessidade de troca se houver penetração depois.",
      "Verifique validade e embalagem.",
    ],
    complementary: ["lub-morango-01"],
  },
  {
    id: "preservativo-large",
    name: "Camisinha Tamanho Grande",
    category: "Camisinhas",
    price: 33.9,
    image: "/products/preservativo-large.jpg",
    shortDescription: "Maior largura e conforto para quem precisa de mais espaço.",
    description:
      "Preservativos com largura superior ao padrão, para maior conforto e segurança.",
    texture: ["lubrificado"],
    intensity: "suave",
    flavors: ["sem sabor"],
    forBeginners: true,
    howToUse: [
      "Escolha o tamanho adequado evita rupturas e desconforto.",
      "Coloque da mesma forma que o modelo convencional.",
    ],
    healthTips: [
      "O tamanho certo aumenta a segurança e o prazer.",
      "Não use se estiver muito folgado (pode escapar).",
    ],
    complementary: ["lub-natural-01"],
  },
  {
    id: "preservativo-feminino",
    name: "Camisinha Feminina",
    category: "Camisinhas",
    price: 39.9,
    image: "/products/preservativo-fem.jpg",
    shortDescription: "Proteção controlada pela pessoa com vagina.",
    description:
      "Preservativo interno (feminino) de uso único. Pode ser colocado antes da relação e oferece proteção contra ISTs e gravidez.",
    texture: ["lubrificado"],
    intensity: "suave",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Pode ser inserido até 8 horas antes da relação.",
      "Siga as instruções da embalagem com atenção.",
      "Não use junto com camisinha masculina (pode rasgar).",
    ],
    healthTips: [
      "Oferece autonomia para a pessoa com vagina.",
      "É uma ótima opção de proteção alternativa.",
      "Pratique a colocação antes para se familiarizar.",
    ],
    complementary: ["lub-natural-01"],
  },

  // ========== BRINQUEDOS ==========
  {
    id: "vibrador-bullet-01",
    name: "Bullet Vibrador Clássico",
    category: "Brinquedos",
    price: 89.9,
    image: "/products/bullet.jpg",
    shortDescription: "Compacto, discreto e ideal para iniciantes.",
    description:
      "Vibrador bullet de tamanho compacto, com várias intensidades. Ideal para estimulação externa e para quem está começando a explorar brinquedos.",
    texture: ["liso", "silicone"],
    intensity: "média",
    flavors: [],
    forBeginners: true,
    howToUse: [
      "Limpe antes e depois do uso com limpador apropriado.",
      "Use com lubrificante de base aquosa.",
      "Comece na intensidade mais baixa.",
      "Não compartilhe sem capa higiênica ou limpeza rigorosa.",
    ],
    healthTips: [
      "Higiene é fundamental para evitar infecções.",
      "Prefira materiais corporais seguros (silicone, ABS, vidro).",
      "Se sentir dor, pare imediatamente.",
      "Guarde limpo e seco.",
    ],
    complementary: ["lub-natural-01", "limpador-brinquedos-01"],
  },
  {
    id: "vibrador-ponto-g-01",
    name: "Vibrador Ponto G",
    category: "Brinquedos",
    price: 149.9,
    image: "/products/vibrador-g.jpg",
    shortDescription: "Curvado para estimulação do ponto G.",
    description:
      "Vibrador com formato curvado projetado para facilitar a estimulação do ponto G. Várias velocidades e material de silicone macio.",
    texture: ["silicone", "curvado"],
    intensity: "média",
    flavors: [],
    forBeginners: false,
    howToUse: [
      "Use bastante lubrificante de base aquosa.",
      "Explore ângulos e pressões com calma.",
      "Comece com intensidades baixas.",
      "Limpe antes e depois do uso.",
    ],
    healthTips: [
      "O ponto G varia de pessoa para pessoa — explore sem pressa.",
      "Dor não é normal. Pare se sentir desconforto.",
      "Não use silicone com lubrificante de silicone.",
    ],
    complementary: ["lub-natural-01", "limpador-brinquedos-01"],
  },
  {
    id: "anel-peniano-01",
    name: "Anel Peniano Elástico",
    category: "Brinquedos",
    price: 39.9,
    image: "/products/anel.jpg",
    shortDescription: "Ajuda a manter a ereção e intensificar a sensação.",
    description:
      "Anel peniano de material elástico e macio. Colocado na base do pênis, ajuda a manter a ereção por mais tempo.",
    texture: ["elástico", "macio"],
    intensity: "suave",
    flavors: [],
    forBeginners: true,
    howToUse: [
      "Coloque na base do pênis com a ereção já iniciada.",
      "Não deixe por mais de 20–30 minutos.",
      "Se sentir dor, formigamento ou frio, retire imediatamente.",
    ],
    healthTips: [
      "Nunca durma com o anel colocado.",
      "Pessoas com problemas circulatórios ou diabetes devem consultar médico.",
      "Higiene e tempo limitado de uso são essenciais.",
    ],
    complementary: ["lub-natural-01", "preservativo-ultrafino"],
  },
  {
    id: "plug-iniciante-01",
    name: "Plug Anal Iniciante",
    category: "Brinquedos",
    price: 79.9,
    image: "/products/plug.jpg",
    shortDescription: "Tamanho pequeno, com base de segurança.",
    description:
      "Plug anal de tamanho iniciante, feito de silicone macio, com base alargada de segurança para evitar que se perca no interior.",
    texture: ["silicone", "liso"],
    intensity: "suave",
    flavors: [],
    forBeginners: true,
    howToUse: [
      "Use bastante lubrificante anal (generoso).",
      "Relaxe e introduza devagar.",
      "Nunca force.",
      "A base deve permanecer sempre para fora.",
    ],
    healthTips: [
      "A base de segurança é obrigatória em qualquer objeto anal.",
      "Vá devagar e use muita lubrificação.",
      "Pare imediatamente se sentir dor.",
      "Higiene rigorosa reduz riscos de infecção.",
    ],
    complementary: ["lub-anal-01", "limpador-brinquedos-01"],
  },
  {
    id: "dildo-classico-01",
    name: "Dildo Clássico Realístico",
    category: "Brinquedos",
    price: 119.9,
    image: "/products/dildo.jpg",
    shortDescription: "Formato realístico, silicone macio e com ventosa.",
    description:
      "Dildo de silicone com formato realístico, textura suave e ventosa na base para uso hands-free.",
    texture: ["silicone", "realístico"],
    intensity: "média",
    flavors: [],
    forBeginners: false,
    howToUse: [
      "Use lubrificante de base aquosa em abundância.",
      "Comece devagar e com pouca profundidade.",
      "A ventosa permite fixar em superfícies lisas.",
      "Limpe antes e depois com produto adequado.",
    ],
    healthTips: [
      "Escolha tamanho adequado à sua experiência.",
      "Dor é sinal para parar.",
      "Não compartilhe sem higiene rigorosa ou capa.",
    ],
    complementary: ["lub-natural-01", "lub-anal-01", "limpador-brinquedos-01"],
  },

  // ========== HIGIENE ==========
  {
    id: "higiene-intima-01",
    name: "Sabonete Íntimo pH Balanceado",
    category: "Higiene",
    price: 39.9,
    image: "/products/higiene.jpg",
    shortDescription: "Limpeza suave com pH adequado para a região íntima.",
    description:
      "Fórmula específica para higiene íntima diária. Ajuda a manter o equilíbrio natural da flora.",
    texture: ["líquido", "suave"],
    intensity: "suave",
    flavors: ["suave", "neutro"],
    forBeginners: true,
    howToUse: [
      "Use durante o banho, aplicando suavemente na região íntima externa.",
      "Enxágue bem com água.",
    ],
    healthTips: [
      "A região íntima tem um pH natural próprio.",
      "Evite duchas internas e produtos agressivos.",
      "Em caso de irritação persistente, procure um profissional de saúde.",
    ],
    complementary: ["lub-natural-01", "lenço-intimo-01"],
  },
  {
    id: "lenço-intimo-01",
    name: "Lenços Íntimos Suaves",
    category: "Higiene",
    price: 24.9,
    image: "/products/lenco.jpg",
    shortDescription: "Limpeza prática e delicada para o dia a dia.",
    description:
      "Lenços umedecidos formulados para a região íntima, sem álcool e com pH balanceado.",
    texture: ["macio", "umedecido"],
    intensity: "suave",
    flavors: ["neutro"],
    forBeginners: true,
    howToUse: [
      "Abra a embalagem e retire um lenço.",
      "Limpe suavemente a região externa.",
      "Descarte no lixo (não no vaso).",
    ],
    healthTips: [
      "Não substitui o banho diário.",
      "Evite o uso excessivo.",
    ],
    complementary: ["higiene-intima-01"],
  },
  {
    id: "limpador-brinquedos-01",
    name: "Limpador de Brinquedos Íntimos",
    category: "Higiene",
    price: 44.9,
    image: "/products/limpador.jpg",
    shortDescription: "Higiene adequada para acessórios íntimos.",
    description:
      "Spray ou espuma formulada para limpeza de brinquedos íntimos. Remove resíduos sem agredir os materiais.",
    texture: ["spray", "espuma"],
    intensity: "suave",
    flavors: ["neutro"],
    forBeginners: true,
    howToUse: [
      "Borrife ou aplique sobre o objeto.",
      "Deixe agir conforme a embalagem.",
      "Enxágue se necessário e seque bem.",
    ],
    healthTips: [
      "A higiene correta dos acessórios reduz riscos de irritação e infecção.",
      "Nunca compartilhe brinquedos sem limpeza adequada.",
    ],
    complementary: ["vibrador-bullet-01", "plug-iniciante-01"],
  },
  {
    id: "hidratante-intimo-01",
    name: "Hidratante Íntimo Diário",
    category: "Higiene",
    price: 54.9,
    image: "/products/hidratante.jpg",
    shortDescription: "Alívio e hidratação para o dia a dia.",
    description:
      "Hidratante formulado para a região íntima externa. Ajuda a reduzir o ressecamento e o desconforto.",
    texture: ["creme", "leve"],
    intensity: "suave",
    flavors: ["sem perfume"],
    forBeginners: true,
    howToUse: [
      "Aplique na região externa limpa e seca.",
      "Use 1 a 2 vezes ao dia ou conforme necessidade.",
      "Não é lubrificante para o ato sexual.",
    ],
    healthTips: [
      "O ressecamento íntimo é comum e tratável.",
      "Se o desconforto persistir, procure um ginecologista.",
    ],
    complementary: ["higiene-intima-01", "lub-natural-01"],
  },

  // ========== MASSAGEM E ESTIMULANTES ==========
  {
    id: "oleo-massagem-01",
    name: "Óleo de Massagem Relaxante",
    category: "Massagem",
    price: 59.9,
    image: "/products/oleo-massagem.jpg",
    shortDescription: "Óleo suave para massagens e momentos de conexão.",
    description:
      "Óleo de massagem com textura leve. Ideal para massagens corporais. Não é lubrificante íntimo.",
    texture: ["oleosa", "leve"],
    intensity: "suave",
    flavors: ["lavanda suave"],
    forBeginners: true,
    howToUse: [
      "Aqueça entre as palmas das mãos.",
      "Massageie o corpo com movimentos suaves.",
      "Evite a região íntima interna e mucosas.",
    ],
    healthTips: [
      "Não use como lubrificante íntimo (pode irritar ou danificar preservativos).",
      "Faça teste de alergia em pequena área.",
    ],
    complementary: ["vela-massagem-01"],
  },
  {
    id: "vela-massagem-01",
    name: "Vela de Massagem Dourada",
    category: "Massagem",
    price: 79.9,
    image: "/products/vela-massagem.jpg",
    shortDescription: "Vela que derrete em óleo quente para massagem.",
    description:
      "Vela especial que, ao derreter, transforma-se em óleo morno para massagem.",
    texture: ["oleosa", "quente suave"],
    intensity: "suave",
    flavors: ["baunilha", "ambar"],
    forBeginners: true,
    howToUse: [
      "Acenda a vela e aguarde formar poça de óleo.",
      "Apague a chama antes de usar.",
      "Teste a temperatura no pulso.",
    ],
    healthTips: [
      "Nunca derrame óleo quente sem testar a temperatura.",
      "Mantenha longe de crianças e animais.",
    ],
    complementary: ["oleo-massagem-01"],
  },
  {
    id: "estimulante-topico-01",
    name: "Gel Estimulante Tópico",
    category: "Estimulantes",
    price: 69.9,
    image: "/products/estimulante.jpg",
    shortDescription: "Sensação de calor e aumento de sensibilidade.",
    description:
      "Gel de uso tópico que proporciona sensação de aquecimento leve e maior percepção de sensações. Uso externo.",
    texture: ["gel", "aquecedor"],
    intensity: "média",
    flavors: ["sem sabor"],
    forBeginners: false,
    howToUse: [
      "Aplique pequena quantidade e massageie.",
      "Aguarde alguns minutos.",
      "Não use em mucosas irritadas.",
    ],
    healthTips: [
      "Comece com quantidade mínima.",
      "Se sentir ardência intensa, interrompa e lave.",
    ],
    complementary: ["lub-natural-01", "preservativo-ultrafino"],
  },

  // ========== KITS ==========
  {
    id: "kit-iniciante-01",
    name: "Kit Iniciante Completo",
    category: "Kits",
    price: 129.9,
    image: "/products/kit-iniciante.jpg",
    shortDescription: "Tudo para começar com segurança e conforto.",
    description:
      "Kit pensado para iniciantes: lubrificante hidratante + camisinhas ultrafinas + sabonete íntimo + lenços.",
    texture: ["variado"],
    intensity: "suave",
    flavors: ["sem sabor"],
    forBeginners: true,
    howToUse: [
      "Use cada item conforme as orientações individuais.",
      "Comece pelo essencial: camisinha + lubrificante.",
    ],
    healthTips: [
      "O kit foi montado com produtos de intensidade suave.",
      "Se tiver alergia conhecida, verifique os ingredientes.",
      "Priorize sempre consentimento e comunicação.",
    ],
    complementary: ["vibrador-bullet-01", "oleo-massagem-01"],
  },
  {
    id: "kit-anal-01",
    name: "Kit Exploração Anal",
    category: "Kits",
    price: 159.9,
    image: "/products/kit-anal.jpg",
    shortDescription: "Lubrificante anal + plug iniciante + limpador.",
    description:
      "Kit completo para quem deseja explorar o prazer anal com segurança: lubrificante espesso, plug de tamanho iniciante com base de segurança e limpador.",
    texture: ["variado"],
    intensity: "suave",
    flavors: ["sem sabor"],
    forBeginners: true,
    howToUse: [
      "Comece sempre com muita lubrificação.",
      "Use o plug com calma e nunca force.",
      "Limpe tudo rigorosamente antes e depois.",
    ],
    healthTips: [
      "A base de segurança do plug é obrigatória.",
      "Dor não é normal — pare se sentir desconforto.",
      "Higiene é essencial para evitar infecções.",
    ],
    complementary: ["preservativo-ultrafino"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByIds(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id));
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = [
  "Lubrificantes",
  "Camisinhas",
  "Brinquedos",
  "Higiene",
  "Massagem",
  "Estimulantes",
  "Kits",
];
