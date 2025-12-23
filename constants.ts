import { FaqItem, GameItem, PricingTier } from "./types";

export const WHATSAPP_NUMBER = "584143357226";
export const LOCATION_TEXT = "Seboruco, Calle 4, frente a la antigua CANTV";
export const EVENT_END_DATE = "2026-01-03T23:59:00"; // Assuming next instance for demo purposes
export const COP_RATE = 3800;

export const VR_GAMES: GameItem[] = [
  { title: "Beat Saber", image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=800&auto=format&fit=crop" },
  { title: "Job Simulator", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop" },
  { title: "SUPERHOT VR", image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=800&auto=format&fit=crop" },
  { title: "Pistol Whip", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop" },
  { title: "Fruit Ninja VR", image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=800&auto=format&fit=crop" },
  { title: "Richie’s Plank", image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=800&auto=format&fit=crop" },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Qué pasa si llego tarde?",
    answer: "Solo tenemos una tolerancia de 5 minutos. Si no llegas en ese tiempo, el turno se libera automáticamente para otros jugadores."
  },
  {
    question: "¿Pueden jugar niños?",
    answer: "La edad mínima recomendada es de 12 años para asegurar que los equipos se ajusten bien y la experiencia sea segura."
  },
  {
    question: "¿Me voy a marear?",
    answer: "La mayoría de nuestros juegos están diseñados para ser cómodos. Si sientes mareo, puedes pausar y descansar. ¡Tu bienestar es primero!"
  },
  {
    question: "¿Cómo pago?",
    answer: `Aceptamos pagos en efectivo, pago móvil y divisas. El VR se puede pagar en USD o en COP (Tasa: ${COP_RATE}). Los juegos Retro son en COP.`
  }
];

export const PRICING_VR: PricingTier[] = [
  { duration: 5, price1: "$2 (7.000 COP)", price2: "$3 (10.000 COP)", currency: 'USD' },
  { duration: 10, price1: "$3 (10.000 COP)", price2: "$5 (16.000 COP)", currency: 'USD' },
];

export const PRICING_RETRO: PricingTier[] = [
  { duration: 5, price1: "$3.000 COP", price2: "$5.000 COP", currency: 'COP' },
];