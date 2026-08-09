import React, { useState } from 'react';
import { ACHIEVEMENTS, TIMELINE_EVENTS, GALLERY_ITEMS } from '../data/farmaajoData';
import { Achievement, PageId } from '../types';
import { Search, X, ChevronRight, Award, Calendar, Image as ImageIcon } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAchievement: (ach: Achievement) => void;
  setActivePage: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectAchievement,
  setActivePage
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchedAchievements = cleanQuery
    ? ACHIEVEMENTS.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.fullDesc.toLowerCase().includes(cleanQuery) ||
          a.categoryLabel.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedTimeline = cleanQuery
    ? TIMELINE_EVENTS.filter(
        (t) =>
          t.title.toLowerCase().includes(cleanQuery) ||
          t.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedGallery = cleanQuery
    ? GALLERY_ITEMS.filter(
        (g) =>
          g.title.toLowerCase().includes(cleanQuery) ||
          g.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const hasResults =
    matchedAchievements.length > 0 ||
    matchedTimeline.length > 0 ||
    matchedGallery.length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-4 pt-20">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden space-y-4 p-6">
        {/* Search Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <Search className="w-5 h-5 text-blue-600 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Raadi 'Deynta', 'Hawada', 'SNA', 'Muqdisho'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-6 text-xs">
          {!cleanQuery && (
            <div className="text-center py-8 text-slate-400 space-y-2">
              <p>Qrib kelmad aad ku raadinayso maaddada website-ka.</p>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {['Cafinta Deynta', 'Maamulka Hawada', 'Biometric SNA', 'Muqdisho - Afgooye'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && !hasResults && (
            <div className="text-center py-8 text-slate-400">
              Wax natiijo ah ma poodin kelmadda "{query}".
            </div>
          )}

          {/* Achievements Matches */}
          {matchedAchievements.length > 0 && (
            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Wax-qabadka ({matchedAchievements.length})</span>
              </div>

              <div className="space-y-1.5">
                {matchedAchievements.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectAchievement(item);
                      setActivePage('achievements');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                      <div className="text-slate-500 line-clamp-1">
                        {item.shortDesc}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Matches */}
          {matchedTimeline.length > 0 && (
            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Taariikhda ({matchedTimeline.length})</span>
              </div>

              <div className="space-y-1.5">
                {matchedTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActivePage('biography');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        {item.year}: {item.title}
                      </div>
                      <div className="text-slate-500 line-clamp-1">
                        {item.description}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Matches */}
          {matchedGallery.length > 0 && (
            <div className="space-y-2">
              <div className="font-bold uppercase tracking-wider text-purple-600 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4" />
                <span>Galaariga ({matchedGallery.length})</span>
              </div>

              <div className="space-y-1.5">
                {matchedGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActivePage('gallery');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                      <div className="text-slate-500 line-clamp-1">
                        {item.location} • {item.date}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
