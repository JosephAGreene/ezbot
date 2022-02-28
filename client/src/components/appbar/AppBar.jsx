import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Import MUI components
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = (theme) => ({
  root: {
    padding: 0,
  },
  toolbar: {
    height: 54,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
  },
  shadow: {
    boxShadow: '0px 1px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 4px 5px 0px rgba(0,0,0,0.12)',
  },
  grayMain: {
    backgroundColor: theme.palette.gray.main,
  },
  grayDark: {
    backgroundColor: theme.palette.gray.dark,
  }
});

function AppBar(props) {
  const { classes, fixed, color, shadow, children, ...other } = props;

  const appBarClasses = clsx({
    [classes[color]]: color,
    [classes.shadow]: shadow,
  });

  const toolBarClasses = clsx({
    [classes.root]: true,
    [classes.toolbar]: !fixed,
  })

  return (
    <div>
      <MuiAppBar 
        className={appBarClasses} 
        position={fixed ? "fixed" : "absolute"}
        elevation={0} 
        {...other}
      >
        <Toolbar className={toolBarClasses}>
          {children}
        </Toolbar>
      </MuiAppBar>
      {!fixed && <div className={toolBarClasses} />}
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  fixed: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(styles)(AppBar);