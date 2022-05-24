import React from 'react'
import { useAuth } from '../../hooks/useAuth'

function ResetPasswordPage() {
  const { user } = useAuth();

  return (
    <div>{user.email}</div>
  )
}

export default ResetPasswordPage