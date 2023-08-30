import React from 'react'
import { SideBar } from '../../components/sideBar'
import { Tasks } from '../../components/tasks'
export const TasksPage = () => {
    return (
        <>
            <div className='flex mt-5 mb-5'>
                <SideBar link1={"/tasks"} link2={"/location"} button1Styling="font-semibold flex bg-black w-1/2  px-4 py-2 pl-10 text-sm text-white rounded-full rounded-l-none mb-3" button2Styling='font-semibold flex w-1/2 px-4 py-2 pl-10 text-center text-sm bg-white ' button1IconClr="#fff" button2IconClr="#000"></SideBar>
                <Tasks></Tasks>
            </div>
        </>
    )
}
