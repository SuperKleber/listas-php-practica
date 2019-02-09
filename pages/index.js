import React, { Component } from 'react'
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Listas from "../components/Listas"

import Front_data from "./front_data/front_data.json"



export class index extends Component {
  static async getInitialProps(){
    
    let req = await fetch(Front_data.server.url,{
      method: "GET",
      credentials: "include"  
    })
    let data = await req.json();
    return {data, req}
  }
  session=(email, password)=>{

    console.log(this.state.data.session)
    if (this.state.data.session != null){
      window.sessionStorage.email=email
      window.sessionStorage.password=password
    }
  }
  componentWillMount(){
    // let rs = this.props.req
    // console.log(rs)
    this.setState({
      data: this.props.data
    })
    
  }
  actualizar=()=>{
    fetch (Front_data.server.url,{
      method: "GET",
      credentials: "include"  
    })
    .then(res=>{      
      return res.json() 
    })  
    .then(data=>{
      this.setState({data:data})
    })
  }
  render() {
    const {data} = this.state
    // console.log("data.session")
    // console.log(data.session)
    return (
      <Layout
      session={this.session}
      actualizar={this.actualizar}
      forms={Front_data.forms} 
      title={data.title}>
      <h4>data.session es: {data.session ? data.session : "no hay nada"}</h4>
        <Listas
        actualizar={this.actualizar}
        forms={Front_data.forms} 
        listas={data.listas}>
        </Listas>
      </Layout>
    )
  }
  componentDidMount(){
      // console.log(window.sessionStorage)
    if (window.sessionStorage.email && window.sessionStorage.password ){
      
    } else{
      console.log("sessionStorage no está definido")
    }
  }
}

export default index