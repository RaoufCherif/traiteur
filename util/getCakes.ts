const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchData = () => {
  // const response = await delay(1000)
  const data = [
    {
      name:  "  Mariage",
      image: "deux_cakes_ia.png",
    },
    {
      name: " Naissance",
      image: "six_pink_cakes_.png",
    },

    {
      name: "Anniversaire",
      image: "six_cakes_ia.png",
    },
    {
      name: "  Réussite",
      image: "trois_etage_cake.png",
    }
  ];

  return data;
};
