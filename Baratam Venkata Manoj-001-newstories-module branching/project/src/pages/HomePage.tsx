import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <BookOpen size={64} className="text-[#8E24AA]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#8E24AA] mb-6">
          NewStoriesAndTales
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Embark on an interactive journey where your choices shape the story. Experience our unique
          branching narrative technology that brings stories to life.
        </p>
        <Link
          to="/story"
          className="inline-block bg-[#8E24AA] hover:bg-[#7B1FA2] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
        >
          Begin Your Journey
        </Link>
      </div>
      
      <div className="mt-16 text-center text-sm text-gray-600">
        <p>© 2025 NewStoriesAndTales. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;