import React from 'react'

export const Input = ({
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
    },
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
    onChange }) => {
    return (
        <>
            <div className={divStyling}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    id={inputID}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={className}
                // className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div>{innerButton}</div>
            </div>
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </>
    )
}
