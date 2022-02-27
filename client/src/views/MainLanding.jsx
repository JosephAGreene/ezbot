import React from 'react';
import PropTypes from 'prop-types';
import API from "../utils/apiURI.js";

// Import MUI components
import { withStyles } from '@material-ui/core/styles';

// Import custom components
import Button from '../components/buttons/Button';
import Typography from '../components/Typography';

// Import layouts
import MainLandingLayout from '../layouts/MainLandingLayout';

const styles = (theme) => ({
  background: {
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function MainLanding(props) {
  const { classes } = props;

  const login = () => window.location.href = `${API}/auth/discord`;

  return (
    <MainLandingLayout backgroundClassName={classes.background}>
      <Button
        color="purple"
        variant="contained"
        size="lg"
        className={classes.button}
        component="a"
        onClick={login}
      >
        Login With Discord
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Build your own bot
      </Typography>
    </MainLandingLayout>
  );
}

MainLanding.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainLanding);