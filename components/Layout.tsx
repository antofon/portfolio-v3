import React, { ReactNode } from 'react';
import styles from '../styles/Layout.module.css';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
