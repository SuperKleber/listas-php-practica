import React, { Component } from 'react'
import Lista from "./dumb/Lista"
import Add from "./Add"
export class Listas extends Component {
    state={
        listas: this.props.listas,
        forms: this.props.forms
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.listas)
        // console.log(nextProps.form)
        // console.log(nextProps)  
        this.setState({
            listas: nextProps.listas,
            forms: nextProps.forms
        })
    }
    render() {
        const {listas, forms} = this.state
        const {actualizar} = this.props

    return (
        <div className="Listas container mt-4">
            <div className="row bg-light">
                <Add 
                actualizar={actualizar}
                form={forms.add_list}>
                </Add>
            </div>
            {
                listas.map((element)=>{
                    return(
                        <Lista key={element.id} form={forms.delete_list} data={element} actualizar={actualizar} ></Lista>
                    )
                })
            }
        </div>
    )
    }
}

export default Listas
