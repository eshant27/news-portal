import Link from 'next/link';
import { useEffect, useState } from 'react';
import { forceRefreshNews } from '../utils/newsAPI';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setCurrentDate(new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
    setLastRefresh(new Date().toLocaleTimeString('en-IN'));
  }, []);

  const handleRefreshNews = async () => {
    if (!isClient) return;
    
    setRefreshing(true);
    try {
      console.log('🔄 Refreshing news data...');
      await forceRefreshNews();
     
      window.location.reload();
    } catch (error) {
      console.error('Error refreshing news:', error);
      setRefreshing(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-500">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="6" width="16" height="12" rx="1" fill="white" stroke="#1F2937" strokeWidth="1.5"/>
                <line x1="6" y1="9" x2="18" y2="9" stroke="#1F2937" strokeWidth="1.5"/>
                <line x1="6" y1="12" x2="18" y2="12" stroke="#1F2937" strokeWidth="1"/>
                <line x1="6" y1="15" x2="18" y2="15" stroke="#1F2937" strokeWidth="1"/>
                <line x1="6" y1="18" x2="12" y2="18" stroke="#1F2937" strokeWidth="1.5"/>
                <line x1="8" y1="7.5" x2="11" y2="7.5" stroke="#1F2937" strokeWidth="2"/>
                <line x1="14" y1="7.5" x2="17" y2="7.5" stroke="#1F2937" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight">LiveHindustan</span>
              <span className="text-xs text-gray-600 font-medium">Latest News & Updates</span>
            </div>
          </Link>

          {/* Refresh Button */}
          <div className="flex items-center space-x-6">
            {/* Date and Weather */}
            <div className="text-right">
              <div className="text-sm text-gray-600">
                {isClient ? currentDate : 'Loading date...'}
              </div>
              <div className="text-xs text-gray-500">
                {isClient ? `Updated: ${lastRefresh}` : 'Loading...'}
              </div>
            </div>

            <button
              onClick={handleRefreshNews}
              disabled={refreshing || !isClient}
              className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors shadow-md"
            >
              {refreshing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Refreshing...</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Get New News</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <ul className="flex space-x-8 py-3 overflow-x-auto">
            {['National', 'Politics', 'Business', 'Sports', 'Entertainment', 'Technology', 'World'].map((category) => (
              <li key={category}>
                <Link 
                  href={`/#${category.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 whitespace-nowrap"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}