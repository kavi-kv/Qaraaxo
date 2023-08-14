import React,{useState,useEffect,useContext} from "react";
import '../Styles/profile.css'
import IconButton from '@mui/material/IconButton';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import data from '../prifile_data.json'
import { UserAppContext } from "../Backend/Context/UserContext";
import { useLocation } from "react-router-dom";
import {
    Container,
    DialogActions,
    DialogTitle,
    Typography,
    Divider,
    DialogContent,
    Box,
    Button
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import EditModal from "./Elements/EditModal";


const Profile = () => {
    
    const {userProfileDetails,userEmailValidtion} = useContext(UserAppContext);
    const [openModel,setOpenModel] = useState(false)
    const location= useLocation();
    const {userId,userEmail,userFullName} = location.state;
    
    
    
    const handleClose = () => {
        setOpenModel(false);
    }

    useEffect(()=> {
        console.log(`User Id: ${userId}`)
        console.log(`User Name: ${userFullName}`)
        console.log(`User Email: ${userEmail}`)
    },[])

    return(
        <Container sx={{mt:5}}>
            <div className="profile_container">
            <div className="profile_card">
                <div className="cover_card">
                    
                </div>
                {userProfileDetails.map((value)=> {
                    return(
                        <div className="profile_details" key={value.id}>
                            <div className="img_cont">
                                <img src={value.profile_img} alt={value.profile_img} className="profile_img"/>
                               <div>
                                <br />
                                <p className="profile_user_name"> {value.first_name} {value.last_name} </p>
                                <p className="profile_profession">{value.user_email}</p>
                               </div>
                            </div>
                             
                            <div className="user_details_container">
                                <div className="sub_user_details">
                                    <div className="profile_btn">
                                        <button className="pr_btn"
                                            onClick={(()=> setOpenModel(true))}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div className="about_user">
                                        <h3>Posts</h3>
                                    </div>
                                </div>
                                <div>
                                    {/* <button className="chat-btn">Chat</button> */}
                                    <IconButton sx={{ width: '50px', height: '50px'}}>
                                        <ChatOutlinedIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
        <EditModal 
        type="editModal"
        openModel={openModel}
        setOpenModel={setOpenModel}
        >
            <DialogTitle sx={{display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography component="p">
                    To give more information about you fill the necessary informtion.
                </Typography>
               

            </DialogTitle>
            <Divider/>
            <DialogContent  >
            <Box 
                sx={{width: "100%", display: "flex", justifyContent:"space-around",alignItems:"center", flexDirection: "row",mt:2}}
                >
                    <Box>
                        <label >Country of birth</label>
                        <input type="text"
                        placeholder="Enter country of birth"
                        className="edit_inputs"
                    />
                    </Box>
                    
                   <Box>
                   <label >Place of birth</label>
                   <input type="text"
                    placeholder="Place of birth"
                    className="edit_inputs"
                 />
                   </Box>
                    
                </Box>
                <Box 
                sx={{width: "100%", display: "flex", flexDirection: "column",mt:2}}
                >
                    <label >Professional</label>
                <input type="text"
                 placeholder="Work/Professional"
                 className="edit_inputs"
                 />
                </Box>
                <Box 
                sx={{width: "100%", display: "flex", flexDirection: "column",mt:2}}
                >
                    <label >Place of birth</label>
                    <input type="text"
                    placeholder="Address"
                    className="edit_inputs"
                    />
                </Box>
                <Box 
                sx={{width: "100%", display: "flex", flexDirection: "column",mt:2}}
                >
                    <label >Address</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                    </LocalizationProvider>
                </Box>
                <Box 
                sx={{width: "100%", display: "flex", flexDirection: "row",mt:2}}
                >
                    <Button variant="contained" color="primary">Save</Button>
                    <Button variant="contained" color="error" onClick={handleClose} >Close</Button>
                    
                </Box>
            </DialogContent>
        </EditModal>
        </Container>
    )
}
export default Profile