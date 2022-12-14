import React, { } from 'react';
import './App.css';
import ListData from './component/ListData';



function App() {
  return (
    <div class="App">

      {/* <div className='LoginPage'>
        <Login email="Email default test@gmail.com" password="Pass Default 123abc" />
      </div> */}
      <div class='Table Karyawan'>
        <ListData />
      </div>

    </div>
  );

}

export default App;
