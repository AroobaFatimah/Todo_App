import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import clockIcon from "./alarmClockIcon.png"
import SummaryIcon from "./summaryIcon.png"
import DescriptionIcon from "./descriptionIcon.png"
import ClockIcon from "./dueDateIcon.png"
import AlarmClock from "./alarm-clock.png"
import Menu from "./menu.png"

import { MobileMenu } from '../mobileMenu'
import { Button } from '../button'
import { Input } from "../input"

export const Tasks = ({ checked }) => {
    let tasks = [
        {
            id: 2,
            summary: "Complete the test",
            desc: "Complete the test and submit",
            deadline: "Tomorrow, 10.00"
        },
        {
            id: 3,
            summary: "Meeting with Jack",
            desc: "Meeting with Jack on google meet",
            deadline: "24 Feb, 15.00"
        },
        {
            id: 4,
            summary: "Buy a chocolate for Mom",
            desc: "Go to shop to buy a chocolate for Mom",
            deadline: "24 Feb, 11.00"
        },
        {
            id: 5,
            summary: "Facetime with Dad",
            desc: "Facetime with Dad",
            deadline: "24 Feb, 18.00"
        },
    ];
    let completedTasks = [
        {
            id: 1,
            summary: "Respond to Jane email",
            deadline: "Today, 17:00"
        },
        {
            id: 2,
            summary: "Resume Submitted",
            deadline: "Today, 17:00"
        },
        {
            id: 3,
            summary: "Service my bike",
            deadline: "Today, 17:00"
        },
    ]

    let [clicked, setClicked] = useState(false);
    let [summary, setSummary] = useState("");
    let [description, setDescription] = useState("");
    let [dueDate, setDueDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    let closeModal = () => {
        setSummary("");
        setDescription("");
        setDueDate("");
        setIsModalOpen(false);
    }
    let addTask = (event) => {
        event.preventDefault();
        let deadline = dueDate;
        deadline = deadline.split("T");
        deadline = deadline.join(", ");
        let obj = {
            id: items[items.length - 1].id + 1,
            summary: summary,
            desc: description,
            deadline: deadline
        }
        console.log(obj);
        items.push(obj);
        setItems([...items]);
        closeModal()
    }

    let selectedItemIndex;
    const [items, setItems] = useState(tasks);
    const [completedItems, setCompletedItems] = useState(completedTasks);
    let [selectedItem, setSelectedItem] = useState({});
    let [unCheck, setUnCheck] = useState(true);
    let moveTaskToIncompletedTaskList = (id) => {
        if (unCheck) {
            //setUnCheck(false);
            selectedItem = completedItems.find(item => item.id === id);
            selectedItemIndex = completedItems.indexOf(selectedItem);
            completedItems.splice(selectedItemIndex, 1);
            setCompletedItems([...completedItems])
            selectedItem.id = items[items.length - 1].id + 1
            items.push(selectedItem);
            setItems([...items]);
        }
    }

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
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        items.map(item => {
            let taskDeadline = item.deadline;
            if (!(taskDeadline instanceof Date)) {
                taskDeadline = new Date(taskDeadline);
            }
            const taskYear = taskDeadline.getFullYear();
            const taskMonth = taskDeadline.getMonth();
            const taskDay = taskDeadline.getDate();
            const taskHour = taskDeadline.getHours();
            let taskMinute = taskDeadline.getMinutes();

            if (currentYear == taskYear && currentMonth == taskMonth && currentDay == taskDay && currentHour == taskHour && currentMinute == taskMinute) {
                setShowAlarm(true)
                setAlarmSummary(item.summary)
                setAlarmDesc(item.desc)
                if (closeAlarm) {
                    setShowAlarm(false);
                }
            }
            else {
                setShowAlarm(false);
            }
        });
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
            {/*start menu for mobile and tablet */}
            <div className='fixed top-0 left-0 w-full flex justify-between items-center md:hidden bg-black text-white px-5 py-3'>
                <h2>Todo App</h2>
                <div className='w-5 h-5 '>
                    <img src={Menu} onClick={() => setMobileMenu(true)}></img>
                    <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} link1={"/tasks"} link2={"/location"} button1Styling="font-semibold flex bg-black w-full px-4 py-2 justify-center text-sm text-white mb-3" button2Styling='font-semibold flex w-full justify-center px-4 py-2 pl-10 text-center text-sm text-black ' button1IconClr="#fff" button2IconClr="#000" />
                </div>
            </div>
            {/*end menu for mobile and tablet */}
            <div className='flex w-3/4 '>
                <div className=' mt-8 mb-5 max-md:pl-5 max-md:mt-16'>
                    <Button onClick={() => { setIsModalOpen(true) }} className="flex bg-white font-semibold text-sm text-gray-600" svg={<svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>} text={"Add New Task"} />
                    <div className='mt-5 ml-1'>
                        <h3 className='font-bold text-gray-600 mb-2'>Incomplete</h3>
                        <ul>
                            {items.map((item, index) => {
                                return (
                                    <>
                                        <li className='flex mb-3'>
                                            {/* <Input simpleInputField={true} onClick={() => { setClicked(true); taskCompleted(item.id) }} checked={clicked ? true : ""} className='w-4 h-4 rounded-sm border border-gray-200 bg-gray-100 accent-slate-50 mr-3 mt-1' type='checkbox' /> */}
                                            <input onClick={() => taskCompleted(item.id)} checked={(clicked) ? checked : ""} className='w-4 h-4 rounded-sm border border-gray-200 bg-gray-100 accent-slate-50 mr-3 mt-1' type='checkbox'></input>
                                            <div >
                                                <h3
                                                    className='mb-1 text-semibold text-gray-600'>{item.summary}</h3>
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
                                        <input onClick={() => { moveTaskToIncompletedTaskList(item.id) }} className='w-4 h-4 mr-3 bg-white border border-gray-200 accent-slate-200' type='checkbox' checked></input>
                                        <div>
                                            <h3 className='mb-1 text-gray-400'>{item.summary}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <CreateModal setCloseAlarm={setCloseAlarm} addTask={addTask} isModalOpen={isModalOpen} closeModal={closeModal} setSummary={setSummary} setDescription={setDescription} setDueDate={setDueDate} summary={summary} description={description} dueDate={dueDate}
                />
                <div>
                    <Alarm setRemindMeLater={setRemindMeLater} setCloseAlarm={setCloseAlarm} ShowAlarm={ShowAlarm} showAlarm={showAlarm} setShowAlarm={setShowAlarm} taskSummary={alarmSummary} taskDesc={alarmDesc} />
                </div>
            </div>
        </>
    )
}

function CreateModal({ isModalOpen, closeModal, addTask, summary, setSummary, description, setDescription, dueDate, setDueDate, setCloseAlarm }) {
    return (
        <>
            <div
                id="authentication-modal"
                aria-hidden="true"
                className={`backdrop-brightness-50 fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(isModalOpen ? " " : "hidden")
                    }`}
            >
                <div className=" relative max-w-lg max-h-full">
                    <div className="max-sm:w-80 relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-md font-semibold text-gray-900 dark:text-white">
                                New Task
                            </h3>
                            <form className="space-y-6" onSubmit={addTask} >
                                <div className="mb-3 flex" >
                                    <div className='w-5 h-5 mr-3 mt-0.5'>
                                        <img src={SummaryIcon} />
                                    </div>
                                    <Input simpleInputField={true} onChange={(e) => setSummary(e.target.value)} type='text' placeholder='Summary' className='focus:outline-none' value={summary} />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-3 flex">
                                    <div className='w-5 h-5 mr-3 mt-0.5'>
                                        <img src={DescriptionIcon} width="20px" height="20px" />
                                    </div>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} cols={50} placeholder='Description' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-3 flex">
                                    <div className='w-5 h-5 mr-3 mt-0.5'>
                                        <img className='mr-3' src={ClockIcon} width="20px" height="20px" />
                                    </div>
                                    <Input simpleInputField={true} value={dueDate} type='datetime-local' onChange={(e) => {
                                        setDueDate(e.target.value);
                                    }} placeholder='Due Date' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="">
                                    <div className='flex justify-center'>
                                        <Button onClick={() => { setCloseAlarm(false); }} type='submit' className='max-sm:px-24 bg-black text-white rounded-full px-32 py-2 mb-3 ' text={"Save"} />
                                    </div>
                                    <div className='flex justify-center'>
                                        <Button onClick={closeModal} type='button' className='bg-white text-black font-semibold mb-3 ' text={"Cancel"} />
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
            <div className={`absolute right-0 w-1/4 max-md:w-full max-md:mr-0 mt-5 mb-5 mr-3  ${(showAlarm) ? "" : "hidden"}`}>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`max-lg:backdrop-brightness-50 max-lg:fixed max-lg:flex max-lg:justify-center max-lg:items-center  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(showAlarm) ? "" : "hidden"}`}>
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
                                <Button type='button' onClick={() => { setCloseAlarm(true); }} className='text-sm font-semibold text-black mr-3' text={"Skip"} />
                                <Button type='button' onClick={() => { setCloseAlarm(true); setRemindMeLater(true) }} className='text-sm font-semibold text-black' text={"Remind me later"} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
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