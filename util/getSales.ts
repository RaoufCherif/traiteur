const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchData = () => {
  // const response = await delay(1000)
  const data = [
    {
      name: "Mini Burgers",
      image: "unSeulBurger_ia.png",
    },
    {
      name: "Mini Pizzas",
      image: "soumon_concombre.jpg",
    },
    {
      name: " Mini Brics",
      image: "mini_rols_ia.png",
    },
    {
      name: "Mini Rols",
      image: "pain_soumon.jpg",
    },
    {
      name: "Mini Croissants",
      image: "pain_farsi_soumon.jpg",
    },
  ];

  return data;
};
