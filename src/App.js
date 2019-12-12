import React from 'react';
import './App.css';
import TrainingTitle from './component/TrainingTitle';
import TrainingList from './component/TrainingList';
import TrainingContext from './context/TrainingContext';

function App() {
  const nouvelleFormation = ['Pwa', 'Auto']
  const monClick = (training) => alert(training)
  return (
    <div className="App">
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

      Liste sans Provider
      <TrainingList />
    </div>
  );
}

export default App;
