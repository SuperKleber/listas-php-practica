import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
export default function Register(props) {
    const {title, form} = props.data
    const {actualizar, session} = props
    return (
        <Modal title={title}>
            <Form data={form}  actualizar={actualizar} session={session} inModal={true}>
            </Form>
        </Modal>
    )
}