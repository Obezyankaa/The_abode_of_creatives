import React from 'react'
import { EColor, Text } from '../../../Text'
import { IconAnon } from '../../icons'
import styles from './userblock.css'


interface IUserBlockProps {
    avatarSrc?: string
    username?: string
}


export function UserBlock({avatarSrc, username}: IUserBlockProps ) {
  return (
      <a
          href='https://www.reddit.com/api/v1/authorize?client_id=2OxKj3Xx8URhWlakNS-w9A&response_type=code&state=random_strinq&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
          className={styles.userBox}>
          <div className={styles.avatarBox}>
              {avatarSrc
                  ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} />
                  : <IconAnon />
            }
          </div>
          <div className={styles.username}>
              {/* <Break size={12} /> */}
              <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Anonim'}</Text>
          </div>
    </a>
  )
}
