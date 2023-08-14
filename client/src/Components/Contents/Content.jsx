import React from "react";
import "../../Styles/content.css"; // Import the custom CSS file
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import ContentPage from "./ContentPage";
import LeftSideBar from "./LeftSideBar";

const Content = (props) => {
  return (
    <>
      <div className="left-side-container grid grid-cols-12 bg-[#F5F5F5] gap-2 mt-0  overflow-hidden">
        <div className="bg-[#F5F5F5] p-2  col-span-3 min-h-[685px] custom-scrollbar overflow-auto">
          {/* Left sidebar */}
          {/* Content for the left sidebar */}
          
          <LeftSideBar/>
        
        </div>
        <div className="center-section bg-[#F5F5F5]  p-4  col-span-6 overflow-auto">
          {/* Center content area */}
          {/* Content for the center section */}
          
          <ContentPage/>
         
         
        </div>
        <div className="rigth-section-container bg-gray-200 p-2 overflow-auto col-span-3 min-h-[500px] ">
          {/* Right sidebar */}
          {/* Content for the right sidebar */}
          
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
          <div className=" w-full h-100px bg-gray-500 mb-10">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
         
          
          {/* ... */}
        </div>
      </div>
    </>
  );
};

export default Content;
