import { Button } from "@/src/components/ui/button";
import { ArrowRight, PackageCheck } from "lucide-react";
import { Input } from "../components/ui/input";

type DeliveryProps = {
  handleTabChange: () => void;
};

export default function Delivery({ handleTabChange }: DeliveryProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3 py-4">
      <div className="w-full flex flex-col">
        <p className="text-sm text-zinc-500">Passo 1 de 2</p>
        <h3 className="text-xl font-medium text-amber-900">
          Informe seus dados para a entrega
        </h3>
      </div>

      <div className="w-full flex gap-2">
        <Input placeholder="Cidade  " />
        <Input placeholder="Estado (UF)" />
      </div>

      <Input placeholder="Endereço" />

      <div className="w-full flex gap-2">
        <Input placeholder="Número" />
        <Input placeholder="Complemento" />
      </div>

      <div className="w-full flex flex-col justify-start gap-2 mt-2">
        <div className="w-full flex justify-center items-center gap-3 py-2 px-4 rounded-lg border-2 border-green-500 text-green-500 cursor-pointer">
          Frete grátis <PackageCheck className="size-6" />
        </div>
      </div>

      <Button className="w-full mt-2" onClick={handleTabChange}>
        Próximo <ArrowRight className="ml-2 size-5" />
      </Button>
    </div>
  );
}
