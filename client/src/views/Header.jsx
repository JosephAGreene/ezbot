import React from 'react';
import PropTypes from 'prop-types';

// Import MUI components
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// Import custom components
import Headline from '../components/Headline';

// Import Icons
import { AiOutlineRobot } from 'react-icons/ai';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  bar: {
    backgroundColor: theme.palette.gray.main,
    boxShadow: '0px 1px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 4px 5px 0px rgba(0,0,0,0.12)',
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  spacer: {
    width: "10px",
  },
  psuedoBurger: {
    width: "250px",
  },
});

function Header(props) {
  const { classes, onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar
        component="div"
        className={classes.bar}
        color="primary"
        position="fixed"
        elevation={0}
      >
        <Toolbar>
          <Hidden mdUp>
            <Grid container justifyContent="space-between">
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Headline 
                  iconComponent={AiOutlineRobot}
                  start="ez"
                  end="bot"
                  color="#98c379"
                  title
                />
              </Grid>
              <Grid item >
                <div className={classes.spacer} />
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid container justifyContent="space-between">
              <Grid item >
                <div className={classes.psuedoBurger} />
              </Grid>
              <Grid item>
                <Headline 
                  iconComponent={AiOutlineRobot}
                  start="ez"
                  end="bot"
                  color="#98c379"
                  title
                />
              </Grid>
              <Grid item >
                <div className={classes.spacer} />
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);