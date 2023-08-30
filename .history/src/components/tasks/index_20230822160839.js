import React from 'react'
import { useState } from 'react'
import { Button } from "../button"
import { Input } from "../input"
import SummaryIcon from "./Vector.png"
export const Tasks = () => {
    let tasks = [
        {
            id: 1,
            desc: "Submit Resume",
            deadline: "Today, 17:00"
        },
        {
            id: 2,
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
    ]
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className='w-1/2 mt-5 mb-5 '>
                <button onClick={() => setIsModalOpen(true)} className="flex bg-white font-semibold text-sm text-gray-600"><svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>Add New Task</button>
                <div className='mt-5 ml-1'>
                    <h3 className='font-semibold text-gray-600 mb-2'>Incomplete</h3>
                    <ul>
                        {items.map((item, index) => {
                            return (
                                <li className='flex mb-3'>
                                    <input onClick={() => taskCompleted(item.id)} className='mr-3 -mt-6' type='checkbox'></input>
                                    <div>
                                        <h3 className='mb-1'>{item.desc}</h3>
                                        <h4>{item.deadline}</h4>
                                    </div>
                                </li>)
                        })}
                    </ul>
                </div>
                <div className='mt-5 ml-1'>
                    <h3 className='font-semibold text-gray-600 mb-2'>Completed</h3>
                    <ul>
                        {completedItems.map(item => {
                            return (
                                <li className='flex mb-3'>
                                    <input className='mr-3 -mt-6' type='checkbox' checked></input>
                                    <div>
                                        <h3 className='mb-1'>{item.desc}</h3>
                                        <h4>{item.deadline}</h4>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <CreateModal isModalOpen={isModalOpen} />
        </>
    )
}

function CreateModal({ isModalOpen, handleModalClose, handleClick }) {
    return (
        <>
            <div
                id="authentication-modal"
                aria-hidden="true"
                class={`backdrop-blur fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${(isModalOpen ? " " : "hidden")
                    }`}
            >
                <div class="relative w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                New Task
                            </h3>
                            <form class="space-y-6" onSubmit={handleClick} >
                                <div className="mb-6 flex">
                                    <img className='mr-3' src={SummaryIcon} width="20px" height="20px" />
                                    <input type='text' placeholder='Summary' className='focus:outline-none' />
                                </div>
                                <hr className='text-gray-600' />
                                <div className="mb-6 flex">
                                    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path stroke='#575767' stroke-width="2" d="M2.5 5C2.22386 5 2 5.22386 2 5.5C2 5.77614 2.22386 6 2.5 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H2.5Z" fill="#212121" /><path d="M2.5 8C2.22386 8 2 8.22386 2 8.5C2 8.77614 2.22386 9 2.5 9H17.5C17.7761 9 18 8.77614 18 8.5C18 8.22386 17.7761 8 17.5 8H2.5Z" fill="#575767" /><path d="M2 11.5C2 11.2239 2.22386 11 2.5 11H17.5C17.7761 11 18 11.2239 18 11.5C18 11.7761 17.7761 12 17.5 12H2.5C2.22386 12 2 11.7761 2 11.5Z" fill="#212121" /><path d="M2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H12.5C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14H2.5Z" fill="#" /></svg>
                                    <input type='textarea' placeholder='Summary' className='focus:outline-none' />
                                </div>
                                <div className="flex items-center justify-center">
                                    <Button type="submit" size="large" variant="primary" className="mr-3" onClick={handleClick} >

                                    </Button>
                                    <Button
                                        text="Cancel"
                                        type="button"
                                        size="large"
                                        variant="danger"
                                        onClick={handleModalClose}
                                    >
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
