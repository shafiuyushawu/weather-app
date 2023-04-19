import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import CurrentCondtion from '../components/CurrentCondtion';
import { fetchWeatherCondtions } from '../redux/weather/weatherSlice';
import backImg from '../assets/AverageTmpMapRussiaDec.png';

const Weather = () => {
  const dispatch = useDispatch();

  const { location, isLoading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (location.length === 0) dispatch(fetchWeatherCondtions());
  }, [dispatch, location.length]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="h-screen">
      <section>
        <div className="bg-gradient-to-tl from-green-900 to-blue-700 h-52 w-full  relative">
          <img
            src={backImg}
            alt="back"
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />
          <div className="">
            <h2 className="text-white font-bold text-4xl text-right ">
              Current Updates
            </h2>
          </div>
        </div>
      </section>
      <section className="mt-2 p-3">
        <CurrentCondtion />
      </section>
      <section className="mt-5">
        <h1 className="text-xl bg-gradient-to-tr from-blue-800 to-green-600 text-white flex justify-center items-center mb-5">
          Hourly Condition
          <HiOutlineLocationMarker className="inline text-white font-bold ml-2" />
        </h1>
        <ul>
          <li className="grid-cols-2 border-2 hover:border-blue-500 w-[50%">
            <Link to="/weather-details">
              <FaRegArrowAltCircleRight className="text-2xl text-white" />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Weather;
