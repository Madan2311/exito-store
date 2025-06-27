import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [form, setForm] = useState({ name: '', address: '', card: '' });
  const [done, setDone] = useState(false);
  const { clearCart } = useContext(CartContext);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    clearCart();
    setDone(true);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      {done ? (
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-green-600">🎉 ¡Gracias por tu compra!</h1>
          <p className="text-gray-700">Hemos recibido tu pedido y lo estamos procesando.</p>
          <Link to="/" className="inline-block mt-4 px-6 py-2 bg-[#1A3C6B] text-white rounded-full hover:bg-[#162f56] transition">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">💳 Confirmar Pago</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Nombre completo"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              name="address"
              placeholder="Dirección de envío"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />
            <input
              name="card"
              placeholder="Número de tarjeta"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#7FB342] hover:bg-[#6aa82e] text-white font-bold py-3 rounded-full transition"
            >
              Confirmar Compra
            </button>
          </form>
        </>
      )}
    </div>
  );
}