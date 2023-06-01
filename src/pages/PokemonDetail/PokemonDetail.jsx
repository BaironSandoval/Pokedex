import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../../services/getPokemonById";

import "./PokemonDetail.css";

const statsDetail = [
  "Hp",
  "attack",
  "defense",
  "speed",
  "special-attack",
  "special-defense",
];

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);
  useEffect(() => {
    const loadPokemon = async () => {
      const pokemon = await getPokemonById(pokemonId);
      setPokemonDetail(pokemon);
    };

    loadPokemon();
  }, []);

  const stats = pokemonDetail?.stats.filter((stat) =>
    statsDetail.includes(stat.name.toLowerCase())
  );

  return (
    <article className="container-detail">
    {!pokemonDetail && <p>Loading ... </p>}
          <Link to={"/pokedex"}>
            <button className="btn_back">
              <i className="fa-regular fa-circle-left"></i>
            </button>
          </Link>
      {pokemonDetail && (
        <div className="container-detail_info">
          <div className="container-title-detail">
            <h1>Pokemon Detail</h1>
          </div>

          <p>ID:{pokemonId}</p>
          <div className="pokemondetail-card__img">
            <img src={pokemonDetail.image} alt={pokemonDetail.name} />
          </div>
          <div className="container-info-pokemon">
            <div className="container__pokemondetail-card">
              <h2 className="pokemondetail-card__title">
                {pokemonDetail.name}
              </h2>
            </div>
            <div>
              <h3>Height: {pokemonDetail.height}</h3>
              <h3>Weight: {pokemonDetail.weight}</h3>
            </div>
            <section>
              <h3>Type</h3>
              <ul className="pokemondetail-card__list">
                {pokemonDetail.types.map((type) => (
                  <li key={type} className="pokemon-card__item">
                    {type}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Abilities</h3>
              <ul className="pokemondetail-card__list">
                {pokemonDetail.abilities.map((ability) => (
                  <li key={ability} className="pokemon-card__item">
                    {ability}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Stats</h3>
              <ul className="pokemondetail-card__list">
                {stats.map((stat) => (
                  <li key={stat.name} className="pokemon-card__item">
                    <em>{stat.name.toUpperCase()}</em>
                    <span>{stat.value}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </article>
  );
};

export default PokemonDetail;
