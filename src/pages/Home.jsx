import { Link } from "react-router-dom";
import '../styles/Home.css';
import Footer from '../components/Footer';
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <h1>BORCELLE</h1>
      <h2>Italian restaurant</h2>
      <Link to='/Register' className='register-btn'>Register</Link>
      <br />
      <Link to='/Login' className='login-btn'>Login</Link>
    <Footer />
    
    </div>

  );
}

export default Home;