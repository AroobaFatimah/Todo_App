import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../button'

const SideBarButton = ({ text, link, isActive, activeIcon, in }) => {
    return (
        <Link to={link} svg={svg} className={isActive ? "font-semibold flex bg-black w-1/2  px-4 py-2 pl-10 text-sm text-white rounded-full rounded-l-none mb-3" : "text-black font-semibold flex w-1/2 px-4 py-2 pl-10 text-sm bg-white"} >
            <div className='flex justify-center items-center'>{svg}{text}</div>
        </Link>
    );
};

export const SideBar = ({ IconClr, link1, link2, button1Styling, button2Styling, button1IconClr, button2IconClr }) => {

    const [activeButton, setActiveButton] = useState('');

    const updateActiveButton = () => {
        const currentPathname = window.location.pathname;
        setActiveButton(currentPathname);
    };

    // Call updateActiveButton when the component mounts and whenever the route changes
    React.useEffect(() => {
        updateActiveButton();
    }, []);

    const sidebarButtons = [
        { text: 'Tasks', link: '/tasks', activeIconClr: "#ffff", inactiveIconClr: "#000", svg: <svg className='mr-3 stroke-5' fill="none" viewBox="0 0 20 20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path stroke={IconClr} stroke-width='0.3' d="M9.35355 7.85356C9.54881 7.65831 9.54882 7.34172 9.35357 7.14646C9.15831 6.95119 8.84173 6.95118 8.64646 7.14644L7.23436 8.55847L6.8372 8.19572C6.6333 8.0095 6.31704 8.02382 6.13081 8.22772C5.94459 8.43162 5.95891 8.74788 6.16281 8.9341L6.91281 9.6191C7.11021 9.79939 7.41451 9.79251 7.60355 9.60347L9.35355 7.85356ZM9.35357 12.1465C9.54882 12.3417 9.54881 12.6583 9.35355 12.8536L7.60355 14.6035C7.41451 14.7925 7.11021 14.7994 6.91281 14.6191L6.16281 13.9341C5.95891 13.7479 5.94459 13.4316 6.13081 13.2277C6.31704 13.0238 6.6333 13.0095 6.8372 13.1957L7.23436 13.5585L8.64646 12.1464C8.84173 11.9512 9.15831 11.9512 9.35357 12.1465ZM11 13C10.7239 13 10.5 13.2239 10.5 13.5C10.5 13.7761 10.7239 14 11 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H11ZM10.5 8.5C10.5 8.22386 10.7239 8 11 8H13.5C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H11C10.7239 9 10.5 8.77614 10.5 8.5ZM8.5 2C7.84689 2 7.29127 2.4174 7.08535 3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V4.5C16 3.67157 15.3284 3 14.5 3H12.9146C12.7087 2.4174 12.1531 2 11.5 2H8.5ZM8 3.5C8 3.22386 8.22386 3 8.5 3H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H8.5C8.22386 4 8 3.77614 8 3.5ZM5.5 4H7.08535C7.29127 4.5826 7.84689 5 8.5 5H11.5C12.1531 5 12.7087 4.5826 12.9146 4H14.5C14.7761 4 15 4.22386 15 4.5V16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5V4.5C5 4.22386 5.22386 4 5.5 4Z" fill={IconClr} /></svg> },
        { text: 'Location', link: '/location' },
    ];
    return (
        <>
            <div className='block justify-between md:w-1/2 lg:w-1/4 mt-5 mb-5 max-md:hidden'>
                <div>
                    {sidebarButtons.map((button, index) => (
                        <SideBarButton key={index} IconClr={button.activeIconClr} text={button.text} IconClr={(button.link === activeButton) ? "#fff" : "#000"} link={button.link} svg={button.svg} isActive={button.link === activeButton} />
                    ))}
                </div>
                <div>
                    <Link to={"/"}><Button className={'absolute bottom-10 font-semibold flex w-1/2 px-4 py-2 pl-10 text-center text-sm '} svg={<svg className='mr-3' enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M15,30H2V2h13c0.552,0,1-0.448,1-1s-0.448-1-1-1H1C0.448,0,0,0.448,0,1v30c0,0.552,0.448,1,1,1h14   c0.552,0,1-0.448,1-1S15.552,30,15,30z" fill="#121313" /><path d="M31.71,15.302l-6.9-6.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l5.2,5.275   H8.003c-0.552,0-1,0.452-1,1.01c0,0.558,0.448,1.01,1,1.01h20.593l-5.2,5.275c-0.391,0.395-0.391,1.034,0,1.428   c0.391,0.395,1.024,0.395,1.414,0l6.899-6.999C32.095,16.341,32.099,15.69,31.71,15.302z" fill="#000" /></svg>} text={"Logout"}></Button></Link>
                </div>
            </div>


            {/* <div className='md:w-1/2 lg:w-1/4 mt-5 mb-5 max-md:hidden'>
                <Link to={link1}><Button className={`mb-2 ${button1Styling}`} svg={<svg className='mr-3 stroke-5' fill="none" viewBox="0 0 20 20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path stroke={button1IconClr} stroke-width='0.3' d="M9.35355 7.85356C9.54881 7.65831 9.54882 7.34172 9.35357 7.14646C9.15831 6.95119 8.84173 6.95118 8.64646 7.14644L7.23436 8.55847L6.8372 8.19572C6.6333 8.0095 6.31704 8.02382 6.13081 8.22772C5.94459 8.43162 5.95891 8.74788 6.16281 8.9341L6.91281 9.6191C7.11021 9.79939 7.41451 9.79251 7.60355 9.60347L9.35355 7.85356ZM9.35357 12.1465C9.54882 12.3417 9.54881 12.6583 9.35355 12.8536L7.60355 14.6035C7.41451 14.7925 7.11021 14.7994 6.91281 14.6191L6.16281 13.9341C5.95891 13.7479 5.94459 13.4316 6.13081 13.2277C6.31704 13.0238 6.6333 13.0095 6.8372 13.1957L7.23436 13.5585L8.64646 12.1464C8.84173 11.9512 9.15831 11.9512 9.35357 12.1465ZM11 13C10.7239 13 10.5 13.2239 10.5 13.5C10.5 13.7761 10.7239 14 11 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H11ZM10.5 8.5C10.5 8.22386 10.7239 8 11 8H13.5C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H11C10.7239 9 10.5 8.77614 10.5 8.5ZM8.5 2C7.84689 2 7.29127 2.4174 7.08535 3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V4.5C16 3.67157 15.3284 3 14.5 3H12.9146C12.7087 2.4174 12.1531 2 11.5 2H8.5ZM8 3.5C8 3.22386 8.22386 3 8.5 3H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H8.5C8.22386 4 8 3.77614 8 3.5ZM5.5 4H7.08535C7.29127 4.5826 7.84689 5 8.5 5H11.5C12.1531 5 12.7087 4.5826 12.9146 4H14.5C14.7761 4 15 4.22386 15 4.5V16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5V4.5C5 4.22386 5.22386 4 5.5 4Z" fill={button1IconClr} /></svg>} text={"Task"}></Button></Link>
                <Link to={link2}><Button className={button2Styling} svg={<svg className='mr-3' enable-background="new 0 0 50 50" height="24px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M40,17  c0,13.604-15,31-15,31S10,30.928,10,17c0-8.285,6.715-15,15-15C33.284,2,40,8.715,40,17z" fill="none" stroke={button2IconClr} stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" /><circle cx="25" cy="18" fill="none" r="6" stroke={button2IconClr} stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" /></svg>} text={"Location"}></Button></Link>
                <Link to={"/"}><Button className={'absolute bottom-10 font-semibold flex w-1/2 px-4 py-2 pl-10 text-center text-sm '} svg={<svg className='mr-3' enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M15,30H2V2h13c0.552,0,1-0.448,1-1s-0.448-1-1-1H1C0.448,0,0,0.448,0,1v30c0,0.552,0.448,1,1,1h14   c0.552,0,1-0.448,1-1S15.552,30,15,30z" fill="#121313" /><path d="M31.71,15.302l-6.9-6.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l5.2,5.275   H8.003c-0.552,0-1,0.452-1,1.01c0,0.558,0.448,1.01,1,1.01h20.593l-5.2,5.275c-0.391,0.395-0.391,1.034,0,1.428   c0.391,0.395,1.024,0.395,1.414,0l6.899-6.999C32.095,16.341,32.099,15.69,31.71,15.302z" fill="#000" /></svg>} text={"Logout"}></Button></Link>
            </div> */}
        </>
    )
}

