import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState({
    
  });
  const [user,setUser] = useState({
    username:"",
    password:"",
  })

  const handleChange =(event) =>{
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    // to do : stop page from refreshing
    // call a function to sign up
    event.preventDefault();
    authStore.signUp(user);
    

    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            
          
              <input placeholder="Username"
              type="text"
              value={user.username}
              name="username"
              onChange={handleChange}
              
              />

              <input placeholder="Password"
              type="password"
              value={user.password}
              name="password"
              onChange={handleChange}
              
              />
              
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
