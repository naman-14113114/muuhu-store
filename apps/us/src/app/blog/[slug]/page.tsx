import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { BlogArticle } from '@/components/blog/BlogArticle';
import { market } from '@/lib/market';
import { absoluteUrl } from '@/lib/site';
import { articleJsonLd, breadcrumbJsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/seo';

const ukAlternateBySlug: Record<string, string> = {
  'best-hair-dryer-us-2026': 'https://uk.muuhu.com/blog/best-hair-dryer-uk-2026',
  'best-hair-dryer-for-frizzy-hair-us': 'https://uk.muuhu.com/blog/best-hair-dryer-for-frizzy-hair-uk',
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
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

  const url = absoluteUrl(`/blog/${post.slug}`);
  
  const languages: Record<string, string> = {
    'en-US': url,
  };
  
  if (ukAlternateBySlug[post.slug]) {
    languages['en-GB'] = ukAlternateBySlug[post.slug];
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url,
      siteName: 'Muuhu',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [
        {
          url: post.heroImage.src ? absoluteUrl(post.heroImage.src) : absoluteUrl('/images/og-default.jpg'),
          width: 1200,
          height: 630,
          alt: post.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.heroImage.src ? absoluteUrl(post.heroImage.src) : absoluteUrl('/images/og-default.jpg')],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.relatedSlugs);
  const url = absoluteUrl(`/blog/${post.slug}`);

  const jsonLd = [
    organizationJsonLd(),
    websiteJsonLd(),
    breadcrumbJsonLd([
      { name: 'Home', url: market.siteUrl },
      { name: 'Blog', url: absoluteUrl('/blog') },
      { name: post.title, url }
    ]),
    articleJsonLd({
      title: post.title,
      seoDescription: post.seoDescription,
      slug: post.slug,
      publishDate: post.publishDate,
      updatedDate: post.updatedDate,
      author: { name: post.author.name },
      heroImage: { 
        src: post.heroImage.src ? absoluteUrl(post.heroImage.src) : absoluteUrl('/images/og-default.jpg'), 
        alt: post.heroImage.alt 
      }
    })
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[var(--cream)] min-h-screen pt-12 md:pt-20 pb-20">
        <BlogArticle post={post} relatedPosts={relatedPosts} />
      </div>
    </>
  );
}
