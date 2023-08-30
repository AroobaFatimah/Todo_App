import React from 'react'
import { Link } from "react-router-dom";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { PasswordInput } from "../../components/password_input_field"

export const Login = () => {
    return (
        <div>
            <section className="bg-white-50 dark:bg-white-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Log In
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <Input id="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <PasswordInput id="password" name="password" placeholder="Password" insideButton={<button className='float-right font-bold text-black'>Show</button>} />
                                </div>
                                <Link t>
                                    <Button className="w-full"
                                        type="submit"
                                        size="large"
                                        variant="primary"
                                        text="Login"></Button></Link>

                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary hover:underline dark:text-primary">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
