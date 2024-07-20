import React from 'react';
import { Clock, Search, MapPin, RefreshCw, ChevronRight, Plus, X } from 'lucide-react';

const ExaSearchResults = () => {
  const searchResults = [
    { icon: '🟣', source: 'finance.yahoo.com', title: 'NVIDIA Corporation (NVDA) Latest Stock News & Headlines', time: '' },
    { icon: 'IBD', source: 'investors.com', title: 'Nvidia Stock, Chip Stocks Attempt Rebound After Sell-Off', time: 'About 8 hours ago' },
    { icon: '👁️', source: 'nvidianews.nvidia.com', title: 'NVIDIA Announces Financial Results for First Quarter Fiscal 2025', time: 'About 2 months ago' },
    { icon: '▶️', source: 'youtube.com', title: 'The Geopolitical Impact on Nvidia\'s (NVDA) Outlook - YouTube', time: '1 day ago' },
    { icon: '🔘', source: 'cbsnews.com', title: 'Nvidia 10-for-1 stock split puts share price within reach of more ...', time: 'About 1 month ago' },
    { icon: 'R', source: 'tipranks.com', title: 'Nvidia (NVDA) Stock News Today - TipRanks.com', time: '' },
    { icon: 'IBD', source: 'investors.com', title: 'Nvidia Reverses Lower From New High; Is The Stock A Buy In June ...', time: '29 days ago' },
    { icon: '🟣', source: 'finance.yahoo.com', title: 'Nvidia stock pulls back after topping $3 trillion market cap mark', time: 'About 1 month ago' },
    { icon: 'NBC', source: 'cnbc.com', title: 'NVIDIA Corp NVDA:NASDAQ - Stock Price, Quote and News - CNBC', time: '' },
    { icon: '🟠', source: 'reuters.com', title: 'Nvidia earnings could spark $200 billion swing in shares, options ...', time: 'About 2 months ago' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white p-4 border-r">
        <h2 className="font-bold mb-4">Category</h2>
        <ul className="space-y-2">
          <li>🌐 All</li>
          <li>🏢 Company</li>
          <li className="text-blue-600">📰 News</li>
          <li>📄 Paper</li>
          <li>🐦 Tweet</li>
          <li>📝 Blog post</li>
        </ul>
        <button className="text-gray-500 mt-2">Show more</button>

        <h2 className="font-bold mt-6 mb-2">Publish date</h2>
        <ul className="space-y-2">
          <li className="flex items-center"><Clock size={16} className="mr-2" /> Past day</li>
          <li>Past week</li>
          <li>Past month</li>
          <li>Past year</li>
          <li className="text-blue-600">Any time</li>
          <li>After Custom date...</li>
        </ul>

        <h2 className="font-bold mt-6 mb-2">Domain filter</h2>
        <ChevronRight size={16} />

        <h2 className="font-bold mt-6 mb-2">Phrase filter <span className="bg-blue-100 text-blue-600 text-xs px-1 rounded">New</span></h2>
        <ChevronRight size={16} />

        <h2 className="font-bold mt-6 mb-2">Number of results</h2>
        <div className="flex items-center">
          <span className="mr-2">30</span>
          <ChevronRight size={16} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="font-bold text-2xl">exa</div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded">We're hiring</button>
            <button className="text-blue-600">Go to homepage</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <input 
            type="text" 
            value="Recent news that would impact Nvidia's stock price"
            className="w-full p-2 border rounded mb-2"
          />
          <p className="text-sm text-gray-600 mb-2">Autoprompted to: Here is a news article that could impact Nvidia's stock price:</p>
          {searchResults.map((result, index) => (
            <div key={index} className="border-t py-2 flex items-start">
              <div className="mr-2 text-2xl">{result.icon}</div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">{result.source}</div>
                <div className="text-blue-600 font-medium">{result.title}</div>
                {result.time && <div className="text-sm text-gray-500">{result.time}</div>}
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600"><Clock size={16} /></button>
                <button className="p-1 text-gray-400 hover:text-gray-600"><Search size={16} /></button>
                <button className="p-1 text-gray-400 hover:text-gray-600"><MapPin size={16} /></button>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <Search size={16} className="mr-2" />
          ADD EXA SEARCH IN YOUR APP
        </button>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white p-4 border-l">
        <h2 className="font-bold mb-4">CHAT WITH RESULT</h2>
        <div className="mb-4">
          <div className="mb-2">
            <span className="font-bold">You</span>
            <p>hello</p>
          </div>
          <div>
            <span className="font-bold text-blue-600">Exa</span>
            <p>Hello! How can I assist you with questions related to recent news that would impact NVIDIA's stock price?</p>
          </div>
        </div>
        <div className="border-t pt-2">
          <div className="flex justify-between items-center mb-2">
            <span>Chatting with 1 result</span>
            <button className="text-blue-600"><Plus size={16} /></button>
          </div>
          <div className="bg-gray-100 p-2 rounded flex justify-between items-center">
            <span className="text-sm truncate">NVIDIA Corporation (NVDA) Latest St...</span>
            <button><X size={16} /></button>
          </div>
        </div>
        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Ask anything about the results..."
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Shift + Enter for new line</span>
            <button className="text-blue-600">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExaSearchResults;