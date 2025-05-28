import React from 'react';
import { useStoryContext } from '../context/StoryContext';
import { BookText } from 'lucide-react';
import { mockChapterContent } from '../data/mockData';

interface ChapterProps {
  chapter: number;
  isLatest: boolean;
}

const Chapter: React.FC<ChapterProps> = ({ chapter, isLatest }) => {
  const { branchSelection } = useStoryContext();
  
  // Don't show chapter 3 content if a branch is selected
  if (chapter === 3 && branchSelection) {
    return null;
  }
  
  // Get the content for this chapter
  const content = mockChapterContent[chapter];
  
  return (
    <div className={`mt-8 p-6 bg-white rounded-lg shadow-md ${isLatest ? 'story-card' : ''}`}>
      <div className="flex items-center mb-4">
        <BookText size={24} className="text-[#8E24AA] mr-2" />
        <h2 className="text-2xl font-bold text-[#8E24AA]">
          Chapter {chapter}: {content.title}
        </h2>
      </div>
      
      <div className="drop-cap prose prose-lg max-w-none">
        {content.text}
      </div>
    </div>
  );
};

export default Chapter;