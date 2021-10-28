import React from 'react'

//Tudo do componente pode ser acessado com children
//Também é preciso do children para renderizar o componente
function ComponenteB(props) {
  return (
    <div>Componente B =D {props.children} </div>
  )
}

export default ComponenteB
