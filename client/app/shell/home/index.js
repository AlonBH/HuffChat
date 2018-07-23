import React from 'react';
import {Flex} from 'reflexbox';
import {withStyles} from 'material-ui/styles';
import {compose} from 'recompose';

const styles = theme => ({
  contentCard: {
    color: 'white'
  }
});

export default compose(
  withStyles(styles)
)(({classes}) => (
  <div>
    <span>hey</span>
  </div>
));
