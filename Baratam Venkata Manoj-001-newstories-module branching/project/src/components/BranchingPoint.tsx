import React from 'react';
import { useStoryContext } from '../context/StoryContext';
import { DoorOpen, DoorClosed } from 'lucide-react';

const BranchingPoint: React.FC = () => {
  const { setBranchSelection } = useStoryContext();

  const handleBranchSelection = (branch: 'door' | 'no-door') => {
    setBranchSelection(branch);
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md story-card">
      <h3 className="text-xl font-bold text-center mb-6">What happens next?</h3>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => handleBranchSelection('door')}
          className="branch-button flex flex-col items-center p-6 bg-[#FAFAFA] border-2 border-[#8E24AA] rounded-lg hover:bg-[#F3E5F5] transition-all duration-300"
        >
          <DoorOpen size={48} className="text-[#8E24AA] mb-4" />
          <span className="text-lg font-semibold">He went through the door</span>
          <p className="text-sm mt-2 text-gray-600">Discover what awaits beyond the threshold</p>
        </button>
        
        <button 
          onClick={() => handleBranchSelection('no-door')}
          className="branch-button flex flex-col items-center p-6 bg-[#FAFAFA] border-2 border-[#8E24AA] rounded-lg hover:bg-[#F3E5F5] transition-all duration-300"
        >
          <DoorClosed size={48} className="text-[#8E24AA] mb-4" />
          <span className="text-lg font-semibold">He did not</span>
          <p className="text-sm mt-2 text-gray-600">Follow the path of caution and restraint</p>
        </button>
      </div>
    </div>
  );
};

export default BranchingPoint;