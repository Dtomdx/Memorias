import LockPersonIcon from "@mui/icons-material/LockPerson";
import Input from "./Input";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { GoogleLogin } from "@react-oauth/google";
//import Button from "@mui/material/Button";
import { Button, Container, Paper, Typography } from "@mui/material";
/* redux store */
import { useDispatch } from "react-redux";
/* redux actions */
import {signin, signup} from "../../actions/auth";
import { useNavigate } from "react-router-dom";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setSignup] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const history = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup){
      dispatch(signup(formData, history))
    } else{
      dispatch(signin(formData, history))
    }
  };
  const switchMode = () => {
    setSignup((prevIsSignup) => !prevIsSignup);

  }
  const googleSuccess = () => {};

  const googleFailure = () => {};
  //mx-10 h-screen flex justify-center items-center
  return (
    <Container component="main" maxWidth="xs"
      className={` `}
    >
      <Paper className={`flex flex-col items-center mt-20 w-full gap-y-4`}>
        <div className={`mt-4`}>
          <LockPersonIcon />
        </div>
        <Typography>
          {
            isSignup ? "Registrate" : "Inicia Session"
          }
        </Typography>
        <form onSubmit={handleSubmit} className={`space-y-3 flex flex-col w-full`}>
          <Grid className={`space-y-3 mx-4`}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="Nombre"
                  handleChange={handleChange}
                  autoFocus
                  
                />
                <Input
                  name="lastName"
                  label="Apellido"
                  handleChange={handleChange}
                  autoFocus
                />
              </>
            )}
            <Input
              name="email"
              label="Correo electronico"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Contraseña"
              handleChange={handleChange}
              type="password"
            />

            {
                isSignup && <Input
                                name="confirmPassword"
                                label="Confirmar contraseña"
                                handleChange={handleChange}
                                type="password"
                                />
            }
          </Grid>
          <div className={`mx-4 space-y-3`}>
            <GoogleLogin
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                className={``}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Grid className={`flex flex-end`}>
                <Grid>
                  <Button onClick={switchMode}>
                      {isSignup
                      ? "Tienes una cuenta? Inicia Session"
                      : "No tienes una cuenta? Registrate"}
                  </Button>
                </Grid>
            </Grid>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
