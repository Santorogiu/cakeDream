import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { Button } from "./ui/button";

export default function CheckoutHeader() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const router = useRouter();

  return (
    <header className="w-full flex justify-between items-center mb-2 md:mb-0">
      <Button
        onClick={() => router.push("/")}
        variant="ghost"
        className="text-amber-900 hover:bg-amber-900 hover:text-neutral-200"
      >
        <ArrowLeft className="mr-2 size-4" />
        Voltar
      </Button>
    </header>
  );
}
