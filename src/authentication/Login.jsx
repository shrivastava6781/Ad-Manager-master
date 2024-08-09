import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import   {jwtDecode} from 'jwt-decode';
import './login.css'; // Import your external CSS file

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const googleAuth = () => {
    window.open('https://ad-manager.onrender.com/api/auth/google/callback', "_self");
        // window.open('http://localhost:4000/api/auth/google/callback', "_self");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('http://localhost:4000/api/auth/signin', {
        const response = await axios.post('https://ad-manager.onrender.com/api/auth/signin', {
      email,
        password,
      });
      const token = response.data.token;
   
      console.log('Received Token:', token);

      const decodedToken = jwtDecode(token);
      console.log('Decoded Token:', decodedToken);

      if (decodedToken.role === 'user') {
        console.log('User role detected. Redirecting to /userdashboard');
        navigate('/userdashboard'); 
      } else if (decodedToken.role === 'admin') {
        console.log('Admin role detected. Redirecting to /admindashboard');
        navigate('/admindashboard'); 
      } else {
        console.log('Unknown role:', decodedToken.role);
      }
    }
       catch (error) {
      console.error('Error during login:', error);
      // Handle login error
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <Paper className="login-paper" elevation={3}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
          >
            Sign In
          </Button>
          <div className="separator">
            <span className="separator-text">OR</span>
          </div>
          <button className="google_btn" onClick={googleAuth}>
            {/* <i className="fab fa-google" style={{color:"blue"}}></i> */}
       <img src="data:image/png;base64,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" alt='icon not found'/>
            <span>Signin with Google</span>
          </button>
          <Typography variant="body2" className='text-center'>
            Don't have an account?{' '}
            <Link onClick={handleSignupClick} className="signup-link">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
