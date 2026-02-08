import type { JSX } from "react";
import { Button } from "../ui/button";

type btnVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;
type btnType = "button" | "submit" | "reset" | undefined;
interface BtnProps {
  btnType?: btnType;
  handleBtnClick?: () => void;
  disabled: boolean;
  icon?: JSX.Element;
  btnText: string;
  variant?: btnVariant;
  isHandeling: boolean;
  btnTextOnHandeling?: string;
  className?: string;
}

export default function Btn({
  btnType = "button",
  handleBtnClick,
  disabled,
  icon,
  btnText,
  variant,
  isHandeling,
  btnTextOnHandeling,
  className = "",
}: BtnProps) {
  return (
    <Button
      type={btnType}
      variant={variant}
      className={`${className}`}
      onClick={handleBtnClick}
      disabled={disabled}
    >
      {icon && icon}
      {isHandeling ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          {btnTextOnHandeling ? btnTextOnHandeling : btnText}
        </>
      ) : (
        btnText
      )}
    </Button>
  );
}
