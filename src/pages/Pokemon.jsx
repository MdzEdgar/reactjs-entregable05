import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()

  const {id} = useParams()
  const navigate = useNavigate();

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 255
    return `${percent}%`
  }

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios
    .get(URL)
    .then((res) => setPokemon(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <main className={`Pokemon`}>
      <button onClick={goBack} className='Pokemon__back'>
        <i className='bx bxs-chevron-left'></i> Back
      </button>
      <section className={`Pokemon__header border-${pokemon?.types[0].type.name}`} style={{borderBottom: "none", borderWidth: "10px", borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}}>
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
      <section className={`Pokemon__body border-${pokemon?.types[0].type.name}`} style={{ borderTop: "none", borderWidth: "10px", borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px" }}>
        <h2 className={`Pokemon__body-id fc-${pokemon?.types[0].type.name}`}># {pokemon?.id}</h2>
        <h2 className={`Pokemon__body-name fc-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>

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
