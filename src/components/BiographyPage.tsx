import React, { useState } from 'react';
import { BIOGRAPHY_SECTIONS, TIMELINE_EVENTS, FAMOUS_QUOTES, HERO_IMAGE } from '../data/farmaajoData';
import {
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Quote,
  Volume2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Sparkles,
  UserCheck
} from 'lucide-react';

export const BiographyPage: React.FC = () => {
  const [expandedTimelineIndex, setExpandedTimelineIndex] = useState<number | null>(1); // default expand 2017 election
  const [playingQuoteId, setPlayingQuoteId] = useState<string | null>(null);

  const toggleTimeline = (index: number) => {
    setExpandedTimelineIndex(expandedTimelineIndex === index ? null : index);
  };

  const handlePlayQuoteAudio = (id: string) => {
    setPlayingQuoteId(id);
    setTimeout(() => {
      setPlayingQuoteId(null);
    }, 3000);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* HEADER BANNER */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 opacity-20">
          <img
            src={HERO_IMAGE}
            alt="Farmaajo Profile"
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>2. Taariikhda Buuxda & Aqoonta</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-xl shrink-0 bg-slate-900">
              <img
                src={HERO_IMAGE}
                alt="Mohamed Abdullahi Farmaajo"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Mohamed Abdullahi Farmaajo
              </h1>
              <p className="text-xs sm:text-sm text-yellow-300 font-semibold mt-1">
                Madaxweynaha 9-aad ee Soomaaliya
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            {BIOGRAPHY_SECTIONS.intro}
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Dhalashadiisa: Muqdisho (1962)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>SUNY Buffalo (Master's in Political Science)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Madaxweynaha 9-aad ee Soomaaliya</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL BACKGROUND */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Aqoontiisa & Heerarka Waxbarasho
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Jaamacadda State University of New York at Buffalo (SUNY Buffalo)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BIOGRAPHY_SECTIONS.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-lg border border-blue-200 dark:border-blue-800">
                  {edu.year}
                </span>
                <span className="text-xs font-semibold text-slate-400">SUNY Buffalo, USA</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                {edu.institution}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POLITICAL JOURNEY PHASES */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Geeddi-socodka Siyaasaddeed ee Farmaajo
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Laga bilaabo Ra'iisul Wasaaranimadiisii 2010 ilaa Madaxweynanimadiisii 2017 - 2022
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {BIOGRAPHY_SECTIONS.politicalCareer.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="md:w-1/4 space-y-1">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Muddada
                </span>
                <div className="text-xl font-black text-slate-900 dark:text-white">
                  {phase.period}
                </div>
              </div>

              <div className="md:w-3/4 space-y-2 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700 pt-4 md:pt-0 md:pl-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {phase.role}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY PILLARS */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Falsafadda Hogaamineed ee Mohamed Abdullahi Farmaajo
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Astaamaha lagu yaqaanay hab-maamulkiisii dowladeed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BIOGRAPHY_SECTIONS.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 flex items-center justify-center font-bold">
                ★
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CAREER TIMELINE */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sanasandiyada Masiiriga Ah (Interactive Timeline)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Guuji sanad kasta si aad u akhriso faahfaahinta taariikhda.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {TIMELINE_EVENTS.map((event, idx) => {
            const isExpanded = expandedTimelineIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  event.highlight
                    ? 'border-blue-400 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                }`}
              >
                <button
                  onClick={() => toggleTimeline(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-3.5 py-1.5 rounded-xl bg-blue-600 text-white font-black text-sm shrink-0">
                      {event.year}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {event.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {event.date} • {event.category}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-700/60 space-y-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>{event.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SPEECHES SOUNDBOARD / FAMOUS QUOTES */}
      <section className="p-8 rounded-3xl bg-slate-900 text-white space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-1">
              <Quote className="w-4 h-4" />
              <span>Khudbadaha & Codadka Taariikhiga Ah</span>
            </div>
            <h2 className="text-2xl font-bold">
              Ereyadii Isbeddelka Soomaaliya
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAMOUS_QUOTES.map((q) => {
            const isPlaying = playingQuoteId === q.id;
            return (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between space-y-4"
              >
                <p className="text-sm font-medium italic text-slate-200 leading-relaxed">
                  "{q.text}"
                </p>

                <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-yellow-400">{q.context}</div>
                    <div className="text-slate-400">{q.year}</div>
                  </div>

                  <button
                    onClick={() => handlePlayQuoteAudio(q.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      isPlaying
                        ? 'bg-yellow-500 text-slate-900 animate-pulse'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlaying ? 'Dhagaysanayaa...' : 'Dhagayso Codka'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
