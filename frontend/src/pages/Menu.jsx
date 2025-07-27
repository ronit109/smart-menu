import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../assets/images/bg.jpg';

// 🖼 Import images 
import PaneerButterMasala from '../assets/images/Paneer.jpg';
import VegBiryani from '../assets/images/Veg Biryani.jpg';
import MasalaDosa from '../assets/images/Masala Dosa.jpg';
import CholeBhature from '../assets/images/Chole Bhature.jpg';
import AlooParatha from '../assets/images/Aloo Paratha.jpg';
import Manchurian from '../assets/images/Manchurian.jpg';
import HakkaNoodles from '../assets/images/Hakka Noodles.jpg';
import PavBhaji from '../assets/images/Pav Bhaji.jpg';
import VegSandwich from '../assets/images/Veg Sandwich.jpg';
import RajmaChawal from '../assets/images/Rajma Chawal.jpg';
import IdliSambar from '../assets/images/Idli Sambar.jpg';
import TandooriRoti from '../assets/images/Tandoori Roti.jpg';
import VegPizza from '../assets/images/Veg Pizza.jpg';
import Pancakes from '../assets/images/Pancakes.jpg';
import Samosa from '../assets/images/Samosa.jpg';
import VegBurger from '../assets/images/Veg Burger.jpg';
import Pasta from '../assets/images/Pasta.jpg';
import Oatmeal from '../assets/images/Oatmeal.jpg';

import ChickenCurry from '../assets/images/Chicken Curry.jpg';
import MuttonBiryani from '../assets/images/Mutton Biryani.jpg';
import ButterChicken from '../assets/images/Butter Chicken.jpg';
import FishCurry from '../assets/images/Fish Curry.jpg';
import Chicken65 from '../assets/images/Chicken 65.jpg';
import TandooriChicken from '../assets/images/Tandoori Chicken.jpg';
import Shawarma from '../assets/images/Shawarma.jpg';
import EggCurry from '../assets/images/Egg Curry.jpg';
import Momos from '../assets/images/Momos.jpg';
import GrilledSandwich from '../assets/images/Grilled Chicken Sandwich.jpg';

import GulabJamun from '../assets/images/Gulab Jamun.jpg';
import Rasgulla from '../assets/images/Rasgulla.jpg';
import ChocoLava from '../assets/images/Choco Lava Cake.jpg';
import RedVelvetLava from '../assets/images/Red Velvet Lava Cake.jpg';
import KajuKatli from '../assets/images/Kaju Katli.jpg';
import Rasmalai from '../assets/images/Rasmalai.jpg';
import IceCream from '../assets/images/Ice Cream.jpg';
import Kulfi from '../assets/images/Kulfi.jpg';
import Modak from '../assets/images/Modak.jpg';

import CocaCola from '../assets/images/Coca-Cola.jpg';
import Maaza from '../assets/images/Maaza.jpg';
import MasalaChai from '../assets/images/Masala Chai.jpg';
import ColdCoffee from '../assets/images/Cold Coffee.jpg';
import Lassi from '../assets/images/Lassi.jpg';
import CoconutWater from '../assets/images/Coconut Water.jpg';
import GreenTea from '../assets/images/Green Tea.jpg';
import Water from '../assets/images/Water.jpg';

// ✅ All menu items with image references
const itemsData = [

  // veg
  { id: 1, name: 'Paneer Butter Masala', price: 180, category: 'veg', img: PaneerButterMasala },
  { id: 2, name: 'Veg Biryani', price: 120, category: 'veg', img: VegBiryani },
  { id: 3, name: 'Masala Dosa', price: 70, category: 'veg', img: MasalaDosa },
  { id: 4, name: 'Chole Bhature', price: 80, category: 'veg', img: CholeBhature },
  { id: 5, name: 'Aloo Paratha (with curd & pickle)', price: 100, category: 'veg', img: AlooParatha },
  { id: 6, name: 'vegetable Manchurian (Dry)', price: 120, category: 'veg', img: Manchurian },
  { id: 7, name: 'Hakka Noodles (veg)', price: 100, category: 'veg', img: HakkaNoodles },
  { id: 8, name: 'Pav Bhaji', price: 70, category: 'veg', img: PavBhaji },
  { id: 9, name: 'Veg Sandwich', price: 60, category: 'veg', img: VegSandwich },
  { id: 10, name: 'Rajma Chawal', price: 90, category: 'veg', img: RajmaChawal },
  { id: 11, name: 'Idli Sambar 2 pcs', price: 40, category: 'veg', img: IdliSambar },
  { id: 12, name: 'Tandoori Roti (Per Piece)', price: 10, category: 'veg', img: TandooriRoti },
  { id: 13, name: 'Veg Pizza', price: 495, category: 'veg', img: VegPizza },
  { id: 14, name: 'Pancakes', price: 240, category: 'veg', img: Pancakes },
  { id: 15, name: 'Samosa (Per Piece)', price: 10, category: 'veg', img: Samosa },
  { id: 16, name: 'Veg Burger', price: 89, category: 'veg', img: VegBurger },
  { id: 17, name: 'Pasta', price: 135, category: 'veg', img: Pasta },
  { id: 18, name: 'Oatmeal', price: 300, category: 'veg', img: Oatmeal },

  // Non-Veg
  { id: 19, name: 'Chicken Curry', price: 220, category: 'nonveg', img: ChickenCurry },
  { id: 20, name: 'Mutton Biryani', price: 260, category: 'nonveg', img: MuttonBiryani },
  { id: 21, name: 'Butter Chicken', price: 250, category: 'nonveg', img: ButterChicken },
  { id: 22, name: 'Fish Curry', price: 220, category: 'nonveg', img: FishCurry },
  { id: 23, name: 'Chicken 65', price: 180, category: 'nonveg', img: Chicken65 },
  { id: 24, name: 'Tandoori Chicken', price: 320, category: 'nonveg', img: TandooriChicken },
  { id: 25, name: 'Chicken Shawarma Roll', price: 100, category: 'nonveg', img: Shawarma },
  { id: 26, name: 'Egg Curry', price: 120, category: 'nonveg', img: EggCurry },
  { id: 27, name: 'Chicken Momos (8 Pcs)', price: 120, category: 'nonveg', img: Momos },
  { id: 28, name: 'Grilled Chicken Sandwich', price: 130, category: 'nonveg', img: GrilledSandwich },
  { id: 29, name: 'Tandoori Roti (Per Piece)', price: 10, category: 'nonveg', img: TandooriRoti },

  // Desserts
  { id: 30, name: 'Gulab Jamun (2 pcs)', price: 60, category: 'dessert', img: GulabJamun },
  { id: 31, name: 'Rasgulla (2 pcs )', price: 50, category: 'dessert', img: Rasgulla },
  { id: 32, name: 'Choco Lava Cake', price: 109, category: 'dessert', img: ChocoLava },
  { id: 33, name: 'Red Velvet Lava cake', price: 139, category: 'dessert', img: RedVelvetLava },
  { id: 34, name: 'Kaju Katli (100 gm)', price: 90, category: 'dessert', img: KajuKatli },
  { id: 35, name: 'Rasmalai (2 pcs)', price: 80, category: 'dessert', img: Rasmalai },
  { id: 36, name: 'Ice Cream (Single Scoop)', price: 50, category: 'dessert', img: IceCream },
  { id: 37, name: 'Kulfi(1 Stick/Matka)', price: 40, category: 'dessert', img: Kulfi },
  { id: 38, name: 'Modak (1 pc)', price: 20, category: 'dessert', img: Modak },

  // Drinks
  { id: 39, name: 'Coca-Cola', price: 40, category: 'drink', img: CocaCola },
  { id: 40, name: 'Maaza', price: 45, category: 'drink', img: Maaza },
  { id: 41, name: 'Masala Chai', price: 30, category: 'drink', img: MasalaChai },
  { id: 42, name: 'Cold Coffee', price: 120, category: 'drink', img: ColdCoffee },
  { id: 43, name: 'Lassi', price: 50, category: 'drink', img: Lassi },
  { id: 44, name: 'Coconut Water', price: 60, category: 'drink', img: CoconutWater },
  { id: 45, name: 'Green Tea', price: 60, category: 'drink', img: GreenTea },
  { id: 46, name: 'Water', price: 20, category: 'drink', img: Water },
];

const timeBasedSuggestions = {
  morning: ['Idli Sambar 2 pcs', 'Masala Chai', 'Oatmeal', 'Pancakes', 'Aloo Paratha (with curd & pickle)'],
  afternoon: ['Veg Biryani', 'Rajma Chawal', 'Paneer Butter Masala', 'Chicken Curry', 'Lassi'],
  evening: ['Samosa (Per Piece)', 'Pav Bhaji', 'Cold Coffee', 'Chicken Shawarma Roll', 'Chicken 65'],
  night: ['Butter Chicken', 'Mutton Biryani', 'Tandoori Chicken', 'Tandoori Roti (Per Piece)', 'Gulab Jamun (2 pcs)'],
};

const MenuPage = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('veg');
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const suggestions = selectedTime
    ? itemsData
        .filter((item) => timeBasedSuggestions[selectedTime].includes(item.name))
        .sort((a, b) => a.price - b.price)
    : [];

  const filteredItems =
    selectedCategory === 'all'
      ? itemsData
      : itemsData.filter((item) => item.category === selectedCategory);

  const handlePlaceOrder = () => {
    if (cart.length) navigate('/payment', { state: { totalAmount: totalPrice } });
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="min-h-screen bg-white/75 backdrop-blur-sm flex flex-col">
        <header className="sticky top-0 bg-gray-900/80 text-white backdrop-blur-md py-4 px-6 flex justify-between items-center z-10">
          <Link to="/" className="text-white text-sm font-semibold">« Home</Link>
          <div className="text-2xl font-bold text-green-400">🍽️ SmartMenu</div>
          <div className="w-12" /> 
        </header>

        <main className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <section className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-3">Suggestions</h2>
            <select
              className="border p-2 w-full mb-4"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">-- Select time of day --</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {suggestions.length ? (
                suggestions.map((item) => (
                  <div key={item.id} className="w-48 p-3 border rounded hover:shadow-lg transition bg-white">
                    <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
                    <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                    <p className="text-xs mt-1">₹{item.price}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 w-full bg-green-600 text-white rounded text-xs py-1 hover:bg-green-700"
                    >
                      Add
                    </button>
                  </div>
                ))
              ) : (
                selectedTime && <p className="text-gray-600 text-sm">No suggestions found.</p>
              )}
            </div>
          </section>

          
          <section className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.length ? (
              <ul className="space-y-3 mb-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs">₹{item.price} × {item.quantity}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        −
                      </button>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-sm">Cart is empty.</p>
            )}
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold">Total: ₹{totalPrice}</span>
              <button
                disabled={!cart.length}
                onClick={handlePlaceOrder}
                className="bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
              >
                Place Order
              </button>
            </div>
          </section>

          
          <section className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">All Menu Items</h2>
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {['all', 'veg', 'nonveg', 'desserts', 'drinks'].map((category) => (
                <button
                  key={category}
                  className={`py-2 px-4 rounded ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-600">₹{item.price}</p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 bg-green-600 text-white w-full rounded text-xs py-1 hover:bg-green-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MenuPage;
