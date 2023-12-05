// import { useLocation } from 'react-router-dom';
// import { useState } from 'react';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardHome from '../components/CardHome';
import img1 from '../images/ordenar.jpg';
import img2 from '../images/ticket.jpg';
import img3 from '../images/empleado.jpg';
import img4 from '../images/comida.jpg';
import "../styles/UserHome.css";

const UserHome = () => {


  const userType = true;
  // const aux = useLocation();
  // const [jwt, setJwt] = useState(aux.state);
  const cardsEmploye = [
    {
      img: img1,
      title: "Tomar orden",
      desc: `Asegurese de comprender y registrar con precisión los 
      platos, bebidas y cualquier solicitud especial que los 
      clientes deseen durante su experiencia en el restaurante.`
    },
    {
      img: img2,
      title: "Generar Ticket",
      desc: `¡Hora de generar el ticket!, antes de confirmar la orden,
      es fundamental verificar los productos y sus cantidades
      para asegurarse de que coincidan con las solicitudes precisas del cliente.`
    },
  ];
  const cardsAdmin = [
    {
      img: img3,
      title: "Registrar Empleados",
      desc: ``
    },
    {
      img: img4,
      title: "Registrar Comidas",
      desc: ``
    },
  ];
  const cards = userType ? cardsAdmin : cardsEmploye;
  const tipo = userType ? 'Administrador' : 'Empleado';

  const test = (e) =>{
    const jwt = localStorage.getItem('jwt');
    console.log(jwt);
    axios.get("https://backend-8ts0.onrender.com/admins", {
      headers: { Authorization: `Bearer ${jwt}` }
    })
    .then((res) => {
      console.log(res.data);
      return;
    })
    .catch((error) => {
      setMsg(true);
    });
  }

 return(
  <>
    <h1>¡Bienvenido {tipo}!</h1>
    <Stack className="contAct"
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      {cards.map((card, i) =>{
        return(<div onClick={test} key={i}><CardHome {...card}></CardHome></div>);
      })}
    </Stack>
  </>
 );
}

export default UserHome;