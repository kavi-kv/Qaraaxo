import React,{useState,createContext,useEffect} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
export const PostAppContext = createContext();

const PostContextProvider = (props) => {

  const [dataFromPost, setDataFromPost] = useState("");
  const [insertionStatus, setInsertionStatus] = useState(false);
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTimeOut,SetAlertTimeOut] = useState(null)
  const [userId,setUserId] = useState("")
  const currentDate = new Date();
  
  // const year = currentDate.getFullYear();
  // const month = currentDate.getMonth() + 1;
  // const day = currentDate.getDate();
  // const week = currentDate.getDay();
  const postTitle = "Testing........"

  // const dateString = (`${year}-${month}-${day}`)
  const timeStam = currentDate.toISOString().slice(0, 19).replace('T', ' ');

    const submitPost = () => {
        Axios.post("http://localhost:3007/api/insert/post", {
          userId: userId,
          postTitle: postTitle,
          postContent: dataFromPost,
          createdTime: timeStam,
        })
          .then(() => {
            console.log("Successfully inserted!");
            setInsertionStatus(true);
            // resetFields();
            // navigateToHome()
            window.location = "/Content"
          })
          .catch((error) => {
            console.error("Error is ", error);
            console.log("Failed to insert data");
            setInsertionStatus(false);
          });
      };
    

    return(
        <>
        <PostAppContext.Provider 
        value={{
          submitPost,
          alertOpen,
          alertTimeOut,
          setDataFromPost,
          dataFromPost,
          SetAlertTimeOut,
          setUserId,
          setAlertOpen,
          insertionStatus
        }}
        >
            {props.children}
        </PostAppContext.Provider>
        </>
    )
}

export default PostContextProvider