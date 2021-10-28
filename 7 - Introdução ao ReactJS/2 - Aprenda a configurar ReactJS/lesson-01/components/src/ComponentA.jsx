import React from 'react'

//Tudo do componente pode ser acessado com children
//Também é preciso do children para renderizar o componente
function ComponenteA(props) {
  return (
    <div>Componente A =D
      <div>{props.children}</div>
    </div>
  )
}

export default ComponenteA
