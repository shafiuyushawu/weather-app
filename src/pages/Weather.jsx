import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCloud } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import Loading from '../components/Loading';
import CurrentCondtion from '../components/CurrentCondtion';
import { fetchWeatherCondtions } from '../redux/weather/weatherSlice';
import backImg from '../assets/AverageTmpMapRussiaDec.png';
import DailyForecast from '../components/DailyForecast';

const Weather = () => {
  const [submit, setSubmit] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const {
    location, forecast, isLoading, error,
  } = useSelector(
    (state) => state.weather,
  );
  useEffect(() => {
    if (search) {
      dispatch(fetchWeatherCondtions(search));
    } else {
      dispatch(fetchWeatherCondtions('Accra'));
    }
  }, [dispatch, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submit !== 0) {
      setSearch(submit);
      setSubmit('');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
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
        <div className=" flex flex-col justify-between px-3 items-center md:flex-row">
          <ul className="px-2 align-bottom flex gap-4 justify-center text-[18px]">
            <li className="text-white font-bold text-right md:text-2xl">
              {location && location.region && <p>{location.region}</p>}
            </li>
            |
            <li className="text-white font-bold  text-right text-[18px] md:text-2xl">
              {location && location.country && <p>{location.country}</p>}
            </li>
            |
            <li className="text-white align-bottom font-bold  text-[18px] md:text-2xl">
              {location && location.continent && <p>{location.continent}</p>}
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="flex pt-2 flex-row">
            <input
              type="text"
              placeholder="Search by coutry | city"
              value={submit}
              onChange={(e) => setSubmit(e.target.value)}
              className="input bg-white  input-sm md:input-xl w-full text-[15px] text-black rounded-r-none placeholder:text-[15px] placeholder:text-black"
            />
            <button
              type="submit"
              id="submit"
              className="btn  rounded-l-none btn-sm bg-gradient-to-tr from-blue-800 to-green-600"
            >
              <GoSearch className="text-white font-extrabold text-2xl " />
              .
            </button>
          </form>
        </div>
      </section>
      <section className=" p-3">
        <CurrentCondtion />
      </section>
      <section>
        <h1 className="text-xl bg-gradient-to-tr from-blue-800 to-green-600 text-white flex justify-center items-center mb-5">
          Daily Forecasts
          <AiFillCloud className="inline text-white font-bold ml-2" />
        </h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 p-2">
          {forecast
            && forecast.map((fcast) => (
              <DailyForecast key={fcast.id} fcast={fcast} />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Weather;
