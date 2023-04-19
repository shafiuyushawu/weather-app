import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoSearch } from 'react-icons/go';
import CurrentCondtion from '../components/CurrentCondtion';
import { fetchWeatherCondtions } from '../redux/weather/weatherSlice';
import backImg from '../assets/AverageTmpMapRussiaDec.png';
import DailyForecast from '../components/DailyForecast';

const Weather = () => {
  const [submit, setSubmit] = useState('');

  const dispatch = useDispatch();

  const {
    location, forecast, isLoading, error,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeatherCondtions('nairobi'));
  }, [dispatch]);

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
        </div>
        <div className=" justify-between px-3 items-center">
          <form className="flex pt-2 flex-row">
            <input type="text" placeholder="Type here" value={submit} onChange={(e) => setSubmit(e.target.value)} className="input bg-white  input-sm w-full max-w-xs rounded-r-none" />
            <button type="submit" id="submit" className="btn  rounded-l-none btn-sm bg-gradient-to-tr from-blue-800 to-green-600">
              <GoSearch className="text-white font-extrabold text-2xl " />
              .
            </button>
          </form>
          <ul className="px-2 align-bottom flex gap-4 justify-center">

            <li className="text-white font-bold text-xl text-right ">
              {location.region}
            </li>
            |
            <li className="text-white font-bold text-xl text-right ">
              {location.country}
            </li>
            |
            <li className="text-white align-bottom font-bold text-xl text-right ">
              {location.continent}
            </li>
          </ul>
        </div>

      </section>
      <section className=" p-3">
        <CurrentCondtion />
      </section>
      <section>
        <h1 className="text-xl bg-gradient-to-tr from-blue-800 to-green-600 text-white flex justify-center items-center mb-5">
          Daily Forecasts
          <HiOutlineLocationMarker className="inline text-white font-bold ml-2" />
        </h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 p-2">
          {forecast && forecast.map((fcast) => (
            <DailyForecast key={fcast.id} fcast={fcast} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Weather;
