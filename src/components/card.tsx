import { Button } from "@/src/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/cartSlice";
import { Cake } from "../types/cake";

export default function Card({ cake }: { cake: Cake }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(cake));
    toast.success(`Adicionado ao carrinho`, {
      style: {
        background: "rgb(120 53 15)",
        color: "#E5E5E5",
      },
      iconTheme: {
        primary: "#E5E5E5",
        secondary: "rgb(120 53 15)",
      },
    });
  };

  return (
    <div className="w-full sm:w-64 md:w-80 flex flex-col gap-2 p-6 rounded-xl shadow-md bg-primary">
      <Image
        width={10000}
        height={10000}
        draggable="false"
        className="aspect-square flex w-full h-full rounded-xl object-contain"
        alt="imagem-bolo"
        src={cake.imageUrl!}
      />

      <div className="flex flex-col justify-start items-start gap-2 py-3">
        <p className="text-lg font-medium text-zinc-950">{cake.name}</p>
        <p className="text-base font-medium text-amber-950">R$ {cake.price}</p>
      </div>

      <div className="w-full flex justify-center items-center gap-2">
        <Button className="w-full" onClick={handleAddToCart}>
          Adicionar ao carrinho <ShoppingCart className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}
