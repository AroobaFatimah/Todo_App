import React from 'react'

export const Locations = () => {
    let [currentLocation, setCurrentLocation] = 
    return (
        <>
            <div className=' mt-8 mb-5 '>
                <button onClick={() => { setIsModalOpen(true); setClicked(true) }} className="flex bg-white font-semibold text-sm text-gray-600" ><svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>Add New Task</button>
                <div className='mt-5 ml-1'>
                    <h3 className='font-bold text-gray-600 mb-2'>Incomplete</h3>
                    <ul>
                        {items.map((item, index) => {
                            return (
                                <>
                                    <li className='flex mb-3'>
                                        <input onClick={() => taskCompleted(item.id)} checked={(clicked) ? checked : ""} className='w-4 h-4 rounded-sm border border-gray-200 bg-gray-100 accent-slate-50 mr-3 mt-1' type='checkbox'></input>
                                        <div>
                                            <h3 className='mb-1 text-semibold text-gray-600'>{item.desc}</h3>
                                            <div className='flex'>
                                                <img src={AlarmClock} width={16} height={16} />
                                                <h4 className='ml-2 text-sm text-gray-400'>{item.deadline}</h4>
                                            </div>
                                        </div>
                                    </li></>)
                        })}
                    </ul>
                </div>
                <div className='mt-5 ml-1'>
                    <h3 className='font-bold text-gray-600 mb-2'>Completed</h3>
                    <ul>
                        {completedItems.map(item => {
                            return (
                                <li className='flex mb-3'>
                                    <input className='w-4 h-4 mr-3 bg-white border border-gray-200 accent-slate-200' type='checkbox' checked></input>
                                    <div>
                                        <h3 className='mb-1 text-gray-400'>{item.desc}</h3>
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
