import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import '../styles/globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("Clerk Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  
  return (
    <html lang="en">
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <body>
          <Providers>
            <div id="root">
              <Header />
              <main>{children}</main>
              <footer>Footer Content</footer>
            </div>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}