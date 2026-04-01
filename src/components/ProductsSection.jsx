import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = ({ products, onAddToCart, activeTab, setActiveTab }) => {
  const cartCount = products.filter((p) => p.inCart).length;

  return (
    <div id="products" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('products')}
            className={`rounded-full px-8 py-3 font-semibold text-sm transition-all ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`rounded-full px-8 py-3 font-semibold text-sm transition-all ${
              activeTab === 'cart'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            Cart {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>

        {/* Products Grid */}
        {activeTab === 'products' && (
          <>
            {products.filter((p) => !p.inCart).length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <i className="fas fa-box-open text-5xl mb-4 block"></i>
                <p className="text-lg">All products are in your cart!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((p) => !p.inCart)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={onAddToCart}
                    />
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;