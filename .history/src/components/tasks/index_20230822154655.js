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
                                <div className="mb-6">
                                    
                                    <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path stroke='#575767' d="M12.0867962,18 L6,21.8042476 L6,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,4 C2,2.8954305 2.8954305,2 4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.0867962,18 Z M8,18.1957524 L11.5132038,16 L20,16 L20,4 L4,4 L4,16 L8,16 L8,18.1957524 Z M7,13 L7,11 L14,11 L14,13 L7,13 Z M7,9 L7,7 L16,7 L16,9 L7,9 Z" /></svg>
                                </div>
                                <div className="mb-6">
                                    <Input
                                        label="Author"
                                        name="author"
                                        id="author"
                                        placeholder="Author"

                                    ></Input>
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
