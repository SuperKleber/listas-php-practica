import React, { Component } from 'react'
import Front_data from "../pages/front_data/front_data.json"
export class Form extends Component {
  render() {
    const {method, action, origen, form_group, btn_type, btn_message} = this.props.data
    return (
      <form method={method} action={Front_data.server.url}>
        {
            form_group.map((element)=>{
                return(
                    <div className="form-group">
                        <label>{element.label}</label>
                        <input 
                        name={element.name}
                        placeholder={element.placeholder}
                        className="form-control" 
                        type="text"/>
                    </div>
                )
            })
        }
        <input type="text" name="delete_list" value={this.props.id} style={{display: "none"}} />
        <input type="text" name="origen" value={origen} style={{display: "none"}} />
        <button type="submit" className={"btn  " + btn_type}>{btn_message}</button>
      </form>
    )
  }
}

export default Form
