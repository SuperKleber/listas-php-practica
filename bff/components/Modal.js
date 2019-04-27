import React, { Component, createRef, Children} from 'react'
import { runInThisContext } from 'vm';

export class Portal extends Component {
  constructor(){
    super()
    this.modal=React.createRef()
  }
  closeModal=(e)=>{
    !this.props.modalPermance &&
    $(this.modal.current).modal("hide")
    //funcion de BOOTSTRAP para cerrar el modal
  }
  render() {
    const {children, title, refe} = this.props
    const childrenWithProps = Children.map(children, child =>
      React.cloneElement(child, { inModal: true, closeModal:  this.closeModal })
    );  
    return (
        <div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"."+title}>{title}</button>
          <div className={"modal "+title}  role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" ref={this.modal}>
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {childrenWithProps}
                </div>
              </div>
            </div>
          </div> 
        </div>
    )
  }
}

export default Portal
