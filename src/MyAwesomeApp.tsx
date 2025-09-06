import { type CSSProperties } from 'react';
import styles from './MyAwesomeApp.module.css';

// Datos del usuario organizados en un objeto
const userProfile = {
  firstName: 'Jose',
  lastName: 'Andeone',
  favoriteGames: ['Elden Ring', 'Super Smash Bros', 'Metal Gear Solid'],
  isActive: true,
  address: {
    zipCode: 'ABC-123',
    country: 'Canadá',
    city: 'Toronto'
  },
  joinDate: new Date('2023-01-15')
} as const;

const cardStyles: CSSProperties = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '16px',
  padding: '2rem',
  color: 'white',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
};

export const MyAwesomeApp = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCard} style={cardStyles}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            {userProfile.firstName.charAt(0)}{userProfile.lastName.charAt(0)}
          </div>
          <div className={styles.userInfo}>
            <h1 className={styles.fullName} data-testid="first-name-title">
              {userProfile.firstName} {userProfile.lastName}
            </h1>
            <div className={styles.status}>
              <span className={`${styles.statusIndicator} ${userProfile.isActive ? styles.active : styles.inactive}`}></span>
              {userProfile.isActive ? 'En línea' : 'Desconectado'}
            </div>
          </div>
        </header>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>🎮 Juegos Favoritos</h3>
          <ul className={styles.gamesList}>
            {userProfile.favoriteGames.map((game, index) => (
              <li key={index} className={styles.gameItem}>
                {game}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>📍 Información de Ubicación</h3>
          <div className={styles.addressInfo}>
            <p><strong>País:</strong> {userProfile.address.country}</p>
            <p><strong>Ciudad:</strong> {userProfile.address.city}</p>
            <p><strong>Código Postal:</strong> {userProfile.address.zipCode}</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.joinDate}>
            Miembro desde: {formatDate(userProfile.joinDate)}
          </p>
        </footer>
      </div>
    </div>
  );
};