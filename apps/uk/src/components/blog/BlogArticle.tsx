import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts';
import BlogPostCard from './BlogPostCard';

const articleDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function BlogArticle({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  return (
    <article className="pb-24">
      {/* Header */}
      <header className="pt-24 pb-12 bg-gradient-to-b from-[var(--plum-soft)]/30 to-transparent">
        <div className="buudy-wrap">
          <nav className="flex items-center gap-2 text-sm text-[var(--muted)] mb-8 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--plum)] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-[var(--plum)] transition-colors">Guides</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--ink)] line-clamp-1">{post.title}</span>
          </nav>
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-[var(--gold)]/10 text-[var(--plum)]">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--plum)] mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[var(--muted)] mb-10 font-sans">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[var(--ink)]">{post.author.name}</span>
                <span className="text-sm">({post.author.role})</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
              <time dateTime={post.publishDate}>
                {articleDateFormatter.format(new Date(post.publishDate))}
              </time>
              <span className="hidden sm:inline" aria-hidden="true">&bull;</span>
              <span className="buudy-mono">{post.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="buudy-wrap mb-16">
        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--plum-soft)] to-[var(--cream)] shadow-xl">
          {post.heroImage.src && (
            <Image
              src={post.heroImage.src}
              alt={post.heroImage.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="buudy-wrap max-w-3xl font-sans">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[var(--plum)] prose-p:text-[var(--ink)]/80 prose-a:text-[var(--gold)] prose-a:no-underline hover:prose-a:underline mx-auto">
          {post.sections.map((section) => {
            if (section.type === 'tip') {
              return (
                <div key={section.id} className="my-10 p-8 rounded-2xl bg-[var(--blush)]/20 border-l-4 border-[var(--plum)]">
                  <h3 className="text-xl font-serif text-[var(--plum)] mb-4 mt-0 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {section.heading}
                  </h3>
                  <div className="text-[var(--ink)]/90 text-base m-0" dangerouslySetInnerHTML={{ __html: section.body }} />
                </div>
              );
            }
            if (section.type === 'cta') {
              return (
                <div key={section.id} className="my-12 p-10 rounded-3xl bg-[var(--plum)] text-center text-[var(--cream)] shadow-xl">
                  <h2 className="text-3xl font-serif mb-4 mt-0 text-[var(--cream)]">{section.heading}</h2>
                  <div className="mb-8 text-[var(--cream)]/90" dangerouslySetInnerHTML={{ __html: section.body }} />
                  <Link href="/products/muuhu-hair-dryer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest bg-[var(--gold)] text-[var(--plum)] rounded-full hover:bg-[var(--cream)] transition-colors">
                    Explore Muuhu AirPro
                  </Link>
                </div>
              );
            }
            return (
              <section key={section.id} className="mb-12">
                <h2 className="text-3xl font-serif text-[var(--plum)] mb-6 mt-12">{section.heading}</h2>
                <div className="space-y-4" dangerouslySetInnerHTML={{ __html: section.body }} />
              </section>
            );
          })}
        </div>

        {/* Sources */}
        {post.sources.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[var(--border)]">
            <h3 className="text-lg font-bold text-[var(--plum)] mb-4">Sources & References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--muted)]">
              {post.sources.map((source, index) => (
                <li key={index}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
                    {source.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-[var(--border)] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-[var(--card)] border border-[var(--border)] text-[var(--ink)] text-xs font-medium rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Product CTA */}
      <div className="buudy-wrap mt-24 max-w-4xl">
        <div className="bg-gradient-to-r from-[var(--plum)] to-[#2D1B2E] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--cream)] mb-4">Professional styling, every day.</h2>
            <p className="text-[var(--cream)]/80 text-lg mb-8">
              Experience the 110,000 RPM brushless motor and 200M+ negative ions with the Muuhu AirPro. Includes 7 professional attachments.
            </p>
            <Link href="/products/muuhu-hair-dryer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest bg-[var(--gold)] text-[var(--plum)] rounded-full hover:bg-[var(--cream)] transition-colors">
              Explore the Muuhu AirPro
            </Link>
          </div>
          <div className="relative z-10 w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-[var(--gold)]/20 blur-3xl absolute"></div>
            <div className="text-6xl">✨</div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="buudy-wrap mt-24">
          <h2 className="text-3xl font-serif text-[var(--plum)] mb-10 text-center">More from our experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(related => (
              <BlogPostCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
