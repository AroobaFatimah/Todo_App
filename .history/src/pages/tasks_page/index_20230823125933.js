import React from 'react'
import { Link } from "react-router-dom"
import { SideBar } from '../../components/sideBar'
import { Tasks } from '../../components/tasks'
import { Alarm } from '../../components/alarm'
export const TasksPage = () => {
    return (
        <>
            <div className='flex mt-5 mb-5'>
                <SideBar link1={"/tasks"} link2={"/location"}></SideBar>
                <Tasks></Tasks>
                {/* <Alarm></Alarm> */}
            </div>
        </>
    )
}
