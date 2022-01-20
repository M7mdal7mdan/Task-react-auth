import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";

function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);
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
    authStore.signIn(user);
    

    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign In
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
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
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignInModal;
