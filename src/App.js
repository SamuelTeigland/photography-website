import React from 'react';
import { NavBar, Footer } from './components/components';
import RoutesConfig from './routes';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <RoutesConfig />
      <Footer />
    </div>
  );
}

export default App;
