import React from 'react'

const variants = {
    primary:
      "bg-indigo-600 text-white hover:enabled:bg-indigo-700 focus:ring-indigo-500",
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
    ...props}) => {
    return (
        <div>
            <button
            className={` 
            ${className} 
            ${variants[variant]} 
            ${sizes[size]}`}
            text={text}
            {...props}
            type="submit" className="">{text}</button>
        </div>
    )
}
