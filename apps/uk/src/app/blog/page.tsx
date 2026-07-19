import { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { absoluteUrl } from '@/lib/site';
import { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd } from '@/lib/seo';

export function generateMetadata(): Metadata {
  return {
    title: 'Hair Styling Guides & Tips | Muuhu UK',
    description: 'Expert hair styling guides, tips, and tutorials from the Muuhu Editorial Team. Discover the best techniques for your hair type.',
    alternates: {
      canonical: absoluteUrl('/blog'),
      languages: {
        'en-GB': absoluteUrl('/blog'),
        'en-US': 'https://us.muuhu.com/blog',
      },
    },
    openGraph: {
      title: 'Hair Styling Guides & Tips | Muuhu UK',
      description: 'Expert hair styling guides, tips, and tutorials from the Muuhu Editorial Team. Discover the best techniques for your hair type.',
      url: absoluteUrl('/blog'),
      siteName: 'Muuhu UK',
      type: 'website',
    },
  };
}

export default function BlogIndexPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Hair Styling Guides & Tips',
    description: 'Expert hair styling guides, tips, and tutorials from the Muuhu Editorial Team.',
    url: absoluteUrl('/blog'),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <main className="min-h-screen bg-[var(--cream)] pb-24">
        <header className="pt-32 pb-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--plum)] mb-6 buudy-display">
            Styling Guides
          </h1>
          <p className="text-[var(--ink)]/70 max-w-2xl mx-auto text-lg font-sans">
            Expert advice, tutorials, and insights to help you achieve salon-quality results at home.
          </p>
        </header>

        <div className="buudy-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
