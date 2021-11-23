import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './Intro';
import Profil from './Pofil';
import { useSelector } from 'react-redux';
import './App.scss';
import { Portfolio } from './Portfolio';
import { Navbar } from './navbar-footer/Navbar';
import { Biographie } from './portfolio/Biographie';
import { Formation } from './portfolio/Formation';
import { Projets } from './portfolio/Projets';

function App() {
  const clicked = useSelector(state => state.clicked.clicked);
  const portfolio = useSelector(state => state.clicked.portfolio);
  return (
    <BrowserRouter>
      <div className="App">
        {!clicked
          ? <Intro />
          : !portfolio
            ? <Profil />
            : <div>
              <Navbar />
              <div>
                <Switch>
                    <Route path="/biographie"><Biographie /></Route>
                    <Route path="/formation"><Formation /></Route>
                    <Route path="/projets"><Projets /></Route>
                </Switch>
              </div>
              <Portfolio /></div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
