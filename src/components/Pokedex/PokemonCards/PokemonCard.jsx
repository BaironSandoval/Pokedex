import { useEffect, useState } from "react"
import { getPokemonById } from "../../../services/getPoKemonById"
import './PokemonCard.css'

const statsTarget = ['Hp', 'attack', 'defense', 'speed'];

const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  const stats = pokemon?.stats.filter(stat => statsTarget.includes(stat.name.toLowerCase()));  

  useEffect(() => {
   const loadPokemon = async () => {
    const pokemonData = await getPokemonById(pokemonId);
    setPokemon(pokemonData);
   };

   loadPokemon();
  }, [])
  

  return (
    <article className="pokemon-card">
        {!pokemon && <p>Loading ... </p>}
        {pokemon && (
            <>
            
              <div className="pokemon-card__img">
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
            <div className="container__pokemon-card">
              <h2 className="pokemon-card__title">{pokemon.name}</h2>
              
              <section className="section-type">
                <h3>Type</h3>
                <ul className="pokemon-card__list">
                    {pokemon.types.map((type) => (
                        <li key={type} className="pokemon-card__item">
                            {type}
                        </li>
                    ))}
                </ul>
              </section>

              <section className="section-stat">
                <h3>Stats</h3>
                <ul className="pokemon-card__list">
                    {stats.map((stat) => (
                        <li key={stat.name} className="pokemon-card__item">
                            <em>{stat.name.toUpperCase()}</em>
                            <span>{stat.value}</span>
                        </li>
                    ))}
                </ul>
              </section>
            </div>
              
            </>
        )}

        
       

        
    </article>
  )
}

export default PokemonCard