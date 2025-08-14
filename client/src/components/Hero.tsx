import { useState, useEffect } from "react";
import img1 from "@assets/IMG_3410_1755189680694.jpeg";
import img2 from "@assets/IMG_3411_1755189680694.jpeg";
import img3 from "@assets/IMG_3412_1755189680694.jpeg";
import img4 from "@assets/IMG_3413_1755189680694.jpeg";
import img5 from "@assets/IMG_3414_1755189680692.jpeg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.location.href = "tel:01923710019";
  };

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Seaworld Fish Bar - Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.05) saturate(1.1)'
            }}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      
      {/* Lighter Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Fresh Fish & Chips</h2>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
            Serving Croxley Green with the finest fish & chips, kebabs and homemade pies since day one
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToMenu}
              className="bg-golden hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              View Our Menu
            </button>
            <button 
              onClick={handleCall}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-ocean-blue text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>Order Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
