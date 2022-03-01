import React from 'react';

// Import MUI components
import Grid from '@material-ui/core/Grid';

// Import custom components
import AppBar from '../../components/appbar/AppBar';
import Title from '../../components/appbar/Title';

// Import Icons
import { AiOutlineRobot } from 'react-icons/ai';

export default function Header() {
  return (
    <AppBar color="grayDark">
        <Grid container justifyContent="space-around" alignItems='center'>
          <Grid item>
          <Title
            iconComponent={AiOutlineRobot}
            start="ez"
            end="bot"
            color="#98c379"
            title
          />
        </Grid>
      </Grid>
    </AppBar>
  );
}