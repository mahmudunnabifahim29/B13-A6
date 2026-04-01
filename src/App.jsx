import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductsSection from './components/ProductsSection';
import CartSection from './components/CartSection';
import Steps from './components/Steps';
import CTA from './components/CTA';
import Footer from './components/Footer';

import products from './data/products';

/**
 * App - Main application component
 * Manages:
 * - Shopping cart state and operations (add, remove, checkout)
 * - Product list state with cart status tracking
 * - View toggle between Products and Cart sections
 * - Toast notifications for user feedback
 */
function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [productsList, setProductsList] = useState(products);

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (!existingItem) {
      setCart([...cart, { ...product, inCart: true }]);

      setProductsList((prev) =>
        prev.map((p) => (p.id === product.id ? { ...p, inCart: true } : p))
      );

      toast.success(`${product.name} added to cart! 🎉`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.info(`${product.name} is already in cart!`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  // Handle Remove from Cart
  const handleRemoveFromCart = (productId) => {
    const productName = productsList.find((p) => p.id === productId)?.name;

    setCart((prev) => prev.filter((item) => item.id !== productId));

    setProductsList((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, inCart: false } : p))
    );

    toast.error(`${productName} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Handle Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning('Your cart is empty!', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    toast.success(`✅ Checkout successful! Total: $${total.toFixed(2)}`, {
      position: 'top-right',
      autoClose: 3000,
    });

    // Clear cart after checkout
    setCart([]);
    setProductsList((prev) => prev.map((p) => ({ ...p, inCart: false })));
    setActiveTab('products');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      {activeTab === 'products' && (
        <ProductsSection
          products={productsList}
          onAddToCart={handleAddToCart}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {activeTab === 'cart' && (
        <CartSection
          products={productsList}
          OnRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      <Steps />
      <CTA />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;