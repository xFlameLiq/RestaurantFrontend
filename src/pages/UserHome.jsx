import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardHome from '../components/cardHome';
import img1 from '../images/ordenar.jpg';
import img2 from '../images/ticket.jpg';
import img3 from '../images/empleado.jpg';
import img4 from '../images/comida.jpg';

const UserHome = () => {

  const userType = false;
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

 return(
  <>
    <h1>¡Bienvenido {tipo}!</h1>
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      {cards.map((card, i) =>{
        return(<CardHome key={i} {...card}></CardHome>);
      })}
    </Stack>
  </>
 );
}

export default UserHome;