import React from 'react'

export const PasswordInput = ({
    type,
    name,
    value,
    inputID,
    defaultValue,
    sideText,
    placeholder,
    onChange }) => {
    return (
        <div>
            <input
                sideText={sideText}
                type={type}
                name={name}
                value={value}
                id={inputID}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                <span
                    class="flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                    <button
                        class="bg-gredient-dark hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded">Search</button>
                </span>
            />
        </div>
    )
}
