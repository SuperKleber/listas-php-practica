import React, { Component } from 'react'
import Lista from "./dumb/Lista"
export class Listas extends Component {

    render() {
        const {listas} = this.props
    return (
        <div className="Listas container">
            {
                listas.map((element)=>{
                    return(
                        <Lista data={element} ></Lista>
                    )
                })
            }
        </div>
    )
    }
}

export default Listas
