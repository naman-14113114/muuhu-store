import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts';

const cardDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--plum-soft)] to-[var(--blush)] overflow-hidden">
        {post.heroImage.src ? (
          <img 
            src={post.heroImage.src} 
            alt={post.heroImage.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <span className="text-[var(--plum)] font-serif text-2xl font-light tracking-widest uppercase opacity-30">Muuhu Editorial</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="font-serif text-2xl text-[var(--plum)] leading-snug mb-3 group-hover:text-[var(--gold)] transition-colors">
          {post.title}
        </h3>
        <p className="font-sans text-[var(--ink)] opacity-80 leading-relaxed mb-6 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border)]">
          <div className="flex flex-col">
            <span className="font-sans text-sm text-[var(--plum)] font-medium">
              {post.author.name}
            </span>
            <div className="flex items-center text-xs text-[var(--muted)] mt-1 space-x-2">
              <time dateTime={post.publishDate}>
                {cardDateFormatter.format(new Date(post.publishDate))}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
