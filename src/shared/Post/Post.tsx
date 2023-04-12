import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';

interface Ipost {
  onClose?: () => void;
}

export function Post(props: Ipost) {
  const ref = useRef<HTMLDivElement>(null) 

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
        //вот так можно вызвать функцию, предварительно проверив есть она или нет 
      }
     }
    document.addEventListener("click", handleClick);

    // очищаем событие addEventListener
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [])

  const node = document.querySelector('#modal_root');

  if (!node) return null

  


  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quas
          labore tempore minus sed asperiores corrupti obcaecati cumque numquam
          nisi accusantium a, dolore suscipit aperiam officiis repellat?
          Blanditiis cum possimus minus, corporis saepe eos dignissimos labore
          suscipit nesciunt officiis accusamus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quas
          labore tempore minus sed asperiores corrupti obcaecati cumque numquam
          nisi accusantium a, dolore suscipit aperiam officiis repellat?
          Blanditiis cum possimus minus, corporis saepe eos dignissimos labore
          suscipit nesciunt officiis accusamus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quas
          labore tempore minus sed asperiores corrupti obcaecati cumque numquam
          nisi accusantium a, dolore suscipit aperiam officiis repellat?
          Blanditiis cum possimus minus, corporis saepe eos dignissimos labore
          suscipit nesciunt officiis accusamus!
        </p>
      </div>
    </div>,
    node
  );
}
