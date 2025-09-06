import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    //screen.debug();
    //console.log(container.innerHTML);

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Jose');
    expect(h3?.innerHTML).toContain('🎮 Juegos Favoritos');
  });

   test('should render firstName and lastName - screen', () => {
     render(<MyAwesomeApp />);
     //screen.debug();
    // console.log(container.innerHTML);
    // const h1 = screen.getByRole('heading', {
    //   level: 1,
    // });
    const h1 = screen.getByTestId('first-name-title'); // No es recomenda usar ID-Test
     expect(h1.innerHTML).toContain('Jose');
   });

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot(); // Toma una foto de la app, se busca para validar que no cambia la apariencia.
  });

   test('should match snapshot', () => {
      render(<MyAwesomeApp />);
      expect(screen.getByTestId('first-name-title')).toMatchSnapshot();
   });
});
