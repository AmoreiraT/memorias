import { Box, Button, Typography } from '@mui/material';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import * as React from 'react';
import { useAuth } from '../../../core/services/firebase';

export function InitialPage() {
  // Sign in with google
 const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = "pt-br";

    signInWithRedirect(auth, provider);
  };
  return (
    <Box>
      <Button onClick={handleClick}>Login com Google</Button>
      <Typography>AAA</Typography>
    </Box>
  );
}
