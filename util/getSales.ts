const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchData = () => {
  // const response = await delay(1000)
  const data = [
    {
      name: " Burgers",
      image: "unSeulBurger_ia.png",
    },
    {
      name: " Saumons",
      image: "mini_carre_mauve.png",
    },

    {
      name: "Rolls",
      image: "pain_soumon.jpg",
    },
    {
      name: "Pizzas",
      image: "mini_pizza_ia.png",
    },
    {
      name: " Thon",
      image: "mini_bricks_thon_2.png",
    },
  ];

  return data;
};
