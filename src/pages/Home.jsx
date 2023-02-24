import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/Home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer))
  }

  return (
    <>
      <header className='header-home'>
        <img src="/images/pokemon.png" alt="" />
      </header>
      <main className='Home'>
        <section className='Home__section'>
          <div className='Home__img shine'>
            <img src="/images/pokedex.png" alt="" />
          </div>
          <h2 className='Home__welcome'>Hello trainer!</h2>
          <p className='Home__instruction'>Give me your name to start!</p>
          <form className='Home__form' onSubmit={handleSubmit}>
            <input className='Home__form-input' id='nameTrainer' type="text" placeholder='your name...' required />
            <button className='Home__form-btn' ><span className='blink_me'>Press Start</span></button>
          </form>
        </section>
      </main>
      <footer>
        <div className='footer-red' ></div>
      </footer>
    </>
  )
}

export default Home