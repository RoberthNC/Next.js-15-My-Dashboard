import { PokemonsGrid } from "@/pokemons";
import { Metadata } from "next";
// import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Mis pokémons favoritos",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonsGrid pokemons={[]} />
    </div>
  );
}
