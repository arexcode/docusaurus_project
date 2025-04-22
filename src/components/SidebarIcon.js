import React from 'react';
import { FaHome, FaBook, FaBlog } from 'react-icons/fa';

export default function SidebarIcon({ type }) {
  switch (type) {
    case 'Inicio':
      return <FaHome />;
    case 'Documentación':
      return <FaBook />;
    case 'Blog':
      return <FaBlog />;
    default:
      return null;
  }
} 