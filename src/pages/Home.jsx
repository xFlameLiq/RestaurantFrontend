import { Link } from "react-router-dom";
import Header from "../components/Home/Header";
import CarruselComidaMexicana from "../components/Home/Slider";
import '../styles/Home.css';
import Footer from '../components/Footer';
import '../styles/Home.css'

const Home = () => {
  return (
    
    <div className="home-container">
    <Header></Header>
    <div className="margin"></div>
    <CarruselComidaMexicana></CarruselComidaMexicana>
    </div>
  );
}

export default Home;