import React, { useRef } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import gsap from 'gsap';
import { useNavigate } from 'react-router';
import ask from '../assets/ask.png';

const MainPage = () => {
    const noButtonRef = useRef(null);
    let navigate = useNavigate();

    const handleMouseEnter = (e) => {
        const button = noButtonRef.current;
        const buttonRect = button.getBoundingClientRect();

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const cursorX = e.clientX;
        const cursorY = e.clientY;

        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;

        let x, y;

        do {
            x = Math.random() * (screenWidth - buttonWidth);
            y = Math.random() * (screenHeight - buttonHeight);
        } while (
            Math.abs(x - cursorX) < 150 && Math.abs(y - cursorY) < 150
        );

        gsap.fromTo(button, {
            left: `${buttonRect.left}px`,
            top: `${buttonRect.top}px`,
        }, {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            duration: 0.1,
            ease: 'power1.in',
        });
    };

    const sharedStyles = {
        color: '#4e2e1e',
        backgroundColor: '#fefaf5',
        textAlign: 'center',
        padding: '5% 2%',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        padding: '12px 24px',
        margin: '0 10px',
        fontSize: '1rem',
        borderRadius: '999px',
        backgroundColor: '#fff',
        border: '2px solid #4e2e1e',
        color: '#4e2e1e',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
    };

    const imageStyle = {
        width: '180px',
        height: '180px',
        margin: '20px auto',
        display: 'block',
    };

    return (
        <>
            <MobileView>
                <div style={sharedStyles}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Let’s play a game...</h1>
                    <img src={ask} alt="Cute dog" style={imageStyle} />
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
                        Do you want to go on a dinner date?
                    </h2>
                    <div>
                        <button style={buttonStyle} onClick={() => {
                            navigate('/date');
                        }}>Yes</button>
                        <button style={buttonStyle}
                            onClick={() => {
                                navigate('/date');
                            }}
                        >Abso-freakin’-lutely</button>
                    </div>
                </div>
            </MobileView>

            <BrowserView>
                <div style={sharedStyles}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Let’s play a game...</h1>
                    <img src={ask} alt="Cute dog" style={imageStyle} />
                    <h2 style={{ fontSize: '1.7rem', marginBottom: '30px' }}>
                        Do you want to go on a dinner date?
                    </h2>
                    <div>
                        <button style={buttonStyle} onClick={() => navigate('/date')}>Yes</button>
                        <div className='empty-div' style={{ width: '100px', height: '50px' }}></div>
                        <button
                            ref={noButtonRef}
                            style={buttonStyle}
                            onPointerEnter={handleMouseEnter}
                        >
                            No 😔😔
                        </button>
                    </div>
                </div>
            </BrowserView>
        </>
    );
};

export default MainPage;
