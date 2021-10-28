import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      João Mendes - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}

//para executar JSX sempre é necessário colocar entre chaves. Ex: {primeiroJSX}
//para utilizar uma classe CSS no dentro do React precisa utilizar className, pois classe é uma palavra reservada em React
const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
