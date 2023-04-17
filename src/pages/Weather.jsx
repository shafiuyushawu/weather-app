import React from 'react'
import weather from '../assets/122.webp'
const Weather = () => {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={weather} /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weather