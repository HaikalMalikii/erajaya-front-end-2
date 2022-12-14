import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './component/Login';
import data from './data.json';



function App() {


  return (
    <div className="App">
      <Login email="Email default test@gmail.com" password="Pass Default 123abc" />
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
  );
}

export default App;
