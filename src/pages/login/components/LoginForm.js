import { Button, FormControl, Grid, Link, TextField, Typography } from '@mui/material'
import GoogleButton from 'react-google-button'

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

function LoginForm() {
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
                <Grid item>
                    <Button onClick={() => console.log("click")} type='submit' color='primary' variant="contained" fullWidth style={buttonStyle}>Log In</Button>
                </Grid>
                <Grid item>
                    <Typography >
                        <Link href="/reset-password" >
                            Forgot password?
                        </Link>
                    </Typography>
                    <Typography > Don't have an account? {' '}
                        <Link href="/SignUp" >
                            Sign Up 
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='p'>or</Typography>
                </Grid>
                <Grid item>
                    <GoogleButton
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </Grid>
            </Grid>
        </FormControl>
    )
}

export default LoginForm;