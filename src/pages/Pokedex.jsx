import React, { useRef } from 'react'
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
    currentPage,
    lastPage
  } = usePokedex();

  const handleScroll = () => {
    console.log("Scroll")
    window.scrollTo(0, 0);
  };

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
      <section className='Pokedex__pagination'>
        <ul>
          <li className='page' onClick={() => setCurrentPage(1)} ><i className='bx bxs-chevrons-left'></i></li>
          <li className='page' onClick={handlePreviusPage} ><i className='bx bx-chevron-left'></i></li>
          {
            pagesInBlock.map(page => <li className={`page ${page === currentPage ? 'current' : ''}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
          }
          <li className='page' onClick={handleNextPage} ><i className='bx bx-chevron-right' ></i></li>
          <li className='page' onClick={() => setCurrentPage(lastPage)}><i className='bx bxs-chevrons-right' ></i></li>
        </ul>
      </section>
      <section className='Pokedex__list'>
        {
          pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
      </section>
      <section className='Pokedex__pagination'>
        <ul>
          <li className='page' onClick={() => setCurrentPage(1)} ><i className='bx bxs-chevrons-left'></i></li>
          <li className='page' onClick={handlePreviusPage} ><i className='bx bx-chevron-left'></i></li>
          {
            pagesInBlock.map(page => <li className={`page ${page === currentPage ? 'current' : ''}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
          }
          <li className='page' onClick={handleNextPage} ><i className='bx bx-chevron-right' ></i></li>
          <li className='page' onClick={() => setCurrentPage(lastPage)}><i className='bx bxs-chevrons-right' ></i></li>
        </ul>
      </section>
    </main>
  )
}

export default Pokedex