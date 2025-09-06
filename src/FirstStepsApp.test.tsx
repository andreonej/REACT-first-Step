/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {
  //Antes de cada prueba, limpiamos los mocks para evitar que los resultados de una prueba afecten a otra.
  afterEach(() => {
    vi.clearAllMocks(); // para limpiar los mocks después de cada prueba y evitar conteos incorrectos.
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);
    const itemCounters = screen.getAllByTestId('ItemCounter');
    expect(itemCounters.length).toBe(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    // Verificamos que se haya llamado 3 veces (una por cada producto)
    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    // Verificamos la primera llamada (Nintendo Switch OLED)
    expect(mockItemCounter).toHaveBeenNthCalledWith(1, expect.objectContaining({
      name: 'Nintendo Switch OLED',
      quantity: 1,
      maxQuantity: 10,
      onQuantityChange: expect.any(Function)
    }));

    // Verificamos la segunda llamada (Pro Controller)
    expect(mockItemCounter).toHaveBeenNthCalledWith(2, expect.objectContaining({
      name: 'Pro Controller',
      quantity: 2,
      maxQuantity: 10,
      onQuantityChange: expect.any(Function)
    }));

    // Verificamos la tercera llamada (Super Smash Bros Ultimate)
    expect(mockItemCounter).toHaveBeenNthCalledWith(3, expect.objectContaining({
      name: 'Super Smash Bros Ultimate',
      quantity: 1,
      maxQuantity: 10,
      onQuantityChange: expect.any(Function)
    }));
  });
});
