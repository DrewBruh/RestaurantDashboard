// CheckoutPage.js
import React from "react";
import PropTypes from "prop-types";

const CheckoutPage = ({
  selectedOrders,
  totalPrice,
  onCheckoutClose,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const handleCheckout = () => {
    alert(`Checkout successful!\nTotal Price: $${totalPrice.toFixed(2)}`);
    onCheckoutClose();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <ul>
        {selectedOrders.map((order) => (
          <li key={order.id} className="mb-2 flex justify-between items-center">
            <div>
              <span>
                {order.name} - ${order.price}
              </span>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => onUpdateQuantity(order.id, order.quantity - 1)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-700"
                >
                  -
                </button>
                <span>{order.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(order.id, order.quantity + 1)}
                  className="bg-green-500 text-white px-2 py-1 rounded ml-2 hover:bg-green-700"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => onRemoveItem(order.id)}
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
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
};

export default CheckoutPage;
