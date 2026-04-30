import './globals.css';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen">
        <header style={{ backgroundColor: 'var(--header)' }} className="p-4 flex justify-between items-center">
          <nav>
            <ul className="flex gap-4">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/portfolio">Portfólio</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}