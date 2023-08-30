import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { PasswordInput } from "../../components/password_input_field"

export const Signup = () => {
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

    const navigate = useNavigate();
    let [registeredUsers, setRegisteredUsers] = useState([]);
    //const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")

    registeredUsers = localStorage.getItem("registeredUsers")
    if (registeredUsers) {
        registeredUsers = JSON.parse(registeredUsers)
    }
    else {
        registeredUsers = [];
    }
    let handleSignup = (event) => {
        event.preventDefault();
        console.log(registeredUsers)
        if (event.target.password.value == event.target.confirm_password.value) {
            let obj = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            if (obj.email != "" && obj.password != "") {
                registeredUsers.push(obj);
                setRegisteredUsers([...registeredUsers]);
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
                navigate("/");
                //navigate("/", { state: registeredUsers });
            }
            else {
                alert("Email or password can't be empty")
            }


        }
        else {
            alert("Passwords do not match");
        }
    };
    // let onSubmit = (event) => {
    //     event.preventDefault();
    //     let obj = {
    //         email: event.target.email.value,
    //         password: event.target.password.value
    //     }
    //     console.log(obj)
    //     registeredUsers.push(obj);
    //     setRegisteredUsers([...registeredUsers])
    //     navigate("/", { registeredUsers: registeredUsers });
    // };
    return (
        <div>
            <section className="bg-white-50 dark:bg-white-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Sign Up
                            </h1>
                            <form onSubmit={handleSignup} className="space-y-4 md:space-y-6" >
                                <div>
                                    <Input id="email" type="email" name="email" placeholder="Email" className="" />
                                </div>
                                <div>
                                    <Input id="password" type={(showPassword) ? "text" : "password"} name="password" placeholder="Password" className={"focus:outline-none bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:text-white"} innerButton={<button type='button' className='float-right font-bold text-black pr-2 pt-3' onClick={handleClick}>{buttonText}</button>} divStyling="flex bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div>
                                    <Input id="confirm_password" type={(showPassword) ? "text" : "password"} name="confirm_password" placeholder="Confirm Password" className={"focus:outline-none bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:text-white"} innerButton={<button type='button' className='float-right font-bold text-black pr-2 pt-3' onClick={handleClick}>{buttonText}</button>} divStyling="flex bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <Button className="w-full text-white bg-black hover:bg-black-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5"
                                    type="submit"
                                    size="large"
                                    variant="primary"
                                    text="Signup"></Button>

                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={"/"}><a href="#" className="font-medium text-primary hover:underline dark:text-primary">Log In</a></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
