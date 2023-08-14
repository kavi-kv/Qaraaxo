import React, { useState,createContext,useContext,useEffect } from "react";
import style from "../Styles/post.css";
// import Button from "./Elements/Button";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { PostAppContext } from "../Backend/Context/PostContext";
import { useLocation } from "react-router-dom";
const PostPage = () => {

  const location = useLocation();
  const {userId,userEmail,userFullName} = location.state;

  const {dataFromPost,alertOpen,submitPost,alertTimeOut,setAlertOpen,SetAlertTimeOut,setUserId,setDataFromPost,insertionStatus} = useContext(PostAppContext)
  

  useEffect(()=> {
    if(userId)
    {
      setUserId(userId);
    }
  },[setUserId,userId])


  return (
    <div className={style.post_field}>
      <h2>Add a new post to the timeline</h2>
      
      <textarea
        aria-label="minimum height"
        placeholder="Write Post......."
        className={style.post_input}
        onChange={(e) => {
          setDataFromPost(e.target.value);
        }}
        value={dataFromPost}
      />
     
      <button
        className={style.post_btn}
        onClick={() => {
          submitPost();
          
          insertionStatus ? setAlertOpen(true) :
          SetAlertTimeOut(
            setTimeout(()=> {
              setAlertOpen(false);
              SetAlertTimeOut(null);
            },3000)
          )
        }}
      >
        Submit
      </button>
     
      <div className={style.alert_container}>
      {alertOpen && (
        <Alert
          open={alertOpen}
          onClose={() => {
            setAlertOpen(false);
          }}
          severity="success"
          className={style.alert}
          
        >
          Data Saved successfully!
        </Alert>
      )}
      </div>
    </div>
  );
};

export default PostPage;
