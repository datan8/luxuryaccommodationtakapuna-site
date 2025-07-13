import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { sendContactEmail } from "@/lib/sendEmail";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: "Thank you for your inquiry! We'll be in touch within 24 hours to discuss your luxury accommodation needs."
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/1954229783/903480124.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Ready to experience luxury accommodation in Takapuna? We're here to make your stay unforgettable.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 luxury-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold luxury-text">Get in Touch</h2>
            <p className="mx-auto max-w-2xl luxury-text-muted text-lg">
              Let us help you plan the perfect luxury getaway. Contact Tim Cragg and our team to discuss your accommodation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition duration-300">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold luxury-text">Send Us a Message</h3>

                {/* Status Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-md mb-6 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium luxury-text">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium luxury-text">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium luxury-text">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+64 21 xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium luxury-text">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px] rounded-md border border-input p-3 luxury-text-muted bg-background"
                      placeholder="Tell us about your accommodation needs, preferred dates, and any special requirements..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full luxury-gold-bg hover:opacity-90 text-white font-semibold"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition duration-300">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold luxury-text">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="mr-4 h-6 w-6 luxury-gold mt-1" />
                      <div>
                        <h4 className="font-semibold luxury-text mb-1">Phone</h4>
                        <p className="luxury-text-muted">+64 9 xxx xxxx</p>
                        <p className="luxury-text-muted text-sm">Available 9am - 8pm daily</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-4 h-6 w-6 luxury-gold mt-1" />
                      <div>
                        <h4 className="font-semibold luxury-text mb-1">Email</h4>
                        <p className="luxury-text-muted">tim@luxuryaccommodationtakapuna.com</p>
                        <p className="luxury-text-muted text-sm">We respond within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="mr-4 h-6 w-6 luxury-gold mt-1" />
                      <div>
                        <h4 className="font-semibold luxury-text mb-1">Location</h4>
                        <p className="luxury-text-muted">
                          Takapuna / Milford Border<br />
                          Auckland, New Zealand<br />
                          North Shore
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-4 h-6 w-6 luxury-gold mt-1" />
                      <div>
                        <h4 className="font-semibold luxury-text mb-1">Contact Hours</h4>
                        <p className="luxury-text-muted">
                          Monday - Sunday: 9am - 8pm<br />
                          Emergency contact available 24/7<br />
                          for current guests
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-l-4 border-l-primary hover:shadow-lg transition duration-300">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold luxury-text">Why Choose Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="luxury-gold mr-3 text-xl">✨</span>
                      <p className="luxury-text-muted">Personalized luxury accommodation experiences</p>
                    </div>
                    <div className="flex items-center">
                      <span className="luxury-gold mr-3 text-xl">🏖️</span>
                      <p className="luxury-text-muted">Prime beachfront location in Takapuna</p>
                    </div>
                    <div className="flex items-center">
                      <span className="luxury-gold mr-3 text-xl">🛎️</span>
                      <p className="luxury-text-muted">Dedicated concierge and guest services</p>
                    </div>
                    <div className="flex items-center">
                      <span className="luxury-gold mr-3 text-xl">⭐</span>
                      <p className="luxury-text-muted">Exceptional attention to detail and comfort</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 luxury-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold luxury-text">Our Location</h2>
            <p className="mx-auto max-w-2xl luxury-text-muted text-lg">
              Perfectly positioned between Takapuna and Milford, just minutes from pristine beaches and vibrant local attractions
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl">
            <div className="aspect-video">
              <iframe
                title="Luxury Accommodation Takapuna Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8397857892744!2d174.7728!3d-36.7869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x4433a82a7fe0a3d5!2sTakapuna%2C%20Auckland%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1578345600000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
