import React from 'react'
import { Button } from '../button'

export const SideBar = () => {
    return (
        <>
            <div className='w-1/4 mt-5 mb-5'>
                <Button text="Task" size=''></Button>
                <Button text="Location"></Button>
            </div>
        </>
    )
}
