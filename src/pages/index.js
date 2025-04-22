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
    id: 'configuracion',
    label: 'Configuración',
  },
];

const features = [
  {
    title: 'Instalación Rápida',
    description: 'Guía paso a paso para instalar y configurar tu gestor de contraseñas en diferentes dispositivos.',
    icon: '⚡',
  },
  {
    title: 'Seguridad Avanzada',
    description: 'Aprende las mejores prácticas para mantener tus contraseñas seguras y protegidas.',
    icon: '🔒',
  },
  {
    title: 'Sincronización',
    description: 'Configura la sincronización entre dispositivos para acceder a tus contraseñas desde cualquier lugar.',
    icon: '🔄',
  },
  {
    title: 'Generación de Contraseñas',
    description: 'Utiliza el generador de contraseñas para crear claves seguras y únicas.',
    icon: '🔑',
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

function HomepageHeader() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Manual de Gestor de Contraseñas</h1>
        <p className={styles.heroSubtitle}>
          Guía completa para implementar y utilizar un gestor de contraseñas de forma segura y eficiente
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.primaryButton} to="/docs/introduccion">
            Comenzar a Leer
          </Link>
          <Link className={styles.secondaryButton} to="/docs/instalacion">
            Instalación Rápida
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
      <h2>Contenido del Manual</h2>
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
      <h2>¿Por qué usar un gestor de contraseñas?</h2>
      <div className={styles.securityGrid}>
        <div className={styles.securityCard}>
          <div className={styles.securityIcon}>🔐</div>
          <h3>Seguridad Mejorada</h3>
          <p>
            Almacena todas tus contraseñas de forma segura y accede a ellas con una única contraseña maestra.
          </p>
        </div>
        <div className={styles.securityCard}>
          <div className={styles.securityIcon}>🔄</div>
          <h3>Acceso Multi-dispositivo</h3>
          <p>
            Sincroniza tus contraseñas entre todos tus dispositivos de forma segura y automática.
          </p>
        </div>
        <div className={styles.securityCard}>
          <div className={styles.securityIcon}>🎯</div>
          <h3>Productividad</h3>
          <p>
            Ahorra tiempo con autocompletado y generación automática de contraseñas seguras.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Manual de Gestor de Contraseñas"
      description="Guía completa para implementar y utilizar un gestor de contraseñas de forma segura y eficiente">
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
