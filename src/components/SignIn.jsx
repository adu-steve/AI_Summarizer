import GoogleButton from "react-google-button";
import { UserAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default SignIn;
