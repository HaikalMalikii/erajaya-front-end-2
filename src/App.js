import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './component/Login';
import data from './data.json';
import ListData from './component/ListData'



function App() {
  return (
    <div className="App">
      {/* <div className='LoginPage'>
        <Login email="Email default test@gmail.com" password="Pass Default 123abc" />
      </div> */}
      <div className='Table Karyawan'>
        <ListData />
        <div className='content'>
          {
            data.map(datas => {
              return (

                <div className='data' key={datas.id}>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <th scope="row">{datas.id}</th>
                        <td>{datas.nama}</td>
                        <td>{datas.job}</td>
                      </tr>
                    </tbody>
                  </table>
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
