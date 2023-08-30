import React from 'react'
import { Button } from "../button"

export const Tasks = () => {
    return (
        <>
            <div className='w-1/2 mt-5 mb-5'>
                <button className="flex bg-white font-semibold text-sm text-gray-500"><svg className='mr-2' enable-background="new 0 0 50 50" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="5" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="4" x1="25" x2="25" y1="9" y2="41" /></svg>Add New Task</button>
            </div>
        </>
    )
}
