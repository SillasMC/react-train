import React, { Component } from 'react'
import ListColuna from './ListColuna'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    colunaLista = () => {
		return this.props.list.map(element =>
					(<ListColuna key={element.id} {...element} />)
				);
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
                    {this.colunaLista()}
                </tbody>
            </table>

        )
    }
}

export default List;
