import { Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../lib/cartSlice";
import { Cake } from "../types/cake";
import { Button } from "./ui/button";

export default function Cart({ cartItems }: { cartItems: Cake[] }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index: number) => {
    dispatch(removeFromCart(index));
    toast.success(`Removido do carrinho`, {
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
    <div className="w-full h-full flex flex-col flex-1 gap-3 items-center py-4 px-1 overflow-y-scroll cart-items-scroll">
      {cartItems.length == 0 ? (
        <div className="h-full flex flex-col items-center justify-center gap-2 text-amber-950/60">
          <p className="text-base">Seu carrinho está vazio.</p>
        </div>
      ) : (
        cartItems.map((cake, index) => {
          return (
            <div
              className="relative w-full flex flex-col gap-2 p-1 border-2 border-amber-900/20 rounded-lg shadow-sm"
              key={index}
            >
              <div className="flex gap-2">
                <Image
                  width={10000}
                  height={10000}
                  draggable="false"
                  className="aspect-square flex w-24  rounded-xl object-contain"
                  alt="imagem-bolo"
                  src={cake.imageUrl!}
                />
                <div className="h-full flex flex-col justify-center gap-1">
                  <p className="text-base text-zinc-950">{cake.name}</p>
                  <p className="text-sm text-amber-950">R$ {cake.price}</p>
                </div>
              </div>

              <div className="w-full flex gap-3">
                {/* <div className="w-full flex justify-between items-center p-1 rounded-lg border-2 border-amber-900/20">
                  <Button
                    className="w-8 h-8 rounded-full flex justify-center items-center text-amber-900 bg-transparent hover:bg-amber-900/20"
                    size="icon"
                    disabled={quantity == 1}
                    onClick={() => {
                      setQuantity(quantity - 1);
                      cake.quantity = quantity - 1;
                    }}
                  >
                    <Minus className="size-3" />
                  </Button>

                  <span className="text-sm font-medium text-amber-900">
                    {quantity}
                  </span>

                  <Button
                    className="w-8 h-8 rounded-full flex justify-center items-center text-amber-900 bg-transparent hover:bg-amber-900/20"
                    size="icon"
                    onClick={() => {
                      setQuantity(quantity + 1);
                      cake.quantity = quantity + 1;
                    }}
                  >
                    <Plus className="size-3" />
                  </Button>
                </div> */}

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFromCart(index)}
                  className="absolute bottom-0 right-0 hover:bg-transparent text-amber-900/40 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
