import { useSelector } from 'react-redux';
import { WiDegrees, WiHumidity } from 'react-icons/wi';
import { GiWindTurbine } from 'react-icons/gi';
import { AiFillCloud } from 'react-icons/ai';

const CurrentCondtion = () => {
  const { conditions } = useSelector((state) => state.weather);
  return (
    <>
      <h1 className="text-xl bg-gradient-to-tr from-blue-800 to-green-600 text-white flex justify-center items-center mb-5">
        Current weather
      </h1>
      <div className="flex flex-col">
        <h2 className="text-center ">
          Last Updated:
          {'   '}
          <span className="text-white">
            {conditions && conditions.last_updated && (
              <p>{conditions.last_updated}</p>
            )}
          </span>
        </h2>
        <div className="flex justify-between gap-5">
          <ul className="">
            <li className="flex">
              Temperature:
              {' '}
              <span>
                {conditions && conditions.temp_c && <p>{conditions.temp_c}</p>}
              </span>
              <WiDegrees className="text-2xl text-white" />
            </li>

            <li className="flex">
              Humidity:
              {' '}
              {conditions && conditions.humidity && (
                <p>{conditions.humidity}</p>
              )}
              <WiHumidity />
            </li>
            <li className="flex">
              Cloud:
              {' '}
              {conditions && conditions.cloud && <p>{conditions.cloud}</p>}
              <AiFillCloud />
            </li>
            <li className="flex">
              Wind:
              {' '}
              {conditions && conditions.wind_mph && (
                <p>{conditions.wind_mph}</p>
              )}
              mph
              <GiWindTurbine />
            </li>
          </ul>
          <div>
            {conditions && conditions.icon && (
              <img src={conditions.icon} alt="icon" />
            )}
            <span>
              {conditions && conditions.text && <p>{conditions.text}</p>}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentCondtion;
