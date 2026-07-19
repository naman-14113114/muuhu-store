import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts';

const cardDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[var(--plum-soft)] to-[var(--cream)]">
        {post.heroImage.src ? (
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : null}
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-[var(--gold)]/10 text-[var(--plum)] border border-[var(--gold)]/20">
            {post.category}
          </span>
          <span className="text-sm text-[var(--muted)] buudy-mono">
            {post.readingTime}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-serif text-[var(--plum)] mb-3 leading-snug group-hover:text-[var(--gold)] transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-[var(--ink)]/80 text-sm mb-6 line-clamp-3 flex-1 font-sans">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
          <div className="text-sm text-[var(--muted)]">
            {cardDateFormatter.format(new Date(post.publishDate))}
          </div>
          <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-[var(--plum)] hover:text-[var(--gold)] transition-colors inline-flex items-center gap-1">
            Read More <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
