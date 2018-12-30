import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
export default function Login(props) {
    const {title, form} = props.data
    return (
        <Modal title={title}>
            <Form data={form}>
            </Form>
        </Modal>
    )
}
