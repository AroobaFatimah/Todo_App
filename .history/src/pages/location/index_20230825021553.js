import React from 'react'
import { SideBar } from '../../components/sideBar'
import { Locations } from '../../components/locations'
import {}

export const LocationsPage = () => {
    return (
        <>
            <div className='flex mt-5 mb-5'>
                <SideBar link1={"/tasks"} link2={"/location"} button2Styling="font-semibold flex bg-black w-1/2 px-4 py-2 pl-10 text-sm text-white rounded-full rounded-l-none mb-3" button1Styling='font-semibold flex w-1/2 px-4 py-2 pl-10 text-center text-sm ' button1IconClr="#000" button2IconClr="#fff" />
                <Locations />
            </div>
        </>
    )
}
