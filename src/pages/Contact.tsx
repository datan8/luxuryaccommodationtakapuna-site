import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { sendContactEmail } from "@/lib/sendEmail";
import { env } from '@/lib/env';

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
          message: "Thank you for your message! We'll be in touch soon."
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
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card className="border-l-4 border-l-[#C7F63D] hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 rounded-md mb-4 ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px] rounded-md border border-gray-300 p-2"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-l-4 border-l-[#C7F63D] hover:shadow-lg transition duration-300">
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-[#C7F63D]" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">{env.contactPhone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-[#C7F63D]" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">{env.contactEmail}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-[#C7F63D]" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      {env.contactAddress.line1}<br />
                      {env.contactAddress.suburb}<br />
                      {env.contactAddress.city} {env.contactAddress.postcode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-[#C7F63D]" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="border-l-4 border-l-[#C7F63D] hover:shadow-lg transition duration-300">
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Find Us</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(`${env.contactAddress.line1}, ${env.contactAddress.suburb}, ${env.contactAddress.city} ${env.contactAddress.postcode}`)}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
