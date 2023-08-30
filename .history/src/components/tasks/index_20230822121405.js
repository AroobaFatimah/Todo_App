import React from 'react'
import { Button } from "../button"

export const Tasks = () => {
    return (
        <>
            <div className='w-1/2 mt-5 mb-5'>
                <button className="bg-white text-gray font-semibold text-sm"><svg height="24px" id="Layer_1" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" ><path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z" /></svg>Add New Task</button>
            </div>
        </>
    )
}
