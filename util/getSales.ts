


const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchData = () => {
    // const response = await delay(1000)
    const data = [
        {
            name:"Mini Burgers",
            image: "mini_burger.jpg"
        },
        {
            name : "Mini Pizzas",
            image : "mini_pizza.jpg"            
        },
        {
            name : " Mini Brics",
            image : "mini_brics.jpeg"            
        },
        {
            name : "Mini Rols",
            image : "mini_rol.jpg"
        },
        {
            name : "Mini Croissants",
            image : "mini_croissant.jpeg"
        }
    ];

    return data;
};
  
 