import React, { Component } from 'react'
import Form from "./Form"
import Modal from "./Modal"

export class Add extends Component {
  render() {
    const {title, form}= this.props.form;
    const {actualizar} = this.props
    return (
        <Modal title={title}>
            <Form 
            actualizar={actualizar}
            data={form}>
            </Form>
        </Modal>
    )
  }
}

export default Add
