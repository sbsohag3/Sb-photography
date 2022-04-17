import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import './Register.css'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    console.log("updated profile");
    navigate("/home");
  };

  return (
    <div className="register">
      <h2>Please Register</h2>
      <div className="register-form shadow border">
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            required
          />
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label
            className={`ps-2 fs-.5 ${agree ? "" : "text-danger"}`}
            htmlFor="terms"
          >
            Accept Genius Car Terms and Conditions
          </label>
          <input
            disabled={!agree}
            className="btn btn-primary mt-2"
            type="submit"
            value="Register"
          />
        </form>
        <p>
          Already have an account ?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
