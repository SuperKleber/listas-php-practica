import React, { Component } from 'react'
import Head from "next/head"
import "../styles/_master.less"

export class Layout extends Component {
  render() {
    const {title} = this.props
    return (
      <div>
        <Head>
            <title>{title}</title>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            {/* <!-- Bootstrap CSS --/> */}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            
            {/* Scripts */}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </Head>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="">{title}</a>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Login</button>

            <div className="modal fade bd-example-modal-sm"  role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content p-4">
                        <h1>
                            Login
                        </h1>
                        <form method="post" action="http://localhost/listas-php-react/server/index.php">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label  htmlFor="exampleInputPassword1">Password</label>
                                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <input type="text" name="origen" value="login" style={{display: "none"}} />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
