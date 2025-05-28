import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StoryContextType {
  currentChapter: number;
  setCurrentChapter: (chapter: number) => void;
  branchSelection: 'door' | 'no-door' | null;
  setBranchSelection: (branch: 'door' | 'no-door' | null) => void;
  chapterContent: string;
  setChapterContent: (content: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const useStoryContext = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error('useStoryContext must be used within a StoryProvider');
  }
  return context;
};

interface StoryProviderProps {
  children: ReactNode;
}

export const StoryProvider: React.FC<StoryProviderProps> = ({ children }) => {
  const [currentChapter, setCurrentChapter] = useState<number>(1);
  const [branchSelection, setBranchSelection] = useState<'door' | 'no-door' | null>(null);
  const [chapterContent, setChapterContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <StoryContext.Provider
      value={{
        currentChapter,
        setCurrentChapter,
        branchSelection,
        setBranchSelection,
        chapterContent,
        setChapterContent,
        loading,
        setLoading
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};