import React from 'react';

/**
 * CartSection Component
 * Displays shopping cart with items and checkout functionality
 * Features:
 * - Display all items currently in cart
 * - Individual product removal capability
 * - Real-time total calculation
 * - Responsive layout (single column design)
 * - Empty cart state messaging
 * - Proceed to checkout functionality with total display
 * - Scrollable cart items list with max height
 * 
 * Props:
 * - products: Array of all products with inCart flag
 * - OnRemoveFromCart: Callback to remove item from cart
 * - onCheckout: Callback to process checkout and clear cart
 * - activeTab: Current active tab
 * - setActiveTab: Function to toggle between Products and Cart views
 */
const CartSection = ({ products, OnRemoveFromCart, onCheckout, activeTab, setActiveTab }) => {
  const cartItems = products.filter(p => p.inCart);
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);

  if (activeTab !== 'cart') return null;

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('products')}
            className="text-gray-700 hover:text-purple-600 font-semibold rounded-full px-8 py-3 transition"
          >
            Products
          </button>
          <button
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-8 py-3 font-semibold transition-all"
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            Cart ({cartItems.length})
          </button>
        </div>

        {/* Cart Content */}
        <div className="bg-gray-50 rounded-lg p-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
              <p className="text-gray-500">Add some products to get started!</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h3>
              <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                {cartItems.map((product) => (
                  <div key={product.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4 flex-1">
                      <img src={product.icon} alt={product.name} className="h-12 w-12 object-contain" />
                      <div>
                        <h4 className="font-bold text-gray-900">{product.name}</h4>
                        <p className="text-gray-600">${product.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => OnRemoveFromCart(product.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t pt-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-gray-700">Total:</span>
                  <span className="text-3xl font-bold text-gray-900">${total}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 text-lg rounded-full font-bold transition-all transform hover:scale-105"
                >
                  Proceed To Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSection;
