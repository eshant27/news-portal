// components/Logo.js
export default function Logo({ size = 50 }) {
  return (
    <div className="flex items-center">
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="cursor-pointer"
      >
        {/* Yellow Circle Background */}
        <circle cx="50" cy="50" r="45" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
        
        {/* Newspaper Icon */}
        <rect x="25" y="30" width="50" height="35" rx="2" fill="white" stroke="#333" strokeWidth="1.5"/>
        <line x1="30" y1="40" x2="70" y2="40" stroke="#333" strokeWidth="1"/>
        <line x1="30" y1="45" x2="70" y2="45" stroke="#333" strokeWidth="0.5"/>
        <line x1="30" y1="50" x2="70" y2="50" stroke="#333" strokeWidth="0.5"/>
        <line x1="30" y1="55" x2="70" y2="55" stroke="#333" strokeWidth="0.5"/>
        <line x1="30" y1="60" x2="45" y2="60" stroke="#333" strokeWidth="1"/>
        
        <line x1="30" y1="35" x2="45" y2="35" stroke="#333" strokeWidth="2"/>
        <line x1="55" y1="35" x2="70" y2="35" stroke="#333" strokeWidth="2"/>
      </svg>
    
      <span className="ml-3 text-xl font-bold text-gray-800">NewsHub</span>
    </div>
  );
}