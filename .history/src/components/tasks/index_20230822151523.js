import React from 'react'
import { useState } from 'react'
import { Button } from "../button"

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
                <button className="flex bg-white font-semibold text-sm text-gray-600"><svg className='mr-1' enable-background="new 0 0 18 18" height="18px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="18px" xmlns="http://www.w3.org/2000/svg" ><rect fill="none" height="50" width="50" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="9" x2="41" y1="25" y2="25" /><line fill="none" stroke="#575767" stroke-miterlimit="10" stroke-width="6" x1="25" x2="25" y1="9" y2="41" /></svg>Add New Task</button>
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
        </>
    )
}

function CreateModal() {
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
                        <button
                            onClick={handleModalClose}
                            type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                        >
                            <svg
                                class="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                            <form class="space-y-6" onSubmit={handleClick} >
                                <div className="mb-6">
                                    <Input
                                        label="Title"
                                        name="title"
                                        id="title"
                                        value={title}
                                        placeholder="Title"
                                        onChange={(e) => setTitle(e.target.value)}
                                    ></Input>
                                </div>
                                <div className="mb-6">
                                    <Input
                                        label="Author"
                                        name="author"
                                        id="author"
                                        value={author}
                                        placeholder="Author"
                                        onChange={(e) => setAuthor(e.target.value)}
                                    ></Input>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Button text={buttonText} type="submit" size="large" variant="primary" className="mr-3" onClick={handleClick} >

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
