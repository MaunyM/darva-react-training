import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // Création du state
        this.state = { date: new Date() };
    }

    componentDidMount() {
        setInterval(this.updateClock, 1000);
    }

    updateClock= () => this.setState({date: new Date()});

    render() {
        return (
            <div>
                <h2>Il est {this.state.date.toLocaleTimeString()}</h2>
            </div>);
    }
}

export default Clock;
