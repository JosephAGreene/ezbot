import React from 'react';

// Import MUI components
import { makeStyles } from '@material-ui/core/styles';

import documentStyles from '../../jss/documents';

const styles = makeStyles(documentStyles); 

export function BotPrefix() {
  const classes = styles();

  return (
    <div className={classes.wrapper}>
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
            <b>i.e.</b> <span className={classes.greenText}>~ ! @ # $ % ^ & * _ - + = : .</span>
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
    <div className={classes.wrapper}>
      <div className={classes.mainHeading}>Getting a token</div>
      <div className={classes.textContent}>
        Bot tokens are obtained by creating an "application" on your discord developer profile.
      </div>
      <div className={classes.subHeading}>Create an Application</div>
      <div className={classes.textContent}>
        Visit <a target="_blank" href="https://discordapp.com/developers/applications">https://discordapp.com/developers/applications</a> and create an account if you do not already have one.
        Click the <b>New Application</b> button to create a new application. Give the application any name you want.
      </div>
    </div>
  );
}