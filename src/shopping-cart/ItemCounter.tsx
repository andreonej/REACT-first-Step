import { useState } from 'react';
import styles from './ItemCounter.module.css';

// Interfaz mejorada con documentación
interface ItemCounterProps {
  /** Nombre del producto */
  name: string;
  /** Cantidad inicial del producto (por defecto 1) */
  quantity?: number;
  /** Cantidad mínima permitida (por defecto 1) */
  minQuantity?: number;
  /** Cantidad máxima permitida */
  maxQuantity?: number;
  /** Callback cuando cambia la cantidad */
  onQuantityChange?: (newQuantity: number) => void;
}

export const ItemCounter = ({ 
  name, 
  quantity = 1, 
  minQuantity = 1,
  maxQuantity = 99,
  onQuantityChange 
}: ItemCounterProps) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    if (count < maxQuantity) {
      const newCount = count + 1;
      setCount(newCount);
      onQuantityChange?.(newCount);
    }
  };

  const handleSubtract = () => {
    if (count > minQuantity) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange?.(newCount);
    }
  };

  const isAtMinimum = count <= minQuantity;
  const isAtMaximum = count >= maxQuantity;

  return (
    <article className={styles.itemCounter}>
      <div className={styles.productInfo}>
        <h3 className={`${styles.productName} ${isAtMinimum ? styles.lowStock : ''}`}>
          {name}
        </h3>
        {isAtMinimum && (
          <span className={styles.stockWarning}>Stock mínimo</span>
        )}
      </div>
      
      <div className={styles.quantityControls}>
        <button 
          className={`${styles.button} ${styles.decrementButton}`}
          onClick={handleSubtract}
          disabled={isAtMinimum}
          aria-label={`Disminuir cantidad de ${name}`}
        >
          −
        </button>
        
        <span className={styles.quantity} aria-label={`Cantidad: ${count}`}>
          {count}
        </span>
        
        <button 
          className={`${styles.button} ${styles.incrementButton}`}
          onClick={handleAdd}
          disabled={isAtMaximum}
          aria-label={`Aumentar cantidad de ${name}`}
        >
          +
        </button>
      </div>
    </article>
  );
};
