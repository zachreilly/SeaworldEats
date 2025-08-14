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
      title: "CHIPS & SIDES",
      description: "Golden crispy chips made from premium potatoes, cooked to perfection and served hot with traditional accompaniments.",
      subcategories: [
        {
          name: "Chips & Sides Menu",
          description: "Our chips and accompaniments",
          isTable: true,
          isChips: true,
          fishItems: [
            { name: "Chips", medium: "£3.20", large: "£4.40" },
            { name: "Chip Butty", medium: "£3.50", large: "-" },
            { name: "Cheesy Bits", medium: "£5.00", large: "-" },
            { name: "Mushy Peas", medium: "£1.90", large: "-" },
            { name: "Curry Sauce", medium: "£1.90", large: "-" },
            { name: "Gravy", medium: "£1.90", large: "-" },
            { name: "Beans", medium: "£1.90", large: "-" },
            { name: "Pickled Onions", medium: "£1.00", large: "-" },
            { name: "Buttered Roll", medium: "£0.90", large: "-" },
            { name: "Hummus", medium: "£1.90", large: "-" }
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
            { name: "Lamb Doner Kebab", medium: "£8.20", large: "£10.20", extra: "£12.20" },
            { name: "Lamb Shish Kebab", medium: "£9.20", large: "£12.90", extra: "£14.90" },
            { name: "Lamb Kofte Kebab", medium: "£9.20", large: "£12.90", extra: "£14.90" },
            { name: "Chicken Shish Kebab", medium: "£9.20", large: "£12.90", extra: "£14.90" },
            { name: "Lamb Doner & Lamb Shish", medium: "-", large: "-", extra: "£13.90" },
            { name: "Lamb Shish & Lamb Kofte", medium: "-", large: "-", extra: "£13.90" },
            { name: "Lamb Kofte & Lamb Doner", medium: "-", large: "-", extra: "£13.90" },
            { name: "Lamb Doner & Chicken Shish", medium: "-", large: "-", extra: "£13.90" },
            { name: "Mixed Kebab (all meats)", medium: "-", large: "-", extra: "£22.90" },
            { name: "Doner Meat and Chips", medium: "£8.20", large: "£10.20", extra: "-" },
            { name: "Box Doner Meat", medium: "£5.00", large: "-", extra: "-" }
          ]
        }
      ]
    },
    {
      title: "PIES",
      description: "Traditional British pies with flaky pastry and hearty fillings, baked fresh daily with authentic recipes.",
      subcategories: [
        {
          name: "Pies Menu",
          description: "Traditional pie options",
          isTable: true,
          fishItems: [
            { name: "Steak & Kidney Pie", medium: "£4.10", large: "-" },
            { name: "Chicken & Mushroom Pie", medium: "£4.10", large: "-" },
            { name: "Beef & Onion Pie", medium: "£4.10", large: "-" },
            { name: "Pancake Roll", medium: "£2.40", large: "-" }
          ]
        }
      ]
    },
    {
      title: "SAUSAGES",
      description: "Premium quality sausages including traditional and specialty varieties, served hot and fresh.",
      subcategories: [
        {
          name: "Sausages Menu",
          description: "All our sausage options",
          isTable: true,
          fishItems: [
            { name: "Jumbo Sausage", medium: "£2.40", large: "-" },
            { name: "Jumbo Saveloy", medium: "£2.40", large: "-" },
            { name: "Jumbo Battered Sausage", medium: "£2.60", large: "-" }
          ]
        }
      ]
    },
    {
      title: "CHICKEN & BURGERS",
      description: "Freshly prepared chicken pieces and gourmet burgers made with quality ingredients and served with your choice of sides.",
      subcategories: [
        {
          name: "Chicken & Burgers Menu",
          description: "Chicken and burger options",
          isTable: true,
          fishItems: [
            { name: "Chicken Quarter", medium: "£4.50", large: "-" },
            { name: "Chicken Half", medium: "£7.10", large: "-" },
            { name: "Chicken Nuggets (6pcs)", medium: "£4.50", large: "-" },
            { name: "Beef Burger", medium: "£4.60", large: "£6.20" },
            { name: "Cheese Burger", medium: "£4.80", large: "£6.60" },
            { name: "Chicken Burger", medium: "£4.80", large: "-" },
            { name: "Chicken Sandwich", medium: "£6.30", large: "-" },
            { name: "Fish Fillet Burger", medium: "£5.50", large: "-" },
            { name: "Vegetarian Burger", medium: "£4.80", large: "-" }
          ]
        }
      ]
    },
    {
      title: "SIDES & EXTRAS",
      description: "Delicious side orders and extras to complement your meal, including crispy appetizers and fresh vegetables.",
      subcategories: [
        {
          name: "Sides & Extras Menu",
          description: "Additional sides and extras",
          isTable: true,
          fishItems: [
            { name: "Breaded Mushrooms (10pcs)", medium: "£4.00", large: "-" },
            { name: "Mozzarella Sticks (6pcs)", medium: "£4.50", large: "-" },
            { name: "Fish Fingers (6pcs)", medium: "£4.00", large: "-" },
            { name: "Calamari Rings (6pcs)", medium: "£5.50", large: "-" },
            { name: "Halloumi Fries (4pcs)", medium: "£4.50", large: "-" },
            { name: "Pineapple Fritter (4pcs)", medium: "£3.50", large: "-" },
            { name: "Onion Rings (8pcs)", medium: "£3.50", large: "-" }
          ]
        }
      ]
    },
    {
      title: "VEGETARIAN",
      description: "Delicious plant-based options including fresh falafel, creamy halloumi, and nutritious salads for vegetarian diners.",
      subcategories: [
        {
          name: "Vegetarian Menu",
          description: "Plant-based meal options",
          isTable: true,
          fishItems: [
            { name: "Falafel Kebab", medium: "£6.90", large: "-" },
            { name: "Halloumi Kebab", medium: "£6.90", large: "-" },
            { name: "Hummus in Pitta", medium: "£5.30", large: "-" },
            { name: "Salad in Pitta Bread", medium: "£4.30", large: "-" },
            { name: "Vegetarian Burger", medium: "£4.80", large: "-" },
            { name: "Chips in Pitta Bread", medium: "£4.00", large: "-" }
          ]
        }
      ]
    },
    {
      title: "WRAPS",
      description: "Fresh wraps with tender meats, crispy vegetables, and authentic Mediterranean flavors wrapped in soft tortillas.",
      subcategories: [
        {
          name: "Wraps Menu",
          description: "All our wrap options",
          isTable: true,
          fishItems: [
            { name: "Doner Kebab Wrap", medium: "£8.20", large: "-" },
            { name: "Lamb Kofte Wrap", medium: "£9.20", large: "-" },
            { name: "Lamb Shish Wrap", medium: "£9.20", large: "-" },
            { name: "Chicken Shish Wrap", medium: "£9.20", large: "-" },
            { name: "Falafel Wrap", medium: "£6.90", large: "-" },
            { name: "Halloumi Wrap", medium: "£6.90", large: "-" }
          ]
        }
      ]
    },
    {
      title: "KIDS MEALS",
      description: "Specially portioned meals for children, featuring their favorite items served with chips at great value prices.",
      subcategories: [
        {
          name: "Kids Menu",
          description: "Child-friendly meal options",
          isTable: true,
          fishItems: [
            { name: "Fishcake & Chips", medium: "£5.00", large: "-" },
            { name: "Chicken Nugget & Chips (4pcs)", medium: "£5.00", large: "-" },
            { name: "Sausage & Chips", medium: "£5.00", large: "-" },
            { name: "Fish Fingers & Chips (3pcs)", medium: "£5.00", large: "-" },
            { name: "Battered Sausage & Chips", medium: "£5.00", large: "-" }
          ]
        }
      ]
    },
    {
      title: "DRINKS & CONDIMENTS",
      description: "Refreshing drinks to complement your meal and essential condiments to enhance your dining experience.",
      subcategories: [
        {
          name: "Drinks & Condiments Menu",
          description: "Beverages and condiments",
          isTable: true,
          fishItems: [
            { name: "Can Drinks", medium: "£1.30", large: "-" },
            { name: "Water", medium: "£1.00", large: "-" },
            { name: "Ribena", medium: "£1.30", large: "-" },
            { name: "Fruit Shoot", medium: "£1.00", large: "-" },
            { name: "Big Bottle Drinks", medium: "£2.50", large: "-" },
            { name: "Bottle Ketchup", medium: "£2.20", large: "-" },
            { name: "Bottle Vinegar", medium: "£2.20", large: "-" }
          ]
        }
      ]
    },
    {
      title: "SENIORS FISH & CHIPS MEAL",
      description: "Special discounted meals for our senior customers, featuring smaller portions at great value prices.",
      subcategories: [
        {
          name: "Lunch Meal Deals - ALL £8.50",
          description: "All meals include curry sauce or mushy peas & cans - Special Deal Price £8.50",
          isTable: true,
          isSeniors: true,
          fishItems: [
            { name: "Cod & Chips with Peas or Curry Sauce", medium: "£9.50", large: "-" },
            { name: "Sausage & Chips with Curry Sauce or Mushy Peas", medium: "£6.50", large: "-" },
            { name: "Fish Cake & Chips with Curry Sauce or Mushy Peas", medium: "£6.50", large: "-" },
            { name: "Chicken Nugget (8 pcs) & Chips with Curry Sauce or Mushy Peas", medium: "£8.00", large: "-" },
            { name: "Quarter Chicken & Chips with Curry Sauce or Mushy Peas", medium: "£8.00", large: "-" },
            { name: "Cheesy Chips with Curry Sauce or Mushy Peas", medium: "£6.50", large: "-" },
            { name: "Fish Fingers (6 pcs) & Chips with Curry Sauce or Mushy Peas", medium: "£7.00", large: "-" },
            { name: "Pie & Chips with Curry Sauce or Mushy Peas", medium: "£8.50", large: "-" },
            { name: "Burger & Chips with Curry Sauce or Mushy Peas", medium: "£7.50", large: "-" }
          ]
        }
      ]
    }
  ];

  const SubcategoryBubble = ({ subcategory }: { subcategory: any }) => {
    if (subcategory.isTable) {
      // Check if any item has a large size (not "-")
      const hasLargeSizes = subcategory.fishItems.some((item: any) => item.large && item.large !== "-");
      // Check if any item has an extra size (for kebabs)
      const hasExtraSizes = subcategory.fishItems.some((item: any) => item.extra && item.extra !== "-");
      
      return (
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-lg p-8 border-4 border-golden relative overflow-hidden">
          {subcategory.isChips && (
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chip pot/container */}
                <path d="M10 20 L50 20 L48 75 L12 75 Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                <ellipse cx="30" cy="20" rx="20" ry="3" fill="currentColor"/>
                {/* Individual chips */}
                <rect x="15" y="25" width="3" height="12" fill="#FFD700" transform="rotate(5 16.5 31)"/>
                <rect x="20" y="30" width="3" height="15" fill="#FFD700" transform="rotate(-10 21.5 37.5)"/>
                <rect x="25" y="28" width="3" height="13" fill="#FFD700" transform="rotate(15 26.5 34.5)"/>
                <rect x="30" y="32" width="3" height="14" fill="#FFD700" transform="rotate(-5 31.5 39)"/>
                <rect x="35" y="26" width="3" height="16" fill="#FFD700" transform="rotate(8 36.5 34)"/>
                <rect x="40" y="29" width="3" height="12" fill="#FFD700" transform="rotate(-12 41.5 35)"/>
              </svg>
            </div>
          )}
          {subcategory.isSeniors && (
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Clock icon for time-limited offers */}
                <circle cx="30" cy="30" r="25" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                <circle cx="30" cy="30" r="20" fill="none" stroke="#FFD700" strokeWidth="2"/>
                <line x1="30" y1="30" x2="30" y2="18" stroke="#FFD700" strokeWidth="3"/>
                <line x1="30" y1="30" x2="38" y2="30" stroke="#FFD700" strokeWidth="2"/>
                <circle cx="30" cy="30" r="2" fill="#FFD700"/>
              </svg>
            </div>
          )}
          <h4 className="font-bold text-white text-2xl mb-6 text-center">
            {subcategory.name}
          </h4>
          <div className="bg-white/10 rounded-xl p-6">
            {hasExtraSizes ? (
              <>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="font-bold text-golden text-center">Item</div>
                  <div className="font-bold text-golden text-center">Small</div>
                  <div className="font-bold text-golden text-center">Medium</div>
                  <div className="font-bold text-golden text-center">Large</div>
                </div>
                {subcategory.fishItems.map((fish: any, index: number) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-2 border-b border-white/20 last:border-b-0">
                    <div className="text-white text-sm font-medium">{fish.name}</div>
                    <div className="text-white text-sm text-center">{fish.medium}</div>
                    <div className="text-white text-sm text-center">{fish.large !== "-" ? fish.large : "-"}</div>
                    <div className="text-white text-sm text-center">{fish.extra !== "-" ? fish.extra : "-"}</div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className={`grid ${hasLargeSizes ? 'grid-cols-3' : 'grid-cols-2'} gap-4 mb-4`}>
                  <div className="font-bold text-golden text-center">Item</div>
                  <div className="font-bold text-golden text-center">{hasLargeSizes ? 'Medium' : 'Price'}</div>
                  {hasLargeSizes && <div className="font-bold text-golden text-center">Large</div>}
                </div>
                {subcategory.fishItems.map((fish: any, index: number) => (
                  <div key={index} className={`grid ${hasLargeSizes ? 'grid-cols-3' : 'grid-cols-2'} gap-4 py-2 border-b border-white/20 last:border-b-0`}>
                    <div className="text-white text-sm font-medium">{fish.name}</div>
                    <div className="text-white text-sm text-center">{fish.medium}</div>
                    {hasLargeSizes && <div className="text-white text-sm text-center">{fish.large}</div>}
                  </div>
                ))}
              </>
            )}
          </div>
          {subcategory.isSeniors && (
            <div className="mt-4 text-center">
              <div className="bg-golden/20 rounded-lg p-3 border border-golden/30">
                <p className="text-golden font-bold text-sm">
                  Monday to Saturday 11:30 to 15:30
                </p>
              </div>
            </div>
          )}
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
    <section id="menu" className="py-16 bg-ocean-blue fish-pattern relative">
      <div className="container mx-auto px-4 relative z-10">
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