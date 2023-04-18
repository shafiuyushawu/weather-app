import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherCondtions } from '../redux/weather/weatherSlice';
import backImg from '../assets/rainbow_5.jpg';

const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherCondtions());
  }, [dispatch]);

  return (
    <div className="h-screen">
      <section>
        <div className="w-full shadow-xl relative ">
          <img src={backImg} alt="back" className="object-cover w-full" />
          <div>
            <h2>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </section>
      <section>
        <ul>
          <li />
        </ul>
      </section>
    </div>
  );
};

export default Weather;
