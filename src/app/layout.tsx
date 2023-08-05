import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { TransitionsLayout } from './transitions-layout';
import { Footer } from '@/components/footer';

import '@/styling/globals.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'hoo.be coding exercise',
  description: "hoo.be coding exercise's hoo.be page. check out their latest content, links, social profiles & more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} preload`}>
        <TransitionsLayout>
          <main>{children}</main>

          <Footer />
        </TransitionsLayout>
      </body>
    </html>
  );
}
