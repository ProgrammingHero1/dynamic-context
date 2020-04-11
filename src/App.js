import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {
  
  return (
    <div>  
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
