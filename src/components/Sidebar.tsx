"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Globe, Briefcase, Newspaper, Book, Twitter, Rss, FileText, Github, User, Star, Clock, Calendar, Grid, Hexagon } from 'lucide-react';

const SidebarDropdownMenus: React.FC = () => {
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [publishDateExpanded, setPublishDateExpanded] = useState(true);

  return (
    <div className="w-64 bg-[#212121] p-4 font-sans text-gray-600">
      <div className="mb-4">
        <button
          className="flex items-center justify-between w-full text-left mb-2"
          onClick={() => setCategoryExpanded(!categoryExpanded)}
        >
          <span className="font-medium">Category</span>
          {categoryExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        {categoryExpanded && (
          <div className="ml-2 space-y-2">
            <div className="flex items-center text-blue-600">
              <Globe size={16} className="mr-2" />
              <span>All</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={16} className="mr-2" />
              <span>Company</span>
            </div>
            <div className="flex items-center">
              <Newspaper size={16} className="mr-2" />
              <span>News</span>
            </div>
            <div className="flex items-center">
              <Book size={16} className="mr-2" />
              <span>Paper</span>
            </div>
            <div className="flex items-center">
              <Twitter size={16} className="mr-2" />
              <span>Tweet</span>
            </div>
            <div className="flex items-center">
              <Rss size={16} className="mr-2" />
              <span>Blog post</span>
            </div>
            <div className="flex items-center">
              <FileText size={16} className="mr-2" />
              <span>PDF</span>
            </div>
            <div className="flex items-center">
              <Github size={16} className="mr-2" />
              <span>Github</span>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>Personal site</span>
            </div>
            <div className="flex items-center">
              <Star size={16} className="mr-2" />
              <span>Type your own...</span>
            </div>
          </div>
        )}
        <button className="text-sm text-gray-500 mt-2">Show less</button>
      </div>

      <div className="mb-4">
        <button
          className="flex items-center justify-between w-full text-left mb-2"
          onClick={() => setPublishDateExpanded(!publishDateExpanded)}
        >
          <span className="font-medium">Publish date</span>
          {publishDateExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        {publishDateExpanded && (
          <div className="ml-2 space-y-2">
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>Past day</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>Past week</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>Past month</span>
            </div>
            <div className="flex items-center">
              <Grid size={16} className="mr-2" />
              <span>Past year</span>
            </div>
            <div className="flex items-center text-blue-600">
              <Hexagon size={16} className="mr-2" />
              <span>Any time</span>
            </div>
            <div className="flex items-center">
              <Star size={16} className="mr-2" />
              <span>After Custom date...</span>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4">
        <button className="flex items-center justify-between w-full text-left">
          <span className="font-medium">Domain filter</span>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mb-4">
        <button className="flex items-center justify-between w-full text-left">
          <span className="font-medium">Phrase filter</span>
          <div className="flex items-center">
            <span className="text-xs bg-blue-100 text-blue-600 px-1 rounded mr-1">New</span>
            <ChevronRight size={20} />
          </div>
        </button>
      </div>

      <div>
        <button className="flex items-center justify-between w-full text-left">
          <span className="font-medium">Number of results</span>
          <div className="flex items-center">
            <span className="mr-1">30</span>
            <ChevronRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SidebarDropdownMenus;