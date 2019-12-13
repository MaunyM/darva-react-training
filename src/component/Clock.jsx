import React, { useState, useEffect } from 'react';

function Clock() {
    const [date, changeDate] = useState(new Date());

    useEffect(() => {
        console.log("j'ai de l'effet");
        const intervalId = setInterval(() => changeDate(new Date(), 1000))
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return (
        <div>
            <h2>Il est {date.toLocaleTimeString()}</h2>
        </div>);
}


export default Clock;
