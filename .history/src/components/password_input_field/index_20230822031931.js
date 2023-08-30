import React from 'react'

export const PasswordInput = ({
    type,
    name,
    value,
    inputID,
    defaultValue,
    sideText,
    placeholder,
    insideButton,
    onChange }) => {
    return (
        <div className="flex bg-gray-50   text-gray-900 sm:text-sm rounded-lg  block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
            <input
                type={type}
                name={name}
                value={value}
                id={inputID}
                defaultValue={defaultValue}
                sideText={sideText}
                placeholder={placeholder}
                onChange={onChange}
                insideButton={insideButton}
                className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:text-white "
            />
            <button className='float-right font-bold text-black pr-2'>Show</button>
        </div>
    )
}
