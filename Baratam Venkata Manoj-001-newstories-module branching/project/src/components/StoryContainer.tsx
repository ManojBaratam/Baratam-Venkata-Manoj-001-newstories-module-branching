import React, { useEffect } from 'react';
import Chapter from './Chapter';
import BranchingPoint from './BranchingPoint';
import { useStoryContext } from '../context/StoryContext';
import { fetchChapterContent } from '../services/api';
import { Sparkles } from 'lucide-react';

const StoryContainer: React.FC = () => {
  const { 
    currentChapter, 
    setCurrentChapter, 
    branchSelection, 
    chapterContent, 
    setChapterContent,
    loading,
    setLoading
  } = useStoryContext();

  useEffect(() => {
    const loadChapterContent = async () => {
      setLoading(true);
      try {
        // For chapters other than 3 with branch, or after branch selection
        if (currentChapter !== 3 || branchSelection) {
          const content = await fetchChapterContent(currentChapter, branchSelection);
          setChapterContent(content);
        }
      } catch (error) {
        console.error("Error loading chapter content:", error);
      } finally {
        setLoading(false);
      }
    };

    loadChapterContent();
  }, [currentChapter, branchSelection, setChapterContent, setLoading]);

  const handleContinue = () => {
    // If we're at chapter 3 with a branch selection, move to chapter 4
    if (currentChapter === 3 && branchSelection) {
      setCurrentChapter(4);
    } else if (currentChapter < 3) {
      // Otherwise, just move to the next chapter
      setCurrentChapter(currentChapter + 1);
    }
  };

  return (
    <div className="p-2 md:p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8E24AA] mb-2">The Enchanted Path</h1>
        <div className="flex justify-center items-center gap-2">
          <Sparkles size={20} className="text-[#FFB300]" />
          <span className="text-lg italic">An Interactive Tale</span>
          <Sparkles size={20} className="text-[#FFB300]" />
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8E24AA]"></div>
        </div>
      ) : (
        <>
          {currentChapter <= 3 && !branchSelection && (
            <>
              {Array.from({ length: currentChapter }).map((_, index) => (
                <Chapter 
                  key={index} 
                  chapter={index + 1} 
                  isLatest={index + 1 === currentChapter}
                />
              ))}
              
              {currentChapter === 3 && !branchSelection && (
                <BranchingPoint />
              )}
              
              {currentChapter < 3 && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleContinue}
                    className="bg-[#FFB300] hover:bg-[#FFA000] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow"
                  >
                    Continue to Chapter {currentChapter + 1}
                  </button>
                </div>
              )}
            </>
          )}

          {branchSelection && (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <Chapter 
                  key={index} 
                  chapter={index + 1} 
                  isLatest={false}
                />
              ))}
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md story-card">
                <h2 className="text-2xl font-bold text-[#8E24AA] mb-4">
                  Chapter 3: {branchSelection === 'door' ? 'Through the Door' : 'The Road Not Taken'}
                </h2>
                <div className="drop-cap prose prose-lg max-w-none">
                  {chapterContent}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleContinue}
                    className="bg-[#FFB300] hover:bg-[#FFA000] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow"
                  >
                    Continue to Chapter 4
                  </button>
                </div>
              </div>
            </>
          )}

          {currentChapter === 4 && (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <Chapter 
                  key={index} 
                  chapter={index + 1} 
                  isLatest={false}
                />
              ))}
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md story-card">
                <h2 className="text-2xl font-bold text-[#8E24AA] mb-4">
                  Chapter 4: The Journey Continues
                </h2>
                <div className="drop-cap prose prose-lg max-w-none">
                  {chapterContent}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-[#8E24AA] hover:bg-[#7B1FA2] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default StoryContainer;