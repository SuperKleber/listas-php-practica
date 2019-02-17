import React, { Component } from 'react'

export class Alert extends Component {
 
  render() {
    const {error, origen, message,typeAlert}=this.props.data
    return (
        <div className={`alert ${typeAlert ? typeAlert : "alert-primary"}`} role="alert">
            {`${message}`}
        </div>
    )
  }
}

export default Alert
