import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const title = this.getTitle.value;
        const description = this.getDescription.value;
        const image = this.getImage.value;
        const data = {
            id: new Date(),
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
    }
    render() {
        return(
            <div>
            <button className='main-modal-button' data-toggle="modal" data-target="#myModal">
            Add hotdog
            </button>
        
        
        <div className="modal" id="myModal">
        
                <div className="modal-body">
                    <h4>Add new hot-dog</h4>
                    <form onSubmit={this.handleSubmit}>
                    
                    <input name='name' className='modal-input' placeholder='Name' ref={(input)=>this.getName=input}
                     />
                    <input name='title' className='modal-input' placeholder='Title' ref={(input)=>this.getTitle=input}
                     />
                    <input name='description' className='modal-input' placeholder='Description' ref={(input)=>this.getDescription=input}
                     />
                    <input name='image' className='modal-input' placeholder='Image' ref={(input)=>this.getImage=input}
                     />
        
                <div className='modal-button'>
                <button className='modal-button-item' type='button' data-dismiss="modal">No Thanks</button>
                <button className='modal-button-item' type='submit' onSubmit={this.handleSubmit}>Add</button>
                </div>
                </form>
        
          </div>
        </div>
            </div>
        );
    }
}
export default connect()(Modal);