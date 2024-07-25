import '../../styles/globals.css';
import React, { ReactNode } from 'react';
import Header from '../../components/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body>
        <div id="root">
          <Header />
          <main>{children}</main>
          <footer>Footer Content</footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;