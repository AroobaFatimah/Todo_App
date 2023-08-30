import React from 'react'
import { useState } from 'react'
import { Button } from "../button"
import { Input } from "../input"
import clockIcon from "./alarmClockIcon.png"
import SummaryIcon from "./summary_icon.png"
import DescriptionIcon from "./description.png"
import ClockIcon from "./clock.png"
import AlarmClock from "./alarm-clock.png"
export const Tasks = ({ checked }) => {
    let tasks = [
        {
            id: 1,
            desc: "Submit Resume",
            deadline: "23-Aug, 14:57"
        },
        {
            id: 2,
            desc: "Build Resume",
            deadline: "Today, 17:00"
        },
        {
            id: 3,
            desc: "Submit Resume",
            deadline: "Today, 17:00"
        },
        {
            id: 4,
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
            desc: summary,
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
        console.log(selectedItem);
        selectedItemIndex = items.indexOf(selectedItem);
        console.log(selectedItemIndex);
        items.splice(selectedItemIndex, 1);
        setItems([...items]);
        console.log(items)
        selectedItem.id = completedItems[completedItems.length - 1].id + 1
        completedItems.push(selectedItem);
        console.log(completedItems)
        setCompletedItems([...completedItems]);
    }
    return (
        <>
            <div className='flex w-3/4'>
                <div className=' mt-8 mb-5 '>
                    <button onClick={() => { setIsModalOpen(true); setClicked(true) }} className="flex bg-white font-semibold text-sm text-gray-600" ><svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>Add New Task</button>
                    <div className='mt-5 ml-1'>
                        <h3 className='font-bold text-gray-600 mb-2'>Incomplete</h3>
                        <ul>
                            {items.map((item, index) => {
                                return (
                                    <li className='flex mb-3'>
                                        <input onClick={() => taskCompleted(item.id)} checked={(clicked) ? checked : ""} className='w-4 h-4 rounded-sm border border-gray-200 bg-gray-100 accent-slate-50 mr-3 mt-1' type='checkbox'></input>
                                        <div>
                                            <h3 className='mb-1 text-semibold text-gray-600'>{item.desc}</h3>
                                            <div className='flex'>
                                                <img src={AlarmClock} width={16} height={16} />
                                                <h4 className='ml-2 text-sm text-gray-400'>{item.deadline}</h4>
                                            </div>
                                        </div>
                                    </li>)
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
                    {/* <Alarm /> */}

                    {/* {items.map(item => {
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

                        let currentTime = `${d.getHours() + 1}:${d.getMinutes() + 1}`
                        let currentDate = `${currentDay}, ${currentTime}`
                        if (currentDate == AlarmDate) {
                            console.log("Alarm")
                        }
                    })} */}
                </div>
                <Alarm />
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
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-md font-semibold text-gray-900 dark:text-white">
                                New Task
                            </h3>
                            <form className="space-y-6" onSubmit={addTask} >
                                <div className="mb-3 flex">
                                    <img className='mr-3' src={SummaryIcon} width="20px" height="20px" />
                                    <input onChange={(e) => setSummary(e.target.value)} type='text' placeholder='Summary' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-3 flex">
                                    <div className='h-20'>
                                        <img className='mr-3 ' src={DescriptionIcon} width="20px" height="20px" />
                                    </div>
                                    <textarea onChange={(e) => setDescription(e.target.value)} rows={3} cols={50} placeholder='Description' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-3 flex">
                                    <img className='mr-3' src={ClockIcon} width="20px" height="20px" />
                                    <input type='text' onChange={(e) => setDueDate(e.target.value)} placeholder='Due Date' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="">
                                    <div className='flex justify-center'>
                                        <button type='submit' className='bg-black text-white rounded-full px-32 py-2 mb-3 '>Save</button>
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

const Alarm = ({ taskSummary = "Submit Resume", taskDesc = "Send resume to head office!" }) => {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
            <div className='absolute right-0 w-1/4 mt-5 mb-5 mr-3'>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" className={` z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(showModal) ? "" : "hidden"}`}>
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
                                <button onClick={() => setShowModal(false)} className='text-sm font-semibold text-black mr-3'>Skip</button>
                                <button onClick={() => setShowModal(false)} className='text-sm font-semibold text-black'>Remind me later</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

let ShowAlarm = () => {
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

                        let currentTime = `${d.getHours() + 1}:${d.getMinutes() + 1}`
                        let currentDate = `${currentDay}, ${currentTime}`
                        if (currentDate == AlarmDate) {
                            console.log("Alarm")
                        }
                    }

// date
// alarmDate = "25-feb, 15:00"
// let d = new Date("1 May,2019 11:20:00");
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let AlarmDate = (item.deadline).split(", ");
// let AlarmDay = AlarmDate[0].split("-")
// if (AlarmDay.length == 3) {
//     currentDay = `${d.getDate()}-${months[d.getMonth()]}-${(d.getFullYear())}`
// }
// else {
//     currentDay = `${d.getDate()}-${months[d.getMonth()]}`
// }

// currentTime = `${d.getHours() + 1}:${d.getMinutes() + 1}`
// currentDate = `${currentDay}, ${currentTime}`
// if (currentDate == AlarmDate) {
//     "show alarm"
// }