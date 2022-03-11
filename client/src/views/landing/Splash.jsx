import React from 'react';
import PropTypes from 'prop-types';
import API from "../../utils/apiURI.js";

// Import MUI components
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Import custom components
import Button from '../../components/buttons/Button';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'end',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: 'auto',
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
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
});

function Splash(props) {
  const { classes } = props;

  const login = () => window.location.href = `${API}/auth/discord`;

  return (
    <>
    <section className={classes.root}>
      <Container className={classes.container}>
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
          Build your own bot
        <div className={classes.backdrop} />
        <div className={classes.background} />
      </Container>
    </section>
    </>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);