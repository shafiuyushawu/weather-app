import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather';
import Navbar from './layouts/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Weather />} />
    </Routes>
  </Router>
);

export default App;
