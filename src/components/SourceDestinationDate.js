import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const airports = [
  { code: 'DEL', city: 'Delhi' },
  { code: 'BOM', city: 'Mumbai' },
  { code: 'BLR', city: 'Bangalore' },
  { code: 'HYD', city: 'Hyderabad' },
  { code: 'MAA', city: 'Chennai' },
];

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
  const [source, setSource] = React.useState(null);
  const [destination, setDestination] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
     <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Autocomplete
            id="source"
            options={airports}
            getOptionLabel={(option) => option.city}
            onChange={(event, newValue) => {
              setSource(newValue);
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
            onChange={(event, newValue) => {
              setDestination(newValue);
            }}
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
          {/* <DatePicker value={selectedDate} onChange={handleDateChange} /> */}
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
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
