import React from 'react';
import AppBar from 'material-ui/AppBar';
import {withStyles} from 'material-ui/styles';
import {Flex} from 'reflexbox';
import {compose} from 'recompose';

const ToolBarStyle = theme => ({
  toolBar: {
    position: 'sticky',
    zIndex: 5,
    background: theme.palette.primary[500],
    color: 'rgba(255,255,255,.87)',
    height: '54px',
    borderRadios: '0 !important'
  },
  titleContainer: {
    marginLeft: '5%'
  }
});

export default compose(
  withStyles(ToolBarStyle)
)(({classes}) => (
  <AppBar className={classes.toolBar}>
    <Flex className={classes.titleContainer} align='center'>
    </Flex>
  </AppBar>
));