import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DocSidebar from '@site/src/theme/DocSidebar';
import styles from './index.module.css';

const sidebarItems = [
  {
    type: 'doc',
    id: 'intro',
    label: 'Inicio',
  },
  {
    type: 'doc',
    id: 'settings',
    label: 'Configuración',
  },
  {
    type: 'doc',
    id: 'profile',
    label: 'Perfil',
  },
  {
    type: 'doc',
    id: 'notifications',
    label: 'Notificaciones',
  },
  {
    type: 'doc',
    id: 'help',
    label: 'Ayuda',
  }
];

const features = [
  {
    icon: '🔒',
    title: 'Seguridad Avanzada',
    description: 'Encriptación de última generación para proteger tus contraseñas',
  },
  {
    icon: '🔄',
    title: 'Sincronización',
    description: 'Accede a tus contraseñas desde cualquier dispositivo',
  },
  {
    icon: '🎯',
    title: 'Generador de Contraseñas',
    description: 'Crea contraseñas seguras y únicas al instante',
  },
  {
    icon: '📱',
    title: 'Autocompletado',
    description: 'Rellena automáticamente tus credenciales en sitios web',
  },
];

const securityFeatures = [
  {
    icon: '🛡️',
    title: 'Encriptación de Nivel Militar',
    description: 'Protección AES-256 para tus datos más sensibles',
  },
  {
    icon: '🔐',
    title: 'Verificación en Dos Pasos',
    description: 'Autenticación adicional para mayor seguridad',
  },
  {
    icon: '📊',
    title: 'Auditoría de Seguridad',
    description: 'Monitorea el acceso a tus contraseñas',
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function SecurityFeature({icon, title, description}) {
  return (
    <div className={styles.securityCard}>
      <div className={styles.securityIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageHeader() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>SecurePass</h1>
        <p className={styles.heroSubtitle}>Tu gestor de contraseñas seguro y confiable</p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Comenzar Gratis
          </Link>
          <Link className={styles.secondaryButton} to="/docs/intro">
            Ver Demo
          </Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.mockupContainer}>
          <div className={styles.mockupScreen}></div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <h2>Características Principales</h2>
      <div className={styles.featuresGrid}>
        {features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className={styles.securitySection}>
      <h2>Seguridad de Primer Nivel</h2>
      <div className={styles.securityGrid}>
        {securityFeatures.map((props, idx) => (
          <SecurityFeature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="SecurePass - Gestor de Contraseñas Seguro"
      description="Gestiona tus contraseñas de forma segura y sencilla">
      <div className={styles.homePage}>
        <DocSidebar items={sidebarItems} />
        <div className={styles.mainContent}>
          <HomepageHeader />
          <FeaturesSection />
          <SecuritySection />
        </div>
      </div>
    </Layout>
  );
}
