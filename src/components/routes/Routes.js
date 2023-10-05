import React from 'react';
import Landing from '../pages/landing/Landing';
import About from '../pages/about/About';
import Media from '../pages/media/Media';
import Members from '../pages/members/Members';
import Nav from '../nav/Nav';
import Press from '../pages/press/Press';

const routes = {
    '/': () => <Landing />,
    '/about': () => <About />,
    '/home': () => <Nav />,
    '/media': () => <Media />,
    '/members': () => <Members />,
    '/press': () => <Press />
  };

  export default routes;