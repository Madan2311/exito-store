import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product, onAddToCart }: { product: any; onAddToCart: () => void }) {
  const { cart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  const isInCart = cart.some((item: any) => item.id === product.id);

  const handleAdd = () => {
    onAddToCart();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition relative bg-white flex flex-col justify-between h-full min-h-[360px]">
      <div>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
          <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </Link>
      </div>
      <div className="mt-4">
        <button
          onClick={handleAdd}
          className={`mt-auto px-3 py-2 rounded w-full text-white font-semibold transition ${
            isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1A3C6B] hover:bg-[#162f56]'
          }`}
          disabled={isInCart}
        >
          {isInCart ? '✔ Añadido' : 'Agregar al carrito'}
        </button>
      </div>
      {showNotification && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-sm px-3 py-1 rounded shadow animate-bounce">
          Añadido 🎉
        </div>
      )}
    </div>
  );
}