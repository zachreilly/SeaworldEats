export default function MenuSection() {
  const menuCategories = [
    {
      title: "FISH",
      description: "Fresh fish fillets in our signature crispy batter, served with your choice of chips and traditional sides.",
      subcategories: [
        {
          name: "Cod",
          description: "Premium cod fillet",
          options: [
            { size: "Large", price: "£8.50" },
            { size: "Regular", price: "£6.50" }
          ]
        },
        {
          name: "Haddock", 
          description: "Fresh haddock fillet",
          options: [
            { size: "Large", price: "£8.50" },
            { size: "Regular", price: "£6.50" }
          ]
        },
        {
          name: "Plaice",
          description: "Delicate plaice fillet", 
          options: [
            { size: "Large", price: "£7.50" },
            { size: "Regular", price: "£5.50" }
          ]
        },
        {
          name: "Rock",
          description: "Fresh rock fish", 
          options: [
            { size: "Large", price: "£8.60" }
          ]
        }
      ]
    },
    {
      title: "CHIPS",
      description: "Golden crispy chips made from premium potatoes, cooked to perfection and served hot.",
      subcategories: [
        {
          name: "Traditional Chips",
          description: "Our signature golden chips",
          options: [
            { size: "Large", price: "£3.50" },
            { size: "Regular", price: "£2.50" }
          ]
        },
        {
          name: "Chip Extras",
          description: "Perfect accompaniments",
          options: [
            { size: "Mushy Peas", price: "£1.80" },
            { size: "Curry Sauce", price: "£1.50" },
            { size: "Gravy", price: "£1.50" }
          ]
        }
      ]
    },
    {
      title: "KEBABS", 
      description: "Authentic Mediterranean flavors with tender meats and fresh ingredients, served in warm pita or with chips.",
      subcategories: [
        {
          name: "Doner Kebabs",
          description: "Traditional doner meat",
          options: [
            { size: "Chicken", price: "£8.50" },
            { size: "Lamb", price: "£8.50" },
            { size: "Mixed", price: "£9.00" }
          ]
        },
        {
          name: "Shish Kebabs", 
          description: "Grilled meat pieces",
          options: [
            { size: "Chicken", price: "£9.50" },
            { size: "Lamb", price: "£10.50" },
            { size: "Mixed", price: "£11.00" }
          ]
        }
      ]
    },
    {
      title: "PIES",
      description: "Homemade traditional British pies with flaky pastry and hearty fillings, baked fresh daily.",
      subcategories: [
        {
          name: "Meat Pies",
          description: "Traditional savory pies",
          options: [
            { size: "Steak & Kidney", price: "£4.50" },
            { size: "Chicken & Mushroom", price: "£4.50" },
            { size: "Beef & Onion", price: "£4.50" }
          ]
        },
        {
          name: "Vegetarian",
          description: "Meat-free options", 
          options: [
            { size: "Cheese & Onion", price: "£4.00" }
          ]
        }
      ]
    }
  ];

  const SubcategoryBubble = ({ subcategory }: { subcategory: any }) => (
    <div className="relative group">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 min-h-[200px] flex flex-col justify-center items-center text-center border-4 border-golden">
        <h4 className="font-bold text-white text-xl mb-3 leading-tight">
          {subcategory.name}
        </h4>
        {subcategory.description && (
          <p className="text-blue-100 text-sm mb-4 leading-snug">{subcategory.description}</p>
        )}
        <div className="space-y-2">
          {subcategory.options.map((option: any, index: number) => (
            <div key={index} className="flex justify-between items-center bg-white/10 rounded-full px-3 py-1 min-w-[160px]">
              <span className="text-white text-sm font-medium">{option.size}</span>
              <span className="text-golden font-bold text-sm">{option.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AlternatingCategory = ({ category, isReversed }: { category: any; isReversed: boolean }) => (
    <div className={`mb-16 grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:text-right' : ''}`}>
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <h2 className="text-6xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
            {category.title}
          </span>
        </h2>
        <p className="text-xl text-blue-100 leading-relaxed">
          {category.description}
        </p>
      </div>
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {category.subcategories.map((subcategory: any, index: number) => (
            <SubcategoryBubble key={index} subcategory={subcategory} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-16 bg-ocean-blue fish-chips-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Our Menu</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Fresh ingredients, traditional recipes, and generous portions - everything you love about great British takeaway food
          </p>
        </div>

        {menuCategories.map((category, index) => (
          <AlternatingCategory 
            key={index} 
            category={category} 
            isReversed={index % 2 === 1} 
          />
        ))}
      </div>
    </section>
  );
}