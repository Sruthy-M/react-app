import React from 'react';
//components
import MyNavbar from "./components/my-navbar/my.navbar.components";
import profile from './assets/img/profile/Profile-img.png';
import Typical from 'react-typical';
import About from './pages/about/about.component';
import './App.css';


 const App = () => {
  return (
     
  
  <div className='App' style={{ position: "relative"}}>
    <MyNavbar />
    {/* about me section */}
    
  <header className='App-header'>
    <img src={profile} className='App-profile' alt='profile'/>
  <div>
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
    </div>
    </header>
    
<div>
  <container>
    <About />
  </container>
</div>
</div>
    
  );
  
}


export default App;