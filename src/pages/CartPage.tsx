import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🛒 Tu Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: any) => (
            <div key={item.id} className="border rounded-lg p-4 flex gap-4 items-center shadow-sm bg-white">
              <img src={item.image} className="h-20 object-contain" alt={item.title} />
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-green-700 font-medium">${item.price}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                    className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 font-bold text-lg"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600 font-semibold hover:underline">
                Eliminar
              </button>
            </div>
          ))}
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <Link to="/checkout" className="bg-[#1A3C6B] hover:bg-[#162f56] text-white px-6 py-3 rounded-full inline-block">
            Ir a Pagar
          </Link>
        </div>
      )}
    </div>
  );
}