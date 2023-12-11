import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { categories as menuCategories } from "./menuData"; // Update the import path based on your project structure

const Checkout = ({ selectedOrders, onRemove, onClose }) => {
  const totalPrice = selectedOrders.reduce(
    (total, order) => total + order.price,
    0
  );

  const handleCheckout = () => {
    alert(`Checkout successful!\nTotal Price: $${totalPrice.toFixed(2)}`);
    onClose();
  };

  return (
    <div className=" fixed top-0 right-0 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <ul>
        {selectedOrders.map((order) => (
          <li key={order.id} className="mb-2 flex justify-between">
            <span>
              {order.name} - ${order.price}
            </span>
            <button
              onClick={() => onRemove(order.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
      {/* <button
        onClick={onClose}
        className="bg-blue-500 text-white px-2 py-1 rounded mt-4 hover:bg-blue-700"
      >
        Close
      </button> */}
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 mb-8 block mx-auto hover:bg-green-700"
      >
        Checkout
      </button>
    </div>
  );
};

Checkout.propTypes = {
  selectedOrders: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const FoodCategory = () => {
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleCategoryClick = (categoryName) => {
    setVisibleCategory(categoryName === visibleCategory ? null : categoryName);
  };

  const handleAddClick = (food) => {
    const newOrder = {
      id: uuidv4(), // Generate a unique ID using uuid
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

  return (
    <div className="flex flex-grow">
      <div>
        {menuCategories.map((category) => (
          <div
            key={category.name}
            className="border rounded-md overflow-hidden shadow-md mb-4"
          >
            <div
              className={`className="flex items-center bg-red-700 text-yellow-300 py-1 px-4 cursor-pointer font-bold`}
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
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-blue-700"
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
          <Checkout
            selectedOrders={selectedOrders}
            onRemove={handleRemove}
            onClose={handleCheckoutClose}
          />
        </div>
      )}
    </div>
  );
};

export default FoodCategory;
