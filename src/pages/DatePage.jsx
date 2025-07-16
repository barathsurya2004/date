import React from 'react';
import yes from '../assets/yes.png';
const DatePage = () => {
    return (
        <div
            style={{
                backgroundColor: '#fefaf5',
                color: '#4e2e1e',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins, serif',
                textAlign: 'center',
            }}
        >
            <h1 style={{ fontSize: '2.5rem' }}>Yess! 💖</h1>
            <img src={yes} alt="Happy dog" style={{ height: '200px', marginBottom: '20px' }} />
            <p style={{ fontSize: '1.5rem' }}>We are going on a date!</p>
        </div>
    );
};

export default DatePage;
