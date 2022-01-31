import { ThemeProvider, createTheme, makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import './App.css';

import SecurityIcon from '@material-ui/icons/Security'
import EventNoteIcon from '@material-ui/icons/EventNote'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import ComputerIcon from '@material-ui/icons/Computer'
import HttpIcon from '@material-ui/icons/Http'


const theme = createTheme({
  paletee: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography:{
    fontfamily: [
      'Roboto'
    ],
    h4:{
      fontWeight:600,
      fontsize:28,
      lineHeight: '2rem',
    },
    h5:{
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {

  const classes = styles()
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
          <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
              At Rocket.io we are passionate about software
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>

          <div className={`${classes.grid} ${classes.bigSpace}`}>
           <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}} />} title="Secure" btnTitle="Show me More" />
           <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}} />} title="Reliable" btnTitle="Show me More" />
           <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}} />} title="Performant" btnTitle="Show me More" />
          </div>

          <div className={`${classes.grid} ${classes.littleSpace}`}>
           <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}} />} title="Secure" btnTitle="Show me More" />
           <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}} />} title="Reliable" btnTitle="Show me More" />
           <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}} />} title="Performant" btnTitle="Show me More" />
          </div>

          <div className={classes.bigSpace}>
            <Footer/>
          </div>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
