import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { Auth } from 'firebase/auth';

export function InitialPage() {
  // Sign in with google
  let auth =  Auth;
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Box>
      <Button>Login com Google</Button>
      <Typography>AAA</Typography>
    </Box>
  );
}
