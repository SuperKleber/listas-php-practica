import React, { Component } from 'react'
import Layout from "../components/Layout"

export class add extends Component {
  render() {
    return (
        <Layout title="Add">
                <form  action="http://localhost/listas-php-react/server/index.php" method="post" className="container">
                    <div className="form-group">
                        <label >Title:</label>
                        <input className="form-control" type="text" name="title"/>
                    </div>
                    <div className="form-group">
                        <label >Category:</label>
                        <input className="form-control" type="text" name="category"/>
                    </div>
                    <div className="form-group">
                        <label >Description:</label>
                        <input className="form-control" type="text" name="description"/>
                    </div>
                    <input type="text" name="origen" value="add" style={{display: "none"}} />
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </form>
        </Layout>
      
    
    )
  }
}

export default add
