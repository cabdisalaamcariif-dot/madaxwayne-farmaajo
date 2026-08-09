import React, { useState } from 'react';
import { PageId } from '../types';
import { HERO_IMAGE } from '../data/farmaajoData';
import { Flag, Menu, X, Search, Award, BookOpen, Image as ImageIcon, Home, Moon, Sun, Volume2 } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenQuiz: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenSearch,
  onOpenQuiz,
  darkMode,
  setDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: '1. Bogga Hore', icon: Home },
    { id: 'biography', label: '2. Taariikhda', icon: BookOpen },
    { id: 'achievements', label: '3. Wax-qabadka', icon: Award },
    { id: 'gallery', label: '4. Galaariga', icon: ImageIcon },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      {/* Top Patriotic Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 text-white text-xs py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 space-x-reverse font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span>Wax-qabadka Qarrannimada & Dhismaha Dowladdii 9-aad ee Soomaaliya</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 space-x-reverse">
            <button
              onClick={onOpenQuiz}
              className="hover:underline flex items-center gap-1 font-semibold text-yellow-300"
            >
              <span>Imtixaanka Aqoonta (Quiz)</span>
            </button>
            <span>•</span>
            <span className="text-blue-100">Nabad & Nolol</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 space-x-reverse cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-yellow-400 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform bg-slate-900 shrink-0">
              <img
                src={HERO_IMAGE}
                alt="Madaxweyne Farmaajo"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  M. A. Farmaajo
                </h1>
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700">
                  Soomaaliya
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Wax-qabadkii Madaxweynaha (2017 - 2022)
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools (Search, Quiz, Theme) */}
          <div className="hidden sm:flex items-center space-x-2 space-x-reverse">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Raadi Wax-qabad ama Sawir"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Beddel Muuqalka (Dark/Light Mode)"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button
              onClick={onOpenQuiz}
              className="ml-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-slate-900 shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>Imtixaanka Aqoonta</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2 space-x-reverse">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300"
            >
              <Search className="w-4 h-4" />
              <span>Raadi</span>
            </button>

            <button
              onClick={() => {
                onOpenQuiz();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 px-3 rounded-lg bg-yellow-500 text-slate-900 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Imtixaanka Aqoonta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
