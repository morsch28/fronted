import { Route, Routes } from "react-router-dom";
import UsersList from "../pages/UsersList";
import PageHeader from "../components/common/PageHeader";
import Workouts from "../pages/Workouts";
import Home from "../pages/Home";
import SignUP from "../pages/SignUp";
import SignUp from "../pages/SignUp";
import WelcomeScreen from "../components/WelcomeScreen";
import SignIn from "../pages/SignIn";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/workouts" element={<Workouts />} />
    </Routes>
  );
}

export default AppRouters;
