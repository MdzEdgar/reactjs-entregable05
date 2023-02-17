import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

function App() {

  return (
    <div className="App">
      <h2>App Pokemon</h2>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/pokedex' element={<Pokedex />} />

        <Route path='/pokedex/:id' element={<Pokemon />} />
      </Routes>
    </div>
  )
}

export default App
