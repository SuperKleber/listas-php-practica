import React from 'react'
import Form from "../Form"
import Modal from "../Modal"
import Front_data from "../../pages/front_data/front_data.json"

export default function Login(props) {
    const {title, form} = props.data
    const {actualizar,session} = props
    const {method, action, origen, form_group, btn_type, btn_message} = form
    return (
        <Modal title={title}>
            <Form session={session} actualizar={actualizar} data={form}>
            </Form>
            {/* <div>
                <form action={Front_data.server.url} method={method}>
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
                <input type="text" name="origen" value={origen} style={{display: "none"}} />
                <button  type="submmit"  className={"btn  " + btn_type}>{btn_message}</button>
                </form>
            </div> */}
        </Modal>
    )
}
