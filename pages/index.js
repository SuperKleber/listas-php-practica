import React, { Component } from 'react'
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Listas from "../components/Listas"

import Front_data from "./front_data/front_data.json"



export class index extends Component {
  static async getInitialProps(){
    
    let req = await fetch(Front_data.server.url,{
      
      credentials: "include"  
    })
    let data = await req.json();
    return {data, req}
  }
  
  componentWillMount(){
    let rs = this.props.req
    console.log(rs)
    this.setState({
      data: this.props.data
    })
  }
  
  actualizar=()=>{
    fetch (Front_data.server.url)
    .then(res=>{
      
      return res.json()
    })  
    .then(data=>{
      this.setState({data:data})
    })
  }
  render() {
    const {data} = this.state
    return (
      <Layout
      actualizar={this.actualizar}
      forms={Front_data.forms} 
      title={data.title}>
        <Listas
        actualizar={this.actualizar}
        forms={Front_data.forms} 
        listas={data.listas}>
        </Listas>
      </Layout>
    )
  }
}

export default index