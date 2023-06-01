import { useState } from "react"
import { usePagination } from "../../../hooks/usePagination";
import './PokemonList.css'

import PagesComponent from "../PagesComponent/PagesComponent";
import PokemonCard from "../PokemonCards/PokemonCard";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPages, setPokemonsPerPages] = useState(15);
  const [currentPage, totalPages, pokemonsSlice, changePagesTo] = usePagination(pokemons, pokemonsPerPages);

  return (
    <section>
        <PagesComponent 
          totalPages={totalPages} 
          onChangePage={changePagesTo} 
          onNextPage={() => changePagesTo(currentPage + 1)} 
          onBackPage={() => changePagesTo(currentPage - 1)}
        />

        <ul className="container-list">
            {pokemonsSlice.map((pokemon) => (
              <li key={pokemon.url}>
                <Link style={{color: 'unset', textDecoration: 'unset'}} to={`/pokedex/${pokemon.url.split('/').at(-2)}`}>
                  <PokemonCard pokemonId={pokemon.url.split('/').at(-2)} />
                </Link>
              </li>
            ))}
        </ul>

        <PagesComponent 
          totalPages={totalPages} 
          onChangePage={changePagesTo} 
          onNextPage={() => changePagesTo(currentPage + 1)} 
          onBackPage={() => changePagesTo(currentPage - 1)}
        />
    </section>
  )
}

export default PokemonList