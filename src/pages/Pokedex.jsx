import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import "./styles/Pokedex.css"

const Pokedex = () => {
  const nameTrainer = useSelector(store => store.nameTrainer)

  const {
    handleSubmit,
    handleChangeSelect,
    types,
    pokemonsInPage,
    handlePreviusPage,
    handleNextPage,
    pagesInBlock,
    setCurrentPage,
    currentPage
  } = usePokedex();

  return (
    <main className='Pokedex'>
      <p className='Pokedex__welcome'><span>Welcome {nameTrainer}</span>, here you can find information about of your favorite pokemon</p>
      <form className='Pokedex__form' onSubmit={handleSubmit}>
        <div>
          <input className='Pokedex__form-input' type="text" id="pokemonName" placeholder='search your pokemon' />
          <button className='Pokedex__form-btn'>Search</button>
        </div>
        <select className='Pokedex__form-select' onChange={handleChangeSelect}>
          <option value="">All</option>
          {
            types.map(type => <option key={type.url}>{type.name}</option>)
          }
        </select>
      </form>
      <section className='Pokedex__list'>
        {
          pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
      </section>
      <section className='Pokedex__pagination'>
        <ul>
          <li className='prev' onClick={handlePreviusPage} >{"<<"}</li>
          <li onClick={() => setCurrentPage(1)} >...</li>
          {
            pagesInBlock.map(page => <li className={`page ${page === currentPage ? 'current' : ''}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
          }
          <li onClick={() => setCurrentPage(lastPage)}>...</li>
          <li className='next' onClick={handleNextPage} >{">>"}</li>
        </ul>
      </section>
    </main>
  )
}

export default Pokedex