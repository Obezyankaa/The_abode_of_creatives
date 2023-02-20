import React from 'react';
import styles from './card.css';
import { CartControls } from './CartControls';
import { CartMenu } from './CartMenu';
import { CartPreview } from './CartPreview';
import { CartText } from './CartText';

export function Card() {
  return (
    <li className={styles.card}>
      <CartText />
      <CartPreview />
      <CartMenu />
      <CartControls />
    </li>
  );
}
