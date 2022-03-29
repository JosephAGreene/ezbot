import React from 'react';

// Import MUI components
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  mainHeading: {
    fontSize: 28,
    color: theme.palette.white.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: "0 25px",
    },
  },
  subHeading: {
    fontSize: 22,
    color: theme.palette.white.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: "0 25px",
    },
  },
  textContent: {
    color: theme.palette.white.dark,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: "0 35px",
    },
  }, 
}));

export function BotPrefix() {
  const classes = styles();

  return (
    <div>
      <div className={classes.mainHeading}>Bot Prefix</div>
      <div className={classes.textContent}>
        The bot prefix is a short 1-4 character identifer that is required in conjuction with any bot command execution. 
        More specifically, your bot uses the prefix to confirm that you are trying to interact with it. 
      </div>
      <div className={classes.subHeading}>
        Prefix rules
      </div>
      <div className={classes.textContent}>
        <ul>
          <li>
            Must be between 1 and 4 characters in length
          </li>
          <li>
            Must start with a special character or symbol <br />
            <b>i.e.</b> (~ ! @ # $ % ^ & * _ - + = : .)
          </li>
          <li>
            Forward slash is a reserved discord character, so it's not allowed here.
          </li>
          <li>
            Must be unique to any other bot prefix in your collection
          </li>
        </ul>
      </div>
    </div>
  );
}

export function BotTokenDoc() {
  const classes = styles();

  return (
    <div>
      <div className={classes.mainHeading}>Getting a token</div>
      <div className={classes.textContent}>
        Bot tokens are obtained by creating an "application" on your discord developer profile.
      </div>
      <div className={classes.subHeading}>Create an Application</div>
      <div className={classes.textContent}>
        Visit https://discordapp.com/developers/applications and create an account if you do not already have one.
        Click the <b>New Application</b> button to create a new application. Give the application any name you want.
      </div>
    </div>
  );
}