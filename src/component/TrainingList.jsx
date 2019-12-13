import React, { useContext } from 'react';
import TrainingItem from './TrainingItem';
import TrainingContext from '../context/TrainingContext';

const TrainingList = function () {
    const context = useContext(TrainingContext)
    return (
        <ul>
            {
                context.trainings.map(
                    title => (<TrainingItem key={title} title={title} />)
                )
            }
        </ul>
    )
}

export default TrainingList;