"use client";
import Link from "next/link";
import React from "react";

function CustomNavbar(){
    //console.log("this is component")
    return(
        <div>
            <nav>
                <div className="bg-gray-800 h-15 py-2 px-14 flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-white">Task Track</a>
                    </div>
                    <div>
                        <ul className="flex space-x-5">
                            <li>
                                <Link href={"/"} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            </li>
                            <li>
                                <Link href={"/add-task"} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Add Task</Link>
                            </li>
                            <li>
                            <Link href={"/show-task"} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Show Task</Link>                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex space-x-3">
                            <li>
                                <a href="/">Login</a>
                            </li>
                            <li>
                                <a href="/">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CustomNavbar 