import React, { useState } from 'react';
import { Achievement } from '../types';
import {
  ACHIEVEMENTS,
  CHART_DATA_REVENUE,
  DEBT_RELIEF_PROGRESS,
  SNA_IMAGE,
  AIRSPACE_IMAGE,
  INFRA_IMAGE
} from '../data/farmaajoData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import {
  Award,
  Filter,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Shield,
  Plane,
  X,
  Sparkles,
  Info,
  CreditCard,
  UserCheck,
  Calendar,
  Layers
} from 'lucide-react';

interface AchievementsPageProps {
  selectedAchievement: Achievement | null;
  onSelectAchievement: (ach: Achievement | null) => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({
  selectedAchievement,
  onSelectAchievement
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'cards' | 'charts' | 'sna_sim'>('cards');

  // SNA Salary Simulator state
  const [simStep, setSimStep] = useState<number>(0);
  const [simProcessing, setSimProcessing] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Dhammaan (All)' },
    { id: 'economy', label: 'Dhaqaalaha & Deynta' },
    { id: 'sovereignty', label: 'Hawada & Qarrannimada' },
    { id: 'security', label: 'Amniga & Ciidanka' },
    { id: 'infrastructure', label: 'Mashaariicda & Laamiga' },
    { id: 'governance', label: 'Maamulka Suuban' }
  ];

  const filteredAchievements = selectedCategory === 'all'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter((a) => a.category === selectedCategory);

  const runSnaSim = () => {
    setSimProcessing(true);
    setSimStep(1);
    setTimeout(() => {
      setSimStep(2);
      setTimeout(() => {
        setSimStep(3);
        setSimProcessing(false);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* HEADER BANNER */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>3. Wax-qabadka Buuxa ee Madaxweynaha</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Wax-qabadkii Taariikhiga Ahaa (2017 – 2022)
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Baar oo kaga bogog dhammaan guulihii laga gaaray dib-u-habaynta maaliyadda, cafinta deynta $5.2B, dib-u-soocelinta hawada Soomaaliya, diwaangelinta biometric ee ciidanka, iyo mashaariicda waddooyinka.
          </p>

          {/* Quick Sub-navigation */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'cards'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Moodeelka Wax-qabadka</span>
            </button>

            <button
              onClick={() => setActiveTab('charts')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'charts'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Shaxda Dakhliga & Deynta</span>
            </button>

            <button
              onClick={() => setActiveTab('sna_sim')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'sna_sim'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>Simulator-ka Mushaharka SNA</span>
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      {activeTab === 'cards' && (
        <section className="space-y-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ACHIEVEMENTS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-600 text-white">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs font-semibold text-white/90 bg-slate-950/60 px-2.5 py-1 rounded-md">
                    {item.year}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 text-emerald-500" />
                      <span>{item.impactStats}</span>
                    </div>

                    <button
                      onClick={() => onSelectAchievement(item)}
                      className="w-full py-2.5 rounded-xl bg-blue-50 dark:bg-slate-700 hover:bg-blue-600 hover:text-white text-blue-700 dark:text-blue-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Aqri Faahfaahinta Buuxda</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CHARTS TAB */}
      {activeTab === 'charts' && (
        <section className="space-y-10">
          {/* Revenue Chart */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Maaliyadda Qaranka
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Kordhinta Dakhliga Gudaha (2016 - 2021)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Kordhinta dakhliga dowladda oo ka timid $112M ilaa $268M (+185%) natiijadii ka dhalatay Single Treasury Account.
              </p>
            </div>

            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA_REVENUE}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="year" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} unit="M" />
                  <Tooltip formatter={(value) => [`$${value}M`, 'Dakhliga Gudaha']} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563eb"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRev)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Debt Relief Progress Steps */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Barnaamijka HIPC
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Heerarka Barnaamijka Cafinta Deynta ($5.2 Bilyan)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DEBT_RELIEF_PROGRESS.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {stage.completion}%
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {stage.stage}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SNA BIOMETRIC SALARY SIMULATOR */}
      {activeTab === 'sna_sim' && (
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 font-bold text-xs rounded-full border border-yellow-500/30">
              Interactive Simulator
            </span>
            <h2 className="text-2xl font-bold">
              Simulator-ka Bixinta Mushaharka Biometric ee SNA
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fiiri sida nidaamkii farta (biometric) uu u meesha ka saaray musuqmaasuqii, una siiyay askari kasta mushahar toos ah bishii kasta.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className={`p-4 rounded-xl border transition-all ${simStep >= 1 ? 'border-emerald-500 bg-emerald-950/40' : 'border-slate-700 bg-slate-900'}`}>
                <div className="text-xs font-bold text-slate-400 mb-1">Tallaabada 1</div>
                <div className="font-bold text-sm text-white">1. Baaritaanka Farta (Biometric)</div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${simStep >= 2 ? 'border-emerald-500 bg-emerald-950/40' : 'border-slate-700 bg-slate-900'}`}>
                <div className="text-xs font-bold text-slate-400 mb-1">Tallaabada 2</div>
                <div className="font-bold text-sm text-white">2. Akoonka Bangiga Tooska Ah</div>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${simStep >= 3 ? 'border-emerald-500 bg-emerald-950/40' : 'border-slate-700 bg-slate-900'}`}>
                <div className="text-xs font-bold text-slate-400 mb-1">Tallaabada 3</div>
                <div className="font-bold text-sm text-white">3. Bixinta Mushaharka Bille ah</div>
              </div>
            </div>

            {simStep === 3 && (
              <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-600 text-emerald-200 text-xs font-semibold flex items-center justify-between">
                <span>✓ Mushaharkii Bille ahaa ee Askari Abdi Xasan waa loo shubay Akoonka Bangiga (Central Bank System).</span>
                <span className="px-2.5 py-1 bg-emerald-500 text-slate-900 rounded font-bold text-[10px]">SUCCESS</span>
              </div>
            )}

            <button
              onClick={runSnaSim}
              disabled={simProcessing}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>{simProcessing ? 'Nidaamku waa socdaa...' : 'Tijaabi Simulator-ka Mushaharka Biometric'}</span>
            </button>
          </div>
        </section>
      )}

      {/* ACHIEVEMENT DEEP-DIVE MODAL */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
            <div className="relative h-56 bg-slate-900">
              <img
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button
                onClick={() => onSelectAchievement(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 bg-blue-600 text-white font-bold text-xs rounded-full">
                  {selectedAchievement.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {selectedAchievement.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                  Warbixinta Rasmiga Ah
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedAchievement.fullDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  Natiijada Buuxda (Impact Result)
                </div>
                <div className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                  {selectedAchievement.impactStats}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Qodobada Ugu Waaweyn
                </h3>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  {selectedAchievement.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => onSelectAchievement(null)}
                className="px-5 py-2 bg-slate-900 dark:bg-slate-700 text-white font-semibold text-xs rounded-xl"
              >
                Xir Daaqadda
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
