export type PageId = 'home' | 'biography' | 'achievements' | 'gallery';

export interface Achievement {
  id: string;
  title: string;
  category: 'economy' | 'security' | 'sovereignty' | 'infrastructure' | 'governance';
  categoryLabel: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  impactStats: string;
  image: string;
  featured?: boolean;
  keyPoints: string[];
}

export interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  category: string;
  description: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'visits' | 'army' | 'airspace' | 'debt_relief' | 'infrastructure' | 'diplomacy';
  categoryLabel: string;
  image: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
  youtubeId?: string;
  description: string;
  date: string;
}

export interface Quote {
  id: string;
  text: string;
  context: string;
  year: string;
  audioDuration?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
