import {
  CircleCheckBig,
  Copy,
  CreditCardIcon,
  Diamond,
  Loader2,
} from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import QRCode from "qrcode.react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../lib/cartSlice";
import { RootState } from "../lib/store";
import CreditCard from "./credit-card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Payment() {
  const methods = [
    {
      name: "PIX",
      icon: <Diamond className="size-6" />,
    },
    {
      name: "Cartão de Crédito",
      icon: <CreditCardIcon className="size-6" />,
    },
    {
      name: "Cartão de Débito",
      icon: <CreditCardIcon className="size-6" />,
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState("");

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const pixRandomID = nanoid();

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [validDate, setValidDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Funções de validação
  const validateCardNumber = (number: string) => {
    const re = /^(\d{4}\s){3}\d{4}$/;
    return re.test(number);
  };

  const validateValidDate = (date: string) => {
    const re = /^(0[1-9]|1[0-2])\s\/\s(20)\d{2}$/;
    return re.test(date);
  };

  const validateCvv = (cvv: string) => {
    const re = /^\d{3}$/;
    return re.test(cvv);
  };

  // Funções de formatação
  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatValidDate = (date: string) => {
    return date.replace(/(\d{2})(?=\d)/g, "$1 / ");
  };

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const handlePayment = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      setCardNumber("");
      setCardHolderName("");
      setValidDate("");
      setCvv("");

      toast.success(`Pedido concluído`, {
        style: {
          background: "rgb(120 53 15)",
          color: "#E5E5E5",
        },
        iconTheme: {
          primary: "#E5E5E5",
          secondary: "rgb(120 53 15)",
        },
      });

      setTimeout(() => {
        dispatch(clearCart());
        router.push("/");
      }, 1500);
    }, 3000);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 py-4">
      <div className="w-full flex flex-col">
        <p className="text-sm text-zinc-500">Passo 2 de 2</p>
        <h3 className="text-xl font-medium text-amber-900">
          Informe seus dados para pagamento
        </h3>
      </div>

      <p className="text-base text-zinc-500">
        Selecione o método de pagamento:
      </p>

      <div className="w-full flex flex-col md:flex-row gap-3">
        {methods.map((method) => {
          return (
            <div
              key={method.name}
              onClick={() => setPaymentMethod(method.name)}
              className={`relative flex justify-center items-center gap-2 py-2 px-6 rounded-lg border-2 cursor-pointer ${
                paymentMethod == method.name
                  ? "border-amber-900 text-amber-900"
                  : "border-zinc-400 text-zinc-500 hover:border-amber-800 hover:text-amber-800"
              }`}
            >
              {method.icon}
              <p className="text-base bottom-2">{method.name}</p>

              {paymentMethod == method.name && (
                <div className="absolute -top-2 -right-2  bg-neutral-200">
                  <CircleCheckBig className="size-5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {paymentMethod === "PIX" && (
        <div className="mt-2">
          <p className="text-base text-zinc-500 mb-2">Escaneie o Qrcode:</p>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="border-2 border-amber-900/20 rounded-lg p-2">
              <QRCode
                value={pixRandomID}
                size={128}
                bgColor="transparent"
                fgColor="#613400"
              />
            </div>
            <p className="text-base text-zinc-500">ou</p>
            <div className="flex items-center gap-2 border-2 px-4 py-2 border-amber-900/20 text-amber-900 rounded-lg">
              <p className="text-base text-zinc-500">{pixRandomID}</p>
              <Copy className="ml-1 size-7 p-1 rounded cursor-pointer hover:bg-amber-900/20" />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "Cartão de Débito" && (
        <>
          <p className="text-base text-zinc-500">Dados do cartão de débito:</p>
          <div className="w-full flex flex-col items-center justify-center">
            <CreditCard
              name={cardHolderName}
              number={cardNumber}
              cvv={cvv}
              validDate={validDate}
            />
          </div>
          <div className="w-full flex gap-2 mt-2">
            <Input
              placeholder="Número do cartão"
              value={formatCardNumber(cardNumber)}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <Input
              placeholder="Nome Titular"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-2">
            <Input
              placeholder="Data Válidade"
              value={formatValidDate(validDate)}
              onChange={(e) => setValidDate(e.target.value)}
            />
            <Input
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </>
      )}

      {paymentMethod === "Cartão de Crédito" && (
        <>
          <p className="text-base text-zinc-500">Dados do cartão de crédito:</p>
          <div className="w-full flex flex-col items-center justify-center">
            <CreditCard
              name={cardHolderName}
              number={cardNumber}
              cvv={cvv}
              validDate={validDate}
            />
          </div>
          <div className="w-full flex gap-2 mt-2">
            <Input
              placeholder="Número do cartão"
              value={formatCardNumber(cardNumber)}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <Input
              placeholder="Nome Titular"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-2">
            <Input
              placeholder="Data Válidade"
              value={formatValidDate(validDate)}
              onChange={(e) => setValidDate(e.target.value)}
            />
            <Input
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </>
      )}

      <span className="flex items-center gap-2 text-base text-zinc-500">
        Valor total a pagar:
        <p className="text-lg font-medium text-amber-950">
          R$
          {cartItems.reduce((total, cake) => {
            return total + parseInt(cake.price);
          }, 0)}
        </p>
      </span>

      <Button
        onClick={handlePayment}
        className="w-full mt-2"
        disabled={
          !paymentMethod ||
          paymentMethod === "PIX" ||
          ((paymentMethod === "Cartão de Crédito" ||
            paymentMethod === "Cartão de Débito") &&
            (!cardHolderName || !cardNumber || !cvv || !validDate))
        }
      >
        {isLoading ? (
          <>
            Processando pagamento
            <Loader2 className=" ml-2 animate-spin size-5" />
          </>
        ) : (
          <>Pagar</>
        )}
      </Button>
    </div>
  );
}
