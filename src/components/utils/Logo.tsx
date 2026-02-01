import { APP_NAME } from "@/constants/constants";
import { Badge } from "../ui/badge";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">S</span>
      </div>
      <span className="font-bold text-xl dark:text-white">{APP_NAME}</span>
      <Badge variant={"default"}>Beta</Badge>
    </div>
  );
}
