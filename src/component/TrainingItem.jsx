import React from 'react';

import './TrainingItem.css';
import TrainingContext from '../context/TrainingContext';



class TrainingItem extends React.Component {

    renderLi = (title) => (
        <>
            <TrainingContext.Consumer>
                {(context) =>
                    (<li className={'Item'} onClick={() => context.clickTraining(title)}>
                        {title}
                    </li>)
                }
            </TrainingContext.Consumer>
        </>)

    render() {
        const { title } = this.props;
        if (title === 'Angular') {
            return null;
        } else {
            return (
                this.renderLi(title)
            )
        }
    }
}

export default TrainingItem;