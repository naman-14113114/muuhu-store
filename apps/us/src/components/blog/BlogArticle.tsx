import Link from 'next/link';
import { BlogPost } from '@/data/blogPosts';
import { BlogPostCard } from './BlogPostCard';

const articleDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

interface BlogArticleProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogArticle({ post, relatedPosts }: BlogArticleProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm font-sans">
        <ol className="flex items-center space-x-2 text-[var(--muted)]">
          <li>
            <Link href="/" className="hover:text-[var(--plum)] transition-colors">Home</Link>
          </li>
          <li><span>/</span></li>
          <li>
            <Link href="/blog" className="hover:text-[var(--plum)] transition-colors">Blog</Link>
          </li>
          <li><span>/</span></li>
          <li className="text-[var(--ink)] font-medium truncate" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
        <span className="inline-block text-[var(--gold)] font-bold tracking-widest uppercase text-sm mb-4">
          {post.category}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--plum)] leading-tight mb-6">
          {post.title}
        </h1>
        <p className="font-sans text-lg md:text-xl text-[var(--ink)] opacity-80 mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-center space-x-4 text-sm font-sans border-t border-b border-[var(--border)] py-4">
          <div className="text-[var(--plum)] font-medium">{post.author.name}</div>
          <div className="w-1 h-1 rounded-full bg-[var(--muted)]"></div>
          <time className="text-[var(--muted)]" dateTime={post.publishDate}>
            {articleDateFormatter.format(new Date(post.publishDate))}
          </time>
          <div className="w-1 h-1 rounded-full bg-[var(--muted)]"></div>
          <div className="text-[var(--muted)]">{post.readingTime}</div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--plum-soft)] to-[var(--blush)] aspect-[16/9] md:aspect-[21/9] relative shadow-xl">
        {post.heroImage.src ? (
          <img
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[var(--plum)] font-serif text-3xl font-light tracking-widest uppercase opacity-20">Muuhu Editorial</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-lg md:prose-xl max-w-3xl mx-auto font-sans text-[var(--ink)] marker:text-[var(--gold)] prose-headings:font-serif prose-headings:text-[var(--plum)] prose-a:text-[var(--gold)] prose-a:no-underline hover:prose-a:underline">
        {post.sections.map((section) => (
          <section key={section.id} className="mb-12">
            <h2 className="text-3xl font-serif text-[var(--plum)] mb-6">{section.heading}</h2>
            
            {section.type === 'tip' && (
              <div className="bg-[var(--cream)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                <span className="block font-bold text-[var(--plum)] uppercase tracking-wider text-xs mb-2">Expert Tip</span>
                <div dangerouslySetInnerHTML={{ __html: section.body }} />
              </div>
            )}
            
            {section.type === 'comparison' && (
              <div className="bg-[var(--card)] border border-[var(--border)] p-8 my-8 rounded-2xl shadow-sm">
                <div dangerouslySetInnerHTML={{ __html: section.body }} />
              </div>
            )}
            
            {section.type === 'cta' && (
              <div className="bg-gradient-to-br from-[var(--plum)] to-black text-white p-8 md:p-12 my-12 rounded-3xl text-center shadow-2xl">
                <div dangerouslySetInnerHTML={{ __html: section.body }} className="mb-8 prose-p:text-white/90" />
                <Link 
                  href="/products/muuhu-hair-dryer"
                  className="inline-block bg-[var(--gold)] text-white font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white hover:text-[var(--plum)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Shop Muuhu Hair Dryer - $149
                </Link>
                <p className="mt-4 text-sm text-white/60">Compare at $299 • Includes 7 attachments</p>
              </div>
            )}
            
            {(!section.type || section.type === 'text') && (
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            )}
          </section>
        ))}
      </div>

      {/* Sources */}
      {post.sources && post.sources.length > 0 && (
        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-[var(--border)]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] mb-4">Sources & References</h3>
          <ul className="space-y-2 text-sm text-[var(--ink)] opacity-70">
            {post.sources.map((source, index) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-[var(--border)]">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--plum)] mb-4">Continue Reading</h2>
            <p className="font-sans text-[var(--ink)] opacity-70">More styling guides and expert advice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
