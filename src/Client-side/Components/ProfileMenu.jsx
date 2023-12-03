import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom";
import { getTokenContext } from "../../ContextApi/TokenContext";
import { AuthorAuthContext } from "../../ContextApi/AuthorContext";
import {  Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

'use client';




  
 
 


export default  function ProfileMenu() {
  const [openModal, setOpenModal] = useState(false);

 
  const {handleSignOut}=useContext(getTokenContext)
 
  const {isAuthor,setIsAuthor,isAdmin,setIsAdmin}=useContext(AuthorAuthContext)
  const [existingUser,setExistingUser]=useState("")
  const [userProfile,setUserProfile]=useState({
    username:"",
    email:"",
    password:"",
    profilePic:"",
    isAuthor:"",
    isAdmin:"",
  })

   
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    if (user) {
      // console.log(user);
      setUserProfile({
        username:user.username,
    email:user.email,
    password:user.password,
    profilePic:user.profilePic,
    isAuthor:user.isAuthor,
    isAdmin:user.isAdmin,
      });
    //   if (user.profile) {
    //     setExistingImage(`${BASE_URL}/uploads/${user.profile}`);
    //     console.log("dd",existingImage)
    //   } else {
    //     setExistingImage(
    //       "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
    //     );
    //   }
    }
if(user?.isAuthor){
    setIsAuthor(true)
}

  }, []);
console.log(existingUser);

    return (
     <>
       <div>
          <Dropdown
            label={<Avatar alt="User settings" img={userProfile.profilePic ? userProfile?.profilePic :"https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"} rounded />}
            arrowIcon={false}
            inline
            style={{zIndex:"99"}} >
            <Dropdown.Header >
              <span className="block text-sm">{userProfile?.username}</span>
              <span className="block truncate text-sm font-medium">{userProfile?.email}</span>
            </Dropdown.Header >
            {isAuthor ? <Link to={'/AuthorDashboard'}><Dropdown.Item >Dashboard</Dropdown.Item></Link> :<Dropdown.Item>Author Request</Dropdown.Item> }
            {/* <Dropdown.Item>Settings</Dropdown.Item> */}
            
            <Dropdown.Divider />
            <Dropdown.Item onClick={()=>setOpenModal(true)}>Sign out</Dropdown.Item>
          </Dropdown>
       </div>
       
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to SignOut ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() =>handleSignOut() }>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
     </>
    
    
    );

  }