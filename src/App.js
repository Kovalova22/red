import React, { Component } from 'react/cjs/react.production.min';
import './App.css';
import Modal from './Components/Modal';
import Allhotdogs from './Components/Allhotdogs';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className='App-header'>
            <div className='header-left'><img className='img-header' src='https://hiphiphooray.com.sg/wp-content/uploads/2017/10/Hip_Hip_Hooray_Hotdog.jpg' 
            alt='logo'/>
            <h1>Crud</h1> </div>
            <Modal />
            </header>
            <h2>All Hot-dogs</h2>
            <Allhotdogs />
      </div>
    );
  }
}

export default App;
