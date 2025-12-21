export type GameType = 'VR' | 'RETRO';
export type Duration = 5 | 10 | 25;

export interface PricingTier {
  duration: number;
  price1: string; // Display string e.g., "$3" or "$3.000 COP"
  price2: string;
  currency: 'USD' | 'COP';
}

export interface BookingState {
  name: string;
  date: string;
  time: string;
  type: GameType;
  players: 1 | 2;
  duration: Duration;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GameItem {
  title: string;
  image: string;
}