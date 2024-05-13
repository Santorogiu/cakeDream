import { Cake } from "../types/cake";
import Card from "./card";

export default function Cakes() {
  const cakesArr: Cake[] = [
    {
      name: "Brigadeiro Tradicional",
      price: "170",
      imageUrl: "https://cake-dream.vercel.app/cakes/brigadeiro-tradicional.png",
    },
    {
      name: "Limão Siciliano",
      price: "150",
      imageUrl: "https://cake-dream.vercel.app/cakes/limao.png",
    },
    {
      name: "Morango com NUTELLA®",
      price: "199",
      imageUrl: "https://cake-dream.vercel.app/cakes/morango-nutella.png",
    },
    {
      name: "Trufado de Chocolate",
      price: "110",
      imageUrl: "https://cake-dream.vercel.app/cakes/trufado.png",
    },
    {
      name: "Red Velvet",
      price: "135",
      imageUrl: "https://cake-dream.vercel.app/cakes/red-velvet.png",
    },
    {
      name: "Cheifon",
      price: "190",
      imageUrl: "https://cake-dream.vercel.app/cakes/cheifon.png",
    },
    {
      name: "Banoffe",
      price: "120",
      imageUrl: "https://cake-dream.vercel.app/cakes/banoffe.png",
    },
    {
      name: "Frutas vermelhas",
      price: "205",
      imageUrl: "https://cake-dream.vercel.app/cakes/frutas-vermelhas.png",
    },
    {
      name: "Alaska",
      price: "154",
      imageUrl: "https://cake-dream.vercel.app/cakes/alaska.png",
    },
    {
      name: "Leite Ninho",
      price: "179",
      imageUrl: "https://cake-dream.vercel.app/cakes/leite-ninho.png",
    },
    {
      name: "Nozes",
      price: "140",
      imageUrl: "https://cake-dream.vercel.app/cakes/nozes.png",
    },
    {
      name: "Iorgute",
      price: "158",
      imageUrl: "https://cake-dream.vercel.app/cakes/iorgute.png",
    },
    {
      name: "Coco",
      price: "99",
      imageUrl: "https://cake-dream.vercel.app/cakes/coco.png",
    },
    {
      name: "Baba de moça",
      price: "160",
      imageUrl: "https://cake-dream.vercel.app/cakes/Baba-de-moca.png",
    },
    {
      name: "Alpes Suiço",
      price: "240",
      imageUrl: "https://cake-dream.vercel.app/cakes/alpes-suico.png",
    },
    {
      name: "Tufrado de cereja",
      price: "240",
      imageUrl: "https://cake-dream.vercel.app/cakes/trufado-de-cereja.png",
    },
  ];

  return (
    <div className="container h-full flex flex-col justify-center items-center gap-2 px-8 py-4 mb-2">
      <p className="w-full text-base md:text-lg text-zinc-500">Nossos bolos</p>

      <div className="w-full flex flex-wrap gap-4">
        {cakesArr.map((cake) => {
          return <Card key={cake.name} cake={cake} />;
        })}
      </div>
    </div>
  );
}
