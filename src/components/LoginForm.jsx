import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [messageEmail ,setMessageEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [messagePassword ,setMessagePassword] = useState("");

  const emailValidation = () => {
    const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g; //Used Regular Expression here.
    const regExPassword = /[0-9]/g;
    if (regExEmail.test(email)) {
       setMessageEmail("Valid Email");
       } else if (!regExEmail.test(email)) {
            setMessageEmail("Invalid email");
       } else {
           setMessageEmail("");
       }

       if (regExPassword.test(password)) {
        setMessagePassword("Valid Password");
        } else if (!regExPassword.test(password)) {
             setMessagePassword("Invalid Password");
        } else {
            setMessagePassword("");
        }
      }

  return (
    <>
      <form>
        <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded loginform">
          <div className="loginformhead">
            <h1>Welcome Back!</h1>
          </div>
          <div className="input-icons">
            <p>Email</p>
            <i className="icon">
              <MdOutlineEmail />
            </i>
            
            <input
              className="input-field emailtext"
              type="text"
              placeholder="Enter Your Email "
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <p>{messageEmail}</p>
          </div>
          <div className="input-icons">
            <p>Password</p>
            <i className="icon">
              <CiLock />
            </i>
            
            <input
              className="input-field"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <p>{messagePassword}</p>
          </div>
          <button
            type="button"
            className="btn btn-info inputbutton"
            onClick={emailValidation}
          >
            <div className="text">Log In</div>
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
