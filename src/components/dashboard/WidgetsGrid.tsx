"use client";

import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "../";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        href="/dashboard/counter"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        label="Contador"
        subtitle="Carrito de Compras"
        title={`${count}`}
      />
    </div>
  );
};
