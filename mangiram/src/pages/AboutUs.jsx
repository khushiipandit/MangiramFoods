import React from 'react';
import NavBar from '/src/components/NavBar';

import Comp1 from '../components/comp1';
import Comp2 from '../components/Comp2';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* NavBar Component */}
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <NavBar />
            </div>
        
            <div style={{ marginTop: '60px', flexGrow: 1, padding: '2px' }}>
                <Comp1 />
            </div>
            <div style={{ marginTop: '5px', flexGrow: 1, padding: '1px' }}>
                <Comp2 />
            </div>
        </div>
    );
};

export default HomePage;
