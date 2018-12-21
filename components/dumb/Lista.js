import React from 'react'
import Category from "./Category"


class Lista extends React.Component {
    state={
        complete: true
    }
    constructor(){
        super()
        this.lista = React.createRef()
    }
    clickComplete=(event)=>{
        this.setState({
            complete : !this.state.complete
        })
    }
    
    render(){
        const {title, category, description} = this.props.data
        return (
            <div  className="row">
                <div  ref={this.lista} onClick={this.clickComplete} className="Lista col shadow-none p-3 mb-3 mt-3 bg-light rounded">
                    <h3>
                        {title}
                    </h3>
                    <div className="container">
                        <div className="row">
                            <Category category={category}>
                            </Category>
                        </div>
                    </div>

                    
                    <h6 className=" mt-3 text-muted">{description}</h6>
                </div>
            
                {
                    this.state.complete &&
                    <div className="Complete col-2 p-3 mb-3 mt-3 ">

                    </div>

                }
                <style jsx>{`
                    .Lista{
                        cursor: pointer !important;
                        
                    }
                    .Complete{
                        width: 100%;
                        height: 100%;
                        background: green;
                    }
                    
                `}</style>

            </div>
        )
    }
}
export default Lista

  