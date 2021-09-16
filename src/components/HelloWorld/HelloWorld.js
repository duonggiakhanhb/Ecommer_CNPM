import React from 'react';


const HelloWorld = () => {
    return (
        <div style={styles.div}>
            <h1 style={styles.h1} >Hello World</h1>
        </div>
    )
};

const styles = {
    div: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url(./hero.jpg)",
        backgroundSize: 'cover',
        padding: "0rem 5rem",
    },
    h1: {
        margin: 'auto',
        marginTop: '100px',
        fontSize: '60px',
        fontFamily: "Heebo, sans-serif",
    }
}

export default HelloWorld;