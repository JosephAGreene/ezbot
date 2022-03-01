import React from 'react';
import PropTypes from 'prop-types';

// Import MUI components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

// Import custom components
import AppBar from '../../components/appbar/AppBar';
import Title from '../../components/appbar/Title';

// Import Icons
import { AiOutlineRobot } from 'react-icons/ai';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  menuButton: {
    marginLeft: theme.spacing(1),
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
    <AppBar
      fixed
      color="grayMain"
      shadow
    >
      <Hidden mdUp>
        <Grid container justifyContent="space-between" alignItems='center'>
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
            <Title
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
            <Title
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
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);