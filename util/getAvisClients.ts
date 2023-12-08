import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

export const avisClients = () => {
  // const response = await delay(1000)
  const data = [
    {
      name: "paul",
      image: "paul.jpeg",
      avis: "Love the design and customization of InstaShow 👍. We have used various Instagram apps for Shopify in the past but they would always mess up our theme. I love how we",
      rating: 4,
    },
    {
      name: "mark",
      image: "mark.jpeg",
      avis: "La présence d’avis moins positifs est aussi un gage d’authenticité, à l’heure où les consommateurs demandent plus de transparence de la part des marques",
      rating: 5,
    },
    {
      name: "steven",
      image: "steven.jpeg",
      avis: "Les consommateurs apprécient donner leurs avis pour aider d’autres acheteurs.Quelques avis publiés suffisent à booster vos performances commerciales et à donner confiance aux consommateurs",
      rating: 4,
    },
    {
      name: "sylvie",
      image: "sylvie.jpeg",
      avis: "Nous avons pensé notre produit pour vous rendre autonome dans l’implémentation, sans surcharger vos équipes.Bien sûr, nous ne sommes jamais très loin pour vous accompagner dans le pilotage du projet.",
      rating: 5,
    },
  ];

  return data;
};
