import { useState } from 'react';
import { ItemCounter } from './shopping-cart/ItemCounter';
import styles from './FirstStepsApp.module.css';

// Interfaz mejorada para los productos
interface Product {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  category: string;
}

// Datos de ejemplo más realistas
const initialProducts: Product[] = [
  { 
    id: '1', 
    productName: 'Nintendo Switch OLED', 
    quantity: 1, 
    price: 349.99,
    category: 'Consolas'
  },
  { 
    id: '2', 
    productName: 'Pro Controller', 
    quantity: 2, 
    price: 69.99,
    category: 'Accesorios'
  },
  { 
    id: '3', 
    productName: 'Super Smash Bros Ultimate', 
    quantity: 1, 
    price: 59.99,
    category: 'Juegos'
  },
];

export function FirstStepsApp() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalPrice = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🛒 Carrito de Compras</h1>
        <div className={styles.summary}>
          <span className={styles.itemCount}>{totalItems} artículos</span>
          <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
        </div>
      </header>

      <main className={styles.main}>
        {products.length > 0 ? (
          <>
            <div className={styles.productList}>
              {products.map((product) => (
                <ItemCounter 
                  key={product.id}
                  name={product.productName}
                  quantity={product.quantity}
                  maxQuantity={10}
                  onQuantityChange={(newQuantity) => 
                    handleQuantityChange(product.id, newQuantity)
                  }
                />
              ))}
            </div>
            
            <footer className={styles.footer}>
              <button 
                className={styles.clearButton}
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>
              <button className={styles.checkoutButton}>
                Proceder al Pago - ${totalPrice.toFixed(2)}
              </button>
            </footer>
          </>
        ) : (
          <div className={styles.emptyCart}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2>Tu carrito está vacío</h2>
            <p>Agrega algunos productos para comenzar</p>
          </div>
        )}
      </main>
    </div>
  );
}
