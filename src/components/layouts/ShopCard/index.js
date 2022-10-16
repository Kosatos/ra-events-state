import React from 'react';
import styles from './index.module.css';

export default function ShopCard({ card }) {
  return (
    <li className={styles.product}>
      <div className={styles.product__header}>
        <h3 className={styles.product__name}>{card.name}</h3>
        <span className={styles.product__color}>{card.color}</span>
      </div>
      <div className={styles.product__img}>
        <img src={card.img} alt={`${card.name} ${card.color}`} />
      </div>
      <div className={styles.product__footer}>
        <span className={styles.product__price}>${card.price}</span>
        <button className={styles.product__btn}>Add to cart</button>
      </div>
    </li>
  );
}
