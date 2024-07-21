import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchResult {
  id: string;
  icon: string;
  title: string;
  url: string;
}

const SearchResultsModal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([
    {
      id: '1',
      icon: 'cb',
      title: 'AI Startup Hebbia Locks Up...',
      url: 'https://news.crunchbase.com/ai/ai-h...'
    },
    {
      id: '2',
      icon: 'tc',
      title: 'Ex-HubSpot exec builds an AI-...',
      url: 'https://techcrunch.com/2024/06/20...'
    },
    {
      id: '3',
      icon: 'bi',
      title: 'Exclusive: AI coding startup...',
      url: 'https://www.businessinsider.com/ai-...'
    }
  ]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Find a result by name or url"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div className="max-h-60 overflow-y-auto">
          {results.map((result) => (
            <div 
              key={result.id} 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
            >
              <div className={`w-6 h-6 rounded-sm mr-3 flex items-center justify-center text-white text-xs font-bold ${
                result.icon === 'cb' ? 'bg-blue-600' :
                result.icon === 'tc' ? 'bg-green-500' :
                'bg-blue-800'
              }`}>
                {result.icon.toUpperCase()}
              </div>
              <div>
                <div className="font-medium">{result.title}</div>
                <div className="text-sm text-gray-500">{result.url}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsModal;