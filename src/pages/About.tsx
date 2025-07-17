import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1954229783/3073535211.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Luxury Accommodation Takapuna
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Discover our story of elegance, luxury, and unparalleled hospitality in the heart of Takapuna
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 luxury-bg"> 
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 luxury-text">Our Story</h2>
              <p className="luxury-text-muted mb-6 text-lg leading-relaxed">
                Nestled in one of Auckland's most prestigious beachside locations, Luxury Accommodation Takapuna
                represents the pinnacle of refined hospitality. Our vision began with a simple yet profound idea:
                to create an sanctuary where luxury meets comfort, and where every guest feels like royalty.
              </p>
              <p className="luxury-text-muted mb-6 text-lg leading-relaxed">
                Located in the heart of Takapuna, we offer unparalleled access to pristine beaches, world-class
                dining, and the natural beauty that makes Auckland a global destination. Our commitment to excellence
                ensures that every moment of your stay exceeds expectations.
              </p>
              <p className="luxury-text-muted text-lg leading-relaxed">
                Under the personal guidance of Tim Cragg, our dedicated team brings decades of hospitality experience
                to create moments that last a lifetime.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1954229783/171582440.jpeg"
                alt="Luxury accommodation exterior"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 luxury-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 luxury-text">Our Values</h2>
            <p className="luxury-text-muted max-w-2xl mx-auto text-lg">
              These core principles guide everything we do, ensuring your experience is nothing short of extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-primary/10">
                  <img src="/images/image_4.jpeg" alt="Excellence" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-xl luxury-text">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted">
                  We pursue perfection in every detail, from the finest linens to personalized service
                  that anticipates your every need.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-primary/10">
                  <img src="/images/image_3.jpeg" alt="Location" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-xl luxury-text">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted">
                  Perfectly positioned between Takapuna Beach and vibrant local attractions,
                  offering the best of both tranquility and convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-primary/10">
                  <img src="/images/IMage_2.jpeg" alt="Hospitality" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-xl luxury-text">Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted">
                  Genuine warmth and personalized attention create an atmosphere where guests
                  become friends and memories become treasures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 luxury-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 luxury-text">Meet Our Team</h2>
            <p className="luxury-text-muted max-w-2xl mx-auto text-lg">
              Our passionate team is dedicated to making your stay unforgettable
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-md text-center hover:shadow-lg transition duration-300">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl text-white">TC</span>
                </div>
                <CardTitle className="text-2xl luxury-text">Tim Cragg</CardTitle>
                <p className="luxury-gold font-medium">Proprietor & Host</p>
              </CardHeader>
              <CardContent>
                <p className="luxury-text-muted leading-relaxed">
                  With a passion for hospitality and an eye for detail, Tim ensures every guest
                  experiences the finest in luxury accommodation. His personal touch and commitment
                  to excellence have made Luxury Accommodation Takapuna a destination of choice
                  for discerning travelers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
