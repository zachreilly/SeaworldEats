export default function MenuSection() {
  const menuCategories = [
    {
      title: "FISH",
      description: "Fresh fish fillets in our signature crispy batter, served with your choice of chips and traditional sides.",
      subcategories: [
        {
          name: "Fish Menu",
          description: "All our fresh fish options",
          isTable: true,
          fishItems: [
            { name: "Cod", medium: "£8.60", large: "£9.90" },
            { name: "Haddock", medium: "-", large: "£9.90" },
            { name: "Plaice", medium: "-", large: "£9.90" },
            { name: "Rock", medium: "£8.60", large: "-" },
            { name: "OAP", medium: "£8.50", large: "-" },
            { name: "Scampi (10 pieces)", medium: "£8.40", large: "-" },
            { name: "Cod Bites (6 pieces)", medium: "£6.50", large: "-" },
            { name: "Fish Cake", medium: "£2.40", large: "-" },
            { name: "Cod Roe", medium: "£3.00", large: "-" }
          ]
        }
      ]
    },
    {
      title: "CHIPS",
      description: "Golden crispy chips made from premium potatoes, cooked to perfection and served hot.",
      subcategories: [
        {
          name: "Chips Menu",
          description: "Our chips and accompaniments",
          isTable: true,
          fishItems: [
            { name: "Chips", medium: "£2.50", large: "£3.50" },
            { name: "Mushy Peas", medium: "£1.80", large: "-" },
            { name: "Curry Sauce", medium: "£1.50", large: "-" },
            { name: "Gravy", medium: "£1.50", large: "-" }
          ]
        }
      ]
    },
    {
      title: "KEBABS", 
      description: "Authentic Mediterranean flavors with tender meats and fresh ingredients, served in warm pita or with chips.",
      subcategories: [
        {
          name: "Kebabs Menu",
          description: "All our kebab options",
          isTable: true,
          fishItems: [
            { name: "Chicken Doner", medium: "£8.50", large: "-" },
            { name: "Lamb Doner", medium: "£8.50", large: "-" },
            { name: "Mixed Doner", medium: "£9.00", large: "-" },
            { name: "Chicken Shish", medium: "£9.50", large: "-" },
            { name: "Lamb Shish", medium: "£10.50", large: "-" },
            { name: "Mixed Shish", medium: "£11.00", large: "-" }
          ]
        }
      ]
    },
    {
      title: "PIES",
      description: "Homemade traditional British pies with flaky pastry and hearty fillings, baked fresh daily.",
      subcategories: [
        {
          name: "Pies Menu",
          description: "All our homemade pies",
          isTable: true,
          fishItems: [
            { name: "Steak & Kidney Pie", medium: "£4.50", large: "-" },
            { name: "Chicken & Mushroom Pie", medium: "£4.50", large: "-" },
            { name: "Beef & Onion Pie", medium: "£4.50", large: "-" },
            { name: "Cheese & Onion Pie", medium: "£4.00", large: "-" }
          ]
        }
      ]
    }
  ];

  const SubcategoryBubble = ({ subcategory }: { subcategory: any }) => {
    if (subcategory.isTable) {
      return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-lg p-8 border-4 border-golden">
          <h4 className="font-bold text-white text-2xl mb-6 text-center">
            {subcategory.name}
          </h4>
          <div className="bg-white/10 rounded-xl p-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="font-bold text-golden text-center">Item</div>
              <div className="font-bold text-golden text-center">Medium</div>
              <div className="font-bold text-golden text-center">Large</div>
            </div>
            {subcategory.fishItems.map((fish: any, index: number) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b border-white/20 last:border-b-0">
                <div className="text-white text-sm font-medium">{fish.name}</div>
                <div className="text-white text-sm text-center">{fish.medium}</div>
                <div className="text-white text-sm text-center">{fish.large}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="relative group">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 min-h-[200px] flex flex-col justify-center items-center text-center border-4 border-golden">
          <h4 className="font-bold text-white text-xl mb-3 leading-tight">
            {subcategory.name}
          </h4>
          {subcategory.description && (
            <p className="text-blue-100 text-sm mb-4 leading-snug">{subcategory.description}</p>
          )}
          <div className="space-y-2">
            {subcategory.options?.map((option: any, index: number) => (
              <div key={index} className="flex justify-between items-center bg-white/10 rounded-full px-3 py-1 min-w-[160px]">
                <span className="text-white text-sm font-medium">{option.size}</span>
                <span className="text-golden font-bold text-sm">{option.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
        <div className={`${category.subcategories[0]?.isTable ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 gap-6'}`}>
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