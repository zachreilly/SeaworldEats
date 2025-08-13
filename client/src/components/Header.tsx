import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [closingTime, setClosingTime] = useState("11:00 PM");
  const isMobile = useIsMobile();

  useEffect(() => {
    const checkOpeningHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour * 60 + minute;

      if (day === 0) { // Sunday
        const openTime = 14 * 60 + 30; // 2:30 PM
        const closeTime = 21 * 60; // 9:00 PM
        setIsOpenNow(currentTime >= openTime && currentTime < closeTime);
        setClosingTime("9:00 PM");
      } else { // Monday - Saturday
        const openTime = 11 * 60 + 30; // 11:30 AM
        const closeTime = 23 * 60; // 11:00 PM
        setIsOpenNow(currentTime >= openTime && currentTime < closeTime);
        setClosingTime("11:00 PM");
      }
    };

    checkOpeningHours();
    const interval = setInterval(checkOpeningHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:01923710019";
  };

  return (
    <header className="bg-ocean-blue shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Seaworld Fish Bar</h1>
            <p className="text-sm text-white">Fresh Fish & Chips • Kebabs • Pies</p>
          </div>
          
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <button onClick={handleCall} className="flex items-center text-white font-semibold hover:text-gray-200 transition-colors">
                  <i className="fas fa-phone mr-2"></i>
                  <span>01923 710019</span>
                </button>
                <div className="text-sm text-white">Call for takeaway orders</div>
              </div>
              <div className="text-right">
                <div className={`flex items-center font-semibold ${isOpenNow ? 'text-green-600' : 'text-red-600'}`}>
                  <i className="fas fa-clock mr-2"></i>
                  <span>{isOpenNow ? 'Open Now' : 'Closed'}</span>
                </div>
                <div className="text-sm text-white">
                  {isOpenNow ? `Until ${closingTime}` : 'See opening hours'}
                </div>
              </div>
            </div>
          )}
          
          {isMobile && (
            <button 
              className="text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="bg-light-blue border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div className="text-center">
                <button onClick={handleCall} className="text-white font-semibold text-lg hover:text-gray-200 transition-colors">
                  01923 710019
                </button>
                <div className="text-sm text-white">Call for takeaway orders</div>
              </div>
              <div className="text-center">
                <div className={`font-semibold ${isOpenNow ? 'text-green-600' : 'text-red-600'}`}>
                  {isOpenNow ? `Open Until ${closingTime}` : 'Closed'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
