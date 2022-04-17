import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (loading || loading1) {
    return <Loading />;
  }
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div className="mb-2">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary w-100  mx-auto d-block "
        >
          <FcGoogle className="fs-4 me-2" />
          Google Sign In
        </button>
      </div>

      <div className="mb-2">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-100 mx-auto d-block "
        >
          <BsGithub className="fs-4 me-2" />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
