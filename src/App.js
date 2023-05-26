import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import Navbar from './layouts/Navbar';
import WeatherDetails from './pages/WeatherDetails';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Weather />} />
      <Route exact path="/weather-details" element={<WeatherDetails />} />
      <Route exact path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
