import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/constants/theme.constants';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'João Almeida | Software Engineer',
  description: 'Software Engineer com experiência em React, Node.js e Java.',
};

const themeScript = `(() => {
  let theme = ${JSON.stringify(DEFAULT_THEME)};
  
  try {
    const savedTheme = JSON.parse(window.localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}) ?? 'null');
    if (savedTheme === 'dark' || savedTheme === 'light') theme = savedTheme;
  } catch {}
  
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();`;

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html
      lang="pt-BR"
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
};

export default RootLayout;
