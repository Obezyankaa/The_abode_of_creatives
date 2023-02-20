import React from 'react';
import styles from './carttext.css';

export function CartText() {
  return (
      <div className={styles.textContent}>
        <div className={styles.mataData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="фото профиля" />
            <a href="#" className={styles.username}>vlad voloshanowskiy</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано</span>
            4 часа назад
          </span>
        </div>
        <h2 className={styles.title}>
          <a href="#" className={styles.postLink}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, necessitatibus magnam! Deleniti reiciendis voluptatum iste eos numquam dolorum dolorem in ut suscipit ipsa vitae sit neque explicabo ea, illum voluptatem?
          </a>
        </h2>
      </div>
  );
}
