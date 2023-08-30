import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from "../button"
import { Input } from "../input"
import clockIcon from "./alarmClockIcon.png"
import SummaryIcon from "./summary_icon.png"
import DescriptionIcon from "./description.png"
import ClockIcon from "./clock.png"
import AlarmClock from "./alarm-clock.png"
import Menu from "./menu.png"

export const Tasks = ({ checked }) => {
    let tasks = [
        {
            id: 1,
            summary: "Send CV  to head office",
            desc: "Send CV  to head office",
            deadline: "24-Aug, 15:2"
        },
        {
            id: 2,
            summary: "Build Resume",
            desc: "Build Resume",
            deadline: "Today, 17:00"
        },
        {
            id: 3,
            summary: "Submit Resume",
            desc: "Submit Resume",
            deadline: "Today, 17:00"
        },
        {
            id: 4,
            summary: "Build Resume",
            desc: "Build Resume",
            deadline: "Today, 17:00"
        },
    ];
    let completedTasks = [
        {
            id: 1,
            desc: "Resume Submitted",
            deadline: "Today, 17:00"
        },
        {
            id: 2,
            desc: "Resume Submitted",
            deadline: "Today, 17:00"
        },
        {
            id: 3,
            desc: "Resume Submitted",
            deadline: "Today, 17:00"
        },
    ]

    let [clicked, setClicked] = useState(false);
    let [summary, setSummary] = useState("");
    let [description, setDescription] = useState("");
    let [dueDate, setDueDate] = useState("");
    let addTask = (event) => {
        event.preventDefault();
        let obj = {
            id: items[items.length - 1].id + 1,
            summary: summary,
            desc: description,
            deadline: dueDate
        }
        console.log(obj);
        items.push(obj);
        setItems([...items]);
        setIsModalOpen(false);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    let closeModal = () => {
        setIsModalOpen(false);
        setSummary("");
        setDescription("");
        setDueDate("");
    }
    let selectedItemIndex;
    const [items, setItems] = useState(tasks);
    const [completedItems, setCompletedItems] = useState(completedTasks);
    let [selectedItem, setSelectedItem] = useState({});

    let taskCompleted = (id) => {
        selectedItem = items.find(item => item.id === id);
        selectedItemIndex = items.indexOf(selectedItem);
        items.splice(selectedItemIndex, 1);
        setItems([...items]);
        selectedItem.id = completedItems[completedItems.length - 1].id + 1
        completedItems.push(selectedItem);
        setCompletedItems([...completedItems]);
    }

    let [showAlarm, setShowAlarm] = useState(false);
    let [closeAlarm, setCloseAlarm] = useState(false);
    let [alarmSummary, setAlarmSummary] = useState("Submit Resume")
    let [alarmDesc, setAlarmDesc] = useState("Send resume to head office!")
    let [remindMeLater, setRemindMeLater] = useState(false);
    let ShowAlarm = () => {
        let itemSelectedForAlarm;
        let d = new Date();
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let currentDay = `${d.getDate()}-${months[d.getMonth()]}`;
        let currentTime = `${d.getHours()}:${d.getMinutes()}`
        let currentDate = `${currentDay}, ${currentTime}`
        console.log(currentDate)
        itemSelectedForAlarm = items.find(item => (item.deadline == currentDate))
        if (itemSelectedForAlarm == undefined) {
            setShowAlarm(false)
        }
        else {
            setShowAlarm(true)
            setAlarmSummary(itemSelectedForAlarm.summary)
            setAlarmDesc(itemSelectedForAlarm.desc)
            if (closeAlarm) {
                setShowAlarm(false);
            }
            // if (remindMeLater) {
            //     setShowAlarm(false);
            //     let updatedTime = new Date(itemSelectedForAlarm.deadline).getMinutes() + 1
            //     console.log(updatedTime)
            // }
        }
    }
    useEffect(() => {
        const intervalId = setInterval(ShowAlarm, 60000); // 60000 ms = 1 minute
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    let [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            {/* <show_alarm_function items={items} /> */}
            {/*start menu for mobile and tablet */}
            <div className='fixed top-0 left-0 w-full flex justify-between items-center md:hidden bg-black text-white px-5 py-3'>
                <h2>Todo App</h2>
                <div className='w-5 h-5 '>
                    <img src={Menu} onClick={() => setMobileMenu(true)}></img>
                    <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
                </div>
            </div>
            {/*end menu for mobile and tablet */}
            <div className='flex w-3/4 max-sm:mt-10'>
                <div className=' mt-8 mb-5 max-sm:pl-5'>
                    <button onClick={() => { setIsModalOpen(true); setClicked(true) }} className="flex bg-white font-semibold text-sm text-gray-600" ><svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>Add New Task</button>
                    <div className='mt-5 ml-1'>
                        <h3 className='font-bold text-gray-600 mb-2'>Incomplete</h3>
                        <ul>
                            {items.map((item, index) => {
                                return (
                                    <>
                                        <li className='flex mb-3'>
                                            <input onClick={() => taskCompleted(item.id)} checked={(clicked) ? checked : ""} className='w-4 h-4 rounded-sm border border-gray-200 bg-gray-100 accent-slate-50 mr-3 mt-1' type='checkbox'></input>
                                            <div>
                                                <h3 className='mb-1 text-semibold text-gray-600'>{item.summary}</h3>
                                                <div className='flex'>
                                                    <div className='w-5 h-5'>
                                                        <img src={AlarmClock} width={16} height={16} />
                                                    </div>
                                                    <h4 className=' text-sm text-gray-400'>{item.deadline}</h4>
                                                </div>
                                            </div>
                                        </li></>)
                            })}
                        </ul>
                    </div>
                    <div className='mt-5 ml-1'>
                        <h3 className='font-bold text-gray-600 mb-2'>Completed</h3>
                        <ul>
                            {completedItems.map(item => {
                                return (
                                    <li className='flex mb-3'>
                                        <input className='w-4 h-4 mr-3 bg-white border border-gray-200 accent-slate-200' type='checkbox' checked></input>
                                        <div>
                                            <h3 className='mb-1 text-gray-400'>{item.desc}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <CreateModal addTask={addTask} isModalOpen={isModalOpen} closeModal={closeModal} setSummary={setSummary} setDescription={setDescription} setDueDate={setDueDate}
                />
                <div>
                    <Alarm setRemindMeLater={setRemindMeLater} setCloseAlarm={setCloseAlarm} ShowAlarm={ShowAlarm} showAlarm={showAlarm} setShowAlarm={setShowAlarm} taskSummary={alarmSummary} taskDesc={alarmDesc} />
                </div>
            </div>
        </>
    )
}

function CreateModal({ isModalOpen, closeModal, addTask, summary, setSummary, description, setDescription, dueDate, setDueDate }) {
    return (
        <>
            <div
                id="authentication-modal"
                aria-hidden="true"
                className={`backdrop-brightness-50 fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(isModalOpen ? " " : "hidden")
                    }`}
            >
                <div className=" relative max-w-lg max-h-full">
                    <div className="max-sm:w-72 relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-md font-semibold text-gray-900 dark:text-white">
                                New Task
                            </h3>
                            <form className="space-y-6" onSubmit={addTask} >
                                <div className="mb-3 flex" >
                                    <div className='w-5 h-5 mr-3 mt-0.5'>
                                        <img src={SummaryIcon} width="20px" height="20px" />
                                    </div>
                                    <input onChange={(e) => setSummary(e.target.value)} type='text' placeholder='Summary' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-3 flex">
                                    <div className='w-5 h-5 mr-3 mt-0.5'>
                                        <img src={DescriptionIcon} width="20px" height="20px" />
                                    </div>
                                    <textarea onChange={(e) => setDescription(e.target.value)} rows={3} cols={50} placeholder='Description' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-3 flex">
                                    <div className='w-5 h-5 mr-3 mt-0.5'>
                                        <img className='mr-3' src={ClockIcon} width="20px" height="20px" />
                                    </div>
                                    <input type='text' onChange={(e) => setDueDate(e.target.value)} placeholder='Due Date' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="">
                                    <div className='flex justify-center'>
                                        <button type='submit' className='max-sm:px-24 bg-black text-white rounded-full px-32 py-2 mb-3 '>Save</button>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button onClick={closeModal} type='button' className='bg-white text-black font-semibold mb-3 '>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Alarm = ({ setRemindMeLater, setCloseAlarm, ShowAlarm, showAlarm, setShowAlarm, taskSummary, taskDesc }) => {

    return (
        <>
            {console.log(ShowAlarm())}
            <div className={`absolute right-0 w-1/4 mt-5 mb-5 mr-3`}>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" className={` z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(showAlarm) ? "" : "hidden"}`}>
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="p-5">
                                <div className='flex'>
                                    <div>
                                        <h3 className='text-md font-bold' taskSummary={taskSummary}>{taskSummary}</h3>
                                        <p className='text-gray-500' taskDesc={taskDesc}>{taskDesc}</p>
                                    </div>
                                    <div className='absolute right-5 rounded-xl bg-yellow-400'>
                                        <img className='m-3' src={clockIcon} width={24} height={24} />
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-end bg-gray-100 p-3 space-x-2 rounded-b dark:border-gray-600">
                                <button type='button' onClick={() => setCloseAlarm(true)} className='text-sm font-semibold text-black mr-3'>Skip</button>
                                <button type='button' onClick={() => { setCloseAlarm(true); setRemindMeLater(true) }} className='text-sm font-semibold text-black'>Remind me later</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

function MobileMenu({ mobileMenu, setMobileMenu }) {
    return (
        <>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`fixed top-0 left-0 right-0 z-50 w-full mt-10 p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full ${mobileMenu ? "" : "hidden"}`}>
                <div class="relative w-full max-w-2xl max-h-full">

                    <div class="relative bg-white dark:bg-gray-700">

                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <button type="button" class="text-gray-400 bg-transparent hover:text-gray-900  text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                        <Link to={link1}><button className={`mb-2 ${button1Styling}`}><svg className='mr-3 stroke-5' fill="none" viewBox="0 0 20 20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path stroke={button1IconClr} stroke-width='0.3' d="M9.35355 7.85356C9.54881 7.65831 9.54882 7.34172 9.35357 7.14646C9.15831 6.95119 8.84173 6.95118 8.64646 7.14644L7.23436 8.55847L6.8372 8.19572C6.6333 8.0095 6.31704 8.02382 6.13081 8.22772C5.94459 8.43162 5.95891 8.74788 6.16281 8.9341L6.91281 9.6191C7.11021 9.79939 7.41451 9.79251 7.60355 9.60347L9.35355 7.85356ZM9.35357 12.1465C9.54882 12.3417 9.54881 12.6583 9.35355 12.8536L7.60355 14.6035C7.41451 14.7925 7.11021 14.7994 6.91281 14.6191L6.16281 13.9341C5.95891 13.7479 5.94459 13.4316 6.13081 13.2277C6.31704 13.0238 6.6333 13.0095 6.8372 13.1957L7.23436 13.5585L8.64646 12.1464C8.84173 11.9512 9.15831 11.9512 9.35357 12.1465ZM11 13C10.7239 13 10.5 13.2239 10.5 13.5C10.5 13.7761 10.7239 14 11 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H11ZM10.5 8.5C10.5 8.22386 10.7239 8 11 8H13.5C13.7761 8 14 8.22386 14 8.5C14 8.77614 13.7761 9 13.5 9H11C10.7239 9 10.5 8.77614 10.5 8.5ZM8.5 2C7.84689 2 7.29127 2.4174 7.08535 3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V4.5C16 3.67157 15.3284 3 14.5 3H12.9146C12.7087 2.4174 12.1531 2 11.5 2H8.5ZM8 3.5C8 3.22386 8.22386 3 8.5 3H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H8.5C8.22386 4 8 3.77614 8 3.5ZM5.5 4H7.08535C7.29127 4.5826 7.84689 5 8.5 5H11.5C12.1531 5 12.7087 4.5826 12.9146 4H14.5C14.7761 4 15 4.22386 15 4.5V16.5C15 16.7761 14.7761 17 14.5 17H5.5C5.22386 17 5 16.7761 5 16.5V4.5C5 4.22386 5.22386 4 5.5 4Z" fill={button1IconClr} /></svg>Task</button></Link>
                <Link to={link2}><button className={button2Styling}><svg className='mr-3' enable-background="new 0 0 50 50" height="24px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M40,17  c0,13.604-15,31-15,31S10,30.928,10,17c0-8.285,6.715-15,15-15C33.284,2,40,8.715,40,17z" fill="none" stroke={button2IconClr} stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" /><circle cx="25" cy="18" fill="none" r="6" stroke={button2IconClr} stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" /></svg>Location</button></Link>
                <Link to={"/"}><button className='absolute bottom-10 font-semibold flex w-1/2 px-4 py-2 pl-10 text-center text-sm '><svg className='mr-3' enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M15,30H2V2h13c0.552,0,1-0.448,1-1s-0.448-1-1-1H1C0.448,0,0,0.448,0,1v30c0,0.552,0.448,1,1,1h14   c0.552,0,1-0.448,1-1S15.552,30,15,30z" fill="#121313" /><path d="M31.71,15.302l-6.9-6.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l5.2,5.275   H8.003c-0.552,0-1,0.452-1,1.01c0,0.558,0.448,1.01,1,1.01h20.593l-5.2,5.275c-0.391,0.395-0.391,1.034,0,1.428   c0.391,0.395,1.024,0.395,1.414,0l6.899-6.999C32.095,16.341,32.099,15.69,31.71,15.302z" fill="#000" /></svg>Logout</button></Link>
            </div>
                        </div>
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


{/* {items.map(item => {
                        let result;
                        result = `Item deadline: ${item.deadline}\n`
                        let currentDay = "";
                        let d = new Date();
                        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        let AlarmDate = (item.deadline).split(", ");
                        let AlarmDay = AlarmDate[0].split("-")
                        if (AlarmDay.length == 3) {
                            currentDay = `${d.getDate()}-${months[d.getMonth()]}-${(d.getFullYear())}`
                        }
                        else {
                            currentDay = `${d.getDate()}-${months[d.getMonth()]}`
                        }

                        let currentTime = `${d.getHours()}:${d.getMinutes()}`
                        let currentDate = `${currentDay}, ${currentTime}`
                        result += "Current Date: " + currentDate + "\n";
                        if (currentDate == item.deadline) {
                            setShowAlarm(true);
                            return

                        }
                        console.log(result);
                    })}; */}