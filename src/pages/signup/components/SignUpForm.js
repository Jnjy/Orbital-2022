import { Alert, Button, Grid, Typography, Link } from "@mui/material";
import { useAuth, createUserGoogle } from "../../../hooks/useAuth";
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
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

function SignUpForm() {
  const { signInWithGoogle, signup } = useAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSignupError(error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        setError("Email exists. Please login instead.");
        break;
      default:
        setError(error.code);
    }
  }

  async function handleSubmit(values) {
    setError("");
    await signup(values.email, values.password)
      //.then(console.log("Signed up w email!"))
      .then((res) => navigate("/community"))
      .catch((error) => handleSignupError(error));
  }

  async function googleSignIn() {
    await signInWithGoogle()
      .then((res) => {
        //console.log(res);
        createUserGoogle(res);
        return res;
      })
      //.then(console.log("Signedup!"))
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
              fullWidth
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
          <Grid item style={formItemBoxStyle}>
            <TextFieldBox
              name="passwordConfirm"
              label="Password"
              placeholder="Re-Enter password"
              type="password"
              required
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={buttonStyle}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p">
              <Link href="/login">Login instead?</Link>
            </Typography>
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
        {error && <Alert severity="error">{error}</Alert>}
      </Form>
    </Formik>
  );
}

export default SignUpForm;
