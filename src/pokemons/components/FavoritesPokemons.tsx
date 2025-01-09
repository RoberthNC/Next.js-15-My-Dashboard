"use client";

// import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { PokemonsGrid } from "..";

export const FavoritesPokemons = () => {
  const favoritesPokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  // const [pokemons, setPokemons] = useState(favoritesPokemons);

  // useEffect(() => {
  //   // setPokemons(favoritesPokemons);
  // }, [favoritesPokemons]);

  return (
    <>
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsGrid pokemons={favoritesPokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  );
};
