import React, { Component, createRef } from 'react'
import Front_data from "../pages/front_data/front_data.json"
import Alert from "./Alert"

export class Form extends Component {
  state={
    handleAlert:this.props.handleAlert
  }
  componentWillReceiveProps(){
    this.setState({
      handleAlert:this.props.handleAlert  
    })
  }
  constructor(props) {
    super(props)
    this.formAjax = React.createRef()
  }
  validator=(data)=>{
    const {form_group} = this.props.data
    if(form_group.length > 0){
      let isRequiredSuccess = true;
      form_group.map((element, index)=>{
        let value =  true
        try {
          value= element.name ? data.get(element.name) : true
        } catch (error) {
          console.log("Es posible que la app no soporte el navegador: "+ error)
        }
        if(element.required && !value){
          isRequiredSuccess=false;
          document.getElementById(element.id).className="form-control isRequired";
          // la clase .form-control es usado por el Bootstrap
          // Estilos de .isRequired está definido en los archivos .less
        }else{
          document.getElementById(element.id).className="form-control";
        }
      })
      return isRequiredSuccess
    }else{
      return true;
    }
  }
  pushHandlerAlert=(res,typeAlert)=>{
    let data = res;
    data.typeAlert = typeAlert;
    return data;
    // console.log(data)
  }
  submit = e =>{
    e.preventDefault()
    let data = new FormData(this.formAjax.current)
    let {form_append} = this.props.data
    
    form_append.map((element)=>{
      data.append(element.name, element.value)
    })
    this.props.id &&
    data.append("delete_list", this.props.id)
    if(this.validator(data)){
      fetch(Front_data.server.url,
        {
            method:"POST",
            credentials: "include",
            body: data
        })
        .then((res)=>{
            return res.json()
        })
        .then((res) =>{
          if(!res.error){
            this.setState({
                handleAlert: null
              })
              this.props.session && this.props.session(data)
              this.props.logout && this.props.logout()
              this.props.closeModal && this.props.closeModal()
              this.props.action && this.props.action(this.pushHandlerAlert(res, "alert-success"))
              this.props.actualizar()
            }else{
              console.log("error en: "+res.origen)
              this.setState({
                handleAlert: this.pushHandlerAlert(res,"alert-danger")
              })
            }
            // return res.json()
        })
        .catch((error)=>{
          console.log("ha ocurrido un error: " + error)
          this.props.actualizar()
        })
    }else{
      this.setState({
        handleAlert:
        this.pushHandlerAlert(
          {
            error:true,
            origen: "validator",
            message: "Rellena todos los campos"
          },"alert-danger")
      })
    }
  }
  
  render() {  
    const {required, method, action, origen, form_group, btn_type, btn_message} = this.props.data
    const {actualizar, isRequiredFailed,  inModal, alert} = this.props
    return (
      <div >
        <form ref={this.formAjax}  method={method}>
          {
              form_group.map((element)=>{
                  return(
                      <div key={element.id} className="form-group">
                          <label>{element.label}</label>
                          <input
                          id={element.id}
                          name={element.name}
                          placeholder={element.placeholder}
                          className={`form-control ${element.isRequired}`} 
                          // element.isRequired sirve para mostrar al usuario que ese campo es requerido
                          type={element.type}
                          />
                          
                      </div>
                  )
              })
          }
          <div className="alerts">
          {
            this.state.handleAlert && <Alert data={this.state.handleAlert}></Alert>
          }
          </div>
          <button  type="button" onClick={this.submit}  className={"btn  " + btn_type}>{btn_message}</button>
        </form>
      </div>
    )
  }
}

export default Form
