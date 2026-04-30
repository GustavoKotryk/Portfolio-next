import './globals.css';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen">
        <header style={{ backgroundColor: 'var(--header)' }} className="p-4 flex justify-between items-center sticky top-0 backdrop-blur-sm">
          <Link href="/" className="text-xl font-bold">MeuPortfólio</Link>
          <nav>
            <ul className="flex gap-4">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-blue-600 transition-colors">Sobre</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfólio</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}