const CurrentCondtion = () => (
  <>
    <h1 className="text-xl bg-gradient-to-tr from-blue-800 to-green-600 text-white flex justify-center items-center mb-5">
      Lodon
    </h1>
    <div className="flex justify-between flex-col ">
      <h2 className="text-center ">
        Last Updated:
        <span className="text-white">12.12.12.12.12</span>
      </h2>
      <div className="flex justify-between">
        <ul>
          <li>temperatur</li>
          <li>temperatur</li>
          <li>Humidity %rh</li>
        </ul>
        <div>
          <span>about to rain</span>
        </div>
      </div>
    </div>
  </>
);

export default CurrentCondtion;
