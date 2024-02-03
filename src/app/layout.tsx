import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Footer, Header } from 'app/components';

const dm_sans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={dm_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
