import React from 'react'
import { Feeling, Image, LiveVideo } from '../../icons'

function CreatePost() {
    return (
        <React.Fragment>
            {/* ADD POST */}
            <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
                <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
                    <img src="./images/profile_photo_cat.jpg" alt="Profile picture" className="w-10 h-10 rounded-full" />
                    <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
                        <span>
                            What's on your mind, Can ?
                        </span>
                    </div>
                </div>
                <div className="p-2 flex">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                        <LiveVideo />
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                        <Image />
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Photo/Video</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                        <Feeling />
                        <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Life Event</span>
                    </div>
                </div>
            </div>
            {/* END ADD POST */}
        </React.Fragment>
    )
}

export default CreatePost