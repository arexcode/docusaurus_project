import React from 'react';
import { FaHome, FaCog, FaUser, FaBell, FaQuestionCircle } from 'react-icons/fa';
import styles from './styles.module.css';

function getIconForLabel(label) {
  switch (label) {
    case 'Inicio':
      return <FaHome />;
    case 'Configuración':
      return <FaCog />;
    case 'Perfil':
      return <FaUser />;
    case 'Notificaciones':
      return <FaBell />;
    case 'Ayuda':
      return <FaQuestionCircle />;
    default:
      return null;
  }
}

function DocSidebarItem({ item, activePath }) {
  const isActive = activePath === item.id;
  
  return (
    <div className={`${styles.sidebarItemWrapper} ${isActive ? styles.sidebarItemWrapperActive : ''}`}>
      <div className={styles.sidebarIcon}>
        {getIconForLabel(item.label)}
      </div>
      <a href={`/docs/${item.id}`} className={styles.sidebarItemLink}>
        {item.label}
      </a>
    </div>
  );
}

export default function DocSidebar({ items, activePath }) {
  return (
    <div className={styles.docSidebarContainer}>
      <div className={styles.sidebarLogo}>
        <h2>Secure<span>Pass</span></h2>
      </div>
      <div className={styles.sidebarItemList}>
        {items.map((item, index) => (
          <DocSidebarItem key={index} item={item} activePath={activePath} />
        ))}
      </div>
    </div>
  );
} 