import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import WeatherDetails from './pages/WeatherDetails';
import Navbar from './layouts/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Weather />} />
      <Route exact path="/weather" element={<WeatherDetails />} />
    </Routes>
  </Router>
);

export default App;
