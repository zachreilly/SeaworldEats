export default function MenuSection() {
  const fishChipsItems = [
    {
      name: "Fresh Cod & Chips",
      description: "Premium cod fillet in golden batter with hand-cut chips",
      price: "£8.50",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Most Popular"
    },
    {
      name: "Haddock & Chips",
      description: "Traditional haddock fillet with crispy golden chips",
      price: "£7.95",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Plaice & Chips",
      description: "Delicate plaice fillet with hand-cut thick chips",
      price: "£7.50",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const kebabItems = [
    {
      name: "Chicken Doner",
      description: "Tender chicken doner with fresh salad and pitta",
      price: "£6.50",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Lamb Doner",
      description: "Succulent lamb doner with fresh vegetables",
      price: "£7.00",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Mixed Kebab",
      description: "Best of both - chicken and lamb doner combination",
      price: "£7.50",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      badge: "Chef's Choice"
    }
  ];

  const pieItems = [
    {
      name: "Steak & Kidney",
      description: "Traditional recipe with tender beef and rich gravy",
      price: "£4.50",
      image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Chicken & Mushroom",
      description: "Tender chicken with mushrooms in creamy sauce",
      price: "£4.25",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Minced Beef",
      description: "Hearty minced beef with vegetables and herbs",
      price: "£4.00",
      image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const MenuCard = ({ item }: { item: any }) => (
    <div className="bg-warm-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h4>
        <p className="text-gray-600 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-ocean-blue">{item.price}</span>
          {item.badge && (
            <span className={`text-sm font-medium ${
              item.badge === "Most Popular" ? "text-green-600" : "text-golden"
            }`}>
              {item.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and generous portions - everything you love about great British takeaway food
          </p>
        </div>

        {/* Fish & Chips Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-ocean-blue mb-8 text-center">Fish & Chips</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fishChipsItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Kebabs Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-ocean-blue mb-8 text-center">Kebabs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kebabItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Pies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-ocean-blue mb-8 text-center">Homemade Pies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pieItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
