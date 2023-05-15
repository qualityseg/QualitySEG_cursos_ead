import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { Autoplay } from './Autoplay';
import { Grommet } from 'grommet';
export const HeaderPage = ({ subtitle, title }) => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const imageUrls = [
      'images/background-1.jpg',
      'images/background-2.jpg',
      'images/background-3.jpg',
      'images/background-4.jpg',
    ];
    setImages(imageUrls);
  }, []);

  return (
    <section className={styles.headerPage}>
      <div className={styles.headerImages}>
        <Autoplay images={images} />
      </div>
      <div className={styles.barraVerde}>
        <p>CONHEÇA NOSSOS CURSOS EAD</p>
      </div>
    </section>
  );
};