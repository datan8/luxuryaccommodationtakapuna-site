import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = "/images/hero-bg.jpg",
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
      {/* Simple background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {subtitle && (
          <p className="text-lg text-gray-600 mb-4">{subtitle}</p>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonText && primaryButtonLink && (
            <Button asChild size="lg">
              <Link to={primaryButtonLink}>
                {primaryButtonText}
              </Link>
            </Button>
          )}
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button variant="outline" asChild size="lg">
              <Link to={secondaryButtonLink}>
                {secondaryButtonText}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
