import React, { Component } from 'react'

export class Form extends Component {
  render() {
    const {method, action, origen, form_group, btn_type, btn_message} = this.props.data
    const {input}= this.props
    return (
      <form method={method} action={action}>
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
        {
          input &&
          <input type="text" name={origen} value={input} style={{display: "none"}} />
        }
        <input type="text" name="origen" value={origen} style={{display: "none"}} />
        <button type="submit" className={"btn  " + btn_type}>{btn_message}</button>
      </form>
    )
  }
}

export default Form
