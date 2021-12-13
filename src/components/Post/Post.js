import React from 'react'
import AddComment from './AddComment'
import Comments from './Comments'

function Post() {
    return (
        <div>
            {/* // POST */}
            <div className="shadow bg-white mt-4 rounded-lg h-max">
                {/* POST AUTHOR */}
                <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex space-x-2 items-center">
                        <div className="relative">
                            <img src="./images/profile_photo_cat.jpg" alt="Profile picture" className="w-10 h-10 rounded-full" />
                            <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Can Canbolat
                            </div>
                            <span className="text-sm text-gray-500">10h</span>
                        </div>
                    </div>
                    <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 rounded-full cursor-pointer">
                        <i className='bx bx-dots-horizontal-rounded'></i>
                    </div>
                </div>
                {/* END POST AUTHOR */}

                {/* POST CONTENT */}
                <div className="text-justify px-4 py-2">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d
                    </p>
                </div>
                {/* END POST CONTENT */}
                {/* POST EVENTS */}
                <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row-reverse items-center">
                            <span className="ml-2 text-gray-500">
                                55
                            </span>
                        </div>
                        <div className="text-gray-500">
                            <span onClick="" style={{ cursor: 'pointer' }}>10 comments</span>
                        </div>
                    </div>
                </div>
                {/* END POST EVENTS */}

                {/* POST ACTION */}
                <div className="py-2 px-4">
                    <div className="border border-gray-200 border-l-0 border-r-0 py-1">
                        <div className="flex space-x-2">
                            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
                                <i className='bx bx-like'></i>
                                <span className="text-sm font-semibold">Like</span>

                            </div>
                            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
                                <i className='bx bx-comment'></i>
                                <span className="text-sm font-semibold">Comment</span>
                            </div>
                            <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 text-xl py-2 rounded-lg cursor-pointer text-gray-500">
                                <i className='bx bx-share bx-flip-horizontal'></i>
                                <span className="text-sm font-semibold">Share</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END POST ACTION */}
            </div>
            {/* // END POST */}
        </div>
    )
}

export default Post
