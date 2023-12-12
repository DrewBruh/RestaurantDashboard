// FoodCategory.jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories as menuCategories } from "../menuData"; // Update the import path based on your project structure
import CheckoutPage from "./CheckoutPage";
import Header from "./Header";

const FoodCategory = () => {
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleCategoryClick = (categoryName) => {
    setVisibleCategory(categoryName === visibleCategory ? null : categoryName);
  };

  const handleAddClick = (food) => {
    const existingOrder = selectedOrders.find(
      (order) => order.name === food.name
    );

    if (existingOrder) {
      // If the item already exists, update its quantity
      const updatedOrders = selectedOrders.map((order) =>
        order.name === food.name
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );
      setSelectedOrders(updatedOrders);
    } else {
      // If the item doesn't exist, add a new order
      const newOrder = {
        id: uuidv4(),
        name: food.name,
        price: food.price,
        quantity: 1,
      };
      setSelectedOrders((prevOrders) => [...prevOrders, newOrder]);
    }
  };

  const handleRemove = (orderId) => {
    setSelectedOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  const handleUpdateQuantity = (orderId, newQuantity) => {
    // Ensure the new quantity is at least 0
    const updatedQuantity = Math.max(newQuantity, 0);

    if (updatedQuantity === 0) {
      // If the new quantity is 1, remove the item
      setSelectedOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    } else {
      // Otherwise, update the quantity
      setSelectedOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, quantity: updatedQuantity } : order
        )
      );
    }
  };

  const handleCheckoutClose = () => {
    setSelectedOrders([]);
  };

  const totalPrice = selectedOrders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <div className="overflow-y-auto flex-grow">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className="border rounded-md overflow-hidden shadow-md mb-4"
            >
              <div
                className="flex items-center justify-center bg-red-700 text-yellow-300 py-4 px-4 cursor-pointer font-bold text-center"
                style={{ fontSize: "20px" }}
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
                        <span className="text-gray-600 ml-2">
                          ${food.price}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleAddClick(food)}
                          className="bg-green-500 text-white px-2 py-1 rounded hover-blue:bg-blue-700"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedOrders.length > 0 && (
        <CheckoutPage
          selectedOrders={selectedOrders}
          totalPrice={totalPrice}
          onCheckoutClose={handleCheckoutClose}
          onRemoveItem={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
    </div>
  );
};

export default FoodCategory;
