"use client";
import React, { useState } from "react";
import {
  Search,
  Plus,
  Settings,
  Download,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import SidebarDropdownMenus from "@/components/Sidebar";

const PerplexityDarkUIClone: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-screen bg-[#1E1E1E] text-gray-200 font-sans">
      {/* Sidebar */}
      <SidebarDropdownMenus />

      {/* Main content */}
      <div className="flex flex-col flex-grow pb-20 justify-center items-center">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          The web, <span className="text-blue-500">organized</span>
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#2D2D2D] border rounded-lg p-6 mb-6">
            <input
              type="text"
              placeholder="Ask anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
            <div className="flex justify-between mt-3 text-sm">
              <div>
                {/* <button className="text-gray-400 mr-4">Focus</button>
                <button className="text-gray-400">Attach</button> */}
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-gray-400">Pro</span>
                <div className="w-8 h-4 bg-gray-600 rounded-full flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#2D2D2D] rounded-lg p-3 text-left hover:bg-[#3D3D3D] text-sm">
              <Search className="inline w-4 h-4 mr-2 text-blue-400" />
              What is Samsung's market cap?
            </button>
            <button className="bg-[#2D2D2D] rounded-lg p-3 text-left hover:bg-[#3D3D3D] text-sm">
              <Search className="inline w-4 h-4 mr-2 text-blue-400" />
              Refund on delayed flight
            </button>
            <button className="bg-[#2D2D2D] rounded-lg p-3 text-left hover:bg-[#3D3D3D] text-sm">
              <Search className="inline w-4 h-4 mr-2 text-purple-400" />
              Most popular Youtube creators in 2024
            </button>
            <button className="bg-[#2D2D2D] rounded-lg p-3 text-left hover:bg-[#3D3D3D] text-sm">
              <Search className="inline w-4 h-4 mr-2 text-yellow-400" />
              What is somatic healing?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerplexityDarkUIClone;
