// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { getAllNews } from '../utils/newsAPI';

export default function Home({ initialNews }) {
  const [news, setNews] = useState(initialNews);
  const [lastUpdated, setLastUpdated] = useState('');
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);
  const heroArticle = news.length > 0 ? news[0] : null;
  const gridArticles = news.length > 1 ? news.slice(1) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>LiveHindustan - Latest News & Updates</title>
        <meta name="description" content="Latest news from India and around the world" />
      </Head>

      <Header />
      
      <main className="container-custom">
        <div className="text-center mb-8 pt-8">
          <p className="text-sm text-gray-600">
            {isClient ? `Last updated: ${lastUpdated} | ${news.length} articles loaded` : 'Loading...'}
          </p>
        </div>
        {heroArticle && (
          <div className="mb-12">
            <HeroSection article={heroArticle} />
          </div>
        )}
        <div className="py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b pb-4">
            Latest News
          </h2>
          <NewsGrid articles={gridArticles} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const initialNews = await getAllNews('general', 25);
    
    return {
      props: {
        initialNews: initialNews || []
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    
    return {
      props: {
        initialNews: []
      }
    };
  }
}