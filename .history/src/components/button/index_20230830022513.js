import React from 'react'

const variants = {
    primary:
        "bg-black text-white hover:enabled:bg-black-700 focus:ring-black-500",
    secondary: "bg-gray-50 text-black text-base font-bold",
    active: "font-semibold flex bg-black w-1/2  px-4 py-2 pl-10 text-sm text-white rounded-full rounded-l-none mb-3",
    inactive: "text-black font-semibold flex w-1/2 px-4 py-2 pl-10 text-sm bg-white"
};

const sizes = {
    small: "px-2 py-1 text-xs loading-1",
    medium: "px-4 py-2 text-sm",
    large: "px-4 py-2 text-base",
};

export const Button = ({
    type,
    onClick,
    onSubmit,
    className,
    text,
    variant,
    size,
    ...props }) => {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                onSubmit={onSubmit}
                className={` 
            ${className} 
            ${variants[variant]} 
            ${sizes[size]}`}
                text={text}
                {...props}
            >
                <div className='flex justify-center items-center'>{svg}{text}</div></button>
        </div>
    )
}
