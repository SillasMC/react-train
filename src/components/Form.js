import React from 'react'

const Form = (props) => {

    const handleChangeDescription = (event) => {
		props.onChange(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();

    }

    const removeList = () => {

    }

    return (
        <form className="form-inline">
            <input type="text"
                className="form-control col-xs-12 col-sm-9 col-md-10"
                placeholder="Adicione tarefa"
                value={props.description}
                onChange={handleChangeDescription}
            />
            <div className="btnForm">
                <button className="btn btn-primary" type="submit" onClick={submitForm}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <div className="btnForm">
                <button className="btn btn-danger"
                    onClick={removeList}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </form>
    )
}

export default Form;
