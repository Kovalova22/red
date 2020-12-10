import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalContent extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const title = this.getTitle.value;
        const description = this.getDescription.value;
        const image = this.getImage.value;
        const data = {
            id: Math.floor(Math.random() * (100)),
            name,
            title,
            description,
            image,
            editing:false
        }
        this.props.dispatch({
            type: 'ADD_HOTDOG',
            data
        });
        this.getName.value='';
        this.getTitle.value='';
        this.getDescription.value='';
        this.getImage.value='';
        this.props.closeModal();
    }

    render(){
    return (
            <div className="modal-content">
            <div className="modal-header">
            <h3 className="modal-title">Add new hot-dog</h3>
            </div>
            <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                    <input className='modal-input' placeholder='Name' ref={(input)=>this.getName=input}/>
                    <input className='modal-input' placeholder='Title' ref={(input)=>this.getTitle=input}/>
                    <input className='modal-input' placeholder='Description' ref={(input)=>this.getDescription=input}/>
                    <input className='modal-input' placeholder='Image' ref={(input)=>this.getImage=input}/>
                    <div className='modal-button'>
                    <button className='modal-button-item' type= 'button' onClick={this.props.closeModal}>No Thanks</button>
                    <button className='modal-button-item' type='submit'  >Add</button>
                    </div>
                </form>
            </div>
        </div>


    )
}
}
export default connect()(ModalContent);