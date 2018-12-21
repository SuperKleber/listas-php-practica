import React, { Component } from 'react'
import Layout from "../components/Layout"


export class register extends Component {
  render() {
    return (
        <Layout>
            <form className="container" method="post" action="http://localhost/listas-php-react/server/index.php">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label  htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <input type="text" name="origen" value="register" style={{display: "none"}} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Layout>
    )
  }
}

export default register
