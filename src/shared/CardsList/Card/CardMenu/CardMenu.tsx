import React, {useRef, useState } from 'react';
import { CardDropdownMenu } from '../../CardDropdownMenu';
import styles from './cardmenu.css';


export function CardMenu() {
  const [open, setOpen] = useState(false)
  const postId = '123';
  // проверка

  const ref = useRef<HTMLDivElement>(null);
  const rect = ref.current?.getBoundingClientRect();

  return (
    <>
      <div className={styles.menu} ref={ref}>
        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          <svg
            width="5"
            height="20"
            viewBox="0 0 5 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
          </svg>
        </button>
      </div>
      {open && (
        <CardDropdownMenu
          open={open}
          setOpen={setOpen}
          postId={postId}
          rect={rect}
        />
      )}
    </>
  );
}

