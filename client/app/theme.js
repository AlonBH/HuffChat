import {createMuiTheme} from 'material-ui/styles';
import {lightBlue, amber, red} from 'material-ui/colors';

export default createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: amber,
    error: red
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});
