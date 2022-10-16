import React from 'react';
import ShopItem from '../ShopItem';
import styles from './index.module.css';

export default function ItemsView({ products }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <ShopItem key={`${product.name} ${product.color}`} item={product} />
      ))}
    </ul>
  );
}
