import NavBar from '/src/components/NavBar';
import OrganicFarmFood from '/src/pages/OrganicFarmFood';
import Comp1 from '../components/Comp1';
import Comp2 from '../components/Comp2';
import Comp3 from '../components/Comp3';
import Comp4 from '../components/Comp4';
import Hero from "../components/Hero";

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* NavBar Component */}
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <NavBar />
            </div>
            <Hero />
            {/* Content Section */}
            <div style={{ marginTop: '0px', flexGrow: 1, paddingTop:'0px' }}>
                <OrganicFarmFood />
            </div>

            <div style={{ marginTop: '140px', flexGrow: 1, padding: '2px',marginLeft:'100px' }}>
                <Comp1 />
            </div>
            <div style={{ marginTop: '5px', flexGrow: 1, padding: '3px',marginLeft:'3px',marginRight:'5px' }}>
                <Comp2 />
            </div>   

             <div style={{ marginTop: '5px', flexGrow: 1, padding: '3px',marginLeft:'0px',marginRight:'0px' }}>
                <Comp3 />
            </div>   
            <div style={{ marginTop: '5px', flexGrow: 1, padding: '3px',marginLeft:'63px',marginRight:'px' }}>
                <Comp4 />
            </div>         
        </div>
    );
};

export default HomePage;
