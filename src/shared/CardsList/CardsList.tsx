import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

interface ICardsList {
  data: any;
  id: string;
  created: number;
  num_comments: number;
  score: number;
  sr_detail: { icon_img: string };
  subreddit: string;
  title: string;
  thumbnail: string;
}


export function CardsList() {
  const value = useContext(postsContext);
  console.log("valueContext", value);

  return (
    <>
      <ul className={styles.cardsList}>
        {value.map((el: ICardsList) => {
          <Card title={el} />;
        })}
      </ul>
      {/* <ul className={styles.cardsList}>
        {value.map((el: any) => (
          <li key={el.id}>
            <div>{el.title}</div>
            <img src={el.thumbnail} alt="фото поста" />
          </li>
        ))}
      </ul> */}
    </>
  );
}
