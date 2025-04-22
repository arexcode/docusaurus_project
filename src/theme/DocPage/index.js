import React from 'react';
import DocSidebar from '../DocSidebar';
import styles from './styles.module.css';

export default function DocPage({ children, sidebar }) {
  return (
    <div className={styles.docPage}>
      <DocSidebar items={sidebar} />
      <main className={styles.docMain}>
        {children}
      </main>
    </div>
  );
} 