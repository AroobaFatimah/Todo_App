import React, { useState } from 'react'
import { Button } from '../button';

export const Input = ({
    name,
    value,
    error,
    inputID,
    className,
    defaultValue,
    placeholder,
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
                />
                <Button type='button' variant='secondary' className={`float-right font-bold pr-2 mt-2 ${(simpleInputField) ? "hidden" : ""}`} onClick={handleClick} text={buttonText}></Button>
            </div>
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </>
    )
}
