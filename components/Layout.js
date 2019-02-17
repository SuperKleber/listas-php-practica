import React, { Component } from 'react'
import Head from "next/head"
import "../styles/_master.less"

import Login from "./dumb/Login"
import Register from "./dumb/Register"
import Logout from './dumb/Logout';

export class Layout extends Component {
  
  render() {
    const {title,user, forms, actualizar,session,logout, login} = this.props
    return (
      <div className="Layout">
        <Head>
            <title>{title}</title>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            {/* <!-- Bootstrap CSS --/> */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>

            {/* Scripts */}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </Head>
        {
          login ? 
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a className="navbar-brand" href="">{`${title} de ${user ? user: ""}`}</a>
              <div className="collapse navbar-collapse ">
                  <ul className="navbar-nav ml-auto ">
                    <li className="nav-item m-2 ">
                      <Login session={session} data={forms.login} actualizar={actualizar}></Login>
                    </li>
                    <li className="nav-item m-2 ">
                      <Register session={session} data={forms.register} actualizar={actualizar}></Register>
                    </li>
                    <li className="nav-item m-2 ">
                      <Logout logout={logout} data={forms.logout} actualizar={actualizar}> </Logout>
                    </li>
                  </ul>
              </div>
            </nav>
            {
              this.props.children
            }

          </div>
          :
          <div className="card m-auto" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Listas</h5>
              <p className="card-text">Por favor Logueate o Regístrate para poder usar la APP</p>
              <div className="d-flex justify-content-center">
                <span className="m-1">
                <Login session={session} data={forms.login} actualizar={actualizar}></Login>
                </span>
                <span className="m-1">
                <Register session={session} data={forms.register} actualizar={actualizar}></Register>
                </span>
              </div>
            </div>
          </div>
        }
        
      </div>
    )
  }
}

export default Layout
