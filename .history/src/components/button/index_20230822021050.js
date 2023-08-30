import React from 'react'

const variants = {
    primary:
        "bg-black-600 text-white hover:enabled:bg-black-700 focus:ring--500",
    danger: "bg-red-600 text-white hover:enabled:bg-red-700 focus:ring-red-500",
    transparent: "hover:text-gray-600 text-gray-500 shadow-none",
};

const sizes = {
    small: "px-2 py-1 text-xs loading-1",
    medium: "px-4 py-2 text-sm",
    large: "px-4 py-2 text-base",
};

export const Button = ({
    className,
    text,
    variant = "primary",
    size = "small",
    ...props }) => {
    return (
        <div>
            <button
                className={`w-full text-white bg-black-600 hover:bg-black-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 
            ${className} 
            ${variants[variant]} 
            ${sizes[size]}`}
                text={text}
                {...props}
            >
                {text}</button>
        </div>
    )
}
