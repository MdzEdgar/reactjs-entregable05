import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()

  const {id} = useParams()

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 255
    return `${percent}%`
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios
    .get(URL)
    .then((res) => setPokemon(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <main className='Pokemon'>
      <section className='Pokemon__header'>
        {/* Parte superior */}
        <section className={`Pokemon__header-bg bg-lg-${pokemon?.types[0].type.name}`}>
          <div className='Pokemon__header-img'>
            <img className='Pokemon__image'
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
        </section>
      </section>

      {/* Body */}
      <section className='Pokemon__body'>
        <h2 className='Pokemon__body-id'># {pokemon?.id}</h2>
        <h2 className='Pokemon__body-name'>{pokemon?.name}</h2>

        <div className='Pokemon__body-info'>
          <div>
            <h5>Weight</h5>
            <h4>{pokemon?.weight}</h4>
          </div>
          <div>
            <h5>Height</h5>
            <h4>{pokemon?.height}</h4>
          </div>
        </div>
        
        <div className='Pokemon__body-extra'>
          <div className='Pokemon__types'>
            <h3>Type</h3>
            <div className='Pokemon__types-value'>
              {pokemon?.types.map((type) => (
                <div className={`Pokemon__types-border type-${type.type.name} type-border-${type.type.name}`} key={type.type.name}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='Pokemon__abilities'>
            <h3>Abilities</h3>
            <div className='Pokemon__abilities-value'>
              {pokemon?.abilities.map((ability) => (
                <div className='Pokemon__abilities-border' key={ability.ability.name}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className='Pokemon__stats'>
          <h2 className='pokemon__stats-title'>Stats</h2>
          <section className='pokemon__stats-info'>
            {pokemon?.stats.map((stat) => (
              <article className='pokemon__stat' key={stat.stat.name}>
                <div className='pokemon__stat-header'>
                  <h4 className='pokemon__stat-name'>{stat.stat.name}</h4>
                  <h5 className='pokemon__stat-value'>{stat.base_stat}/255</h5>
                </div>
                <div className='pokemon__stat-bar'>
                  <div className='pokemon__stat-barGray'>
                    <div className='pokemon__stat-barProgress' style={{width: getPercentBar(stat.base_stat)}} ></div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Pokemon
