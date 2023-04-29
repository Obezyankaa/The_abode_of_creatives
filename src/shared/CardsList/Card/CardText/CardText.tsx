import React, { useState } from 'react';
import { Post } from '../../../Post';
import styles from './cardtext.css';

interface ICartProps {
  author: string;
  title: string;
  icon_img: string;
  created_utc: number;
  id: string;
}


export function CardText({
  author,
  title,
  icon_img,
  created_utc,
  id
}: ICartProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const timestamp = created_utc; // значение в секундах с 1 января 1970 года
  const dateTime = new Date(timestamp * 1000).toString();
  let dataPosts = dateTime
    .split(" ")
    .slice(1, 4)
    .join()
    .replace(",", " ")
    .replace(",", " ");

  return (
    <div className={styles.textContent}>
      <div className={styles.mataData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={
              icon_img
                ? icon_img
                : "https://emdigital.ru/images/ilensAvas/mcdonalds_rus.jpeg"
            }
            alt="фото профиля"
          />
          <a href="/autor" className={styles.username}>
            {author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span>
          {dataPosts}
        </span>
      </div>
      <h2 className={styles.title}>
        <button
          className={styles.postLink}
          onClick={() => {
            setIsModalOpened(!isModalOpened);
          }}
        >
          {title}
        </button>

        {isModalOpened && (
          <Post
            id={id}
            onClose={() => {
              setIsModalOpened(false);
            }}
          />
        )}
      </h2>
    </div>
  );
}
