import React from 'react';
import styles from './card.css';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';
import { CardPreview } from './CardPreview';
import { CardText } from './CardText';

interface ICardProps {
  id: string;
  author: string;
  title: string;
  img_banner: string;
  icon_img: string;
  created_utc: number;
}

export function Card({
  author,
  title,
  img_banner,
  icon_img,
  created_utc,
  id
}: ICardProps) {
  return (
    <li className={styles.card}>
      <CardText
        author={author}
        title={title}
        icon_img={icon_img}
        created_utc={created_utc}
        id={id}
      />
      <CardPreview img_banner={img_banner} />
      <CardMenu />
      <CardControls />
    </li>
  );
}
