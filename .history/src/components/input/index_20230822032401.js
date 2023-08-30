import React from 'react'

export const Input = ({
    type,
    name,
    value,
    inputID,
    defaultValue,
    label,
    helperText,
    error,
    placeholder,
    onChange }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                id={inputID}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange}
                className="focus:outlinebg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    )
}
