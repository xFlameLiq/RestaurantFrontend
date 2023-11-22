import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css';


const Login = () => {

  const navigate = useNavigate();

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [msgValError, setMsgValError] = useState(false);
  const [msgAuthError, setMsgAuthError] = useState(false);
  const [msgAuthSucc, setMsgAuthSucc] = useState(false);

  function onSubmitLogin(evt) {
    evt.preventDefault();
    fetch('https://backend-8ts0.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        username,
        password,
      }),

    }).then(res => res.json())
    .then(data => {
      console.log(data)

      if(data.error === "ERR_VALIDATION") {
        setMsgValError(true);
        setMsgAuthError(false);
        return console.log("DATOS DE VALIDACIÓN ERRONEOS");
      }

      if(data.code === "ERR_AUTH") {
        setMsgAuthError(true);
        setMsgValError(false);
        return console.log("CONTRASEÑA O USUARIO NO ENCONTRADO")
    }

      if(data.code === "SUCCESS_AUTH") {
        setMsgAuthSucc(true);
        navigate("/UserHome");
        return
      }

  })
    .catch((err) => console.log(err))
  }
  

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="container-main">
      <form className="form" id="form" onSubmit={onSubmitLogin}>
        <div className="sesion-img"></div>
        <h1 className="title">Welcome</h1>
        <div className="data">
          <label>Email:</label>
          <input className="input" type="text" name="" id="" value={username} onChange={handleEmail} />
        </div>
        <div className="data">
          <label>Password:</label>
          <input className="input" type="password" name="" id="" value={password} onChange={handlePassword} />
        </div>
        {msgValError ? <p className="error">ES NECESARIO EL CAMPO USUARIO Y/O CONTRASEÑA (SE REQUIERE UNA CONTRASEÑA DE AL MENOS 8 DE LONGITUD)</p> : null}
        {msgAuthError ? <p className="error">ERROR, USUARIO NO ENCONTRADO</p> : null}
        {msgAuthSucc ? <p className="error">USUARIO ENCONTRADO, REDIRIGIENDO...</p> : null}
        <input className="input" type="submit" value="Enter" />
        <Link className="a" to="/Register">
          ¿Don't have an account? Register
        </Link>
 
      </form>
    </div>
  );
}

export default Login;
