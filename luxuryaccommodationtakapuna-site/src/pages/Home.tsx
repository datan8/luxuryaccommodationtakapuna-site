import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/layout/Hero";
import { ArrowRight, Star, Wifi, Car, Waves, Coffee, Sparkles, MapPin } from "lucide-react";

const Home = () => {
  return (
    <>
      <Hero
        title="Luxury Accommodation Takapuna"
        subtitle="Experience unparalleled elegance and comfort in Auckland's premier beachside destination."
        primaryButtonText="Book Your Stay"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />

      {/* Features Section */}
      <section className="py-16 luxury-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold luxury-text">Exceptional Amenities</h2>
            <p className="mx-auto max-w-2xl luxury-text-muted text-lg">
              Discover world-class amenities designed to elevate your stay. From beachfront access to premium concierge services, every detail is crafted for your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature Card 1 */}
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 luxury-gold" />
                </div>
                <CardTitle className="text-xl font-bold luxury-text">Beachfront Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted">
                  Just steps from pristine Takapuna Beach with exclusive access to coastal walks,
                  water activities, and breathtaking harbour views.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 luxury-gold" />
                </div>
                <CardTitle className="text-xl font-bold luxury-text">Premium Suites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted">
                  Luxuriously appointed accommodations featuring modern amenities, underfloor heating,
                  and private garden outlooks for the ultimate comfort.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 luxury-gold" />
                </div>
                <CardTitle className="text-xl font-bold luxury-text">Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted">
                  Perfectly positioned between Takapuna and Milford with walking access to cafes,
                  restaurants, shops, and convenient public transport.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 luxury-bg">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold luxury-text">Discover Takapuna Luxury</h2>
            <p className="mx-auto max-w-2xl luxury-text-muted text-lg">
              Immerse yourself in the elegance and sophistication of our premium accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/1954229783/903480124.jpeg"
                alt="Luxury accommodation exterior"
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/1954229783/1788578286.jpeg"
                alt="Modern interior living space"
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/1954229783/3014073110.jpeg"
                alt="Luxury bedroom and ensuite"
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 luxury-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold luxury-text">Luxury Services</h2>
            <p className="mx-auto max-w-2xl luxury-text-muted text-lg">
              Every service is designed to exceed your expectations and create unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 luxury-gold" />
              </div>
              <h3 className="font-semibold luxury-text mb-2">High-Speed WiFi</h3>
              <p className="luxury-text-muted text-sm">Complimentary throughout</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 luxury-gold" />
              </div>
              <h3 className="font-semibold luxury-text mb-2">Secure Parking</h3>
              <p className="luxury-text-muted text-sm">Free street parking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 luxury-gold" />
              </div>
              <h3 className="font-semibold luxury-text mb-2">Concierge Service</h3>
              <p className="luxury-text-muted text-sm">Personalized assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 luxury-gold" />
              </div>
              <h3 className="font-semibold luxury-text mb-2">Premium Amenities</h3>
              <p className="luxury-text-muted text-sm">Luxury touches throughout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 luxury-gold-bg text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Experience Luxury?
              </h2>
              <p className="text-white/90">
                Contact us today to reserve your stay at Auckland's premier luxury accommodation.
                Our team is ready to create an unforgettable experience tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/services" className="flex items-center gap-2">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 luxury-bg">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold luxury-text">Guest Experiences</h2>
            <p className="mx-auto max-w-2xl luxury-text-muted text-lg">
              Discover what our valued guests say about their luxury experiences with us
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic luxury-text-muted">
                  "The most exquisite accommodation we've experienced in Auckland. Every detail was perfect,
                  from the stunning location to the impeccable service. We'll definitely return!"
                </p>
                <p className="text-center font-semibold luxury-text">
                  Sarah & Michael Thompson
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic luxury-text-muted">
                  "Tim's attention to detail and warm hospitality made our anniversary celebration truly special.
                  The beach access and luxury amenities exceeded all expectations."
                </p>
                <p className="text-center font-semibold luxury-text">
                  Emma & James Wilson
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic luxury-text-muted">
                  "A perfect blend of luxury and comfort in the heart of Takapuna.
                  The convenience to local attractions while maintaining privacy was ideal for our family."
                </p>
                <p className="text-center font-semibold luxury-text">
                  David & Lisa Chen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
