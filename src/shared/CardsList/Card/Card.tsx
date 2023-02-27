import React from 'react';
import styles from './card.scss';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';
import { CardText } from './CardText';

export function Card() {
  return (
    <div>
    <li className={styles.card}>
      <CardText />
      <CardPreview />
      <CardMenu />
      <CardControls />
    </li>
    </div>
  );
}
