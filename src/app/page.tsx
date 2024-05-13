"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Cakes from "../components/cakes";
import Header from "../components/header";
import store, { persistor } from "../lib/store";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-200">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Cakes />
        </PersistGate>
      </Provider>
    </main>
  );
}
