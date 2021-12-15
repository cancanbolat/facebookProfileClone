import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FacebookLogo, SearchIcon, Plus, Messenger, DownArrow, Bell, Home, Watch, Groups, Feed } from '../../icons'


function Header() {

    const [isAccountMenuDisplay, setIsAccountMenuDisplay] = useState("hidden")
    const show = () => isAccountMenuDisplay == "hidden" ? setIsAccountMenuDisplay("") : setIsAccountMenuDisplay("hidden")

    return (
        <nav className="bg-white h-max md:h-14 w-full shadow-sm flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">

            {/* // <!-- LEFT NAV --> */}
            <div className="flex items-center justify-between w-full md:w-max px-2 py-2">
                <a href="#" className="mr-2 hidden md:inline-block">
                    <FacebookLogo />
                </a>
                <a href="#" className="inline-block md:hidden">
                    <img src="./images/fb-logo-mb.png" alt="" className="w-32 h-auto" />
                </a>
                {/* Seacrh */}
                <div className="flex items-center justify-between space-x-1">
                    <div className="relative bg-gray-100  px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                        <SearchIcon />
                        <input type="text" placeholder="Search Facebook" className="outline-none bg-transparent hidden xl:inline-block mx-2" />
                    </div>
                    <div className="text-2xl grid place-items-center md:hidden bg-gray-200  rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300">
                        <i className='bx bxl-messenger'></i>
                    </div>
                    <div className="text-2xl grid place-items-center md:hidden bg-gray-200  rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300">
                        <i className='bx bxs-moon'></i>
                    </div>
                </div>
            </div>
            {/* // <!-- END LEFT NAV */}

            {/* // <!-- MAIN NAV */}
            <ul className="flex w-full lg:w-max items-center justify-center">
                <li className="w-1/5 md:w-max text-center">
                    <Link to="/" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block text-blue-500 border-b-4 border-blue-500">
                        <Home />
                    </Link>
                </li>
                <li className="w-1/5 md:w-max text-center">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third relative">
                        <Watch />
                        <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">9+</span>
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center">
                    <Link to="/creategroup" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third relative">
                        <Groups />
                    </Link>
                </li>
                <li className="w-1/5 md:w-max text-center">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third relative">
                        <Feed />
                    </a>
                </li>
                <li className="w-1/5 md:w-max text-center inline-block md:hidden">
                    <a href="#" className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third relative">
                        <i className='bx bx-menu'></i>
                    </a>
                </li>
            </ul>
            {/* // <!-- END MAIN NAV */}

            {/* // <!-- RIGHT NAV */}
            <ul className="hidden md:flex mx-4 items-center justify-center">
                {/* Profile */}
                <li className="h-full hidden xl:flex">
                    <Link to="/profile" className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1">
                        <img src="./images/profile_photo_cat.jpg" alt="Profile picture" className="rounded-full h-7 w-7" />
                        <span className="mx-2 font-semibold">Can</span>
                    </Link>
                </li>
                <li>
                    <div className="text-xl hidden xl:grid place-items-center bg-gray-200 rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <Plus />
                    </div>
                </li>
                {/* Messenger */}
                <li>
                    <Link to="/messages" className="text-xl hidden xl:grid place-items-center bg-gray-200 rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <Messenger />
                    </Link>
                </li>
                {/* Notifications */}
                <li>
                    <div className="text-xl grid place-items-center bg-gray-200 rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
                        <Bell />
                        <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">2</span>
                    </div>
                </li>
                {/* Account menu */}
                <li>
                    <div id="open-account-menu" onClick={show} className="text-xl grid place-items-center bg-gray-200 rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300">
                        <DownArrow />
                    </div>
                </li>
            </ul>
            {/* // <!-- END RIGHT NAV */}
            {/* ACCOUNT MENU */}
            <div className={`${isAccountMenuDisplay} right-6 md:absolute -mb-96 mt-12 p-4 lg:w-max shadow rounded-lg bg-white dark:bg-dark-second`}>
                <div className="p-2 border-b border-gray-300 w-80 dark:border-dark-third flex space-x-4">
                    <ul className="w-96">
                        <li className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-all">
                            <Link to="/profile">
                                <div className="flex">
                                    <div>
                                        <img src="./images/profile_photo_cat.jpg" className="rounded-full w-16" />
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <h1 className="font-semibold">Can Canbolat</h1>
                                        <p className="mt-2">See your profile</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <hr className="p-1 m-2" />
                        <li className="p-2 cursor-pointer font-semibold hover:bg-gray-100 rounded-lg transition-all">Give Feedback</li>
                        <hr className="p-1 m-2" />
                        <li className="p-2 cursor-pointer font-semibold hover:bg-gray-100 rounded-lg transition-all">
                            <Link to="/settings">
                                Settings & privacy
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer font-semibold hover:bg-gray-100 rounded-lg transition-all">Help & support</li>
                        <li className="p-2 cursor-pointer font-semibold hover:bg-gray-100 rounded-lg transition-all">Display & accessibility</li>
                        <li className="p-2 cursor-pointer font-semibold hover:bg-gray-100 rounded-lg transition-all">Log Out</li>
                    </ul>
                </div>
            </div>
            {/* END ACCOUNT MENU */}
        </nav>
    )


}
export default Header