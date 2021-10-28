import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

//Utilizar Component para criar classes em React (obrigatório)
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  //chamado após a montagem de um componente
  // Chamado para determinar se a mudança nos adereços e no estado deve acionar uma nova renderização
  componentDidMount() {
    window.setTimeout(() => {

      //setState serve para controlar o state
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  //Todo retorno em JSX exige um handler
  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
