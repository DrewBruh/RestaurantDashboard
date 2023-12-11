// CheckoutPage.js
import React from "react";
import PropTypes from "prop-types";

const CheckoutPage = ({ selectedOrders, totalPrice, onCheckoutClose }) => {
  const handleCheckout = () => {
    alert(`Checkout successful!\nTotal Price: $${totalPrice.toFixed(2)}`);
    onCheckoutClose();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <ul>
        {selectedOrders.map((order) => (
          <li key={order.id} className="mb-2 flex justify-between">
            <span>
              {order.name} - ${order.price}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 block mx-auto hover:bg-green-700"
      >
        Checkout
      </button>
    </div>
  );
};

CheckoutPage.propTypes = {
  selectedOrders: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onCheckoutClose: PropTypes.func.isRequired,
};

export default CheckoutPage;
