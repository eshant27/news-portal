import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
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
                <span className="text-2xl font-bold text-white leading-tight">LiveHindustan</span>
                <span className="text-xs text-gray-300 font-medium">Latest News & Updates</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              India's most trusted news platform bringing you breaking news, latest updates, 
              and in-depth analysis from across the nation and world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'National', 'Politics', 'Business', 'Sports', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/#${link.toLowerCase()}`} className="text-gray-300 hover:text-white text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>📧 contact@livehindustan.com</p>
              <p>📞 +91-98XXXXXX10</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}