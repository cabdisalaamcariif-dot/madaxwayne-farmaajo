import React, { useState } from 'react';
import { GalleryItem, VideoItem } from '../types';
import { GALLERY_ITEMS, VIDEO_ITEMS } from '../data/farmaajoData';
import {
  Image as ImageIcon,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  CheckCircle,
  MapPin,
  Calendar,
  Share2,
  Tag,
  Download
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Video modal player state
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  // User upload modal state
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);
  const [userTitle, setUserTitle] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Custom gallery list state allowing user uploads
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(GALLERY_ITEMS);

  const categories = [
    { id: 'all', label: 'Dhammaan (All)' },
    { id: 'airspace', label: 'Hawada Soomaaliya' },
    { id: 'army', label: 'Ciidanka Qaranka' },
    { id: 'debt_relief', label: 'Cafinta Deynta' },
    { id: 'infrastructure', label: 'Mashaariicda & Laamiga' },
    { id: 'visits', label: 'Booqashooyinka' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryList
    : galleryList.filter((item) => item.category === selectedCategory);

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userTitle.trim()) return;

    const newItem: GalleryItem = {
      id: `user-gal-${Date.now()}`,
      title: userTitle,
      category: 'visits',
      categoryLabel: 'Xusuusta Shacabka',
      image: 'https://picsum.photos/seed/somalia/800/600',
      date: new Date().getFullYear().toString(),
      location: userLocation || 'Muqdisho, Soomaaliya',
      description: userDesc || 'Sawir ay soo gudbiyeen shacabka Soomaaliyeed.',
      tags: ['Shacabka', 'Xusuus', 'Farmaajo']
    };

    setGalleryList([newItem, ...galleryList]);
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setUploadModalOpen(false);
      setUserTitle('');
      setUserDesc('');
      setUserLocation('');
    }, 2000);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* HEADER BANNER */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>4. Galaariga Sawirrada & Muuqaallada</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Maktabadda Sawirrada & Warbaahinta
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Kaydka sawirrada iyo muuqaallada taariikhiga ah ee munaasabadaha, dib-u-soocelinta hawada, parades-ka ciidanka, iyo mashaariicda qaranka.
            </p>
          </div>

          <button
            onClick={() => setUploadModalOpen(true)}
            className="px-5 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-slate-900 font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <Upload className="w-4 h-4" />
            <span>Ku dar Sawir/Xusuus</span>
          </button>
        </div>

        {/* Media Type Tabs */}
        <div className="pt-6 flex gap-3">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'photos'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <span>Sawirrada ({galleryList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'videos'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-yellow-400" />
            <span>Muuqaallada (Videos)</span>
          </button>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      {activeTab === 'photos' && (
        <section className="space-y-8">
          {/* Category Tabs */}
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

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-blue-600/90 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
                      Daawo Sawirka
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-slate-950/70 text-white text-[10px] font-bold rounded-full backdrop-blur-md">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{item.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VIDEO HIGHLIGHTS SECTION */}
      {activeTab === 'videos' && (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_ITEMS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 text-slate-900 flex items-center justify-center font-bold shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-slate-900 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-slate-950/80 text-white text-[10px] font-bold rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                  {video.category} • {video.date}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <div className="text-center text-white space-y-1 max-w-xl">
              <h3 className="text-lg font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-1">
                <span>📍 {filteredItems[lightboxIndex].location}</span>
                <span>📅 {filteredItems[lightboxIndex].date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO PLAYER MODAL SIMULATION */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl max-w-2xl w-full border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-950 flex items-center justify-between text-white border-b border-slate-800">
              <h3 className="text-sm font-bold truncate">
                {activeVideo.title}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-yellow-500 text-slate-900 flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-slate-900 ml-1" />
                </div>
                <div className="text-white font-bold text-sm max-w-md">
                  Simulation-ka Muuqaalka Taariikhiga Ah
                </div>
                <p className="text-xs text-slate-300 max-w-md">
                  {activeVideo.description}
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 text-right">
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded-xl"
              >
                Xir Muuqaalka
              </button>
            </div>
          </div>
        </div>
      )}

      {/* USER PHOTO SUBMISSION MODAL */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Ku dar Sawir ama Xusuus
              </h3>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {uploadSuccess ? (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-xl flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Ugu mahadsanid! Sawirkaaga waa lagu soo daray Galaariga.</span>
              </div>
            ) : (
              <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Cinwaanka Sawirka
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tusaale: Booqashadii Kismaayo 2018"
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Goobta (Location)
                  </label>
                  <input
                    type="text"
                    placeholder="Tusaale: Muqdisho, Garowe, ama Baydhabo"
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Faahfaahin Gaaban
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Qrib faahfaahinta xusuusta ama sawirka..."
                    value={userDesc}
                    onChange={(e) => setUserDesc(e.target.value)}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  Gudbi Sawirka Galaariga
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
