
import '../styles/App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import UserHome from './UserHome';
import NotFound from './NotFound';
import AlimentForm from './AlimentForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/UserHome' element={<UserHome/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='/aliment' element={<AlimentForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
