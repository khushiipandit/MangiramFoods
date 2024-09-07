import React, { useState, useEffect } from 'react';

const Comp3 = () => {
    const calculateTimeLeft = () => {
        let difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const styles = {
        dealContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            padding: '40px',
            textAlign: 'center',
            position: 'relative',
        },
        dealText: {
            marginBottom: '20px',
        },
        dealTextH5: {
            fontSize: '14px',
            letterSpacing: '2px',
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: '10px',
        },
        dealTextH1: {
            fontSize: '36px',
            fontWeight: '400',
            color: '#333',
            marginBottom: '20px',
        },
        discount: {
            color: '#4e8734',
            fontWeight: '600',
        },
        dealTextP: {
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
        },
        dealImage: {
            marginTop: '20px',
        },
        timer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
            gap: '20px',
        },
        timerItem: {
            backgroundColor: '#e0f1d5',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'center',
            width: '100px',
        },
        timerItemSpan: {
            display: 'block',
            fontSize: '36px',
            color: '#4e8734',
            fontWeight: 'bold',
        },
        timerItemText: {
            color: '#555',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
    };

    return (
        <div style={styles.dealContainer}>
            <div style={styles.dealText}>
                <h5 style={styles.dealTextH5}>NATURIX DEAL OF THE DAY</h5>
                <h1 style={styles.dealTextH1}>
                    organic goods <span style={styles.discount}>50% off</span>
                </h1>
                <p style={styles.dealTextP}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div style={styles.dealImage}>
                <img src="/src/images/deal.png" alt="Organic Tomatoes" style={{ width: '200px' }} />
            </div>
            <div style={styles.timer}>
                <div style={styles.timerItem}>
                    <span style={styles.timerItemSpan}>{timeLeft.days}</span>
                    <div style={styles.timerItemText}>Days</div>
                </div>
                <div style={styles.timerItem}>
                    <span style={styles.timerItemSpan}>{timeLeft.hours}</span>
                    <div style={styles.timerItemText}>Hours</div>
                </div>
                <div style={styles.timerItem}>
                    <span style={styles.timerItemSpan}>{timeLeft.minutes}</span>
                    <div style={styles.timerItemText}>Minutes</div>
                </div>
                <div style={styles.timerItem}>
                    <span style={styles.timerItemSpan}>{timeLeft.seconds}</span>
                    <div style={styles.timerItemText}>Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default Comp3;
