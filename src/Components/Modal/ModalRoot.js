import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import ModalContent from './ModalContent';


const mapStateToProps = state => ({
    ...state.modal
})

class ModalContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: props.modalProps.open
        }
        this.closeModal = this.closeModal.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }
    closeModal() {
        this.props.hideModal()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const title = this.getTitle.value;
        const description = this.getDescription.value;
        const image = this.getImage.value;
        const data = {
            id: Math.floor(Math.random() * (10)),
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
        if (!this.props.modalType) {
            return null
        }
        return (
            <div>
                <ReactModal           
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                ariaHideApp={false}
                overlayClassName="modal fade show"
                bodyOpenClassName="modal-open"
                >

                    <ModalContent
                                closeModal={this.closeModal}
                                {...this.props.modalProps}
                                handleSubmit={this.handleSubmit} />
                </ReactModal>
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(ModalContainer)