import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import '../styles/Register.css';
import iconRes from '../images/logo_restaurant.jpg';

const Register = () => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msgRegErr, setMsgRegErr] = useState(false);
  const [msgRegSucc, setMsgRegSucc] = useState(false);

  function onSubmitRegister(evt) {
    evt.preventDefault();
    fetch('https://backend-8ts0.onrender.com/admins', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        name,
        lastname,
        address,
        phone,
        username,
        password,
      }),

    }).then(res => res.json())
      .then(data => {
      console.log(data);
      
      if(data.code === "201") {
        setMsgRegSucc(true);
        setMsgRegErr(false);


      }

      if(data.code === "400") {
        setMsgRegErr(true);
        setMsgRegSucc(false);

      }

  })
    .catch((err) => console.log(err))
  }

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLastname(evt) {
    setLastname(evt.target.value);
  }
  
  function handleAddress(evt) {
    setAddress(evt.target.value);
  }

  function handlePhone(evt) {
    setPhone(evt.target.value);
  }

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }
  
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="container">
      <form id="form" onSubmit={onSubmitRegister}>
        <h1 className="titleRegister">Create an account</h1>
        <label>Name:</label>
        <input type="text" required name="" id="" value={name} onChange={handleName} />
        <label>Last name:</label>
        <input type="text" required lastname="" id="" value={lastname} onChange={handleLastname} />
        <label>Address:</label>
        <input type="text" required address="" id="" value={address} onChange={handleAddress}/>
        <label>Phone:</label>
        <input type="text" required phone="" id="" value={phone} onChange={handlePhone}/>
        <label>Email:</label>
        <input type="text" required email="" id="" value={username} onChange={handleUsername}/>
        <label>Password:</label>
        <input type="password" required password="" id="" value={password} onChange={handlePassword}/>
        <input type="submit" value="Register"  />
        {msgRegErr ? <p className="error">NO ES POSIBLE REGISTRAR AL USUARIO, COMPRUEBE LOS DATOS</p> : null}
        {msgRegSucc ? <p className="succ">USUARIO REGISTRADO CORRECTAMENTE</p> : null}
        <div>
          <Link className="a" to='/Login'>¿Do you already have an account? Login</Link>
        </div>
      </form>
      <img className='img' src={iconRes}/>
    </div>
  );
}

export default Register;