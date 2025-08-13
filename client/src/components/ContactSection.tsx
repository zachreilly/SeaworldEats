export default function ContactSection() {

  return (
    <section id="contact" className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">Visit us for the best fish & chips in Croxley Green</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
