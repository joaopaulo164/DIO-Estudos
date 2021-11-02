import React from 'react'
import PetShop from './PetShop'

function App () {
  const handleClick = () => {
    console.log('Iniciando o banho...')
  }
  
  return (
    <PetShop
      dogs={2}
      customerName="Bruno Carneiro"
      onClick={handleClick}
      status="done"
      // status="Completed" ou Disabled para resolver o erro
    />
  )
}

export default App