import { useState, useEffect } from 'react';
import styles from './styles.module.scss';


export const HeaderPage = ({ subtitle, title }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const imageUrls = [
      'images/background-1.png',
      'images/background-2.jpg',
      'images/background-3.jpg',
      'images/background-4.jpg',
    ];
    setImages(imageUrls);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.headerPage}>
      <div className={styles.barraVerde}>
        <p>CONHEÇA NOSSOS CURSOS EAD</p>
      </div>
      <div className={styles.headerImages}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`${styles.headerImage} ${index === currentImageIndex ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
          />
        ))}
      </div>
    </section>
  );
};