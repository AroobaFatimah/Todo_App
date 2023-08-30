import React from 'react'
import clockIcon from "./clock.png"

export const Alarm = ({ taskSummary = "Submit Resume", taskDesc = "Send resume to office!" }) => {
    return (
        <>
            <div className='absolute right-0 w-1/3 mt-5 mb-5'>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" className=" z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="p-5">
                                <div className='flex'>
                                    <div>
                                        <h3 className='text-md font-bold' taskSummary={taskSummary}>{taskSummary}</h3>
                                        <p className='text-gray-500' taskDesc={taskDesc}>{taskDesc}</p>
                                    </div>
                                    <div >
                                        <img className='' src={clockIcon} width={40} height={40} />
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center bg-gray-100 p-6 space-x-2 rounded-b dark:border-gray-600">
                                <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
