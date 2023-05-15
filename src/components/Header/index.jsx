import React, { useState, useEffect } from 'react';
import { Grommet } from 'grommet';
import { Anchor, Button, PageHeader, Page, PageContent } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import styles from './styles.module.scss';

export const Header = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageUrls = [
      './images/background-1.jpg',
      './images/background-2.jpg',
      './images/background-3.jpg',
      './images/background-4.jpg',
    ];
    setImages(imageUrls);
    const initialIndex = Math.floor(Math.random() * imageUrls.length);
    setCurrentImageIndex(initialIndex);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grommet theme={hpe}>
      <Page>
        <PageContent>
          <div className={styles.headerImages}>
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className={`${styles.headerImage} ${
                  index === currentImageIndex ? styles.active : ''
                }`}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  transform: `translateX(${(index - currentImageIndex) * 100}%)`,
                }}
              >
                <img src={imageUrl} alt="" style={{ display: 'none' }} />
              </div>
            ))}
          </div>
          <PageHeader
            actions={<Button label="Fale com um Consultor" primary />}
            parent={
              <img
                src="/images/logo.png"
                style={{ width: '353px', height: '81px' }}
              />
            }
            responsive
          />
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default { title: 'Layout/PageHeader/Responsive' };