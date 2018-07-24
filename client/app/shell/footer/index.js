import React from 'react';
import {withStyles} from '@material-ui/core';
import {compose} from 'recompose';

const styles = theme => ({
  footer: {
    background: theme.palette.grey[800],
    color: 'white',
    height: '100px'
  }
});

export default compose(
  withStyles(styles)
)(({classes: {footer}}) => (
  <footer className={footer}>
    <span>footer</span>
  </footer>
));