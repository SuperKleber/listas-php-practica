import React, { Component } from 'react'
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Listas from "../components/Listas"



export class index extends Component {
  static async getInitialProps(){
    let req = await fetch ("http://localhost/listas-php-react/server/index.php")
    let data = await req.json();
    return {data}
  }
  render() {
    const {data} = this.props
    return (
      <Layout title={data.title}>
        <Listas listas={data.listas}>
          
        </Listas>
      </Layout>
    )
  }
}

export default index