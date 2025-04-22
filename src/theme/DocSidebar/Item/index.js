import React from 'react';
import { 
  FaHome, 
  FaCog, 
  FaUser, 
  FaBell, 
  FaQuestionCircle 
} from 'react-icons/fa';

function getIconForLabel(label) {
  switch (label) {
    case 'Inicio':
      return <FaHome className="sidebar-icon" />;
    case 'Configuración':
      return <FaCog className="sidebar-icon" />;
    case 'Perfil':
      return <FaUser className="sidebar-icon" />;
    case 'Notificaciones':
      return <FaBell className="sidebar-icon" />;
    case 'Ayuda':
      return <FaQuestionCircle className="sidebar-icon" />;
    default:
      return null;
  }
}

function DocSidebarItem({ item, ...props }) {
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

export default DocSidebarItem; 