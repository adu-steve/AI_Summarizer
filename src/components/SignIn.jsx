import GoogleButton from "react-google-button";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const { signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log(`User: ${user}`);
    }
  }, [user]);
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
      <GoogleButton
        onClick={() =>
          signInWithGoogle()
            .then(
              (user) => console.log(`User: ${user}`),

              navigate("/")
            )
            .catch((error) => console.log(error))
        }
      />
    </div>
  );
};

export default SignIn;
