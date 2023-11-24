import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import '../styles/Login.css';

const LoginMUI = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [msgAuth, setMsg] = useState(false);

  const handleUsername = (e) => {
    const userLogin = {...user};
    userLogin.username = e.target.value;
    setUser(userLogin);
  }

  const handlePassword = (e) => {
    const userLogin = {...user};
    userLogin.password = e.target.value;
    setUser(userLogin);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://backend-8ts0.onrender.com/login", user)
    .then((res) => {
      navigate('/UserHome');
      return;
    })
    .catch((error) => {
      setMsg(true);
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box className="contLog"
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="sesion-img"></div>
        <Typography component="h1" variant="h5">
          Welcome
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={user.username}
            onChange={handleUsername}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={user.password}
            onChange={handlePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        {msgAuth ? <Typography color="#6e0909" variant="caption">wrong username or password</Typography> : null}
      </Box>
    </Container>
  );
};

export default LoginMUI;
