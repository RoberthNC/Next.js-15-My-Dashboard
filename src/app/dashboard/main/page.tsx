import { Metadata } from "next";
import { WidgetsGrid } from "@/components";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Página principal del dashboard de administración",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl ">Dashboard</h1>
      <span className="text-xl">Información General</span>

      <WidgetsGrid />
    </div>
  );
}
