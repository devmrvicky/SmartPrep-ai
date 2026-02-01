import { Button } from "./ui/button";
import { useNavigate } from "react-router";

export default function LoginBtn() {
  const navigate = useNavigate();
  return (
    <Button
      className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      onClick={() => navigate("/login")}
    >
      Login
    </Button>
  );
}
