import React, {Component} from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component{
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newTitle = this.getTitle.value;
        const newDescription = this.getDescription.value;
        const newImage = this.getImage.value;
        const data = {
            newName,
            newTitle,
            newDescription,
            newImage
        }
        this.props.dispatch({type: 'UPDATE', id: this.props.hotdog.id, data:data })
    }
    render() {
        return(
            <form onSubmit={this.handleEdit}>
            <ul>
            <li><input type='text' name='image' style={{width:'200px'}}
            ref = {(input) => this.getImage = input} 
            defaultValue={this.props.hotdog.image}/></li>
            <li><input type='text' name='name' style={{width:'200px'}}
            ref = {(input) => this.getName = input}
            defaultValue={this.props.hotdog.name} /></li>
            <li><input type='text' name='title' style={{width:'200px'}}
            ref = {(input) => this.getTitle = input} 
            defaultValue={this.props.hotdog.title}/></li>
            <li><textarea type='text' name='description' style={{width:'200px'}}
            ref = {(input) => this.getDescription = input} 
            defaultValue={this.props.hotdog.description}/></li>
            <button className='article-button-item'>Upgrade</button>
            <button className='article-button-item' type='button'
            onClick={() => this.props.dispatch({type:'DELETE_HOTDOG', id:this.props.hotdog.id})}>Delete</button>
            </ul>
            </form>
        )
    }
}
export default connect()(EditComponent);