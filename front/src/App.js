import React from 'react';
// import { NavLink } from 'react-router-dom';
import Intro from './Intro';
import Profil from './Pofil';
import { useSelector } from 'react-redux';
import './App.scss';
import { Portfolio } from './Portfolio';

function App() {
  const clicked = useSelector(state => state.clicked.clicked);
  const portfolio = useSelector(state => state.clicked.portfolio);
  return (
    <div className="App">
      {!clicked
        ? <Intro />
        : !portfolio
          ? <Profil />
          : <Portfolio />
      }
    </div>
  );
}

export default App;
