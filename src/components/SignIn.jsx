import GoogleButton from "react-google-button";
import { UserAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const Navigate = useNavigate();

  const handleGogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      Navigate("/");
    } else {
      Navigate("/signin");
    }
  }, []);
  return (
    <div>
      <GoogleButton onClick={handleGogleSignIn} />
    </div>
  );
};

export default SignIn;
