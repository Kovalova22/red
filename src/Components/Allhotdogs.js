import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hotdog from './hotdog';
import EditComponent from './EditComponent';

class Allhotdogs extends Component{
    render() {
        return (
            <div className='articles'>
                {this.props.hotdogs.map((hotdog) => (
                    <div key={hotdog.id}>
                        {hotdog.editing ? <EditComponent hotdog={hotdog} key={hotdog.id} /> :
                         <Hotdog key={hotdog.id} hotdog={hotdog} />}
                    </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        hotdogs: state
    }
}
export default connect(mapStateToProps)(Allhotdogs);