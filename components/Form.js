import React, { Component, createRef } from 'react'
import Front_data from "../pages/front_data/front_data.json"


export class Form extends Component {
  constructor() {
    super()
    this.formAjax = React.createRef()
  }
  submit = e =>{
    e.preventDefault()
    let data = new FormData(this.formAjax.current)
    fetch(Front_data.server.url,
      {
          method:"POST",
          credentials: "include",
          body: data
      })
      .then(res =>{ 
        this.props.actualizar()
      })
      .then(()=>{
        if(this.props.session){
          let email = data.get("email")
          let password = data.get("password")
          console.log(data.get("email"))
          this.props.session(email, password)
        }
      })
    // this.props.componentWillReceiveProps()
  }
  render() {
    const {method, action, origen, form_group, btn_type, btn_message} = this.props.data
    const {actualizar} = this.props
    return (
      // <form method={method} action={Front_data.server.url}>
      <div >
        <form ref={this.formAjax}  method={method}>
          {
              form_group.map((element)=>{
                  return(
                      <div  className="form-group">
                          <label>{element.label}</label>
                          <input 
                          name={element.name}
                          placeholder={element.placeholder}
                          className="form-control" 
                          type={element.type}
                          />
                      </div>
                  )
              })
          }
          <input type="text" name="delete_list" value={this.props.id} style={{display: "none"}} />
          <input type="text" name="origen" value={origen} style={{display: "none"}} />
          {/* <button data-dismiss="modal">Cerrar</button> */}
          <button  type="button" onClick={this.submit}  className={"btn  " + btn_type}>{btn_message}</button>
        </form>
      </div>
    )
  }
}

export default Form
