import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Dropdown } from 'flowbite-react';
import { Link } from "react-router-dom";
import { getTokenContext } from "../../ContextApi/TokenContext";
import { AuthorAuthContext } from "../../ContextApi/AuthorContext";

export default  function AuthorProfileMenu() {
    
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
if(user.isAuthor){
    setIsAuthor(true)
}

  }, []);
console.log(existingUser);

    return (
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
          <Link to={'/'}> <Dropdown.Item>Home</Dropdown.Item></Link>
          <Dropdown.Item>Settings</Dropdown.Item>
          
          <Dropdown.Divider />
          <Dropdown.Item onClick={()=>handleSignOut()}>Sign out</Dropdown.Item>
        </Dropdown>
     </div>
    );
  }