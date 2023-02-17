import SourceDestinationDatePage from './components/SourceDestinationDate';
import React from "react";
import FlightsView from "./components/flights/FlightsView";
import TravellerDetailsPage from "./components/TravellerDetailsPage"

function App() {


  return (
      <React.Fragment>
      <TravellerDetailsPage
        adults={3}
        children={3}
        infants={3}
      />
        {/* <SourceDestinationDatePage /> */}
        <FlightsView />
      </React.Fragment>
  );
}

export default App;
