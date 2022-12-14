import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './component/Login';
import data from './data.json';
import Navbar from './component/Navbar';



function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Navbar />
      </div>
      <div className='Body'>
        <Login email="Email default test@gmail.com" password="Pass Default 123abc" />
        <div className='content'>
          {
            data.map(datas => {
              return (
                <div className='box' key={datas.id}>
                  {datas.nama}
                  {datas.job}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
