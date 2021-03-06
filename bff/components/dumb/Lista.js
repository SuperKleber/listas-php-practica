import React from 'react'
import Category from "./Category"
import Form from "../Form"
import Front_data from "../../pages/front_data/front_data.json"

class Lista extends React.Component {
    state={
        complete: false
    }
    constructor(){
        super()
        this.lista = React.createRef()
    }
    clickComplete=(event)=>{
        this.setState({
            complete : !this.state.complete
        })
        let data = new FormData()
        data.append("origen", "complete")
        data.append("complete", !this.state.complete ? 1:0)
        data.append("id", this.props.data.id)
        fetch (Front_data.server.url,{
            method: "POST",
            credentials: "include",
            body: data
        })
            .then(res=>{      
                this.props.actualizar()
            }) 
    }
    componentWillMount(){
        if(this.props.data.complete == 1){
            this.setState({
                complete : true
            })
        }
    }
    
    render(){
        const {title, category, description, id} = this.props.data
        const {form} = this.props.form
        const {actualizar} = this.props
        return (
            <div  className="row">
                <div  ref={this.lista} onClick={this.clickComplete}  className="Lista col-9 col-md-11 shadow-none p-3 mb-3 mt-3 bg-light rounded">
                    <h3>
                        {title}
                    </h3>
                    <Category category={category}>
                    </Category>
                    <h6 className=" mt-3 text-muted">{description}</h6>
                </div>
                <div className="Complete col col-1 offset-1 offset-md-0 p-3 mb-3 mt-3 ">
                    <Form data={form} actualizar={actualizar} id={id}>

                    </Form>
                </div>
                    
            
                <style jsx>{`
                    .Lista{
                        cursor: pointer !important;
                        ${this.state.complete &&
                            "background: rgba(45,210,45,0.5) !important;"
                        }
                    }
                    .Complete{
                        cursor: pointer !important;
                        display:flex;
                        justify-content: center;
                        align-items:center;
                    }
                    
                `}</style>
                

            </div>
        )
    }
}
export default Lista

  