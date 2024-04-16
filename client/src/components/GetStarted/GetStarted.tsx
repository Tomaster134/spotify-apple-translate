import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';
import { Button } from '@mui/material';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function GetStarted() {
  return (
    <React.Fragment>
      <Title>Let's Convert Something</Title>
      <Typography component="p">
        Pick a platform
      </Typography>
      <div>
        <Button >Spotify</Button>
      </div>
    </React.Fragment>
  );
}