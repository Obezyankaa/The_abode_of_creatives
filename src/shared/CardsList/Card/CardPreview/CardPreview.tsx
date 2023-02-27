import React from 'react';
import styles from './cardpreview.scss';

export function CardPreview() {
  return (
    <div className={styles.preview}>
        <img className={styles.previewImg} src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" alt="фото поста" />
      </div>
  );
}
