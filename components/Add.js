import React, { Component } from 'react'
import Form from "./Form"
import Modal from "./Modal"

export class Add extends Component {
  state={
    handleAlert:null
  }
  add=(data)=>{
    this.setState({
      handleAlert:data
    })
  }
  
  render() {
    const {title, form}= this.props.form;
    const {actualizar} = this.props
    
    const modalPermance= true;
    //modalPermanence sirve para que el Modal donde se encuentra no se cierre al completar un formulario

    // console.log("handleALERT")
    // console.log(this.state.handleAlert)
    return (
        <Modal title={title} modalPermance={modalPermance}>
            <Form
            handleAlert={this.state.handleAlert}
            action={this.add}
            actualizar={actualizar}
            data={form}
            inModal={true}>
            </Form>
        </Modal>
        
    )
  }
}

export default Add
