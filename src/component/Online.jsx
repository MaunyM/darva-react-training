import React, { useEffect, useState } from 'react';

function Online() {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => { setOnline(false) });
    })

    useEffect(() => {
        window.addEventListener("online", () => { setOnline(true) });
    })

    return (
        <>
            {
                !online && <h2><span>on est offline</span></h2>
            }
        </>);

}

export default Online;
