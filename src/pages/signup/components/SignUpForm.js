import { Button, FormControl, Grid, TextField, Typography } from '@mui/material'
import { useAuth } from '../../../hooks/useAuth'
import GoogleButton from 'react-google-button'
import { GoogleIcon } from '../../../icons/GoogleIcon'

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

function SignUpForm() {
    const { signInWithGoogle } = useAuth();
    
    return (
        <FormControl>
            <Grid container spacing={2} direction="column" justify="center" alignItems="center" style={formFieldStyle}>
                <Grid item style={formItemBoxStyle}>
                    <TextField 
                    label='Email' 
                    placeholder='Enter e-mail' 
                    fullWidth 
                    required
                    />
                </Grid>
                <Grid item style={formItemBoxStyle}>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                </Grid>
                <Grid item style={formItemBoxStyle}>
                    <TextField label='Password' placeholder='Re-Enter password' type='password' fullWidth required/>
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
        </FormControl>
    )
}

export default SignUpForm;