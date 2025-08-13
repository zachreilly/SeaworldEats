export default function MenuSection() {
  // Fish & Chips Menu
  const fishChipsItems = [
    { name: "Cod", price: "£8.50", size: "Large" },
    { name: "Haddock", price: "£7.95", size: "Large" },
    { name: "Plaice & Chips", price: "£7.50", size: "Regular" },
    { name: "Cod", price: "£6.50", size: "Regular" },
    { name: "Haddock", price: "£5.95", size: "Regular" },
    { name: "Large Chips", price: "£2.50", size: "" },
    { name: "Chips", price: "£1.80", size: "" },
    { name: "Mushy Peas", price: "£1.20", size: "" },
    { name: "Curry Sauce", price: "£1.50", size: "" },
    { name: "Gravy", price: "£1.20", size: "" }
  ];

  // Kebabs Menu
  const kebabItems = [
    { name: "Chicken Doner Kebab", price: "£6.50", description: "In pitta or naan" },
    { name: "Lamb Doner Kebab", price: "£7.00", description: "In pitta or naan" },
    { name: "Mixed Doner Kebab", price: "£7.50", description: "Chicken & lamb" },
    { name: "Chicken Shish Kebab", price: "£8.00", description: "Grilled chicken pieces" },
    { name: "Lamb Shish Kebab", price: "£8.50", description: "Grilled lamb pieces" },
    { name: "Mixed Shish Kebab", price: "£9.00", description: "Chicken & lamb shish" },
    { name: "Chicken Tikka Kebab", price: "£8.50", description: "Marinated chicken" },
    { name: "Doner Meat & Chips", price: "£7.50", description: "No bread" },
    { name: "Chicken Wings (6)", price: "£5.50", description: "Spicy or plain" }
  ];

  // Pies Menu
  const pieItems = [
    { name: "Steak & Kidney Pie", price: "£4.50" },
    { name: "Chicken & Mushroom Pie", price: "£4.25" },
    { name: "Minced Beef Pie", price: "£4.00" },
    { name: "Chicken Balti Pie", price: "£4.50" },
    { name: "Steak & Ale Pie", price: "£4.75" }
  ];

  // Burgers Menu
  const burgerItems = [
    { name: "Beef Burger", price: "£4.50", description: "With salad" },
    { name: "Chicken Burger", price: "£4.25", description: "With salad" },
    { name: "Fish Burger", price: "£4.00", description: "With salad" },
    { name: "Veggie Burger", price: "£3.75", description: "With salad" }
  ];

  // Sides & Extras
  const sidesItems = [
    { name: "Onion Rings (8)", price: "£3.50" },
    { name: "Chicken Nuggets (6)", price: "£4.00" },
    { name: "Scampi (8)", price: "£5.50" },
    { name: "Saveloy", price: "£2.50" },
    { name: "Pickled Onion", price: "£0.80" },
    { name: "Pickled Egg", price: "£1.00" },
    { name: "Bread Roll", price: "£1.20" },
    { name: "Extra Portion Chips", price: "£2.50" }
  ];

  // Drinks
  const drinkItems = [
    { name: "Soft Drinks (Cans)", price: "£1.50", description: "Coke, Pepsi, Fanta, etc." },
    { name: "Soft Drinks (Bottles)", price: "£2.00", description: "500ml bottles" },
    { name: "Water", price: "£1.20", description: "Still or sparkling" },
    { name: "Tea/Coffee", price: "£1.80", description: "Hot drinks" }
  ];

  const BubbleMenuItem = ({ item }: { item: any }) => (
    <div className="relative group">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 min-h-[160px] flex flex-col justify-center items-center text-center border-4 border-golden">
        <h4 className="font-bold text-white text-lg mb-2 leading-tight">
          {item.name}
        </h4>
        {item.size && (
          <div className="bg-golden text-blue-900 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {item.size}
          </div>
        )}
        {item.description && (
          <p className="text-blue-100 text-sm mb-3 leading-snug">{item.description}</p>
        )}
        <div className="bg-white text-blue-900 font-bold text-lg px-4 py-1 rounded-full shadow-md">
          {item.price}
        </div>
      </div>
    </div>
  );

  const MenuCategory = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <BubbleMenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-16 bg-ocean-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Menu</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Fresh ingredients, traditional recipes, and generous portions - everything you love about great British takeaway food
          </p>
        </div>

        <MenuCategory title="Fish & Chips" items={fishChipsItems} />
        <MenuCategory title="Kebabs" items={kebabItems} />
        <MenuCategory title="Homemade Pies" items={pieItems} />
        <MenuCategory title="Burgers" items={burgerItems} />
        <MenuCategory title="Sides & Extras" items={sidesItems} />
        <MenuCategory title="Drinks" items={drinkItems} />
      </div>
    </section>
  );
}
