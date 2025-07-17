import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  backgroundImage = "/images/hero_background_collage_v2.jpg",
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury background image with parallax effect */}
      <div
        className="absolute -top-20 -bottom-20 left-0 right-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      />

      {/* Gradient overlay for text readability and luxury effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/40" />

      {/* Additional subtle overlay for enhanced readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {subtitle && (
          <p className="text-xl text-white/95 mb-6 drop-shadow-lg">{subtitle}</p>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonText && primaryButtonLink && (
            <Button asChild size="lg" className="luxury-gold-bg hover:opacity-90 text-white font-semibold shadow-xl backdrop-blur-sm">
              <Link to={primaryButtonLink}>
                {primaryButtonText}
              </Link>
            </Button>
          )}

          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild size="lg" className="bg-[#A18F63E6] text-[#FFFFFF] text-white hover:bg-white hover:text-gray-900 shadow-xl backdrop-blur-sm font-semibold">
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
