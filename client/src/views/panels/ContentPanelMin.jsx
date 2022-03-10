import React from 'react';
import PropTypes from "prop-types";

// Import Mui components
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  header: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(0),
    color: theme.palette.white.dark,
    fontSize: 24,
  },
  new: {
    display: "inline",
    color: theme.palette.green.main,
  },
  edit: {
    display: "inline",
    color: theme.palette.purple.main,
  },
});

// headerPhase = New or Edit
// header = the heading of the categorey

function ContentPanelMin(props) {
  const { classes, headerPhase, header, children } = props;

  return (
    <div>
      {header &&
        <div className={classes.header}>
          {headerPhase === 'New'
            ? <div className={classes.new}>New </div>
            : headerPhase === 'Edit'
              ? <div className={classes.edit}>Edit </div>
              : null
          }
          {header}
        </div>
      }
      <div>
        {children}
      </div>
    </div>
  );
}

ContentPanelMin.propTypes = {
  classes: PropTypes.object.isRequired,
  headerPhase: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(styles)(ContentPanelMin);