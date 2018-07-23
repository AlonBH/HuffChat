import React from 'react';
import AppBar from 'material-ui/AppBar';
import {withStyles} from 'material-ui/styles';
import {Flex} from 'reflexbox';
import {compose} from 'recompose';
import Typography from 'material-ui/es/Typography/Typography';

const ToolBarStyle = theme => ({
  toolBar: {
    justifyContent: 'center',
    background: theme.palette.primary,
    height: '55px'
  },
  titleContainer: {
    marginLeft: '3em'
  }
});

export default compose(
  withStyles(ToolBarStyle)
)(({classes}) => (
  <AppBar className={classes.toolBar} position={'static'}>
    <Flex className={classes.titleContainer} align='center'>
      <Typography variant='title' color='inherit' className='title'>
        {'pAtrol'}
      </Typography>
    </Flex>
  </AppBar>
));
