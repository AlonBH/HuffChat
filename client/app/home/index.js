import React from 'react';
import {withStyles} from 'material-ui/styles';
import {compose} from 'recompose';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import myEventsList from './events';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const styles = {
  calenderContainer: {
    flex: 1,
    paddingTop: '1em'
  }
};

export default compose(
  withStyles(styles)
)(({classes}) => (
  <BigCalendar
    className={classes.calenderContainer}
    events={myEventsList}
    startAccessor='start'
    endAccessor='end'
  />
));
