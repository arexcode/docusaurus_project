import React from 'react';
import SidebarIcon from './SidebarIcon';

export default function SidebarWrapper({ children, label }) {
  return (
    <div className="sidebar-wrapper">
      <SidebarIcon type={label} />
      {children}
    </div>
  );
} 