import React from 'react'
import { SideBar } from '../../components/sideBar'
import { Locations } from '../../components/locations'

export const LocationsPage = () => {
    return (
        <>
            <div className='flex mt-5 mb-5'>
                <SideBar />
                <Locations />
            </div>
        </>
    )
}
