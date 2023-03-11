import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';


export function CardsList() {
  const postData = useContext(postsContext)
  let test = postData.forEach((post) => console.log(post));

  console.log(test);
  
  
  return (
    <>
      <ul className={styles.cardsList}>
        {postData.map((el) => (
          <Card
           key={el.data.author}
            title={el.data.author} />
        ))}
      </ul>
      {/* <ul className={styles.cardsList}>
        {postData.map((el: any) => (
          <li key={el.id}>
            <div>автор: {el.data.author}</div>
            <div>{el.data.title}</div>

            <img src={el.data.thumbnail} alt="фото поста" />
          </li>
        ))}
      </ul> */}
    </>
  );
}
