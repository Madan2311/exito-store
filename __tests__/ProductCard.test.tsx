import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../src/components/ProductCard';
import { CartContext } from '../src/context/CartContext';
import { BrowserRouter } from 'react-router-dom';

const mockProduct = {
  id: 1,
  title: 'Producto de prueba',
  price: 49.99,
  image: 'https://via.placeholder.com/150'
};

test('muestra el producto y permite agregar al carrito', () => {
  const mockAdd = jest.fn();
  render(
    <CartContext.Provider value={{ cart: [] }}>
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={mockAdd} />
      </BrowserRouter>
    </CartContext.Provider>
  );

  expect(screen.getByText('Producto de prueba')).toBeInTheDocument();
  expect(screen.getByText('$49.99')).toBeInTheDocument();

  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(mockAdd).toHaveBeenCalled();
});