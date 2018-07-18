import React from 'react';
import {Flex} from 'reflexbox';
import {withStyles} from 'material-ui/styles';
import {cyan} from 'material-ui/colors';
import {compose} from 'recompose';

const styles = theme => ({
  contentCard: {
    background: `linear-gradient(141deg, ${theme.palette.primary[500]} 0%, ${cyan[400]} 51%, ${theme.palette.primary[500]} 100%)`,
    height: '50vh',
    color: 'white'
  }
});

export default compose(
  withStyles(styles)
)(({classes}) => (
  <div>
    <Flex className={classes.contentCard} column>
      hey
    </Flex>
  </div>
));