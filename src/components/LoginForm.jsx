import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
const LoginForm = () => {
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
              />
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
            />
          </div>
          <button type="button" className="btn btn-info inputbutton">
            <div className="text">Log In</div>
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
