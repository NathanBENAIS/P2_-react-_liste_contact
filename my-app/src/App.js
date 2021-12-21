
import React, { Component } from 'react';
import './App.css';
import Header from './composants/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './composants/Contacts';

class App extends Component {


  render() {
    return (

      <div className="App">
        <Header />

        <div className='container'>
          <Contacts/>


        </div>
        <h1> Notre composant</h1>


      </div>
    );
  }
}
export default App;
