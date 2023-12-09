import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex flex-col items-center pt-12">
        <p className="text-8xl font-bold">{data.name}</p>
        <div className="flex items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width={100}
            height={100}
          />
          <p className="text-2xl ml-2">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl mt-4">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md mt-4">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-around text-center">
          <div>
            <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} MPH</p>
            <p className="text-xl">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
