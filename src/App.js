import React, { } from 'react';
import './App.css';
import ListData from './component/ListData';
import Login from './component/Login'



function App() {
  return (
    <div class="App">

      <div className='LoginPage'>
        <Login />
      </div>
      {/* <div class='TableKaryawan'>
        <ListData />
      </div> */}

    </div>
  );

}

export default App;
