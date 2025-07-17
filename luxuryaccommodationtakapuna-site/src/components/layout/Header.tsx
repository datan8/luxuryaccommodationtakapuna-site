import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight, X } from "lucide-react";
import { NavDropdown } from "./NavDropdown";
import { mainNavItems, type MenuItem } from "@/data/navigationData";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if the current path matches the menu item
  const isActive = (item: MenuItem) => {
    if (item.link === "/" && location.pathname === "/") {
      return true;
    }
    return location.pathname.startsWith(item.link) && item.link !== "/";
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-900 shadow-sm border-b">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Logo variant="dark" size="sm" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {mainNavItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={item.link}
                  className={`py-6 font-medium ${
                    isActive(item) ? "luxury-gold" : "luxury-text-muted hover:luxury-gold"
                  }`}
                >
                  {item.title}
                </Link>
                {item.subItems && item.subItems.length > 0 && (
                  <NavDropdown subItems={item.subItems} />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Button asChild className="luxury-gold-bg hover:opacity-90 text-white">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <AlignRight className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <nav className="flex flex-col gap-6 mt-12">
                {mainNavItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <Link
                      to={item.link}
                      className={`text-lg font-medium ${
                        isActive(item) ? "luxury-gold" : "luxury-text"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="ml-4 flex flex-col gap-3 border-l border-gray-200 pl-4 mt-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="text-sm text-gray-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-6">
                  <Button asChild className="w-full luxury-gold-bg hover:opacity-90 text-white">
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
