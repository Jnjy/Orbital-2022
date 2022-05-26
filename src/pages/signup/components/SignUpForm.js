import { Button, Grid, Typography } from '@mui/material'
import { useAuth } from '../../../hooks/useAuth'
import { GoogleIcon } from '../../../icons/GoogleIcon'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextFieldBox from '../../../components/FormsUI/TextFieldBox'

const formFieldStyle = {
    padding:30
  }
  
const formItemBoxStyle = {
    width:300
}
  
const buttonStyle = {
    width:285,
    backgroundColor:'#11AC0E'
}

const googleButtonStyle = {
    borderColor: '#11AC0E',
    color: '#11AC0E',
    width: 285
}

const INITIAL_FORM_STATE = {
    email: '',
    password: '',
    passwordConfirm: '',
}

const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
    password: Yup.string()
    .required('Required'), 
    passwordConfirm: Yup.string() 
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
})
function SignUpForm() {
    const { signInWithGoogle } = useAuth();

    return (
        <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {console.log(values)}}
        >
            <Form>
                <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={formFieldStyle}>
                    <Grid item style={formItemBoxStyle}>
                        <TextFieldBox 
                        name='email'
                        label='Email' 
                        placeholder='Enter e-mail' 
                        fullWidth 
                        required
                        />
                    </Grid>
                    <Grid item style={formItemBoxStyle}>
                        <TextFieldBox 
                        name='password'
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' 
                        required/>
                    </Grid>
                    <Grid item style={formItemBoxStyle}>
                        <TextFieldBox
                        name='passwordConfirm' 
                        label='Password' 
                        placeholder='Re-Enter password' 
                        type='password' 
                        required/>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => console.log("click")} type='submit' color='primary' variant="contained" fullWidth style={buttonStyle}>Sign Up</Button>
                    </Grid>
                    <Grid item>
                        <Typography variant='p'>or</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" startIcon={<GoogleIcon />} onClick={signInWithGoogle} style={googleButtonStyle}>
                            Sign in with Google 
                        </Button>
                    </Grid>
                </Grid>
            </Form>
            
        </Formik>
    )
}

export default SignUpForm;