import axios from 'axios';
import React, { useEffect,useState } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
axios
interface ISeachProps {
  token: string
}

interface IUserData {
  name?: string
  iconImg?: string
}

export function SearchBlock({ token }: ISeachProps) {
  
  const [data, setData] = useState<IUserData>({})
  console.log('SearchBlock data ---> ', data)

  useEffect(() => {
    if (!token || token === "undefined") return;
    axios.get('https://oauth.reddit.com/api/v1/me.json',
      {
        headers: { Authorization: `bearer${token}` }
      })
      .then((resp) => {
          console.log(resp);
          
          const userData = resp.data;
          const icon = userData.icon_img.split('?')[0];
          console.log('userData-->>', userData);
          setData({ name: userData.name, iconImg: icon })
        })
        .catch(console.log)
  },[token])

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
