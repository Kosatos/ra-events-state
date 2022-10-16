import React from 'react';
import styles from './index.module.css';

export default function Toolbar({ filters, selected, onSelect }) {
  return (
    <div className="toolbar">
      <ul className={styles.toolbar__list}>
        {filters.map((ctg) => {
          const isSelected = selected === ctg;
          return (
            <li
              className={
                styles.toolbar__item +
                (isSelected ? ` ${styles.toolbar__item_selected}` : '')
              }
              onClick={() => onSelect(ctg)}
              key={ctg}
            >
              {ctg}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
