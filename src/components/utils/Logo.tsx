import { APP_NAME } from "@/constants/constants";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router";

export default function Logo({ className = "" }) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      className={`flex items-center gap-2 cursor-pointer ${className}`}
      onClick={() => navigate("/")}
    >
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-black dark:text-white font-bold">S</span>
      </div>
      <span className="font-bold text-xl text-white dark:text-black">
        {APP_NAME}
      </span>
      <Badge variant={"default"}>Beta</Badge>
    </div>
  );
}
