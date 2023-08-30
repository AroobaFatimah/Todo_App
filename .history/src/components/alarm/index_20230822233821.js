import React from 'react'
import clockIcon from "./clock.png"

export const Alarm = ({ taskSummary = "Submit Resume", taskDesc = "Send resume to head office!" }) => {
    return (
        <>
            <div className='absolute right-0 w-1/4 mt-5 mb-5 mr-3'>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" className=" z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="p-5">
                                <div className='flex'>
                                    <div>
                                        <h3 className='text-md font-bold' taskSummary={taskSummary}>{taskSummary}</h3>
                                        <p className='text-gray-500' taskDesc={taskDesc}>{taskDesc}</p>
                                    </div>
                                    <div className='absolute right-5 rounded-xl bg-yellow-400'>
                                        <img className='m-3' src={clockIcon} width={24} height={24} />
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-end bg-gray-100 p-3 space-x-2 rounded-b dark:border-gray-600">
                                <button className='text-gray-600'>Skip</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
