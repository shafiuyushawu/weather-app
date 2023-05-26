import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ForecastDetails } from '../redux/weather/weatherSlice';

const DailyForecast = ({ fcast }) => {
  const dispatch = useDispatch();

  const handleClick = (date) => {
    dispatch(ForecastDetails(date));
  };

  return (
    <li className="grid-cols-2 border-2 even:bg-[#34495e] border-blue-300 p-2 hover:border-blue-500 hover:shadow-sm hover:shadow-blue-500 shadow-sm shadow-green-200">
      <Link to="/weather-details" onClick={() => handleClick(fcast.date)}>
        <div className="flex justify-between">
          <span>
            Date:
            {fcast.date}
          </span>
          <FaRegArrowAltCircleRight className="text-2xl text-blue-300 hover:text-blue-500" />
        </div>
        <div className="flex justify-center">
          <hr className="my-1 w-12 h-2  items-center" />
        </div>
        <div className="flex justify-between">
          <span className="text-white text-start">{fcast.text}</span>
          <img src={fcast.icon} alt="daily-icon" className="text-2xl" />
        </div>
      </Link>
    </li>
  );
};

DailyForecast.propTypes = {
  fcast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default DailyForecast;
