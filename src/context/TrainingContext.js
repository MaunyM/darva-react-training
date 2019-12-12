import React from 'react';

const trainings = ['React', 'React Native', 'Angular', 'TypeScript']

const clickTraining = (training) => console.log('training', training)

const TrainingContext = React.createContext(
    {
        trainings,
        clickTraining: clickTraining
    }
)

export default TrainingContext;