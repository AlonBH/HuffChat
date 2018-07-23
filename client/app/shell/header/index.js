import React from 'react';
import AppBar from 'material-ui/AppBar';
import {withStyles} from 'material-ui/styles';
import {Flex} from 'reflexbox';
import {compose} from 'recompose';
import Typography from 'material-ui/es/Typography/Typography';

import appIcon from '../../../assets/logo.png';

const ToolBarStyle = theme => ({
  toolBar: {
    justifyContent: 'center',
    background: theme.palette.primary,
    height: '60px'
  },
  titleContainer: {
    marginLeft: '1.5em'
  },
  appIcon: {
    height: '55px'
  },
  title: {
    marginLeft: '0.3em'
  }
});

export default compose(
  withStyles(ToolBarStyle)
)(({classes}) => (
  <AppBar className={classes.toolBar} position={'static'}>
    <Flex className={classes.titleContainer} align='center'>
      <img src={appIcon} className={classes.appIcon}/>
      <Typography variant='title' color='inherit' className={classes.title}>
        {'pAtrol'}
      </Typography>
    </Flex>
  </AppBar>
));
