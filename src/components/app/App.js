import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Landing from '../pages/landing/Landing';
import Media from '../pages/media/Media';
import Members from '../pages/members/Members';
import Nav from '../nav/Nav';
import Press from '../pages/press/Press';
import Styles from './App.module.css';

const App = () => {
  return (
    <div className={Styles.App}>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Nav />} />
            <Route path='/about' element={<About />} />
            <Route path='/media' element={<Media />} />
            <Route path='/members' element={<Members />} />
            <Route path='/press' element={<Press />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
