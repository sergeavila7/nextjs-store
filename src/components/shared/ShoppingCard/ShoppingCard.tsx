'use client';

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCard.module.sass';

export const ShoppingCard = () => {
  const [countItems, setCountItems] = useState(0);
  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>{countItems}</span>
      <FaShoppingCart />
    </button>
  );
};
