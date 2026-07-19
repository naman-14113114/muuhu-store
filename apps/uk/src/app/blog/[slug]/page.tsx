import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import BlogArticle from '@/components/blog/BlogArticle';
import { absoluteUrl } from '@/lib/site';
import { organizationJsonLd, websiteJsonLd, breadcrumbJsonLd, articleJsonLd } from '@/lib/seo';

const usAlternateBySlug: Record<string, string> = {
  'best-hair-dryer-uk-2026': 'https://us.muuhu.com/blog/best-hair-dryer-us-2026',
  'best-hair-dryer-for-frizzy-hair-uk': 'https://us.muuhu.com/blog/best-hair-dryer-for-frizzy-hair-us',
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {};
  }

  const languages: Record<string, string> = {
    'en-GB': absoluteUrl(`/blog/${post.slug}`),
  };

  if (usAlternateBySlug[post.slug]) {
    languages['en-US'] = usAlternateBySlug[post.slug];
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
      languages,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: post.heroImage.src ? [
        {
          url: absoluteUrl(post.heroImage.src),
          width: 1200,
          height: 630,
          alt: post.heroImage.alt,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: post.heroImage.src ? [absoluteUrl(post.heroImage.src)] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      
      <main className="min-h-screen bg-[var(--cream)]">
        <BlogArticle post={post} relatedPosts={relatedPosts} />
      </main>
    </>
  );
}
