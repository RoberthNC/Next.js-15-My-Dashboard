import { Metadata } from "next";
import { PokemonsResponse, SimplePokemon, PokemonsGrid } from "@/pokemons";
// import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Pokémons Page",
  description: "Listado de Pokémons de la primera generación",
};

const getPokemons = async (
  limit: number = 10,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const pokemonResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = pokemonResponse.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(156, 0);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small className="text-blue-500">Estático</small>
      </span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
