import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "luxury-text";

  const fontSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  return (
    <Link to="/" className="flex items-center group">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">L</span>
        </div>
        <div className="flex flex-col">
          <span className={`font-bold ${fontSize} ${textColor} group-hover:opacity-80 transition-opacity`}>
            Luxury Accommodation
          </span>
          <span className={`text-xs ${variant === "light" ? "text-white/70" : "luxury-text-muted"} font-medium tracking-wide`}>
            TAKAPUNA
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
