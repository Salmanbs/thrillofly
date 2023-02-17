import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const airports = [
  { code: "DEL", city: "Delhi" },
  { code: "BOM", city: "Mumbai" },
  { code: "BLR", city: "Bangalore" },
  { code: "HYD", city: "Hyderabad" },
  { code: "MAA", city: "Chennai" },
];

const travellers = [
  { id: 1, name: "1 Adult" },
  { id: 2, name: "2 Adults" },
  { id: 3, name: "3 Adults" },
  { id: 4, name: "4 Adults" },
];

const classes = [
  { id: 1, name: "Economy" },
  { id: 2, name: "Business" },
  { id: 3, name: "First Class" },
];
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
    width: "25ch",
  },
  formControl: {
    minWidth: "100%",
  },
  dialogContent: {
    paddingBottom: theme.spacing(2),
  },
  summary: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  selection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  count: {
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    padding: theme.spacing(1),
  },
}));

function SourceDestinationDatePage() {
  const classes = useStyles();
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [classType, setClassType] = useState("Economy");

  const [open, setOpen] = useState(false);

  console.log("hi");
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdultsIncrement = () => {
    setAdults((prev) => prev + 1);
  };

  const handleAdultsDecrement = () => {
    setAdults((prev) => Math.max(prev - 1, 1));
  };

  const handleChildrenIncrement = () => {
    setChildren((prev) => prev + 1);
  };

  const handleChildrenDecrement = () => {
    setChildren((prev) => Math.max(prev - 1, 0));
  };

  const handleInfantsIncrement = () => {
    setInfants((prev) => prev + 1);
  };

  const handleInfantsDecrement = () => {
    setInfants((prev) => Math.max(prev - 1, 0));
  };
  const handleClassTypeChange = (event) => {
    setClassType(event.target.value);
  };

  const getPassengerLabel = (passengerType) => {
    switch (passengerType) {
      case "adults":
        return "Adults";
      case "children":
        return "Children";
      case "infants":
        return "Infants";
      default:
        return "";
    }
  };

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
        <Grid item xs={12} sm={3}>
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
        <Grid item xs={12} sm={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* <DatePicker value={selectedDate} onChange={handleDateChange} /> */}
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
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Button style= {{marginLeft:"-40px"}} variant="contained" color="primary" onClick={handleOpen}>
                Select travellers
              </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Select Travellers</DialogTitle>
              <DialogContent className={classes.dialogContent}>
                <Typography variant="h6" className={classes.summary}>
                  {`${adults} Adults, ${children} Children, ${infants} Infants, ${classType}`}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3} md={4}>
                    <div className={classes.selection}>
                      <Typography variant="subtitle1">Adults</Typography>
                      <div className={classes.count}>
                        <IconButton
                          className={classes.iconButton}
                          onClick={handleAdultsDecrement}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{adults}</Typography>
                        <IconButton
                          className={classes.iconButton}
                          onClick={handleAdultsIncrement}
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                      <Typography variant="subtitle1">Children</Typography>
                      <div className={classes.count}>
                        <IconButton
                          className={classes.iconButton}
                          onClick={handleChildrenDecrement}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{children}</Typography>
                        <IconButton
                          className={classes.iconButton}
                          onClick={handleChildrenIncrement}
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                      <Typography variant="subtitle1">Infants</Typography>
                      <div className={classes.count}>
                        <IconButton
                          className={classes.iconButton}
                          onClick={handleInfantsDecrement}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{infants}</Typography>
                        <IconButton
                          className={classes.iconButton}
                          onClick={handleInfantsIncrement}
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl className={classes.formControl}>
                <InputLabel id="class-type-label">Class Type</InputLabel>
                <Select
                  labelId="class-type-label"
                  id="class-type"
                  value={classType}
                  onChange={handleClassTypeChange}
                >
                  <MenuItem value="Economy">Economy</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="First Class">First Class</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="adults-label">Adults</InputLabel>
            <Select
              labelId="adults-label"
              id="adults"
              value={adults}
              onChange={handleAdultsChange}
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="children-label">Children</InputLabel>
            <Select
              labelId="children-label"
              id="children"
              value={children}
              onChange={handleChildrenChange}
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="infants-label">Infants</InputLabel>
            <Select
              labelId="infants-label"
              id="infants"
              value={infants}
              onChange={handleInfantsChange}
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="class-type-label">Class Type</InputLabel>
            <Select
              labelId="class-type-label"
              id="class-type"
              value={classType}
              onChange={handleClassTypeChange}
            >
              <MenuItem value="Economy">Economy</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="First Class">First Class</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default SourceDestinationDatePage;
