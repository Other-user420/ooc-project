import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Save from "../../Save.jsx";
import Top from "../Components/Top.jsx"

const Home = () => {
  return (
    <div>
      
        {/* <Navbar /> */}
        
      <div>
        <Save />
      </div>
      
      <Top/>
      <Footer/>
    </div>
  );
};
export default Home;
