import React from 'react'
import { Button } from '../button'
import TaskIcon from "./icons/task_icon.svg"

export const SideBar = () => {
    return (
        <>
            <div className='w-1/4 mt-5 mb-5'>
                <button className='bg-black w-1/2 px-4 py-2 text-sm text-white'><svg></svg></svg>Task</button>
            </div>
        </>
    )
}
