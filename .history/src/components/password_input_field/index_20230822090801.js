import React, { useState } from 'react'

export const PasswordInput = ({
    type,
    name,
    value,
    inputID,
    defaultValue,
    placeholder,
    onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    let [buttonText, setButtonText] = useState("Show")
    let handleClick = () => {
        if (buttonText == "Show") {
            setShowPassword(true);
            setButtonText("Hide");
        }
        else {
            setButtonText()
            setShowPassword(false);
        }
    }
    return (
        <>

            <div className="flex bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                <input
                    type={(showPassword) ? "text" : "password"}
                    name={name}
                    value={value}
                    id={inputID}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`focus:outline-none bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:text-white`}
                />
                <button type='button' className='float-right font-bold text-black pr-2' onClick={handleClick}>{buttonText}</button>
            </div>
        </>
    )
}
