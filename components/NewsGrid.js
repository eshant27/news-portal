import NewsCard from './NewsCard';

export default function NewsGrid({ articles, title, featured = false }) {
  return (
    <section className="py-8">
      <div className="container-custom">
        <h2 className="heading-primary">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <NewsCard
              key={article.title + index}
              article={article}
              featured={featured && index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}