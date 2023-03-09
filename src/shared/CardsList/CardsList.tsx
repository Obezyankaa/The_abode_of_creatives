import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const value = useContext(postsContext);
  console.log(value.map((el:any) => el.data));
  
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
