import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
import Front_data from "../../pages/front_data/front_data.json"

export default function Login(props) {
    const {title, form} = props.data
    const {actualizar,session} = props
    return (
        <Modal title={title}>
            <Form session={session} actualizar={actualizar} data={form} inModal={true}>
            </Form>
        </Modal>
    )
}
// import React, { Component } from 'react'
// import Form from "../Form"
// import Modal from "../Modal"

// export class Login extends Component {
//   render() {
//     const {title, form} = this.props.data
//     const {actualizar,session} = this.props
//     return (
//         <Modal title={title} refe={this.modal}>
//             <Form session={session} actualizar={actualizar} data={form}>
//             </Form>
//         </Modal>
//     )
//   }
// }

// export default Login

