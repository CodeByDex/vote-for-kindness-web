import './globals.css';

export const metadata = {
  title: 'Chris Caldwell — Vote for Kindness',
  description: 'Chris Caldwell for Mayor of Findlay, Ohio — Vote for kindness, community, the neighborly candidate.',
  metadataBase: new URL('https://voteforkindness.com'),
  keywords: [
    'Chris Caldwell',
    'Findlay',
    'mayor',
    'Vote for Kindness',
    'community',
    'Findlay Ohio',
    'local campaign',
    '2027'
  ],
  openGraph: {
    title: 'Chris Caldwell — Vote for Kindness',
    description: 'Chris Caldwell for Mayor of Findlay, Ohio — Vote for kindness, community, the neighborly candidate.',
    url: 'https://voteforkindness.com',
    siteName: 'Vote for Kindness',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Caldwell — Vote for Kindness',
    description: 'Chris Caldwell for Mayor of Findlay, Ohio — Vote for kindness, community, the neighborly candidate.',
    images: ['/og-image.svg']
  }
  ,
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand">
        {children}
      </body>
    </html>
  );
}
