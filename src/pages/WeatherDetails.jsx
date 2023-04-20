import { useSelector } from 'react-redux';
import { TbTemperatureCelsius, TbCloudSnow } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { BsFillCloudLightningRainFill } from 'react-icons/bs';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const WeatherDetails = () => {
  const {
    icon, text, maxtemp, mintemp, avgtemp, avghumidity, rain, snow,
  } = useSelector((state) => state.weather);

  return (
    <section>
      <div className="px-3 bg-gradient-to-tl from-green-900 to-blue-700 h-52 w-full  relative">
        <img src={icon} alt="icon" className="w-32 " />
        <div className="">
          <h2 className="text-white font-bold text-4xl text-right ">{text}</h2>
        </div>
      </div>
      <ul className="py-3">
        <li className="flex justify-between px-2 items-center border-t-2 text-xl p-1">
          <span>Maximum Temperature:</span>
          <span className="text-white font-bold flex">
            {maxtemp}
            {' '}
            <TbTemperatureCelsius className="text-xl ml-1" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between px-2 items-center bg-[#34495e] border-t-2 text-xl p-1">
          <span>Minumum Temperature:</span>
          <span className="text-white font-bold flex">
            {mintemp}
            {' '}
            <TbTemperatureCelsius className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between px-2 items-center  border-t-2 text-xl p-1">
          <span>Average Temperature:</span>
          <span className="text-white font-bold flex">
            {avgtemp}
            {' '}
            <TbTemperatureCelsius className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between px-2 items-center bg-[#34495e]  border-t-2 text-xl p-1">
          <span>Average Humidity:</span>
          <span className="text-white font-bold flex">
            {avghumidity}
            {' '}
            <WiHumidity className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between px-2 items-center  border-t-2 text-xl p-1">
          <span>Daily Chance of Rain:</span>
          <span className="text-white font-bold flex">
            {rain}
            {' '}
            <BsFillCloudLightningRainFill className="text-xl" />
            {' '}
          </span>
        </li>
        <li className="flex justify-between px-2 items-center bg-[#34495e] border-b-2  border-t-2 text-xl p-1">
          <span>Daily Chance of Snow:</span>
          <span className="text-white font-bold flex">
            {snow}
            {' '}
            <TbCloudSnow className="text-xl" />
            {' '}
          </span>
        </li>
      </ul>

      <Link
        to="/"
        className="btn btn-ghost normal-case flex justify-center text-xl text-xl p-2"
      >
        <FcHome className="inline text-2xl mr-4" />
        Go Home
      </Link>
    </section>
  );
};
export default WeatherDetails;
