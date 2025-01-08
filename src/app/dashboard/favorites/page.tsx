import { Metadata } from "next";
import { FavoritesPokemons } from "@/pokemons";

export const metadata: Metadata = {
  title: "Favorites Page",
  description: "Mis pokémons favoritos",
};

export default async function FavoritesPokemonsPage() {
  return (
    <div className="flex flex-col">
      <FavoritesPokemons />
    </div>
  );
}
