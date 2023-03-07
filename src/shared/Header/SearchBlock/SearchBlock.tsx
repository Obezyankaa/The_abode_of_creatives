import axios from 'axios';
import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
interface ISeachProps {
  token: string
}

export function SearchBlock({ token }: ISeachProps) {
  const [data] = useUserData(token);
  
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
