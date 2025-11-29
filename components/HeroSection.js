
import Link from 'next/link';

export default function HeroSection({ article }) {
  if (!article) return null;
  const articleId = article.title
    ?.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50) || 'article';
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop';
    e.target.onerror = null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-80 lg:h-96">
          <img
            src={article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop'}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Breaking News
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.source?.name || 'LiveHindustan'}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed line-clamp-3">
            {article.description || 'Read the full story for complete details and analysis.'}
          </p> 
          {article.author && (
            <p className="text-gray-500 mb-6">
              By <span className="font-semibold">{article.author}</span>
            </p>
          )}

          {/* Read More Button */}
          <div className="flex space-x-4">
            <Link 
              href={`/article/${articleId}`}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Read Full Story
            </Link>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Share
            </button>
          </div>
          
          <div className="flex space-x-6 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5min</div>
              <div className="text-sm text-gray-500">Read time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1.2K</div>
              <div className="text-sm text-gray-500">Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">245</div>
              <div className="text-sm text-gray-500">Shares</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}