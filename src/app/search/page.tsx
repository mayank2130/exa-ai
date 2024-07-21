"use client";

import React, { useState } from "react";
import {
  Clock,
  Search,
  MessageCirclePlusIcon,
  MapPin,
  RefreshCw,
  ChevronRight,
  Plus,
  X,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SidebarDropdownMenus from "@/components/Sidebar";

interface SearchResult {
  id: string;
  icon: string;
  source: string;
  title: string;
  time?: string;
}

const ExaSearchResults = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  const searchResults = [
    {
      id: "",
      icon: "🟣",
      source: "finance.yahoo.com",
      title: "NVIDIA Corporation (NVDA) Latest Stock News & Headlines",
      time: "",
    },
    {
      id: "",
      icon: "IBD",
      source: "investors.com",
      title: "Nvidia Stock, Chip Stocks Attempt Rebound After Sell-Off",
      time: "About 8 hours ago",
    },
    {
      id: "",
      icon: "🟣",
      source: "finance.yahoo.com",
      title: "NVIDIA Corporation (NVDA) Latest Stock News & Headlines",
      time: "",
    },
    {
      id: "",
      icon: "👁️",
      source: "nvidianews.nvidia.com",
      title: "NVIDIA Announces Financial Results for First Quarter Fiscal 2025",
      time: "About 2 months ago",
    },
    {
      id: "",
      icon: "▶️",
      source: "youtube.com",
      title: "The Geopolitical Impact on Nvidia's (NVDA) Outlook - YouTube",
      time: "1 day ago",
    },
    {
      id: "",
      icon: "🔘",
      source: "cbsnews.com",
      title:
        "Nvidia 10-for-1 stock split puts share price within reach of more ...",
      time: "About 1 month ago",
    },
    {
      id: "",
      icon: "NBC",
      source: "cnbc.com",
      title: "NVIDIA Corp NVDA:NASDAQ - Stock Price, Quote and News - CNBC",
      time: "",
    },
    {
      id: "",
      icon: "🟠",
      source: "reuters.com",
      title:
        "Nvidia earnings could spark $200 billion swing in shares, options ...",
      time: "About 2 months ago",
    },
    {
      id: "",
      icon: "R",
      source: "tipranks.com",
      title: "Nvidia (NVDA) Stock News Today - TipRanks.com",
      time: "",
    },
    {
      id: "",
      icon: "IBD",
      source: "investors.com",
      title:
        "Nvidia Reverses Lower From New High; Is The Stock A Buy In June ...",
      time: "29 days ago",
    },
    {
      id: "",
      icon: "🟣",
      source: "finance.yahoo.com",
      title:
        "Nvidia stock pulls back after topping $3 trillion market cap mark",
      time: "About 1 month ago",
    },
    {
      id: "",
      icon: "NBC",
      source: "cnbc.com",
      title: "NVIDIA Corp NVDA:NASDAQ - Stock Price, Quote and News - CNBC",
      time: "",
    },
    {
      id: "",
      icon: "🟠",
      source: "reuters.com",
      title:
        "Nvidia earnings could spark $200 billion swing in shares, options ...",
      time: "About 2 months ago",
    },
    {
      id: "",
      icon: "👁️",
      source: "nvidianews.nvidia.com",
      title: "NVIDIA Announces Financial Results for First Quarter Fiscal 2025",
      time: "About 2 months ago",
    },
    {
      id: "",
      icon: "▶️",
      source: "youtube.com",
      title: "The Geopolitical Impact on Nvidia's (NVDA) Outlook - YouTube",
      time: "1 day ago",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResults, setSelectedResults] = useState<SearchResult[]>([]);

  const [results, setResults] = useState<SearchResult[]>([
    {
      id: "1",
      icon: "cb",
      title: "AI Startup Hebbia Locks Up...",
      source: "https://news.crunchbase.com/ai/ai-h...",
    },
    {
      id: "2",
      icon: "tc",
      title: "Ex-HubSpot exec builds an AI-...",
      source: "https://techcrunch.com/2024/06/20...",
    },
    {
      id: "3",
      icon: "bi",
      title: "Exclusive: AI coding startup...",
      source: "https://www.businessinsider.com/ai-...",
    },
    {
      id: "4",
      icon: "bi",
      title: "Exclusive: AI coding startup...",
      source: "https://www.businessinsider.com/ai-...",
    },
    {
      id: "5",
      icon: "bi",
      title: "Exclusive: AI coding startup...",
      source: "https://www.businessinsider.com/ai-...",
    },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addResult = (result: SearchResult) => {
    if (!selectedResults.some((r) => r.id === result.id)) {
      setSelectedResults([...selectedResults, result]);
    }
  };

  const removeResult = (id: string) => {
    setSelectedResults(selectedResults.filter((r) => r.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#2D2D2D]">
      {/* Left Sidebar */}
      <SidebarDropdownMenus />

      {/* Toggle button for left sidebar */}
      {/* <div className="flex justify-center items-center mr-1 ">
        <button
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          className="bg-[#2D2D2D] h-20 rounded-l shadow border-l"
        >
          {isLeftSidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto scrollbar-hide">
        <style jsx global>{`
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex justify-between items-center mb-4">
          <div className="font-bold text-2xl text-slate-200">
            PICK TOP 5 RESULTS TO CHAT WITH AT ONCE
          </div>
          <div className="flex items-center space-x-4"></div>
        </div>

        <div className="bg-[#2D2D2D] p-4 rounded-lg mb-4">
          <input
            type="text"
            value="Recent news that would impact Nvidia's stock price"
            className="w-full p-2 border rounded mb-2 bg-zinc-300"
          />
          <p className="text-sm text-gray-400 mb-2">
            Autoprompted to: Here is a news article that could impact Nvidia's
            stock price:
          </p>
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="border-t border-gray-600 py-2 flex items-start"
            >
              <div className="mr-2 text-2xl">{result.icon}</div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">{result.source}</div>
                <div className="text-blue-600 font-medium">{result.title}</div>
                {result.time && (
                  <div className="text-sm text-gray-400">{result.time}</div>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Clock size={16} />
                </button>
                <button
                  className="p-1 text-gray-400 hover:text-gray-600"
                  onClick={() => addResult(result)}
                >
                  <MessageCirclePlusIcon size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MapPin size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#212121] rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <div className="p-4 pt-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find a result by name or url"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border bg-zinc-300 border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {results.map((result) => (
                <Link href={"#"} onClick={() => addResult(result)}>
                  <div
                    key={result.id}
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer flex items-center"
                  >
                    <div
                      className={`w-6 h-6 rounded-sm mr-3 flex items-center justify-center text-white text-xs font-bold ${
                        result.icon === "cb"
                          ? "bg-blue-600"
                          : result.icon === "tc"
                          ? "bg-green-500"
                          : "bg-blue-800"
                      }`}
                    >
                      {result.icon.toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium text-blue-600">
                        {result.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {result.source}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Toggle button for right sidebar */}
      <div className="flex justify-center items-center ml-1">
        <button
          onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          className="bg-[#151515] h-20 rounded-l shadow border-r border-gray-900"
        >
          {isRightSidebarOpen ? (
            <ChevronRight className="text-white" size={20} />
          ) : (
            <ChevronLeft className="text-white" size={20} />
          )}
        </button>
      </div>

      {/* Right Sidebar */}
      <div
        className={`${
          isRightSidebarOpen ? "w-96" : "w-0"
        } bg-[#212121] transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="font-bold mb-4 text-slate-300">CHAT WITH RESULT</h2>
          <div className="mb-4">
            <div className="mb-2 flex flex-col items-end">
              <span className="font-bold pr-2 text-slate-400 ">You</span>
              <p className="text-white">hello</p>
            </div>
            <div>
              <span className="font-bold text-blue-600">Exa</span>
              <p className="p-2 bg-zinc-400 rounded-lg">
                Hello! How can I assist you with questions related to recent
                news that would impact NVIDIA's stock price?
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 flex flex-col items-end">
              <span className="font-bold pr-2 text-slate-400">You</span>
              <p className="text-white">hello</p>
            </div>
            <div>
              <span className="font-bold text-blue-600">Exa</span>
              <p className="p-2 bg-zinc-400 rounded-lg">
                Hello! How can I assist you with questions related to recent
                news that would impact NVIDIA's stock price?
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 flex flex-col items-end">
              <span className="font-bold pr-2 text-slate-400">You</span>
              <p className="text-white">hello</p>
            </div>
            <div>
              <span className="font-bold text-blue-600">Exa</span>
              <p className="p-2 bg-zinc-400 rounded-lg">
                Hello! How can I assist you with questions related to recent
                news that would impact NVIDIA's stock price?
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="border-t border-gray-600  border-b pt-2 pb-2 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400">
                Chatting with {selectedResults.length} result(s)
              </span>
              <button className="text-blue-600" onClick={openModal}>
                <Plus size={16} />
              </button>
            </div>
            {selectedResults.map((result) => (
              <div
                key={result.id}
                className="bg-[#525151] p-2 rounded flex justify-between items-center mb-2"
              >
                <span className="text-sm truncate text-slate-200">
                  {result.title}
                </span>
                <button onClick={() => removeResult(result.id)}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <Textarea
            placeholder="Ask anything about the results..."
            className="w-full pb-24 border bg-[#2D2D2D] border-gray-600 rounded text-left pt-5"
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
