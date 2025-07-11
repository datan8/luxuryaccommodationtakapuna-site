import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";

  const fontSize = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }[size];

  return (
    <Link to="/" className="flex items-center">
      <span className={`font-bold ${fontSize} ${textColor}`}>
        Your Logo
      </span>
    </Link>
  );
};

export default Logo;
