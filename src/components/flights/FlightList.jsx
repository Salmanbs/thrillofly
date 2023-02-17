import React from "react";
import FlightListCard from "./FlightListCard";

const FlightList = (props) => {
    const { flights } = props;

    return (
        <div>
            {flights && flights.map((flight) => (
                <FlightListCard flight={flight} />
            ))}
        </div>
    );
};

export default FlightList;
