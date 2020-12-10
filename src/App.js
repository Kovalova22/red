import React, { Component } from 'react/cjs/react.production.min';
import './App.css';
import Allhotdogs from './Components/Allhotdogs';
import { connect } from 'react-redux';
import { hideModal, showModal } from './redux/ActionCreators';
import ModalRoot from './Components/Modal/ModalRoot';

const mapDispatchToProps = dispatch => ({ 
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
   dispatch(showModal({ modalProps, modalType }))
  }
 })


class App extends Component {
  constructor(props){
    super(props)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.hideModal()
  }

  openModal() {
    this.props.showModal({
      open: true,
      title: 'Modal Add',
      closeModal: this.closeModal
    }, 'Modal Add')
  }

  render() {
    return (
      <div className="App">
            <header className='App-header'>
            <div className='header-left'><img className='img-header' src='https://hiphiphooray.com.sg/wp-content/uploads/2017/10/Hip_Hip_Hooray_Hotdog.jpg' 
            alt='logo'/>
            <h1>Crud</h1> </div>
            <button
            className='main-modal-button'
            onClick={this.openModal}
            >Add hot-dog</button>
            <ModalRoot hideModal={this.props.hideModal}/>
            </header>
            <h2>All Hot-dogs</h2>
            <Allhotdogs />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
