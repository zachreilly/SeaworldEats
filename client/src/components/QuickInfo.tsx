export default function QuickInfo() {
  return (
    <section className="bg-ocean-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <i className="fas fa-clock text-golden text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <div className="space-y-1 text-blue-100">
              <div>Monday - Saturday: 11:30 AM - 11:00 PM</div>
              <div>Sunday: 2:30 PM - 9:00 PM</div>
            </div>
          </div>
          <div>
            <i className="fas fa-map-marker-alt text-golden text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Find Us</h3>
            <div className="text-blue-100">
              <div>152 Watford Rd</div>
              <div>Croxley Green, WD3 3BZ</div>
            </div>
          </div>
          <div>
            <i className="fas fa-utensils text-golden text-3xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Specialities</h3>
            <div className="text-blue-100">
              <div>Fresh Fish & Chips</div>
              <div>Kebabs & Homemade Pies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
