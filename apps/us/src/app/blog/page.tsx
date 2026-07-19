import { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { market } from '@/lib/market';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hair Styling Guides & Tips | Muuhu US',
  description: 'Expert hair styling guides, tips, and insights on how to achieve salon-quality results at home with the latest hair care technology.',
  alternates: {
    canonical: absoluteUrl('/blog'),
    languages: {
      'en-US': absoluteUrl('/blog'),
      'en-GB': 'https://uk.muuhu.com/blog',
    },
  },
  openGraph: {
    title: 'Hair Styling Guides & Tips | Muuhu US',
    description: 'Expert hair styling guides, tips, and insights on how to achieve salon-quality results at home with the latest hair care technology.',
    url: absoluteUrl('/blog'),
    siteName: 'Muuhu',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Muuhu',
      url: market.siteUrl,
      logo: absoluteUrl('/images/logo.png'),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: market.siteUrl,
      name: 'Muuhu US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${market.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: market.siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: absoluteUrl('/blog')
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Hair Styling Guides & Tips | Muuhu US',
      description: 'Expert hair styling guides, tips, and insights on how to achieve salon-quality results at home with the latest hair care technology.',
      url: absoluteUrl('/blog')
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[var(--cream)] min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--plum)] mb-6 leading-tight">
              Styling Guides
            </h1>
            <p className="font-sans text-lg md:text-xl text-[var(--ink)] opacity-80 leading-relaxed">
              Discover expert advice, styling tutorials, and the science behind flawless hair. Unlock your hair's potential with our comprehensive guides.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
