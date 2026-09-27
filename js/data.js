// ==========================================================================
// TECH FORTE JANAÚBA - BANCO DE DADOS ESTRUTURADO DE PRODUTOS E SERVIÇOS
// ==========================================================================

const STORE_DATA = {
  // 1. Categorias Principais
  categories: [
    {
      id: "celulares",
      title: "Celulares & Smartphones",
      badge: "iPhones & Androids",
      description: "Aparelhos novos e seminovos selecionados com garantia e procedência em Janaúba.",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
      anchor: "#celulares"
    },
    {
      id: "eletronicos",
      title: "Eletrônicos & Áudio",
      badge: "Tecnologia Prática",
      description: "Caixas de som, fones bluetooth, smartwatches e dispositivos para o seu dia a dia.",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
      anchor: "#eletronicos"
    },
    {
      id: "acessorios",
      title: "Acessórios & Proteção",
      badge: "Máxima Proteção",
      description: "Capas premium, películas de alta resistência, carregadores turbo e cabos reforçados.",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop",
      anchor: "#acessorios"
    },
    {
      id: "perfumes",
      title: "Perfumes Árabes",
      badge: "Fragrâncias Exclusivas",
      description: "Fragrâncias marcantes, alta fixação e sofisticação para presença marcante.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      anchor: "#perfumes"
    },
    {
      id: "assistencia",
      title: "Assistência Técnica",
      badge: "Reparos Especializados",
      description: "Manutenção ágil para iPhones e smartphones com peças de qualidade e garantia.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      anchor: "#assistencia"
    },
    {
      id: "personalizacao",
      title: "Gravação a Laser",
      badge: "Personalização Exclusiva",
      description: "Gravação em copos Stanley, facas, metais, plásticos, vidros e brindes corporativos.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      anchor: "#personalizacao"
    }
  ],

  // 2. Vitrine de Celulares & Smartphones
  phones: [
    {
      id: "iphone-15-pro-max",
      name: "Apple iPhone 15 Pro Max",
      category: "iphone",
      categoryLabel: "Linha Apple",
      tag: "Destaque",
      description: "Design em titânio, câmera profissional de alta resolução, chip A17 Pro e acabamento premium.",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consultar preço",
      specs: ["Titânio Aeroespacial", "Câmeras Profissionais", "Garantia Tech Forte"]
    },
    {
      id: "iphone-15",
      name: "Apple iPhone 15",
      category: "iphone",
      categoryLabel: "Linha Apple",
      tag: "Mais Procurado",
      description: "Dynamic Island, câmera principal de 48 MP, USB-C e vidro traseiro colorido por infusão.",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consultar preço",
      specs: ["Dynamic Island", "Câmera 48 MP", "Conexão USB-C"]
    },
    {
      id: "iphone-14",
      name: "Apple iPhone 14",
      category: "iphone",
      categoryLabel: "Linha Apple",
      tag: "Excelente Custo-Benefício",
      description: "Bateria de longa duração, sistema avançado de câmera dupla e gravação em modo cinema.",
      image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consultar preço",
      specs: ["Modo Cinema", "Chip A15 Bionic", "Tela Super Retina XDR"]
    },
    {
      id: "iphone-13",
      name: "Apple iPhone 13",
      category: "iphone",
      categoryLabel: "Linha Apple",
      tag: "Popular",
      description: "Desempenho ágil, excelente autonomia de bateria e fotos nítidas em qualquer iluminação.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consultar preço",
      specs: ["Modo Noturno", "Design Resistente", "Garantia e Procedência"]
    },
    {
      id: "samsung-galaxy-s-series",
      name: "Samsung Galaxy Linha S",
      category: "android",
      categoryLabel: "Linha Android Premium",
      tag: "Alta Performance",
      description: "Tela Dynamic AMOLED com alta taxa de atualização, zoom óptico avançado e recursos inteligentes.",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consultar preço",
      specs: ["Tela Dynamic AMOLED", "Câmeras Noturnas", "Bateria Duradoura"]
    },
    {
      id: "smartphone-android-intermediario",
      name: "Smartphones Android Selecionados",
      category: "android",
      categoryLabel: "Linha Android",
      tag: "Variedade",
      description: "Opções intermediárias com excelente equilíbrio entre câmera, armazenamento e autonomia.",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consultar preço",
      specs: ["Várias Opções de Memória", "Carregamento Rápido", "Garantia Local"]
    }
  ],

  // 3. Eletrônicos
  electronics: [
    {
      id: "caixa-som-bluetooth",
      name: "Caixas de Som Portáteis Bluetooth",
      category: "Áudio & Som",
      description: "Som potente com graves reforçados, alta autonomia de bateria e resistência à água.",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    },
    {
      id: "fones-bluetooth-tws",
      name: "Fones de Ouvido Sem Fio (TWS)",
      category: "Áudio & Fones",
      description: "Cancelamento de ruído, som cristalino e estojo com recarga rápida para o seu dia a dia.",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    },
    {
      id: "smartwatches-relogios",
      name: "Smartwatches & Pulseiras Inteligentes",
      category: "Wearables",
      description: "Monitoramento de saúde, batimentos, notificações em tempo real e treinos físicos.",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    },
    {
      id: "carregadores-turbo",
      name: "Carregadores Turbo & Fontes Rápidas",
      category: "Energia & Cabos",
      description: "Fontes de 20W, 30W e cabos reforçados homologados para máxima segurança do aparelho.",
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    }
  ],

  // 4. Perfumes Árabes (Elegância e Sofisticação)
  perfumes: [
    {
      id: "perfume-arabe-masculino",
      name: "Fragrâncias Árabes Masculinas",
      category: "masculino",
      categoryLabel: "Masculino",
      tag: "Alta Fixação",
      description: "Notas amadeiradas, especiarias orientais, couro e oud para presença marcante e duradoura.",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    },
    {
      id: "perfume-arabe-feminino",
      name: "Fragrâncias Árabes Femininas",
      category: "feminino",
      categoryLabel: "Feminino",
      tag: "Sofisticação",
      description: "Toques florais envolventes, baunilha, âmbar e almíscar refinado em frascos deslumbrantes.",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    },
    {
      id: "perfume-arabe-unissex",
      name: "Fragrâncias Árabes Unissex / Exclusivas",
      category: "unissex",
      categoryLabel: "Unissex & Destaques",
      tag: "Exclusivo",
      description: "Criações luxuosas e ricas em personalidade, combinando notas orientais raras e fixação ímpar.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
      priceLabel: "Consulte disponibilidade"
    }
  ],

  // 5. Acessórios
  accessories: [
    {
      name: "Capas Protetoras Premium",
      description: "Cases de silicone aveludado, anti-impacto, magnéticas (MagSafe) e transparentes de alta pureza.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Películas de Alta Resistência",
      description: "Películas 3D, cerâmica, privacidade e proteção para lentes de câmera aplicadas com precisão na loja.",
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Carregadores e Cabos Turbo",
      description: "Cabos USB-C, Lightning, fontes turbo certificadas e bases de carregamento por indução.",
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Fones e Caixas de Som",
      description: "Fones de ouvido intra-auriculares, headsets bluetooth e caixas de som para qualquer ocasião.",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Suportes e Outros Acessórios",
      description: "Suportes veiculares magnéticos, adaptadores de áudio, anéis de segurança e cartões de memória.",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop"
    }
  ],

  // 6. Serviços de Assistência Técnica
  technicalServices: [
    {
      id: "troca-tela",
      title: "Reparo & Troca de Tela",
      desc: "Substituição com telas de alta qualidade, mantendo o toque responsivo e fidelidade de cores original."
    },
    {
      id: "troca-bateria",
      title: "Substituição de Bateria",
      desc: "Troca rápida para devolver a autonomia e saúde ideal da bateria do seu smartphone."
    },
    {
      id: "reparo-iphone",
      title: "Assistência Técnica Especializada em iPhone",
      desc: "Diagnósticos minuciosos e reparos com ferramentas dedicadas e peças confiáveis para Apple."
    },
    {
      id: "reparo-android",
      title: "Assistência para Smartphones Android",
      desc: "Manutenção completa para marcas e modelos variados de smartphones Android do mercado."
    },
    {
      id: "conector-carga",
      title: "Reparo de Entrada do Carregador",
      desc: "Correção de mau contato, substituição do conector de carga (USB-C / Lightning) e limpeza."
    },
    {
      id: "camera",
      title: "Reparo de Câmeras & Lentes",
      desc: "Solução para foco travado, lentes trincadas, manchas ou falhas de abertura de câmera."
    },
    {
      id: "alto-falantes",
      title: "Reparo de Alto-falantes e Microfones",
      desc: "Desobstrução e reparo para áudio limpo em chamadas, gravações e reprodução de mídia."
    },
    {
      id: "botoes",
      title: "Reparo do Botão Liga/Desliga & Volume",
      desc: "Troca e ajuste de botões físicos danificados ou sem resposta ao clique."
    },
    {
      id: "danos-agua",
      title: "Desoxidação & Danos por Água",
      desc: "Banho químico e inspeção eletrônica minuciosa para aparelhos que tiveram contato com líquidos."
    }
  ],

  // 7. Personalização & Gravação a Laser
  personalizationServices: [
    {
      title: "Gravação em Copos e Garrafas Térmicas",
      desc: "Personalização de copos Stanley, garrafas e cuias com nomes, frases, símbolos ou logotipos em alta definição."
    },
    {
      title: "Gravação em Metais",
      desc: "Precisão a laser em aço inox, alumínio e ligas metálicas com acabamento nítido e permanente."
    },
    {
      title: "Facas e Cutelaria Personalizada",
      desc: "Gravação exclusiva em lâminas e cabos de facas para presentes especiais e colecionadores."
    },
    {
      title: "Gravação em Plásticos e Vidros",
      desc: "Personalização com elegância em recipientes, superfícies de vidro e polímeros especiais."
    },
    {
      title: "Presentes e Brindes Corporativos",
      desc: "Criação de lembranças exclusivas para eventos, marcas, empresas e datas comemorativas."
    },
    {
      title: "Personalização de Diversos Materiais",
      desc: "Soluções sob medida para transformar itens do seu dia a dia em peças únicas e personalizadas."
    }
  ],

  // 8. Diferenciais Verificados
  differentials: [
    {
      icon: "users",
      title: "Atendimento Próximo",
      desc: "Atendimento pensado para entender o que você realmente precisa, com atenção humanizada e suporte direto."
    },
    {
      icon: "layers",
      title: "Variedade Completa",
      desc: "Celulares, eletrônicos, acessórios de proteção, perfumes árabes e personalização em um único local."
    },
    {
      icon: "tool",
      title: "Assistência Especializada",
      desc: "Serviços ágeis e cuidadosos para diferentes tipos de smartphones, com transparência e procedência."
    },
    {
      icon: "award",
      title: "Gravação a Laser Exclusiva",
      desc: "Transforme copos, metais e presentes com tecnologia de gravação rápida e permanente."
    },
    {
      icon: "map-pin",
      title: "Loja Física no Centro de Janaúba",
      desc: "Estrutura pronta para te receber na Av. do Comércio, 382, com estacionamento e acesso fácil."
    }
  ],

  // 9. Avaliações Reais de Clientes (Google)
  reviews: [
    {
      author: "Cliente Verificado",
      source: "Google Avaliações",
      rating: 5,
      text: "Melhor loja de celulares e acessórios da região!"
    },
    {
      author: "Cliente Verificado",
      source: "Google Avaliações",
      rating: 5,
      text: "Loja top, melhores preços e atendimento de qualidade! Recomendo demais."
    },
    {
      author: "Cliente Verificado",
      source: "Google Avaliações",
      rating: 5,
      text: "Loja perfeita, preço bom, qualidade e ótimo atendimento."
    }
  ],

  // 10. Instagram Feed Showcase (Mock realista preparado para fotos reais)
  instagramPosts: [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=600&auto=format&fit=crop",
      caption: "Novidades da semana em smartphones e acessórios na Tech Forte Janaúba! 📱✨",
      type: "reel"
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      caption: "Fragrâncias árabes sofisticadas disponíveis na nossa vitrine. Fixação surpreendente! 🌿",
      type: "post"
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
      caption: "Gravação a laser em copos térmicos. Seu estilo gravado com perfeição! ⚡",
      type: "reel"
    },
    {
      id: "post-4",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
      caption: "Manutenção e troca de tela de iPhone realizada com precisão e garantia. 🛠️",
      type: "post"
    }
  ]
};
