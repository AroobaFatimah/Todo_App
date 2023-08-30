import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from "../../components/password_input_field"
export const Login = () => {
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

    //const location = useLocation();
    //let registeredUsers = location.state;

    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"))
    console.log(registeredUsers)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        const foundUser = registeredUsers.find(user => user.email == email);
        if (foundUser) {
            if (foundUser.password == password) {
                navigate("/tasks")
            }
            else {
                alert("Incorrect password");
            }
        }
        else {
            alert('Email not found');
        }

    };

    return (
        <div>
            <section className=" bg-white-50 dark:bg-white-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Log In
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <Input id="email" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <Input id="password" type={(showPassword) ? "text" : "password"} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} insideButton={<button className='float-right font-bold text-black'>Show</button>}/>
                                    <button type='button' className='float-right font-bold text-black pr-2' onClick={handleClick}>{buttonText}</button>
                                </div>
                                {/* <div>
                                    <PasswordInput id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} insideButton={<button className='float-right font-bold text-black'>Show</button>} />
                                </div> */}
                                <Button onClick={handleLogin} className="w-full text-white bg-black hover:bg-black-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5"
                                    type="submit"
                                    size="large"
                                    variant="primary"
                                    text="Login"></Button>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to={"/signup"}><a href="#" className="font-medium text-primary hover:underline dark:text-primary">Sign up</a></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
