import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
export default function Login(props) {
    const {title, form} = props.data
    const {actualizar} = props
    return (
        <Modal title={title}>
            <Form actualizar={actualizar} data={form}>
            </Form>
        </Modal>
    )
}
