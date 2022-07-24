import { Alert, Button, Grid, Link, Typography } from "@mui/material";
import { createUserGoogle, useAuth } from "../../../hooks/useAuth";
import { GoogleIcon } from "../../../icons/GoogleIcon";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldBox from "../../../components/FormsUI/TextFieldBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formFieldStyle = {
  padding: 30,
};

const formItemBoxStyle = {
  width: 300,
};

const buttonStyle = {
  width: 285,
  backgroundColor: "#11AC0E",
};

const googleButtonStyle = {
  borderColor: "#11AC0E",
  color: "#11AC0E",
  width: 285,
};

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  const { signInWithGoogle, signin } = useAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLoginError(error) {
    // eslint-disable-next-line default-case
    switch (error.code) {
      case "auth/user-not-found":
        setError("No user found");
        break;
      case "auth/wrong-password":
        setError("Wrong password");
        break;
      case "auth/too-many-requests":
        setError("Too many attempts. Account temporary disabled.");
        break;
      default:
        setError(error.code);
    }
  }

  async function handleSubmit(values) {
    setError("");
    await signin(values.email, values.password)
      .then((res) => navigate("/community"))
      .catch((error) => handleLoginError(error));
  }

  async function googleSignIn() {
    await signInWithGoogle()
      .then((res) => {
        //console.log(res);
        createUserGoogle(res);
        return res;
      })
      .then((res) => navigate("/community"))
      .catch((error) => setError("Google Sign In Failed"));
  }

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
    >
      <Form>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
          style={formFieldStyle}
        >
          <Grid item style={formItemBoxStyle}>
            <TextFieldBox
              name="email"
              label="Email"
              placeholder="Enter e-mail"
              required
            />
          </Grid>
          <Grid item style={formItemBoxStyle}>
            <TextFieldBox
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
              required
            />
          </Grid>
          <Grid item>
            <Button
              onClick={() => console.log("click")}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={buttonStyle}
            >
              Log In
            </Button>
          </Grid>
          <Grid item container>
            <Grid item xs={6}>
              <Typography variant="p">
                <Link href="/reset-password">Forgot password?</Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="p">
                Don't have an account? <Link href="/signup">Sign Up</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="p">or</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={googleSignIn}
              style={googleButtonStyle}
            >
              Sign in with Google
            </Button>
          </Grid>
        </Grid>
        {console.log(error)}
        {error && <Alert severity="error">{error}</Alert>}
      </Form>
    </Formik>
  );
}

export default LoginForm;
