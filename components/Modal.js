import React, { Component } from 'react'
import { runInThisContext } from 'vm';

export class Portal extends Component {
  render() {
    const {children, title} = this.props
    return (
      <li className="nav-item m-2 ">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"."+title}>{title}</button>
        <div className={"modal "+title}  role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content p-4">
              <h1>
                {title}
              </h1>
              {children}
            </div>
          </div>
        </div> 
      </li>
    )
  }
}

export default Portal
