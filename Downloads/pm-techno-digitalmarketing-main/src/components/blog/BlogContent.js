export default function BlogContent({ content }) {
  if (!content) return null;

  return (
    <article 
      className="
        prose prose-lg md:prose-xl max-w-none 
        text-text-secondary leading-relaxed
        
        /* Headings */
        prose-headings:text-[#0B1F3A] prose-headings:font-extrabold prose-headings:tracking-tight
        prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border-divider
        prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-4
        
        /* Paragraphs */
        prose-p:mb-6 prose-p:text-[17px] md:prose-p:text-[19px] prose-p:leading-[1.8]
        
        /* Links */
        prose-a:text-brand-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:text-[#0B1F3A] hover:prose-a:underline prose-a:transition-colors
        
        /* Lists */
        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
        prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
        prose-li:pl-2 prose-li:mb-2 marker:text-brand-primary
        
        /* Blockquotes */
        prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-bg-secondary prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-text-secondary prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:not-italic prose-blockquote:my-10
        
        /* Images */
        prose-img:rounded-3xl prose-img:shadow-lg prose-img:w-full prose-img:border prose-img:border-border-divider prose-img:my-12
        
        /* Strong / Bold */
        prose-strong:font-bold prose-strong:text-[#0B1F3A]
      "
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
