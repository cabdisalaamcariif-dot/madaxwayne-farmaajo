import React, { useState } from 'react';
import { PageId } from '../types';
import { Flag, Heart, Send, CheckCircle, Shield, Award, Mail } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setFeedback('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About & Motto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                ★
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                M. A. Farmaajo
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Website-kan waxaa looga dan leeyahay in lagu diwaangeliyo xaqiiqada taariikhiga ah ee wax-qabadkii iyo guulihii dalka Soomaaliya ay ka gaartay Dowladdii 9-aad ee Madaxweyne Mohamed Abdullahi Farmaajo.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 bg-blue-950 text-blue-300 text-xs font-semibold rounded-full border border-blue-800">
                ★ Nabad iyo Nolol
              </span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-semibold rounded-full border border-slate-700">
                Soomaaliya Soomaali Baa Leh
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Bogagga Website-ka
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    setActivePage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-500">›</span>
                  <span>1. Bogga Hore (Home)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('biography');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-500">›</span>
                  <span>2. Taariikhda & Aqoonta (Biography)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('achievements');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-500">›</span>
                  <span>3. Wax-qabadka (Achievements)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-500">›</span>
                  <span>4. Galaariga Sawirrada (Gallery)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Pillars */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Guulaha Waaweyn
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>Cafinta Deynta $5.2 Bilyan USD</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>Soo Celinta Maamulka Hawada</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <span>Diwaangelinta Biometric ee SNA</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                <span>Akoonka Qazanada Dhexe (STA)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: User Feedback / Message Form */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Aray ama Aragtidaada
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Ma leedahay xusuus ama feker aad ka qabto wax-qabadka Madaxweyne Farmaajo?
            </p>
            {submitted ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Ugu mahadsanid! Aragtidaada si guul leh ayaa loo kaydiyay.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-2">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Qrib aragtidaada halkan..."
                  className="w-full p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none h-20"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dir Aragtida</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* National Anthem Banner */}
        <div className="py-6 px-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-900/60 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🇸🇴</div>
            <div>
              <p className="text-sm font-semibold text-blue-200">
                "Qolobaa cawaaleed, Waadutay agoonoo..."
              </p>
              <p className="text-xs text-slate-400">
                Astaanta Soomaaliya & Midnimada Qaranka
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 italic">
            "Soomaaliya Soomaali baa leh, Soomaalina way wada leedahay."
          </p>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Mohamed Abdullahi Farmaajo - Archive Portal. Dhammaan xuquuqdu waa dhowran yihiin.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Ku dhisay jacaylka Soomaaliya</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
