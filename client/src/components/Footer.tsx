export default function Footer() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-ocean-blue rounded-full flex items-center justify-center">
                <i className="fas fa-fish text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Seaworld Fish Bar</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Serving the finest fish & chips, kebabs and homemade pies in Croxley Green since day one.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={scrollToMenu} className="hover:text-golden transition-colors">
                  Our Menu
                </button>
              </li>
              <li>
                <button onClick={scrollToContact} className="hover:text-golden transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-golden transition-colors">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-golden transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-golden"></i>
                <span>01923 710019</span>
              </div>
              <div className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt text-golden mt-1"></i>
                <span>152 Watford Rd<br />Croxley Green, WD3 3BZ</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Seaworld Fish Bar. All rights reserved.</p>
          <p className="mt-2 text-sm">Made by Zach Reilly</p>
        </div>
      </div>
    </footer>
  );
}
