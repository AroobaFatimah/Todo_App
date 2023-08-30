import React from 'react'
import { Link } from "react-router-dom"
import { SideBar } from '../../components/sideBar'
import { Tasks } from '../../components/tasks'
export const TasksPage = () => {
    return (
        <>
            <div className='flex mt-5 mb-5'>
                <SideBar></SideBar>
                <Tasks></Tasks>
                <
            </div>
        </>
    )
}
