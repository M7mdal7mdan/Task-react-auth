import React from "react";
import { Nav } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import authStore from "../stores/authStore";
import {observer}from "mobx-react";

function Navbar() {


  //authStore.user
  return (
    <Nav className="justify-content-end" bg="light" expand="lg">
      
      <li >Hello{authStore.user? authStore.user.username:""}</li>
      
      {authStore.user?(
      <li>
        <button onClick={authStore.logout}>Logout</button>
      </li>
    ):(
      <>
      <SignUpModal 
     
      />
      <SignInModal
      />
    </>)}
    </Nav>
  )

}
export default observer(Navbar);
