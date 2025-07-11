import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/layout/Hero";
import { ArrowRight, Star } from "lucide-react";
import { env } from "@/lib/env";

const Home = () => {
  return (
    <>
      <Hero
        title="Welcome to NowSites"
        subtitle="Your trusted partner for AI-powered web solutions and digital services."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/blog"
      />

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We provide cutting-edge AI solutions to help you build, optimize, and scale your digital presence. From intelligent websites to automated workflows, we're here to transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature Card 1 */}
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">AI-Powered Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Intelligent websites that adapt to your users, optimize performance, and drive conversions using advanced AI algorithms and machine learning.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Automation Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Streamline your business processes with AI-driven automation that reduces manual work and increases efficiency across all operations.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transform your data into actionable insights with AI-powered analytics that help you make informed decisions and optimize performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300">
                Contact us today to discuss how AI can revolutionize your digital strategy. Our team is ready to help you leverage the power of artificial intelligence.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="default">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">
                  Read Our Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with NowSites.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex text-[#C7F63D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic text-gray-600">
                  "NowSites transformed our website with AI-powered features that increased our conversion rate by 40%. Their team was professional and really understood our needs."
                </p>
                <p className="text-center font-semibold">
                  Sarah Johnson
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex text-[#C7F63D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic text-gray-600">
                  "The automation solutions from NowSites saved us countless hours every week. Their AI implementation was seamless and the results were immediate."
                </p>
                <p className="text-center font-semibold">
                  Michael Chen
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex text-[#C7F63D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic text-gray-600">
                  "The data analytics insights from NowSites helped us make better business decisions. Their AI tools are incredibly powerful and easy to use."
                </p>
                <p className="text-center font-semibold">
                  Emma Thompson
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
