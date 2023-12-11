// FoodCategory.js
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories as menuCategories } from "./menuData"; // Update the import path based on your project structure
import CheckoutPage from "./CheckoutPage";

const FoodCategory = () => {
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleCategoryClick = (categoryName) => {
    setVisibleCategory(categoryName === visibleCategory ? null : categoryName);
  };

  const handleAddClick = (food) => {
    const newOrder = {
      id: uuidv4(),
      name: food.name,
      price: food.price,
    };

    setSelectedOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const handleRemove = (orderId) => {
    setSelectedOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const handleCheckoutClose = () => {
    setSelectedOrders([]);
  };

  const totalPrice = selectedOrders.reduce(
    (total, order) => total + order.price,
    0
  );

  return (
    <div className="flex flex-grow">
      <div>
        {menuCategories.map((category) => (
          <div
            key={category.name}
            className="border rounded-md overflow-hidden shadow-md mb-4"
          >
            <div
              className="flex items-center bg-red-700 text-yellow-300 py-1 px-4 cursor-pointer font-bold"
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </div>

            {category.name === visibleCategory && (
              <div className="p-4">
                {category.foods.map((food) => (
                  <div
                    key={food.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <div>
                      <span className="font-bold">{food.name}</span>
                      <span className="text-gray-600 ml-2">${food.price}</span>
                    </div>
                    <button
                      onClick={() => handleAddClick(food)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover-blue:bg-blue-700"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedOrders.length > 0 && (
        <div className="ml-4">
          <CheckoutPage
            selectedOrders={selectedOrders}
            totalPrice={totalPrice}
            onCheckoutClose={handleCheckoutClose}
          />
        </div>
      )}
    </div>
  );
};

export default FoodCategory;
