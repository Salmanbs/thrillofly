import SourceDestinationDatePage from './components/SourceDestinationDate';
import React from "react";
import FlightsView from "./components/flights/FlightsView";

function App() {


  return (
      <React.Fragment>
        <SourceDestinationDatePage />
        <FlightsView />
      </React.Fragment>
  );
}

export default App;
