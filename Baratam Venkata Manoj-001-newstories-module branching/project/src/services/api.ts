import { mockBranchContent, mockChapter4Content } from '../data/mockData';

// Simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchChapterContent = async (
  chapter: number, 
  branch: 'door' | 'no-door' | null = null
): Promise<string> => {
  // Simulate network delay
  await delay(800);
  
  // If this is chapter 3 with a branch selection
  if (chapter === 3 && branch) {
    // In a real app, we would fetch from:
    // `/api/story/{id}/chapter/3?branch=${branch}`
    return mockBranchContent[branch];
  }
  
  // If this is chapter 4
  if (chapter === 4) {
    return mockChapter4Content;
  }
  
  // Default empty content for other cases
  return '';
};