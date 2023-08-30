import React from 'react'
import { Link } from "react-router-dom";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { PasswordInput } from "../../components/password_input_field"
const registeredUsers = 
export const Signup = () => {
    return (
        <div>
            <section className="bg-white-50 dark:bg-white-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Sign Up
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <Input id="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <PasswordInput id="password" name="password" placeholder="Password" insideButton={<button className='float-right font-bold text-black'>Show</button>} />
                                </div>
                                <div>
                                    <PasswordInput id="password" name="password" placeholder="Confirm Password" insideButton={<button className='float-right font-bold text-black'>Show</button>} />
                                </div>
                                <Link to={"/"}>
                                    <Button className="w-full text-white bg-black hover:bg-black-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5"
                                        type="submit"
                                        size="large"
                                        variant="primary"
                                        text="Signup"></Button>
                                </Link>
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
