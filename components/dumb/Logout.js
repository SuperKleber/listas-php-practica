import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
export default function Logout(props) {
    const {title, form} = props.data
    const {actualizar} = props
    return (
        <li className="nav-item m-2">
            <Form 
            actualizar={actualizar}
            data={form}>
            </Form>
        </li>
    )
}
