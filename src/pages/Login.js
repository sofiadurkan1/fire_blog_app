import React, {useState, useContext} from 'react'
import { AuthContext } from "../contexts/AuthContext";
import {useHistory} from 'react-router-dom';
import {SignIn, SignUpProvider} from '../helpers/firebase';
import { createTheme, TextField, ThemeProvider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




const Login = ({setIsAuth}) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    console.log('email', email)
    const [password, setPassword] = useState("");
    console.log('password', password)
    const { currentUser } = useContext(AuthContext);



    const handleSignIn = (e) => {
        SignIn(email, password)
        e.preventDefault()
        if(currentUser){
        setIsAuth(true)
        history.push('/');
        }
    }
    


   
    const theme = createTheme();


    return (
        <ThemeProvider theme={theme} >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                mx:"auto",
                width: 500,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:"lightblue",
                boxShadow: 3
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                LOGIN
              </Typography>
              <Box component="form" noValidate onSubmit={handleSignIn} sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                  
                  
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={e => setEmail(e.target.value)}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Grid>
                  
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  LOGIN
                </Button>
                <Button
                onClick={() => SignUpProvider()}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                     Continue with Google
                </Button>
                
                
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}

export default Login