// import logo from './logo.svg';
import './App.css';
import SourceDestinationDatePage from './components/SourceDestinationDate';
import TravellerDetailsPage from './components/TravellerDetailsPage';

function App() {


  return (
  // <SourceDestinationDatePage/>
  <TravellerDetailsPage
    adults = {3}
    children = {3}
    infants = {3}
  />
  );
}

export default App;
