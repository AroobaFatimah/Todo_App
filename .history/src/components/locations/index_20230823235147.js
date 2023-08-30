import React from 'react'
import { useState } from 'react'
import locationIcon from "./location.png"

export const Locations = () => {
    let location = {
        place: "Pustegränd, Stockholm, SE",
        direction: "59.3293° N, 18.0686° E"
    }
    let [clicked, setClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let [currentLocation, setCurrentLocation] = useState(location)

    let PreviousLocations = [
        {
            place: "Halsingegätan, Stockholm, SE",
            direction: "59.3293° N, 18.0686° E"
        },
        {
            place: "Pustegränd, Stockholm, SE",
            direction: "59.3293° N, 18.0686° E"
        },
        {
            place: "Långa Gatan, Stockholm, SE",
            direction: "59.3293° N, 18.0686° E"
        }
    ]
    let [previousLocations, setPreviousLocations] = useState(PreviousLocations)
    return (
        <>
            <div className=' mt-8 mb-5 '>
                <button onClick={() => { setIsModalOpen(true); setClicked(true) }} className="flex bg-white font-semibold text-sm text-gray-600" ><svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>Check In</button>
                <div className='mt-5 ml-1'>
                    <h3 className='font-bold text-gray-600 mb-3'>Current Location</h3>
                    <div className='flex'>
                        <div className='w-5 h-5 mr-3'>
                            <img src={locationIcon} />
                        </div>
                        <div>
                            <h3 className='mb-1 text-semibold text-gray-600'>{currentLocation.place}</h3>
                            <h4 className='ml-2 text-sm text-gray-400'>{currentLocation.direction}</h4>
                        </div>
                    </div>
                </div>
                <div className='mt-5 ml-1'>
                    <h3 className='font-bold text-gray-600 mb-2'>Previous Locations</h3>
                    <ul>
                        {reviousLocations.map(location => {
                            return (
                                <li className='flex mb-3'>
                                    <div>
                                        <h3 className='mb-1 text-gray-400'>{ }</h3>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
