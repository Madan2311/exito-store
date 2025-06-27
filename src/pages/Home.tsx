import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter((p: any) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="🔍 Buscar producto..."
        className="border rounded-full px-5 py-3 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-[#7FB342]"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product: any) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
        ))}
      </div>
    </div>
  );
}