import { logo } from "../assets";
import { UserAuth } from "../AuthContext";
import { Link } from "react-router-dom";
const Hero = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/adu-steve/AI_Summarizer");
          }}
          className="black_btn"
        >
          Github
        </button>
        {user?.displayName ? (
          <button onClick={handleSignOut}>LogOut</button>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OPENAI</span>
      </h1>
      <h2 className="desc">
        Summarize your reading with Sumz, an open-source article summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
