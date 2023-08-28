export type Review = {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: Date | string;
};

const reviews: Review[] = [
  {
    name: "Vinicius",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Hanna",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Tervetuloa",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

export { reviews };
