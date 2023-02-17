import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import FlightList from "./FlightList";
import {flightService} from "../../services/flight";
import FlightFilter from "./FlightFilter";

const FlightsView = (props) => {
    const { source, destination, departureDate, travelClass, inventory } = props;

    const [availableFlights, setAvailableFlights] = React.useState([]);

    useEffect(() => {
        fetchAllFlights();
    }, []);

    const fetchAllFlights = () => {
        flightService.search({
            source,
            destination,
            departureDate,
            travelClass,
            inventory
        }).then((response) => {
            setAvailableFlights(response);
        });
    }

    return (
        <Grid container spacing={2}>
            <Grid xs={4}>
                <FlightFilter />
            </Grid>
            <Grid xd={8}>
                <FlightList flights={availableFlights}/>
            </Grid>
        </Grid>
    );
};

export default FlightsView;
