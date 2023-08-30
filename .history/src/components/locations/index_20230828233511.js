import React from 'react'
import { useState } from 'react'
import locationIcon from "./location.png"
import { MobileMenu } from '../../components/mobileMenu'
import Menu from "./menu.png"

export const Locations = () => {
    let location = {
        place: "Pustegränd, Stockholm, SE",
        direction: "59.3293° N, 18.0686° E"
    }
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
    let [clicked, setClicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let [currentLocation, setCurrentLocation] = useState(location);
    let [previousLocations, setPreviousLocations] = useState(PreviousLocations)
    let [currentPlace, setCurrentPlace] = useState("");
    let [currentDirection, setCurrentDirection] = useState("");
    let [mobileMenu, setMobileMenu] = useState(false);

    let addCurrentLocation = (event) => {
        event.preventDefault();
        let obj = {
            place: currentPlace,
            direction: currentDirection
        }
        console.log(obj);
        previousLocations.unshift(currentLocation);
        setPreviousLocations([...previousLocations]);
        setCurrentLocation(obj);
        setIsModalOpen(false);
    }
    let closeModal = () => {
        setIsModalOpen(false);
        setCurrentPlace("");
        setCurrentDirection("");
    }
    return (
        <>
            {/*start menu for mobile and tablet */}
            <div className='fixed top-0 left-0 w-full flex justify-between items-center md:hidden bg-black text-white px-5 py-3'>
                <h2>Todo App</h2>
                <div className='w-5 h-5 '>
                    <img src={Menu} onClick={() => setMobileMenu(true)}></img>
                    <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} link1={"/tasks"} link2={"/location"} button2Styling="font-semibold flex bg-black w-full px-4 py-2 justify-center text-sm text-white mb-3" button1Styling='font-semibold flex w-full justify-center px-4 py-2 text-center text-sm text-black ' button2IconClr="#fff" button1IconClr="#000" />
                </div>
            </div>
            {/*end menu for mobile and tablet */}
            <div className=' mt-8 mb-5 max-md:mt-16 max-md:ml-5'>
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
                <div className='mt-7 ml-1'>
                    <h3 className='font-bold text-gray-600 mb-3'>Previous Locations</h3>
                    <ul>
                        {previousLocations.map(location => {
                            return (
                                <li className='flex mb-3'>
                                    <div>
                                        <div className='flex'>
                                            <div className='w-5 h-5 mr-3'>
                                                <img src={locationIcon} />
                                            </div>
                                            <div>
                                                <h3 className='mb-1 text-semibold text-gray-600'>{location.place}</h3>
                                                <h4 className='ml-2 text-sm text-gray-400'>{location.direction}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <CreateModal addCurrentLocation={addCurrentLocation} isModalOpen={isModalOpen} closeModal={closeModal} setCurrentPlace={setCurrentPlace} setCurrentDirection={setCurrentDirection} />
        </>
    )
}

function CreateModal({ isModalOpen, closeModal, addCurrentLocation, currentPlace, setCurrentPlace, currentDirection, setCurrentDirection }) {
    return (
        <>
            <div
                id="authentication-modal"
                aria-hidden="true"
                className={`backdrop-brightness-50 fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(isModalOpen ? " " : "hidden")
                    }`}
            >
                <div className="max-sm:w-80 relative w-full max-w-lg max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className=" px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-md font-semibold text-gray-900 dark:text-white">
                                New Current Location
                            </h3>
                            <form className="space-y-6" onSubmit={addCurrentLocation} >
                                <div className="mb-3 flex " >
                                    <input onChange={(e) => setCurrentPlace(e.target.value)} type='text' placeholder='Current Place' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600 ' />
                                <div className="mb-3 flex">
                                    <input onChange={(e) => setCurrentDirection(e.target.value)} type='text' placeholder='Current Direction' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="">
                                    <div className='flex justify-center'>
                                        <button type='submit' className='max-sm:px-24 bg-black text-white rounded-full px-32 py-2 mb-3 '>Save</button>
                                    </div>
                                    <div className='flex justify-center'>
                                        <Button></Button>
                                        <button onClick={closeModal} type='button' className='bg-white text-black font-semibold mb-3 '>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}