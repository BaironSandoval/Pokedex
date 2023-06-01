import { useContext } from 'react'
import { UserNameContext } from '../../context/UserNameContext'
import PokemonList from '../../components/Pokedex/PokemonList/PokemonList'

import './Pokedex.css'
import { useLoaderData } from 'react-router-dom'
import FilterForm from '../../components/Pokedex/FilterForm/FilterForm'

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData()
    const { userName } = useContext(UserNameContext);
    

  return (
    <section className='section-pokedex'>
        <p className='pokedex__message'>
          <em className='pokedex__message__username'>Welcome {userName},</em> here you can find your favorite pokemon.
        </p>

        <FilterForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/>

        {!pokemons.length ? (
        <p>No Pokemons</p> 
        )
        : (
          <PokemonList pokemons={pokemons}/>        
        )}
    </section>
  )
}

export default Pokedex