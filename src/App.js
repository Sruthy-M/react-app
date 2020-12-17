import React from 'react';
//components
import MyNavbar from "./components/my-navbar/my.navbar.components";
import profile from './assets/img/profile/Profile-img.png';

import './App.css';
import Typical from 'react-typical'
 const App = () => {
  return (
     
  
  <div className='App'>
    <MyNavbar />
  <header className='App-header'>
    <img src={profile} className='App-profile' alt='profile'/>
  
    <h1>Hi, I'm Sruthy Muraleedharan</h1>
    <p> I'm a{' '}
      <Typical
         loop={Infinity}
         wrappper='b'
         steps={[
           'developer ',
           1000,
          'designer',
          1000,
          'Engineering student',
          1000,
          'Photographer',
          1000
         ]}/>
    </p>
    </header>
    </div>
  );
  
}


export default App;