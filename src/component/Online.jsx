import React from 'react';

class Online extends React.Component {
    constructor(props) {
        super(props);
        // Création du state
        this.state = { online: true };

    }

    componentDidMount() {
        window.addEventListener("offline", () => { this.setState({ online: false }) });
        window.addEventListener("online", () => { this.setState({ online: true }) });
    }

    render() {
        return (
            <>
                 {
                    !this.state.online && <h2><span>on est offline</span></h2>
                }
            </>);
    }
}

export default Online;
