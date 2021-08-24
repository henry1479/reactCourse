import { LoginPresent } from './LoginPresent';
import { useState } from "react";
import firebase from "firebase";


export const LoginContainer  = () => {
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
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        setError(error.message);
      }
    };
  

    return (
        <LoginPresent passChange={handlePassChange} emailChange={handleEmailChange} submit={handleSubmit} password={password} email={email} error={error} />
    )
}