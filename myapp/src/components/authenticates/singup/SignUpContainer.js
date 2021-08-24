import { useState } from "react";
import { SignUpPresent } from "./SignUpPresent";
import firebase from "firebase";


export const SignUpContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handlePassChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setError(error.message);
      }
    };
  

    return (
        <SignUpPresent passChange={handlePassChange} emailChange={handleEmailChange} submit={handleSubmit} password={password} email={email} error={error} />
    )
}