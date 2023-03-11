import React from 'react';
import styles from './cardpreview.css';

interface ICardPreview {
  img_banner: string
}

export function CardPreview({ img_banner }: ICardPreview) { 
    return (
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src={
            img_banner
              ? img_banner
              : "https://бко.рф/images/olimp/assets/images/noimage.png"
          }
          alt="Фотография поста "
        />
      </div>
    );
}
