// ==========================================================================
// TECH FORTE JANAÚBA - CONFIGURAÇÕES GERAIS E INFORMAÇÕES DA EMPRESA
// ==========================================================================

const STORE_CONFIG = {
  name: "TECH FORTE",
  city: "Janaúba",
  state: "MG",
  fullName: "TECH FORTE JANAÚBA",
  tagline: "Tecnologia, estilo e qualidade em um só lugar.",
  description: "Celulares, eletrônicos, acessórios, perfumes árabes, assistência técnica especializada e personalização a laser no Centro de Janaúba – MG.",
  
  // Contato & Redes
  phone: "(38) 99817-1827",
  whatsappNumber: "5538998171827",
  instagramUser: "@techfortejanauba",
  instagramUrl: "https://www.instagram.com/techfortejanauba/",
  
  // Localização
  address: {
    street: "Av. do Comércio, 382",
    neighborhood: "Centro",
    city: "Janaúba",
    state: "MG",
    zip: "39440-000",
    full: "Av. do Comércio, 382 - Centro, Janaúba - MG, 39440-000",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+do+Com%C3%A9rcio,+382+-+Centro,+Jana%C3%BAba+-+MG,+39440-000",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.474643798935!2d-43.3134375!3d-15.8052778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7521a00aa35f299%3A0xb3bf8e27c08d172e!2sAv.%20do%20Com%C3%A9rcio%2C%20382%20-%20Centro%2C%20Jana%C3%BAba%20-%20MG%2C%2039440-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
  },
  
  // Avaliações
  rating: {
    score: "4.9",
    totalReviews: "75",
    stars: 5,
    source: "Google Avaliações"
  },
  
  // Gerador de Link WhatsApp Inteligente
  getWhatsAppLink: function(customMessage) {
    const defaultMsg = "Olá! Vim pelo site da TECH FORTE e gostaria de mais informações.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }
};
