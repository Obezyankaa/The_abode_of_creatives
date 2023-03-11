import React, { useState } from 'react';
import styles from './cardpreview.css';

interface ICardPreview {
  img_banner: string
}

export function CardPreview({ img_banner }: ICardPreview) {    
    return (
      <div className={styles.preview}>
          <img
            className={styles.previewImg}
            src={img_banner}
            alt="фото поста"
          />
      </div>
    );
}
