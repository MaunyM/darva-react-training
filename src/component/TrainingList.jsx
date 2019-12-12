import React from 'react';
import TrainingItem from './TrainingItem';
import TrainingContext from '../context/TrainingContext';

const TrainingList = function () {
    return (
        <ul>
            <TrainingContext.Consumer>
                {
                    (context) => (
                        context.trainings.map(title => (
                            <TrainingItem key={title} title={title} />
                        ))
                    )
                }
            </TrainingContext.Consumer>
        </ul>
    )
}

export default TrainingList;