import React from "react";

const FlightListCard = (props) => {
    const { flight } = props;

    return (
        <div>
            <div>{flight.source}</div>
            <div>{flight.destination}</div>

        </div>
    );
}

export default FlightListCard;
