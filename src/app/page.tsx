"use client"
import React from 'react';
import { Search, MapPin, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ExaSearchInterface = () => {

  const router = useRouter()

  function goToSearch() {
    router.push("/search")
  }
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold">exa</div>
        <div className="space-x-4">
          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">We're hiring</button>
          <button className="text-blue-600">Go to homepage</button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">
          The web, <span className="text-blue-600">organized</span>
        </h1>
        <p className="mb-8">
          Exa search uses embeddings to understand meaning. <a href="#" className="text-blue-600 underline">Learn more</a>
        </p>

        <div className="flex mb-8">
          <div className="w-1/4 pr-4">
            <select className="w-full p-2 border rounded">
              <option>All</option>
              <option>Company</option>
              <option>News</option>
              <option>Paper</option>
              <option>Tweet</option>
              <option>Blog post</option>
            </select>
            <button className="text-gray-600 mt-2">Show more</button>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Publish date</h3>
              <select className="w-full p-2 border rounded">
                <option>Any time</option>
              </select>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Domain filter</h3>
              {/* Add domain filter options here */}
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Phrase filter</h3>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">New</span>
              {/* Add phrase filter options here */}
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Number of results</h3>
              <select className="w-full p-2 border rounded">
                <option>30</option>
              </select>
            </div>
          </div>

          <div className="w-3/4">
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Try a search or paste a link to find similar"
                  className="flex-grow p-2 border-b focus:outline-none focus:border-blue-500"
                />
                <MapPin className="text-gray-400 mx-2" />
                <RefreshCw className="text-gray-400 mx-2" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Auto
                </label>
                <button onClick={goToSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
                  <Search className="inline-block mr-2" />
                  SEARCH
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">POPULAR SEARCHES</h2>
              <div className="space-y-2">
                <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded mr-2">
                  a short article about the early days of Google
                </button>
                <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded mr-2">
                  Start ups working on genetic sequencing
                </button>
                <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded mr-2">
                  Similar to https://waitbutwhy.com
                </button>
                <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded">
                  Samsung earnings report
                </button>
              </div>
              <div className="bg-gray-100 p-4 mt-4 rounded">
                <p className="text-sm">
                  Abstract: The dominant sequence transduction models are based on complex recurrent
                  or convolutional neural networks in an encoder-decoder configuration. The best
                  performing models also connect the encoder and decoder through an attention...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExaSearchInterface;