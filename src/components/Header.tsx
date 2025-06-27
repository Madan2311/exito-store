import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-[#1A3C6B] to-[#7FB342] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">Éxito Store</Link>
        <nav className="space-x-6 text-base relative">
          <Link to="/" className="hover:underline transition duration-300">Inicio</Link>
          <Link to="/cart" className="hover:underline transition duration-300 inline-flex items-center relative">
            Carrito
            <ShoppingCart className="ml-1 h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-ping-slow shadow">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}