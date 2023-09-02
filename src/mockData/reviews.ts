export enum Loyality {
  GOLD_USER = "gold",
  SILVER_USER = "silver",
  BRONZE_USER = "bronze",
}

export type Review = {
  name: string;
  stars: number;
  loyaltyUser: Loyality;
  date: string;
};

const reviews: Review[] = [
  {
    name: "Vinicius",
    stars: 5,
    loyaltyUser: Loyality.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Hanna",
    stars: 3,
    loyaltyUser: Loyality.SILVER_USER,
    date: "28-03-2021",
  },
  {
    name: "Tervetuloa",
    stars: 4,
    loyaltyUser: Loyality.BRONZE_USER,
    date: "27-03-2021",
  },
];

export { reviews };
