import React, { Component } from 'react'
import ListColuna from './ListColuna'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    colunaLista = () => {
    }

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">HORA</th>
                        <th scope="col">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {/*this.colunaLista()*/}
                    <ListColuna />
                </tbody>
            </table>

        )
    }
}

export default List;