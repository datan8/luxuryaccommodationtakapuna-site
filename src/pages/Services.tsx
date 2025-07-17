import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1954229783/2418867505.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Luxury Services & Amenities
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Experience unparalleled comfort with our comprehensive range of premium services
          </p>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 luxury-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 luxury-text">Luxury Accommodation</h2>
            <p className="luxury-text-muted max-w-2xl mx-auto text-lg">
              Each accommodation is thoughtfully designed to provide the ultimate in comfort and sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 luxury-text">Premium Suites</h3>
              <ul className="space-y-4 luxury-text-muted text-lg">
                <li className="flex items-center">
                  <span className="luxury-gold mr-3">•</span>
                  Spacious open-plan living areas with floor-to-ceiling windows
                </li>
                <li className="flex items-center">
                  <span className="luxury-gold mr-3">•</span>
                  Master bedrooms with luxury linens and premium mattresses
                </li>
                <li className="flex items-center">
                  <span className="luxury-gold mr-3">•</span>
                  Ensuite bathrooms with rainfall showers and premium amenities
                </li>
                <li className="flex items-center">
                  <span className="luxury-gold mr-3">•</span>
                  Fully equipped gourmet kitchens with top-of-the-line appliances
                </li>
                <li className="flex items-center">
                  <span className="luxury-gold mr-3">•</span>
                  Private outdoor spaces with stunning views
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/1954229783/2054035726.jpeg"
                alt="Luxury bathroom and amenities"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 luxury-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 luxury-text">Premium Services</h2>
            <p className="luxury-text-muted max-w-2xl mx-auto text-lg">
              Our comprehensive services ensure every aspect of your stay is effortless and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Concierge Services */}
            <Card className="hover:shadow-lg transition duration-300 text-center">
              <CardHeader>
                <div className="w-full h-48 overflow-hidden mb-6 shadow-lg rounded-lg">
                  <img
                    src="https://media.istockphoto.com/id/1268469291/photo/hotel-service-bell-concept-hotel-travel-room-modern-luxury-hotel-reception-counter-desk-on.jpg?s=612x612&w=0&k=20&c=CpI6gSizlG6rH45gKqbMmN2l9D7TOhBtGpNxD3wvv64="
                    alt="Concierge Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl luxury-text">Concierge Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted mb-4">
                  Personalized assistance with restaurant reservations, activity bookings,
                  and local recommendations from our knowledgeable team.
                </p>
                <ul className="space-y-2 luxury-text-muted text-sm">
                  <li>• Restaurant recommendations & reservations</li>
                  <li>• Local attraction bookings</li>
                  <li>• Transportation arrangements</li>
                  <li>• Event planning assistance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Spa & Wellness */}
            <Card className="hover:shadow-lg transition duration-300 text-center">
              <CardHeader>
                <div className="w-full h-48 overflow-hidden mb-6 shadow-lg rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop&crop=center"
                    alt="Spa & Wellness"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl luxury-text">Spa & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted mb-4">
                  Rejuvenate your mind and body with our premium wellness services
                  available on-site or through our trusted partners.
                </p>
                <ul className="space-y-2 luxury-text-muted text-sm">
                  <li>• In-room massage services</li>
                  <li>• Yoga & meditation sessions</li>
                  <li>• Wellness consultations</li>
                  <li>• Premium spa product amenities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experiences */}
            <Card className="hover:shadow-lg transition duration-300 text-center">
              <CardHeader>
                <div className="w-full h-48 overflow-hidden mb-6 shadow-lg rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop&crop=center"
                    alt="Dining Experiences"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl luxury-text">Dining Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted mb-4">
                  Savor exceptional culinary experiences from local delicacies
                  to international cuisine, all curated for your pleasure.
                </p>
                <ul className="space-y-2 luxury-text-muted text-sm">
                  <li>• Private chef services</li>
                  <li>• Wine & champagne selections</li>
                  <li>• Gourmet breakfast delivery</li>
                  <li>• Local restaurant partnerships</li>
                </ul>
              </CardContent>
            </Card>

            {/* Business Services */}
            <Card className="hover:shadow-lg transition duration-300 text-center">
              <CardHeader>
                <div className="w-full h-48 overflow-hidden mb-6 shadow-lg rounded-lg">
                  <img
                    src="https://www.shutterstock.com/image-photo/aesthetic-luxury-bohemian-minimalist-home-600nw-2129793905.jpg"
                    alt="Business Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl luxury-text">Business Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted mb-4">
                  Stay productive with our comprehensive business amenities
                  and professional support services.
                </p>
                <ul className="space-y-2 luxury-text-muted text-sm">
                  <li>• High-speed WiFi throughout</li>
                  <li>• Dedicated workspace areas</li>
                  <li>• Printing & scanning services</li>
                  <li>• Video conferencing setup</li>
                </ul>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="hover:shadow-lg transition duration-300 text-center">
              <CardHeader>
                <div className="w-full h-48 overflow-hidden mb-6 shadow-lg rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center"
                    alt="Transportation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl luxury-text">Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted mb-4">
                  Seamless transportation solutions to ensure you travel
                  in comfort and style throughout your stay.
                </p>
                <ul className="space-y-2 luxury-text-muted text-sm">
                  <li>• Airport transfer arrangements</li>
                  <li>• Luxury vehicle rentals</li>
                  <li>• Chauffeur services</li>
                  <li>• Local taxi partnerships</li>
                </ul>
              </CardContent>
            </Card>

            {/* Recreational Activities */}
            <Card className="hover:shadow-lg transition duration-300 text-center">
              <CardHeader>
                <div className="w-full h-48 overflow-hidden mb-6 shadow-lg rounded-lg">
                  <img
                    src="https://casamarinaresort.com/wp-content/uploads/210114_Casa-Marina_Beach-Activities_1000x665.jpg"
                    alt="Recreation & Leisure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl luxury-text">Recreation & Leisure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted mb-4">
                  Discover the best of Takapuna and Auckland with our curated
                  recreational activities and local experiences.
                </p>
                <ul className="space-y-2 luxury-text-muted text-sm">
                  <li>• Beach access & equipment</li>
                  <li>• Walking tour arrangements</li>
                  <li>• Golf course access</li>
                  <li>• Water sports bookings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 luxury-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 luxury-text">
            Ready to Experience Luxury?
          </h2>
          <p className="luxury-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and let us create
            a bespoke experience tailored to your needs.
          </p>
          <Button asChild size="lg" className="luxury-gold-bg hover:opacity-90">
            <Link to="/contact">
              Book Your Stay
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
