import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
export default function Logout(props) {
    const {title, form} = props.data
    const {actualizar, logout} = props
    return (
        <Form 
        logout={logout}
        actualizar={actualizar}
        data={form}>
        </Form>
    )
}
