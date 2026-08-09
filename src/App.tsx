import React, { useState, useEffect } from 'react';
import { PageId, Achievement } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { BiographyPage } from './components/BiographyPage';
import { AchievementsPage } from './components/AchievementsPage';
import { GalleryPage } from './components/GalleryPage';
import { QuizModal } from './components/QuizModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Synchronize dark mode class on HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header Navigation */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onSelectAchievement={(ach) => {
              setSelectedAchievement(ach);
              setActivePage('achievements');
            }}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}

        {activePage === 'biography' && <BiographyPage />}

        {activePage === 'achievements' && (
          <AchievementsPage
            selectedAchievement={selectedAchievement}
            onSelectAchievement={setSelectedAchievement}
          />
        )}

        {activePage === 'gallery' && <GalleryPage />}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Modals */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAchievement={(ach) => {
          setSelectedAchievement(ach);
          setActivePage('achievements');
        }}
        setActivePage={setActivePage}
      />
    </div>
  );
}
