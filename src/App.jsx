import { useCallback, useState } from 'react'
import './App.css'

function App() {
  
  
  const handleChangeEuros = useCallback(
    (event) => {
      setPrixEnEuros(parseInt(13))
    }
  )
  
  return (
    <div>
      <label>Prix en euros</label>
      <input type="number" value={prixEnEuros} onChange={handleChangeEuros}/>
      <label>Prix en dollars</label>
      <p>23</p>
      <button>-1€</button>
      <button>+1€</button>
    </div>
)
}

export default App