import React from "react";
import FlightListCard from "./FlightListCard";

const FlightList = (props) => {
    const { flights } = props;

    return (
        <React.Fragment>
            {flights && flights.map((flight) => (
                <FlightListCard flight={flight} />
            ))}
        </React.Fragment>
    );
};

export default FlightList;
