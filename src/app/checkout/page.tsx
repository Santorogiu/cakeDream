"use client";

import CheckoutHeader from "@/src/components/checkout-header";
import Delivery from "@/src/components/delivery";
import Payment from "@/src/components/payment";
import { MapPin, Wallet } from "lucide-react";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import store, { persistor } from "../../lib/store";

export default function Checkout() {
  const [activeTab, setActiveTab] = useState("entrega");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="min-h-screen w-full flex flex-col items-center p-3 bg-neutral-200">
          <CheckoutHeader />

          <div className="h-full flex flex-1 justify-center items-center">
            <Tabs defaultValue={activeTab} value={activeTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="entrega" className="gap-1">
                  Entrega <MapPin className="size-5" />
                </TabsTrigger>
                <TabsTrigger value="pagamento" className="gap-1">
                  Pagamento <Wallet className="size-5" />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="entrega">
                <Delivery handleTabChange={() => setActiveTab("pagamento")} />
              </TabsContent>
              <TabsContent value="pagamento">
                <Payment />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </PersistGate>
    </Provider>
  );
}
