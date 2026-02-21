import Head from 'next/head';

type MetaProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
};

export default function Meta({
  title = 'Chris Caldwell — Vote for Kindness',
  description = 'Chris Caldwell for Mayor of Findlay, Ohio — Vote for kindness, community, the neighborly candidate.',
  url = 'https://voteforkindness.com',
  image = '/og-image.svg',
  keywords = [
    'Chris Caldwell',
    'Findlay',
    'mayor',
    'Vote for Kindness',
    'community',
    'Findlay Ohio',
    'local campaign',
    '2027'
  ]
}: MetaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chris Caldwell for Mayor',
    url,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '',
        contactType: 'Campaign inquiries',
        email: 'contact@voteforkindness.com'
      }
    ],
    sameAs: ['https://github.com/CodeByDex']
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Vote for Kindness" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
