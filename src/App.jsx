

// import OrganicFarmFood from "./pages/OrganicFarmFood";
import HomePage from "./pages/HomePage";
import Navbar from "/src/components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "/src/pages/AboutUs";
import Shop from "./pages/Shop";
function App(){
    return (
        <Router>
        <div className="App">
            <Navbar />
            
            <Routes>
         
          <Route path="/src/pages/HomePage" element={<HomePage />} />
         
          <Route path="/src/pages/AboutUs" element={<AboutUs />} />
          <Route path="/src/pages/Shop" element={<Shop />} />
           </Routes>
        </div>
       </Router>
    );
}
export default App;