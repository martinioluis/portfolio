import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './Intro';
import Profil from './Pofil';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Navbar } from './navbar-footer/Navbar';
import { Biographie } from './portfolio/Biographie';
import { Formation } from './portfolio/Formation';
import { Projets } from './portfolio/Projets';
import { DroitALaDeconnexion } from './projets/DroitALaDeconnexion';
import { Retrocade } from './projets/Retrocade';
import { RoadAccidentFrance } from './projets/RoadAccidentFrance';

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
                <Switch>
                    <Route path="/biographie"><Biographie /></Route>
                    <Route path="/formation"><Formation /></Route>
                    <Route path="/projets"><Projets /></Route>
                    <Route path="/DroitALaDeconnexion"><DroitALaDeconnexion /></Route>
                    <Route path="/Retrocade"><Retrocade /></Route>
                    <Route path="/RoadAccidentFrance"><RoadAccidentFrance /></Route>
                </Switch>
              </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
