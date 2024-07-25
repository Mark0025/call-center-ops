import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/agents">Manage Agents</Link></li>
          <li><Link href="/calls">Manage Calls</Link></li>
          <li><Link href="/kpis">Manage KPIs</Link></li>
          <li><Link href="/upload">Upload CSV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
