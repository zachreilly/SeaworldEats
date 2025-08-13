import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import type { InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch for orders, inquiries, or feedback</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Enter your name"
                  className="w-full"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  placeholder="Your phone number"
                  className="w-full"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  {...form.register("message")}
                  placeholder="How can we help you?"
                  className="w-full"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-ocean-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Visit Our Restaurant</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-ocean-blue text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-800">Address</div>
                    <div className="text-gray-600">152 Watford Rd, Croxley Green, WD3 3BZ</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-phone text-ocean-blue text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">01923 710019</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-clock text-ocean-blue text-xl mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-800">Opening Hours</div>
                    <div className="text-gray-600">
                      <div>Mon-Sat: 11:30 AM - 11:00 PM</div>
                      <div>Sunday: 2:30 PM - 9:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.123456789!2d-0.443553!3d51.64684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s152+Watford+Road%2C+Croxley+Green%2C+Rickmansworth+WD3+3BZ%2C+UK!5e0!3m2!1sen!2s!4v1608123456789"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seaworld Fish Bar Location - 152 Watford Road, Croxley Green"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
