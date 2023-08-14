import React from 'react'
import '../../Styles/contentPage.css'
import { HiUserCircle } from "react-icons/hi";
// import { HiUserAiOutlineLikeCircle } from "react-icons/hi";
import { FaComments } from "react-icons/fa";
export default function ContentPage() {
  return (
    // <div className='content-outer-container'>
        <div className="post__card">
            <div className="top-sec">
                <HiUserCircle className="mr-2 h-8 w-8" />
                <h3 className='user-name'>Mohamed Ali</h3>
            </div>
            <div className="content-sec">
                <p className='content-p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet magni eius facere debitis consectetur adipisicing elit. Repellat eveniet magni eius facere debitis dolorum reiciendis corrupti dolorem optio aliquam.
                </p>
            </div>
            <hr />
            <div className="bottom-sec">
                <FaComments className="mr-2 h-5 w-6" />
                {/* <HiUserAiOutlineLikeCircle className="mr-2 h-5 w-6" /> */}
            </div>
        </div>
    // </div>
  )
}
