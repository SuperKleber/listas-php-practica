import React, { Component } from 'react'
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Listas from "../components/Listas"

import Front_data from "./front_data/front_data.json"



export class index extends Component {
    state={
    data:{
      title: "",
      listas:[],
      session:null
    },
    login:false
  }
  session=(data)=>{
    window.localStorage.email=data.get("email")
    window.localStorage.password=data.get("password")
    
    this.login()
  }
  logout=()=>{
    window.localStorage.clear()
    this.setState({
      login:false
    })
  }
  login(){
    if (window.localStorage.email && window.localStorage.password){
      console.log("loguandose...")
      let {email, password} = window.localStorage
      let data = new FormData();
      data.append("email", email)
      data.append("password", password)
      data.append("origen", "login")

      fetch (Front_data.server.url,{
        method: "POST",
        credentials: "include",
        body: data
      })
      .then(res=>{      
        return res.json()
      })
      .then(res=>{
        !res.error ?
        this.setState({login: true})
        :
        this.setState({login: false});
        this.actualizar()
      })
      .catch(error=>{
        this.actualizar()
        console.log("hubo un error al iniciar SESSIÓN desde el servidor: "+error)
      }) 
    }
  }
  // componentWillMount(){
  //   this.actualizar()
  // }
  actualizar=()=>{
    console.log("actualizando...")
    fetch (Front_data.server.url,{
      method: "GET",
      credentials: "include",
    })
    .then(res=>{      
      return res.json() 
    })  
    .then(data=>{
      this.setState({data:data})
      console.log("actualización exitosa")
    })
    .catch(error=>{
      console.error("Algo a fallado en request al servidor: "+error)
    })
  
  }
  render() {
    
    const {data, login, showApp} = this.state
    return (
      <Layout
      prefetch
      login = {login}
      logout={this.logout}
      session={this.session}
      actualizar={this.actualizar}
      forms={Front_data.forms} 
      title={data.title}
      user={data.user}>
      {
        login &&
        <Listas
        actualizar={this.actualizar}
        forms={Front_data.forms} 
        listas={data.listas}>
        </Listas>
      }
      </Layout>
    )
  }
  componentDidMount(){
      // this.login()
      setTimeout(()=>{
        this.login()
      }, 500)
  }
}

export default index