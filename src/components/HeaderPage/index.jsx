import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import styles from './styles.module.scss';

const calculateNewSize = (originalWidth, originalHeight, newWidth) => {
  const carousel = document.querySelector('.carousel');
  const newHeight = (originalHeight / originalWidth) * carousel.offsetWidth;
  return { width: carousel.offsetWidth, height: newHeight };
};

export const HeaderPage = ({ subtitle, title }) => {
  const [imageSizes, setImageSizes] = useState([
    { width: 1380, height: 533 },
    { width: 1380, height: 533 },
    { width: 1380, height: 533 },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const images = ['images/background-1.jpg', 'images/background-2.jpg', 'images/background-3.jpg'];
    const newSizes = [...imageSizes];
    const carousel = document.querySelector('.carousel');

    if (carousel) {
      const maxWidth = Math.min(carousel.offsetWidth, 1380);

      images.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          const newSize = calculateNewSize(img.width, img.height, maxWidth);
          newSizes[index] = newSize;
          setImageSizes(newSizes);
        };
      });
    }
  }, []);

  return (
    <section className={styles.headerPage}>
      <Carousel
        className={styles.carousel}
        autoplay={true}
        wrapAround={true}
        autoplayInterval={5000}
        afterSlide={(slideIndex) => setCurrentSlide(slideIndex)}
        slideIndex={0}
      >
        <img
          src="images/background-1.jpg"
          style={{ width: imageSizes[0].width, height: imageSizes[0].height }}
          className={`${currentSlide === 0 ? styles.activeSlide : ''} ${styles.firstImage}`}
          />

        <img
          src="images/background-2.jpg"
          style={{ width: imageSizes[1].width, height: imageSizes[1].height }}
          className={currentSlide === 1 ? styles.activeSlide : ''}
        />
        <img
          src="images/background-3.jpg"
          style={{ width: imageSizes[2].width, height: imageSizes[2].height }}
          className={currentSlide === 2 ? styles.activeSlide : ''}
        />
      </Carousel>
      <div className={styles.barraVerde}>
        <p>CONHEÇA NOSSO CATALOGO DE CURSOS EAD</p>
      </div>
    </section>
  );
};
// é o suus do deploy