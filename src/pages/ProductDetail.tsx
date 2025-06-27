import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const isInCart = cart.some((item: any) => item.id === parseInt(id!));

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  if (!product) return <p className="text-center">Cargando...</p>;

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md relative">
      <img src={product.image} className="h-72 object-contain mx-auto" alt={product.title} />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-green-600 font-semibold text-2xl mb-1">${product.price}</p>
        <p className="italic text-sm text-gray-500 mb-2">Categoría: {product.category}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-sm text-gray-600">⭐ {product.rating.rate} / 5 ({product.rating.count} opiniones)</p>
        <button
          className={`mt-6 px-6 py-3 rounded-full text-white font-bold transition ${
            isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7FB342] hover:bg-[#6aa82e]'
          }`}
          onClick={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? '✔ Añadido al carrito' : 'Agregar al carrito'}
        </button>
      </div>
      {showNotification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow animate-bounce">
          Producto añadido 🎉
        </div>
      )}
    </div>
  );
}