import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ list }) {
  return (
    <ol className={styles.wrapper}>
      {list &&
        list.map((item) => (
          <Toast
            key={item.id}
            id={item.id}
            message={item.message}
            variant={item.variant}
          />
        ))}
    </ol>
  );
}

export default ToastShelf;
