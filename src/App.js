import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleChangeDescription = (value) => {
    
  }

  submitList = () => {
    let hora = new Date().getHours();
    let min = new Date().getMinutes();
    let idElemento = 0
    idElemento = this.state.list.length === 0 ? 1 : this.state.list[this.state.list.length - 1].id + 1;
    let obj = {
      id: idElemento,
      description: this.state.description,
      horaAtual: hora + ":" + min,
      feito: false
    }
    this.state.list.push(obj);
    this.setState({ description: "" })
  }

  removerTodaList = () => {
    
  }

  deleteElement = (id) => {
    // this.setState({ list: this.state.list.filter(e => e.id !== id) })
  }

  tarefaFeita = (element) => {
    // this.setState({
    //   list: this.state.list.filter(e => {
    //     if (e === element) {
    //       e.feito = true;
    //     }
    //     return true
    //   })
    // })
  }

  tarefaNaoFeita = (element) => {
     
  }

  render() {
    return (
      <div className="container">
        <h1>React pra quem te quer :D</h1>
      </div>
    );
  }
}

export default App;
