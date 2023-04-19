import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import Navbar from './layouts/Navbar';
import WeatherDetails from './pages/WeatherDetails';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Weather />} />
      <Route exact path="/weather-details" element={<WeatherDetails />} />
    </Routes>
  </Router>
);

export default App;
