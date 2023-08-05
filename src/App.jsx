import Home from "./components/Home";
import SignIn from "./components/SignIn";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
