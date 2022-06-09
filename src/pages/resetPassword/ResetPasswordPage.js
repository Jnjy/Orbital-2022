import { Grid, Paper, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextFieldBox from "../../components/FormsUI/TextFieldBox";
import styles from "./ResetPasswordPage.module.css"

const INITIAL_FORM_STATE = {
  email: "",
}
const FORM_VALIDATION = Yup.object().shape(
  {email: Yup.string().email("Invalid email.").required("Required"),}
)

function ResetPasswordPage() {
  const { sendResetEmail } = useAuth();

  async function handlePasswordResetEmail(values) {
    await sendResetEmail("jefferyng2000@gmail.com")
    .then((res) => console.log(values.email))
    .catch((err) => console.log(err.code));
  }

  return (
    <Grid 
    container
      style={{
        height: '100vh'
      }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h5">Reset Password Page</Typography>
        <Typography variant="caption">Enter your email to reset your password.</Typography>
      </Grid>
      <Grid item>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={handlePasswordResetEmail}>
          <Form>
            <Grid container item direction="column" spacing={2} className={styles.formBox}>  
              <Grid item>
                <TextFieldBox
                name="email"
                label="Email"
                placeholder="Enter e-mail"
                required/>
              </Grid>
              <Grid item>
                <Button 
                color="error"
                onClick={() => console.log("Prompt send password reset email")}
                type="submit"
                variant="contained"
                className={styles.resetButton}
                >
                Reset Password
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
      <Grid item>
        <Button>Back to Login</Button>
      </Grid>
    </Grid>
  )
}

export default ResetPasswordPage