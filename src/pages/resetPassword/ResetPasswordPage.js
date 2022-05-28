import { Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'

function ResetPasswordPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h3" margin="1em">Reset Password Page</Typography>
      <Typography variant="h5" marginBottom="2em">Work in Progress...</Typography>
      <Button variant="outlined" onClick={() => navigate("/login")}>Back to login</Button>
    </div>

  )
}

export default ResetPasswordPage