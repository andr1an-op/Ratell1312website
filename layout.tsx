import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import kota from '@/public/kota.jpg'
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body 
        className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
