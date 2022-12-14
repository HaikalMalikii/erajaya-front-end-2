import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './component/Login';
import data from './data.json';
import ListData from './component/ListData'



function App() {
  return (
    <div class="App">
      {/* <div className='LoginPage'>
        <Login email="Email default test@gmail.com" password="Pass Default 123abc" />
      </div> */}
      <div class='Table Karyawan'>
        <ListData />
        {
          data && data.map(datas => {
            console.log(datas);
            return (
              <div class='data' key={datas.id}>

                <table class='table'>
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
  );

}

export default App;
