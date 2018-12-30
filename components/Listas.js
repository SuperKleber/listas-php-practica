import React, { Component } from 'react'
import Lista from "./dumb/Lista"
import Add from "./Add"
export class Listas extends Component {

    render() {
        const {listas, forms} = this.props
    return (
        <div className="Listas container">
            <Add form={forms.add_list}>

            </Add>
            {
                listas.map((element)=>{
                    return(
                        <Lista form={forms.delete_list} data={element} ></Lista>
                    )
                })
            }
        </div>
    )
    }
}

export default Listas
