import React from 'react';

/**
 * ProductCard Component
 * Displays a reusable product card with features, pricing, and action buttons
 * Supports both product listing view and cart view modes
 * 
 * Props:
 * - product: Product object with all details
 * - onAddToCart: Callback function when product is added to cart
 * - inCart: Boolean flag to show if product is in cart
 * - onRemove: Callback function to remove product from cart
 */
const ProductCard = ({ product, onAddToCart, inCart = false, onRemove = null }) => {
  const getTagColor = (tagType) => {
    switch (tagType) {
      case 'best-seller':
        return 'bg-amber-100 text-amber-700';
      case 'popular':
        return 'bg-purple-100 text-purple-700';
      case 'new':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-6 relative flex flex-col">
      {/* Tag Badge - top right */}
      {!inCart && product.tag && (
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(
            product.tagType
          )}`}
        >
          {product.tag}
        </div>
      )}

      {/* Icon */}
      <div className="mb-5">
        <div className="bg-gray-100 rounded-2xl w-14 h-14 flex items-center justify-center">
          <img
            src={product.icon}
            alt={product.name}
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

      {/* Description - only in product view */}
      {!inCart && (
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
      )}

      {/* Price */}
      <div className="mb-5">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        {!inCart && (
          <span className="text-sm text-gray-500 ml-1">
            /{product.period === 'one-time' ? 'One-Time' : 'Mo'}
          </span>
        )}
      </div>

      {/* Features - only in product view */}
      {!inCart && (
        <div className="mb-6 space-y-2 flex-1">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
              <i className="fas fa-check text-green-500 flex-shrink-0"></i>
              {feature}
            </div>
          ))}
        </div>
      )}

      {/* Button */}
      <div className="mt-auto">
        {inCart ? (
          <button
            onClick={() => onRemove(product.id)}
            className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-3 font-bold text-base transition-colors duration-200"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 font-bold text-base transition-colors duration-200"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;