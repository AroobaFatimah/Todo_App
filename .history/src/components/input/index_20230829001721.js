import React, { useState } from 'react'
import { Button } from '../button';

export const Input = ({
    type,
    name,
    value,
    error,
    inputID,
    className,
    defaultValue,
    placeholder,
    innerButton,
    divStyling,
    simpleInputField,
    onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    let [buttonText, setButtonText] = useState("Show")
    let handleClick = () => {
        if (buttonText == "Show") {
            setShowPassword(true);
            setButtonText("Hide");
        }
        else {
            setButtonText("Show");
            setShowPassword(false);
        }
    }
    return (
        <>
            <div className={divStyling}>
                <input
                    type={(simpleInputField) ? "text" : (showPassword) ? "text" : "password"}
                    name={name}
                    value={value}
                    id={inputID}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={className}
                // className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <Button type='button' className={`float-right font-bold pr-2 mt-2   ${(simpleInputField) ? "hidden" : ""}`} onClick={handleClick} text={buttonText}></Button>
                {/* <div className={`${(simpleInputField) ? "hidden" : ""}`}>{innerButton}</div> */}
            </div>
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </>
    )
}