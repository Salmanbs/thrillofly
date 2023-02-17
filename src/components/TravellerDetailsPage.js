import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  radioGroup: {
    flexDirection: "row",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const TravellerDetailsPage = ({adults,children,infants}) => {
  const classes = useStyles();
  const [adultDetails, setAdultDetails] = useState(Array.from({length: adults},() => {
    return { firstName: '', lastName: '', age: '', gender: '' };
  }));
  const [childrenDetails, setChildrenDetails] = useState(Array.from({length: children},() => {
    return { firstName: '', lastName: '', age: '', gender: '' };
  }));

  const [infantDetails, setInfantDetails] = useState(Array.from({length: infants},() => {
    return { firstName: '', lastName: '', age: '', gender: '' };
  }));

  // console.log(adultDetails[0].firstName,"addd")
  const handleAdultFirstNameChange = (event, index) => {    
    const newDetails = [...adultDetails];
    newDetails[index].firstName = event.target.value;
    console.log(adultDetails,"adultedetails")
    setAdultDetails(newDetails);
  };

  const handleAdultLastNameChange = (event, index) => {
    const newDetails = [...adultDetails];
    newDetails[index].lastName = event.target.value;
    setAdultDetails(newDetails);
  };

  const handleAdultAgeChange = (event, index) => {
    const newDetails = [...adultDetails];
    newDetails[index].age = event.target.value;
    setAdultDetails(newDetails);
  };

  const handleAdultGenderChange = (event, index) => {
    const newDetails = [...adultDetails];
    newDetails[index].gender = event.target.value;
    setAdultDetails(newDetails);
  };

  const handleChildrenFirstNameChange = (event, index) => {    
    const newDetails = [...childrenDetails];
    newDetails[index].firstName = event.target.value;
    console.log(childrenDetails,"adultedetails")
    setChildrenDetails(newDetails);
  };

  const handleChildrenLastNameChange = (event, index) => {
    const newDetails = [...childrenDetails];
    newDetails[index].lastName = event.target.value;
    setChildrenDetails(newDetails);
  };

  const handleChildrenAgeChange = (event, index) => {
    const newDetails = [...childrenDetails];
    newDetails[index].age = event.target.value;
    setChildrenDetails(newDetails);
  };

  const handleChildrenGenderChange = (event, index) => {
    const newDetails = [...childrenDetails];
    newDetails[index].gender = event.target.value;
    setChildrenDetails(newDetails);
  };

  const handleInfantFirstNameChange = (event, index) => {    
    const newDetails = [...infantDetails];
    newDetails[index].firstName = event.target.value;
    console.log(infantDetails,"adultedetails")
    setInfantDetails(newDetails);
  };

  const handleInfantLastNameChange = (event, index) => {
    const newDetails = [...infantDetails];
    newDetails[index].lastName = event.target.value;
    setInfantDetails(newDetails);
  };

  const handleInfantAgeChange = (event, index) => {
    const newDetails = [...infantDetails];
    newDetails[index].age = event.target.value;
    setInfantDetails(newDetails);
  };

  const handleInfantGenderChange = (event, index) => {
    const newDetails = [...infantDetails];
    newDetails[index].gender = event.target.value;
    setInfantDetails(newDetails);
  };


 




  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Submitted:", adultDetails);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Traveller Details
      </Typography>
      <form onSubmit={handleSubmit}>
      {adults > 0 && (
  <div>
  <Typography variant="h6">Adults</Typography>
      {adultDetails.map((details, index) => (
        <div key={index}>
          <TextField label={`Adult ${index + 1} First Name`} value={details.firstName} onChange={(event) => handleAdultFirstNameChange(event, index)} />
          <TextField label={`Adult ${index + 1} Last Name`} value={details.lastName} onChange={(event) => handleAdultLastNameChange(event, index)} />
          <TextField label={`Adult ${index + 1} Age`} type="number" value={details.age} onChange={(event) => handleAdultAgeChange(event, index)} />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label={`Adult ${index + 1} Gender`} name={`adult${index + 1}Gender`} value={details.gender} onChange={(event) => handleAdultGenderChange(event, index)}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
      ))}
  </div>
)}

{children > 0 && (
  <div>
    <Typography variant="h6">Children</Typography>
    {childrenDetails.map((details, index) => (
        <div key={index}>
          <TextField label={`Children ${index + 1} First Name`} value={details.firstName} onChange={(event) => handleChildrenFirstNameChange(event, index)} />
          <TextField label={`Children ${index + 1} Last Name`} value={details.lastName} onChange={(event) => handleChildrenLastNameChange(event, index)} />
          <TextField label={`Children ${index + 1} Age`} type="number" value={details.age} onChange={(event) => handleChildrenAgeChange(event, index)} />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label={`Children ${index + 1} Gender`} name={`Children${index + 1}Gender`} value={details.gender} onChange={(event) => handleChildrenGenderChange(event, index)}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
      ))}
  </div>
)}

{infants > 0 && (
  <div>
    <Typography variant="h6">Infants</Typography>
    {infantDetails.map((details, index) => (
        <div key={index}>
          <TextField label={`Infant ${index + 1} First Name`} value={details.firstName} onChange={(event) => handleInfantFirstNameChange(event, index)} />
          <TextField label={`Infant ${index + 1} Last Name`} value={details.lastName} onChange={(event) => handleInfantLastNameChange(event, index)} />
          <TextField label={`Infant ${index + 1} Age`} type="number" value={details.age} onChange={(event) => handleInfantAgeChange(event, index)} />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label={`Infant ${index + 1} Gender`} name={`Infant${index + 1}Gender`} value={details.gender} onChange={(event) => handleInfantGenderChange(event, index)}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>
      ))}
  </div>
)}

      </form>
    </div>
  );
};

export default TravellerDetailsPage;
