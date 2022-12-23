export interface Game {
  id: string;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
  price: number | string
}
