import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import {locationService} from "../services/location";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(1),
    width: '25ch',
  },
}));

function SourceDestinationDatePage() {
  const classes = useStyles();

  const [flightSearchData, setFlightSearchData] = React.useState({
    source: '',
    destination: '',
    departureDate: new Date(),
    travelClass: ''
  });
  const [airports, setAirports] = React.useState([]);

  useEffect(() => {
    fetchAllLocations();
  }, []);

  const fetchAllLocations = () => {
    locationService.getAllAirports().then((response) => {
      setAirports(response);
    });
  }

  const handleDepartureDateChange = (date) => {
    setFlightSearchData((
        {
            ...flightSearchData,
            departureDate: date
        }
    ));
  };

  const handleSourceChange = (airport) => {
    console.log(airport.code);
    setFlightSearchData((
        {
            ...flightSearchData,
            source: airport.code
        }
    ));
  }

  const handleDestinationChange = (airport) => {
    setFlightSearchData((
        {
            ...flightSearchData,
            destination: airport.code
        }
    ));
  }

  return (
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            id="source"
            options={airports}
            getOptionLabel={(option) => option.city}
            onChange={(event, newValue) => {
              handleSourceChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Source"
                variant="outlined"
                className={classes.textField}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            id="destination"
            options={airports}
            getOptionLabel={(option) => option.city}
            onChange={(event, newValue) => handleDestinationChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Destination"
                variant="outlined"
                className={classes.textField}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={flightSearchData.departureDate}
              onChange={(event, newValue) => handleDepartureDateChange(newValue)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        </Grid>
    </div> 
  );
}

export default SourceDestinationDatePage;
