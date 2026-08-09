import React, { useState } from 'react';
import { PageId, Achievement } from '../types';
import {
  HERO_IMAGE,
  STATS_OVERVIEW,
  ACHIEVEMENTS,
  FAMOUS_QUOTES,
  AIRSPACE_IMAGE,
  SNA_IMAGE,
  INFRA_IMAGE
} from '../data/farmaajoData';
import {
  Award,
  ArrowRight,
  Shield,
  Plane,
  TrendingUp,
  DollarSign,
  Quote as QuoteIcon,
  CheckCircle,
  Volume2,
  Sparkles,
  ChevronRight,
  Play,
  Share2,
  Bookmark
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageId) => void;
  onSelectAchievement: (achievement: Achievement) => void;
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectAchievement,
  onOpenQuiz
}) => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const currentQuote = FAMOUS_QUOTES[activeQuoteIndex];

  const handleNextQuote = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % FAMOUS_QUOTES.length);
  };

  const handleSimulateAudio = () => {
    setIsPlayingAudio(true);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 3500);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${currentQuote.text}" - Mohamed Abdullahi Farmaajo (${currentQuote.year})`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl flex items-center">
        {/* Background Hero Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Madaxweyne Farmaajo"
            className="w-full h-full object-cover object-top opacity-20 scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span>Madaxweynihii 9-aad ee Soomaaliya (2017 - 2022)</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-yellow-400/90 shadow-xl shrink-0 bg-slate-900 relative group">
                <img
                  src={HERO_IMAGE}
                  alt="Mohamed Abdullahi Farmaajo Face Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  Mohamed Abdullahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-yellow-300">Farmaajo</span>
                </h1>
                <p className="text-xs sm:text-sm text-yellow-300 font-semibold mt-1">
                  Madaxweynihii 9-aad ee Jamhuuriyadda Federaalka Soomaaliya
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Hogaamiyihii dhisay habka maaliyadda, soo celiyay maamulka hawada Soomaaliya ka dib 27 sano, ka saaray dalka deynta $5.2 Bilyan USD, dib-u-dhisayna Ciidanka Qaranka oo la yeeshay biometric & akoonno bangi oo toos ah.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActivePage('achievements')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group"
              >
                <span>3. Eeg Wax-qabadka Buuxa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActivePage('biography')}
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>2. Taariikhda Farmaajo</span>
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </button>

              <button
                onClick={() => setActivePage('gallery')}
                className="px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 transition-all"
              >
                <span>4. Galaariga Sawirrada</span>
              </button>
            </div>

            {/* Quick Slogans */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Nabad iyo Nolol</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Soomaaliya Soomaali Baa Leh</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                <span>Qarrannimo & Daacadnimo</span>
              </span>
            </div>
          </div>

          {/* Hero Side Frame */}
          <div className="lg:col-span-5 block w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-blue-500/30 via-sky-500/10 to-slate-800/60 border border-slate-700/80 backdrop-blur-md shadow-2xl">
              <div className="overflow-hidden rounded-xl bg-slate-950 relative group">
                <img
                  src={HERO_IMAGE}
                  alt="Madaxweyne Mohamed Abdullahi Farmaajo"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/95 border border-slate-700/80 backdrop-blur-md text-xs space-y-1 shadow-lg">
                  <div className="flex items-center justify-between text-yellow-400 font-bold">
                    <span>★ M. A. Farmaajo</span>
                    <span className="text-[10px] bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full border border-yellow-500/40">
                      Sawirka Rasmiga ah
                    </span>
                  </div>
                  <p className="text-slate-200 text-[11px] italic font-medium">
                    "Sharafta iyo madaxbanaanida Soomaaliya waa mid aan gorgortan geli karin."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS OVERVIEW CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS_OVERVIEW.map((stat) => (
          <div
            key={stat.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${stat.color}`}>
                {stat.label}
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform">
                ★
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              {stat.value}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              {stat.subtext}
            </p>
          </div>
        ))}
      </section>

      {/* FEATURED ACHIEVEMENTS GRID */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Moodeelka Dhismaha Dowladdii 9-aad</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Guulaha Waaweyn ee Qarrannimada
            </h2>
          </div>

          <button
            onClick={() => setActivePage('achievements')}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors"
          >
            <span>Dhammaan Wax-qabadka (3)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.filter((a) => a.featured).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAchievement(item)}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-600 text-white shadow-md">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-xs font-semibold text-white/90 bg-slate-950/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                  {item.year}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                    {item.impactStats}
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Aqooso</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAMOUS SPEECHES & QUOTES INTERACTIVE CARD */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden shadow-xl border border-blue-800/50">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold">
            <QuoteIcon className="w-3.5 h-3.5" />
            <span>Ereyadii Taariikhiga Ahaa ee Farmaajo</span>
          </div>

          <div className="min-h-[140px] flex items-center justify-center">
            <blockquote className="text-lg sm:text-2xl font-bold italic leading-relaxed text-blue-50 max-w-3xl">
              "{currentQuote.text}"
            </blockquote>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="font-bold text-yellow-400 text-sm">
              — Mohamed Abdullahi Farmaajo
            </div>
            <div className="text-xs text-blue-300">
              {currentQuote.context} ({currentQuote.year})
            </div>
          </div>

          {/* Interactive Player Controls */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleSimulateAudio}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 transition-all ${
                isPlayingAudio
                  ? 'bg-amber-500 text-slate-900 animate-pulse'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isPlayingAudio ? 'Dhagayso Khudbadda (Audio Simulation)...' : 'Dhagayso Codka Khudbadda'}</span>
            </button>

            <button
              onClick={handleCopyQuote}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedQuote ? 'Waa la guriyay!' : 'Qaybi Ereyadan'}</span>
            </button>

            <button
              onClick={handleNextQuote}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Erey Kale Soo Saar</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS BANNER */}
      <section className="bg-slate-100 dark:bg-slate-800/50 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-700/60">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Afar Tiir oo lagu dhisay Qarrannimada
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Falsafadda maamulkii Madaxweyne Farmaajo waxay ku qotomay afar tiir oo mid kasta uu leeyahay wax-qabad taariikhi ah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              1. Dhaqaalaha & Deynta
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Deynta cafinta $5.2B, dib-u-habaynta Wasaaradda Maaliyadda, iyo xisaab-xirka Qazanada Dhexe.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              2. Hawada & Qarrannimada
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Soo celinta maamulka hawada dalka Class A ka dib 27 sano oo Nairobi ka amranayd.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              3. Biometric SNA Army
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Biometric registration, baabi'inta ciidankii riyada ahaa, iyo bixinta mushaharka tooska ah.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              4. Mashaariicda & Laamiga
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dhismaha waddooyinka laamiga ah ee Muqdisho - Afgooye, Balcad, iyo laydhka solar-ka.
            </p>
          </div>
        </div>
      </section>

      {/* QUIZ INTERACTIVE BANNER */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-900 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-block px-3 py-1 bg-slate-900 text-yellow-400 font-bold text-xs rounded-full uppercase tracking-wider">
            ★ Imtixaanka Aqoonta
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            Ma ogtahay inta aad ka ogtahay Wax-qabadkii Farmaajo?
          </h3>
          <p className="text-xs font-semibold text-slate-800 max-w-xl">
            Afeef: Waa imtixaan gaaban oo 4 su'aalood ah oo lagu tijaabinayo aqoontaada maamulkii 9-aad ee Soomaaliya.
          </p>
        </div>

        <button
          onClick={onOpenQuiz}
          className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-yellow-400 font-bold text-sm rounded-xl shadow-md transition-transform hover:scale-105 shrink-0"
        >
          Bilaab Imtixaanka (Quiz)
        </button>
      </section>
    </div>
  );
};
