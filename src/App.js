import React from 'react';
import './App.css';
import TrainingTitle from './component/TrainingTitle';
import TrainingList from './component/TrainingList';
import TrainingContext from './context/TrainingContext';
import Online from './component/Online';
import Clock from './component/Clock';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  const nouvelleFormation = ['Pwa', 'Auto']
  const monClick = (training) => alert(training)
  return (
    <div className="App">
      <header>
        First App
      </header>
      <Online />
      <Router>
        <nav>
          <NavLink exact={true} to={'/'}>Liste avec provider</NavLink>
          <NavLink to={'/clock'}>Horloge</NavLink>
          <NavLink to={'/sansProvider'}>Liste sans provider</NavLink>
        </nav>
        <Switch>
          <Route path={'/clock'}>
            <Clock />
          </Route>
          <Route path={'/sansProvider'}>
            Liste sans Provider
           <TrainingList />
          </Route>
          <Route path={'/'}>
            <TrainingContext.Provider value={
              {
                trainings: nouvelleFormation,
                clickTraining: monClick
              }}
            >
              <TrainingTitle />
              Liste avec Provider
        <TrainingList />
            </TrainingContext.Provider>
          </Route>
        </Switch>
      </Router>
      <footer>2019</footer>
    </div>
  );
}

export default App;
