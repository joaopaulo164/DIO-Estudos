import React, { Fragment } from 'react'

const store = [{
  type: 'Roupa'
}, {
  type: 'Calçado'
}, {
  type: 'Camiseta'
}]

function Column({ type }) {
  return (
    <tr>
      <td>{type}</td>
      {/*
      Para provocar o erro type.name.colose
      <td>{type.name.colose}</td>
      */}
    </tr>
  )
}

function App() {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>
  )
  
  return (
    <table>
      
        {store.map(renderColumns)}        
      
    </table>
  )
}

export default App