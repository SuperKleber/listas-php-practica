import React, { Component } from 'react'
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Listas from "../components/Listas"

import Front_data from "./front_data/front_data.json"



export class index extends Component {
  static async getInitialProps(){
    let req = await fetch ("http://localhost/listas-php-react/server/index.php")
    let data = await req.json();
    return {data}
  }
  render() {
    const {data} = this.props
    return (
      <Layout forms={Front_data.forms} title={data.title}>
        <Listas forms={Front_data.forms} listas={data.listas}>
        </Listas>
      </Layout>
    )
  }
}

export default index