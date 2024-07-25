import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import '../styles/globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
            <div id="root">
              <Header />
              <main>{children}</main>
              <footer>Footer Content</footer>
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}