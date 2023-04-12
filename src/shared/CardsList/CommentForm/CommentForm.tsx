import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { CommentContext } from '../../context/commentContext';
import styles from './commentform.css';

export function CommentForm() {

  const { value, onCahge } = useContext(CommentContext);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onCahge(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(value);  
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        комментировать
      </button>
    </form>
  );
}
