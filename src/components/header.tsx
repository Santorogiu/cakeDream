import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { RootState } from "../lib/store";
import Cart from "./cart";
import { Button } from "./ui/button";
import logo from "/public/logo.svg";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();
  return (
    <header className="w-full flex justify-between items-center px-8 py-4">
      <Image draggable="false" src={logo} alt="logo" className="w-32 md:w-40" />

      <Sheet>
        <SheetTrigger>
          <div className="flex gap-3 py-3 px-5 bg-amber-900 rounded-lg text-neutral-200 cursor-pointer hover:bg-amber-900/80">
            <ShoppingCart className="size-5" />
            {cartItems.length}
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between bg-primary text-amber-900 border-none">
          <SheetHeader>
            <SheetTitle className="flex gap-2 text-amber-900">
              <ShoppingCart className="size-6" /> Carrinho
            </SheetTitle>
          </SheetHeader>

          <Cart cartItems={cartItems} />

          <div className="w-full flex flex-col gap-2">
            {cartItems.length > 0 && (
              <span className="flex items-center gap-2 text-base text-amber-900/80">
                Valor total:
                <p className="text-lg font-medium text-amber-950">
                  R$
                  {cartItems.reduce((total, cake) => {
                    return total + parseInt(cake.price);
                  }, 0)}
                </p>
              </span>
            )}

            <Button
              onClick={() => router.push("/checkout")}
              disabled={cartItems.length == 0}
              className="w-full text-lg py-6 hover:opacity-85 text-primary"
            >
              Finalizar compra
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
