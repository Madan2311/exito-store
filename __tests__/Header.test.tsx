import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import { CartContext } from '../src/context/CartContext';
import { BrowserRouter } from 'react-router-dom';

test('renderiza el encabezado con el texto correcto', () => {
  render(
    <CartContext.Provider value={{ cart: [] }}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </CartContext.Provider>
  );
  expect(screen.getByText('Éxito Store')).toBeInTheDocument();
});