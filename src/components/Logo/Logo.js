import React from 'react';

import cprqLogo from '../../assets/images/cprq-logo.png';
import classes from './Logo.scss';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={cprqLogo} alt='Conseil du patrimoine religieux du Québec' />
  </div>
);

export default logo;