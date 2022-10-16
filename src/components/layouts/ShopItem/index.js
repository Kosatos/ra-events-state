import React from 'react';
import styles from './index.module.css';

export default function ShopItem({ item }) {
  return (
    <li className={styles.product}>
      <div className={styles.product__img}>
        <img src={item.img} alt={`${item.name} ${item.color}`} />
      </div>
      <h3 className={styles.product__name}>{item.name}</h3>
      <span className={styles.product__color}>{item.color}</span>
      <span className={styles.product__price}>${item.price}</span>
      <button className={styles.product__btn}>Add to cart</button>
    </li>
  );
}
