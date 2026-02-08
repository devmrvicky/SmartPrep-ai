import { Link } from "react-router";
import Header from "../Header";
import Logo from "../utils/Logo";
import Navigation from "./Navigation";
import LoginBtn from "../Login-btn";

export default function LandingPageHeader() {
  return (
    <Header
      leftComponents={[<Logo />]}
      middleComponents={[<Navigation />]}
      rightComponents={[
        <Link
          to="/exams"
          className="mr-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Exams
        </Link>,
        <LoginBtn />,
      ]}
    />
  );
}
