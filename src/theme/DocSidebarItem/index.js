import React from 'react';
import { FaHome, FaBook, FaCog } from 'react-icons/fa';

function getIconForLabel(label) {
  switch (label) {
    case 'Inicio':
      return <FaHome className="sidebar-icon" />;
    case 'Documentación':
      return <FaBook className="sidebar-icon" />;
    case 'Extras':
      return <FaCog className="sidebar-icon" />;
    default:
      return null;
  }
}

export default function DocSidebarItem({ item, ...props }) {
  const icon = getIconForLabel(item.label);
  
  if (item.type === 'category') {
    return (
      <div className="sidebar-item-wrapper">
        {icon}
        <span className="sidebar-item-link">
          {item.label}
        </span>
        <div className="sidebar-subitems">
          {item.items.map((subItem, index) => (
            <a
              key={index}
              href={`/docs/${subItem}`}
              className="sidebar-subitem-link"
            >
              {subItem.split('/').pop().replace(/-/g, ' ')}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="sidebar-item-wrapper">
      {icon}
      <a
        href={`/docs/${item.id}`}
        className="sidebar-item-link"
        {...props}
      >
        {item.label}
      </a>
    </div>
  );
} 