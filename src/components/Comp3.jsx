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
            display: 'flex',
            flexDirection: 'block',
        },
        tamatar_ka_left: {
            display: 'flex',
            flexDirection: 'column',
        },
        dealTextH5: {
            fontSize: '14px',
            letterSpacing: '2px',
            color: '#888',
            textTransform: 'uppercase',
            marginLeft: '300px',
            marginTop: '60px',
            marginBottom: '2px',
        },
        dealTextH1: {
            fontSize: '36px',
            fontWeight: '400',
            color: '#333',
            marginLeft: '140px',
            marginBottom: '40px',
        },
        discount: {
            color: '#4e8734',
            fontWeight: '600',
        },
        dealTextP: {
            color: '#666',
            marginTop: '50px',
            marginLeft:'25px',
            lineHeight: '1.6',
            maxWidth: '500px',
            margin: '0 auto',
            textAlign: 'left', // Adjusted to be left-aligned
        },
        dealImage: {
            marginTop: '40px',
            marginLeft: '10px',
        },
        timer: {
            display: 'flex',
            justifyContent: 'center',
            
            marginTop: '40px',
            gap: '20px',
        },
        timerItem: {
            
            border: '4px solid #00C4CC',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            height:'100px',
            padding: '20px',
            textAlign: 'center',
            width: '100px',
        },
        timerItemSpan: {
            display: 'block',
            fontSize: '36px',
            marginTop:'-19px',
            marginLeft:'-7px',
            color: '#4e8734',
            fontWeight: 'bold',
        },
        timerItemText: {
            color: '#555',
            fontSize: '14px',
            marginLeft:'-7px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        separatorLine: {
            width: '700px',
            height: '2px',
            backgroundColor: '#fff',
            position: 'relative',
            margin: '10px 0',
            marginBottom:'20px'
        },
        greenMiddleLine: {
            width: '150px',
            height: '2px',
            backgroundColor: '#4e8734',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '0',
        },
    };

    return (
        <div style={styles.dealContainer}>
            <div style={styles.dealText}>
                <div style={styles.tamatar_ka_left}>
                    <h5 style={styles.dealTextH5}>NATURIX DEAL OF THE DAY</h5>
                    <h1 style={styles.dealTextH1}>
                        organic goods <span style={styles.discount}>50% off</span>
                    </h1>
                </div>

                <div style={styles.dealImage}>
                    <img src="/src/images/deal.png" alt="Organic Tomatoes" style={{ width: '170px' }} />
                </div>
                <p style={styles.dealTextP}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>

            {/* Separator Line */}
            <div style={styles.separatorLine}>
                <div style={styles.greenMiddleLine}></div>
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
