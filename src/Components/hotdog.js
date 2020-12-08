import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hotdog extends Component {
    render() {
        return (
            <ul>
                <li className='menu-items'>{this.props.hotdog.image}</li>
                <li className='menu-items'><span className='item-name'>{this.props.hotdog.name}</span></li>
                <li className='menu-items'><span className='price'>{this.props.hotdog.title}$</span></li>
                <li className='menu-items'>{this.props.hotdog.description}</li>
                <button onClick={() => this.props.dispatch({type: 'EDIT_HOTDOG', id:this.props.hotdog.id})}
                className='article-button-item'>Edit</button>
            </ul>
        );
    }
}
export default connect()(Hotdog);