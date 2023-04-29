import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';


export function CardsList() {
  const postData = useContext(postsContext)  
  return (
    <>
      <ul className={styles.cardsList}>
        {postData.map((el) => (
          <Card
            key={el.data.id}
            author={el.data.author}
            title={el.data.title}
            img_banner={el.data.sr_detail.banner_img}
            icon_img={el.data.sr_detail.icon_img}
            created_utc={el.data.sr_detail.created_utc}
            id={el.data.id}
          />
        ))}
      </ul>
    </>
  );
}
