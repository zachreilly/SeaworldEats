export default function Hero() {
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
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
    </section>
  );
}
