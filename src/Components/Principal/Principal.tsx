import React, { useState, useEffect, useRef } from "react";
import { GetPokemons } from "../Helpers/APi";
import Loader from "..//Resources/riple.svg";
import "react-loading-skeleton/dist/skeleton.css";

export const Principal = (props: any) => {
  const [pokemons, setPokemon] = useState<[]>([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const refWindow = useRef<any>(null);
  const [scroll, setScroll] = useState(0);

  const ReferenceDisplay = () => {
    const div = refWindow.current;
    if (div == null) return;
    const { y } = div.getBoundingClientRect();
    setScroll(y.toString().slice(0, 2));
  };

  const AllPokemons = async () => {
    try {
      const recivedPokemons = await GetPokemons(limit);

      setTimeout(() => {
        setPokemon(recivedPokemons as []);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const results = !search
    ? pokemons
    : pokemons.filter((pokemon: string | any) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase().trim())
      );

  useEffect(() => {
    AllPokemons();
    ReferenceDisplay();
    const scroller = Number(scroll);
    if (scroller < -1) {
      setLimit(limit + 5);
      AllPokemons();
    }
    window.addEventListener("scroll", ReferenceDisplay);
    return () => {
      window.removeEventListener("scroll", ReferenceDisplay);
    };
  }, [scroll]);

  return (
    <div className="containerPrincipal">
      <h1 className="Title">PokeApi By Erudito</h1>
      <div className="containerSearch">
        <input
          type="text"
          placeholder="Buscar Pokemon"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="listPokemon">
        <p>Lista Pokemones</p>
      </div>
      {results.length > 0 ? (
        <div className="ContainerPokemon" ref={refWindow}>
          {results.map((item: object | any) => (
            <div key={item.id} className="containderCard">
              <div className="ContainerImage">
                <img
                  src={item.sprites.other.dream_world.front_default}
                  className="imagePokemon"
                />
              </div>
              <div className="containerInfo">
                <p className="namePokemon">{item.name} </p>

                <div className="titleStart">
                  <p>Stats of Pokemon </p>
                </div>

                <div className="containerStart">
                  <p className="namePokemon">
                    {item.stats[0].stat.name}: {item.stats[0].base_stat}
                  </p>
                  <p className="namePokemon">
                    {item.stats[1].stat.name}: {item.stats[1].base_stat}
                  </p>
                  <p className="namePokemon">
                    {item.stats[2].stat.name}: {item.stats[2].base_stat}
                  </p>
                  <p className="namePokemon">
                    {item.stats[3].stat.name}: {item.stats[3].base_stat}
                  </p>
                  <p className="namePokemon">
                    {item.stats[4].stat.name}: {item.stats[4].base_stat}
                  </p>
                </div>

                <div className="titleType">
                  <p>Type of Pokemon</p>
                </div>
                <div className="containerType">
                  <p>{item.types[0].type.name}</p>
                  <p>
                    {item.types[0].type.name == null
                      ? item.types[1].type.name
                      : item.types[0].type.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ContainerPokemon">
          <img src={Loader} className="loader" />
        </div>
      )}
    </div>
  );
};
