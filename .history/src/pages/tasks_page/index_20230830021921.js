import React from 'react'
import { SideBar } from '../../components/sideBar'
import { Tasks } from '../../components/tasks'
export const TasksPage = () => {
    return (
        <>
            <div className='flex mt-5 mb-5'>
                <SideBar />
                <Tasks></Tasks>
            </div>
        </>
    )
}
