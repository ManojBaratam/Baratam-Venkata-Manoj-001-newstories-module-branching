import React from 'react';
import StoryContainer from '../components/StoryContainer';
import { StoryProvider } from '../context/StoryContext';

const StoryPage: React.FC = () => {
  return (
    <StoryProvider>
      <div className="min-h-screen bg-[#FAFAFA] py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <StoryContainer />
        </div>
      </div>
    </StoryProvider>
  );
};

export default StoryPage;