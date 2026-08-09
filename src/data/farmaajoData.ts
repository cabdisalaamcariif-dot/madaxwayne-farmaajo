import { Achievement, GalleryItem, Quote, QuizQuestion, TimelineEvent, VideoItem } from '../types';

import farmaajoHeroImg from '../assets/images/farmaajo_hero_1786196312858.jpg';
import airspaceImg from '../assets/images/somalia_airspace_1786195198829.jpg';
import snaImg from '../assets/images/somali_national_army_1786195210895.jpg';
import infraImg from '../assets/images/mogadishu_infrastructure_1786195223992.jpg';

export const HERO_IMAGE = farmaajoHeroImg;
export const AIRSPACE_IMAGE = airspaceImg;
export const SNA_IMAGE = snaImg;
export const INFRA_IMAGE = infraImg;

export const STATS_OVERVIEW = [
  {
    id: '1',
    value: '$5.2B',
    label: 'Cafinta Deynta (HIPC Debt Relief)',
    subtext: 'Isku duubnida Hay’adaha Maaliyadda Caalamka',
    icon: 'BadgePercent',
    color: 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-200'
  },
  {
    id: '2',
    value: '27 Sannadood',
    label: 'Dib-u-soocelinta Hawada Soomaaliya',
    subtext: 'Class A Airspace oo Nairobi ka soo laabatay Muqdisho',
    icon: 'Plane',
    color: 'bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border-emerald-200'
  },
  {
    id: '3',
    value: '100%',
    label: 'Bixinta Mushaharka Bille ah',
    subtext: 'Ciidanka Qaranka & Shaqaalaha Dowladda oo Bille u qaata Biometric',
    icon: 'ShieldCheck',
    color: 'bg-amber-600/10 text-amber-600 dark:text-amber-400 border-amber-200'
  },
  {
    id: '4',
    value: '+185%',
    label: 'Kordhinta Dakhliga Gudaha',
    subtext: 'Akoonka Qazanada Dhexe (Single Treasury Account)',
    icon: 'TrendingUp',
    color: 'bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border-indigo-200'
  }
];

export const BIOGRAPHY_SECTIONS = {
  title: "Taariikhda & Falsafadda Hogaamineed ee Mohamed Abdullahi Farmaajo",
  subtitle: "Madaxweynihii 9-aad ee Jamhuuriyadda Federaalka Soomaaliya (2017 – 2022)",
  intro: "Mohamed Abdullahi Mohamed (Farmaajo) wuxuu ku dhashay magaalada Muqdisho sannadkii 1962-kii. Wuxuu ka mid yahay hogaamiyayaasha ugu saamaynta badan taariikhda cusub ee Soomaaliya, isagoo caan ku ah daacadnimada maaliyadeed, dhismaha hay'adaha qarrannimada, iyo dhawridda xornimada iyo sharafta dalka Soomaaliyeed.",
  education: [
    {
      degree: "Master's Degree in Political Science",
      institution: "State University of New York at Buffalo (SUNY Buffalo)",
      year: "2009",
      desc: "Wuxuu ku takhasusay Cilmiga Siyaasadda iyo Xiriirka Caalamiga ah, isagoo ku qray Buugga Qalin-jabinta Mawduuc ku saabsan Danaha Wadamada Reer Galbeedka ee Soomaaliya."
    },
    {
      degree: "Bachelor's Degree in History",
      institution: "State University of New York at Buffalo",
      year: "1993",
      desc: "Wuxuu wax ka bartay taariikhda dunida, maamulka dowladdaha iyo horumarinta bulshada."
    }
  ],
  politicalCareer: [
    {
      period: "2010 – 2011",
      role: "Ra'iisul Wasaaraha Soomaaliya",
      desc: "Sannadkii 2010-kii ayaa loo magacaabay Ra'iisul Wasaaraha Soomaaliya. Intii uu xafiiska joogay wuxuu soo saaray go'aankii taariikhiga ahaa ee lagu bixiyay mushaharka ciidanka iyo shaqaalaha dowladda markii ugu horreysay muddo 20 sano ka dib ah, wuxuuna alifaay maamul daacad ah oo la dagaallama musuqmaasuqa."
    },
    {
      period: "2011 – 2016",
      role: "Aasaasihii & Hogaamiyihii Xisbiga Nabad & Nolol (Tayo)",
      desc: "Ka dib markii uu iska casilay xilka Ra'iisul Wasaaranimada sababo siyaasadeed dartood, wuxuu aasaasay Xisbiga Tayo, wuxuuna dhisay taageero baaxad leh oo shacabka dhexdiisa ah ka dib maamulkii tusaalaha fiicnaa ee uu ka tagay."
    },
    {
      period: "8 Febraayo 2017 – 2022",
      role: "Madaxweynaha Jamhuuriyadda Federaalka Soomaaliya",
      desc: "Waxa loo doortay Madaxweynaha 9-aad ee Soomaaliya Doorashadii 8-dii Febraayo 2017 ka dhacday Muqdisho. Guushiisa waxay sababtay dabaaldeg shacab oo ballaaran ('Muqdisho Guul') dhammaan gobollada dalka iyo qurbe-joogta Soomaaliyeed."
    }
  ],
  pillars: [
    {
      title: "Daacadnimo Maaliyadeed",
      desc: "Dhawridda hantida umadda, baabi'inta akoonnada gaarka ah, iyo sameynta Qazanada Dhexe (Single Treasury Account).",
      icon: "Shield"
    },
    {
      title: "Qarrannimo & Xornimo Siyaasadeed",
      desc: "Soo celinta xornimada maamulka hawada dalka iyo in go'aannada Soomaaliya ay noqdaan kuwo ay leeyihiin Soomaalidu ('Soomaaliya Soomaali baa leh').",
      icon: "Flag"
    },
    {
      title: "Dhismaha Ciidanka Qaranka",
      desc: "Tirakoobka biometric-ka ah ee Ciidanka Xoogga Land (SNA), baabi'inta ciidankii riyada ahaa (phantom soldiers), iyo toos u siinta mushaharka.",
      icon: "Award"
    },
    {
      title: "Deynta Cafinta (HIPC Initiative)",
      desc: "Dhabar-adayg iyo kormeer maaliyadeed oo dalka ka saaray deynta $5.2 Bilyan oo dollar ee lagu lahaa muddo 30 sano ah.",
      icon: "DollarSign"
    }
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'debt-relief',
    title: 'Cafinta Deynta Soomaaliya ($5.2 Bilyan USD)',
    category: 'economy',
    categoryLabel: 'Dhaqaalaha & Maaliyadda',
    year: '2017 - 2022',
    shortDesc: 'Dhabar-adayg iyo dib-u-habayn maaliyadeed oo horseeday in Soomaaliya ay gaarto heerka gaaritaanka go’aanka deynta cafinta (HIPC Decision Point).',
    fullDesc: 'Dowladdii Madaxweyne Farmaajo waxay si habsami leh u fulisay dib-u-habaynta habka maaliyadda dalka oo ay horkacayeen Bangiga Adduunka (World Bank) iyo IMF. Tani waxay sahashay in Soomaaliya laga cafiyo deyntii qadiimiga ahayd ee ka badnayd $5.2 Bilyan oo Dollar, taas oo albaabada u fartay maalgashi caalami ah iyo dib-u-dhiska kaabayaasha dhaqaalaha.',
    impactStats: '$5.2 Bilyan Deyntii lagu lahaa oo la dhimay 90%+',
    image: infraImg,
    featured: true,
    keyPoints: [
      'Gaaritaanka HIPC Decision Point bishii Maarso 2020',
      'Sameynta habka xisaabinta qaranka ee habaysan (IMF SMP I, II, III & IV)',
      'Bixinta deynta qaarkeed ee la xiriirtay hay’adaha maaliyadda sida ADB & IDA',
      'Fududeynta deynta maalgashiga mustaqbalka Soomaaliya'
    ]
  },
  {
    id: 'airspace-control',
    title: 'Dib-u-soocelinta Maamulka Hawada Soomaaliya (Class A Airspace)',
    category: 'sovereignty',
    categoryLabel: 'Astaanta Qaranka & Hawada',
    year: '28 Diseembar 2017',
    shortDesc: 'Dib-u-soo celinta maamulka hawada Soomaaliya oo 27 sano ka dib lagu soo celiyay Muqdisho halkii ay ka maamuli jirtay ICAO oo fadhideedu ahaa Nairobi.',
    fullDesc: 'Ka dib 27 sano oo hawada Soomaaliya ay ka maamuli jireen hay’ado dibada ah, Dowladdii Farmaajo waxay maamulkii hawada gudaheeda iyo heerka sare (Class A Airspace) dib ugu soo celisay magaalada Muqdisho. Waxaa la dhisay xarunta ugu casrisan ee maamulka hawada (Mogadishu Flight Information Region - FIR) oo ay ka shaqeeyaan injineero Soomaaliyeed.',
    impactStats: '$20M+ dakhli sannadle ah oo hawada ka soo gala Qazanada Dhexe',
    image: airspaceImg,
    featured: true,
    keyPoints: [
      'Taariikhda 28 Diseembar 2017: Daah-furka Rasmiga ah ee Xarunta Hawada Muqdisho',
      'Soo celinta Radar-ka casriga ah iyo qalabka maamulka hawada gudaheeda',
      'Abaabulka iyo tababarka injineerada Soomaaliyeed ee maamula hawada',
      'Kordhinta duulimaadyada caalamiga ah ee isticmaala kor hawada Soomaaliya'
    ]
  },
  {
    id: 'sna-biometric',
    title: 'Biometric registration & Bixinta Mushaharka Bille ah ee Ciidanka',
    category: 'security',
    categoryLabel: 'Amniga & Ciidanka',
    year: '2018 - 2021',
    shortDesc: 'Diwaangelinta ciidanka xoogga dalka oo loo sameeyay kaarka farta (biometric) iyo in mushaharkooda si toos ah loogu shubo akoonkooda bangiga.',
    fullDesc: 'Madaxweyne Farmaajo wuxuu soo afjaray nidaamkii hore ee mushaharka ciidanka loogu dhex qaybin jirey gacanta. Waxaa la sameeyay diwaangelin Biometric ah oo lagu ogaaday tirada rasmiga ah ee ciidanka, iyadoo meesha ka baxday boqolaal magac oo riyo ahaa (phantom soldiers). Mushaharka ciidanka iyo gunnadooda waxaa laga bilaabay in si toos ah loogu shubo akoonadooda bangiga bil kasta ganacsiguna ma joogsan.',
    impactStats: '20,000+ Askari oo helay akoonno bangi & mushahar joogto ah',
    image: snaImg,
    featured: true,
    keyPoints: [
      'Sameynta akoonnada bangiga ee tooska ah ee askar kasta',
      'Meesha ka saarida musuq-maasuqii mushaharka ciidanka',
      'Soo xulista iyo tababarka kumanaan ciidan cusub ah oo Turkiga & Eritrea tababareen',
      'Bixinta raashinka, uniform-ka iyo daryeelka caafimaad ee ciidanka'
    ]
  },
  {
    id: 'single-treasury',
    title: 'Akoonka Qazanada Dhexe (Single Treasury Account)',
    category: 'governance',
    categoryLabel: 'Maamulka Suuban & Dhaqaalaha',
    year: '2017',
    shortDesc: 'Aasaasida akoonka kaliya ee Qazanada Dhexe si dhammaan dakhliga dowladda uu u galo halkaasa, loona joojiyo akoonnadii kala duwanaa.',
    fullDesc: 'Kahor 2017, dakhliga dowladda wuxuu ku kala daudsanaa akoonno badan oo maamullo kala duwan leeyihiin. Dowladdii Farmaajo waxay codsatay in dhammaan dakhliga kastamada, dekadda, garoonka iyo cashuuraha la isku keeno Qazanada Dhexe ee Bangiga Dhexe ee Soomaaliya, taas oo kor u dhaflightay dakhliga dowladda in ka badan 185%.',
    impactStats: '185% Kordhinta Dakhliga Gudaha sannadihii 2017-2021',
    image: infraImg,
    featured: false,
    keyPoints: [
      'Wada-shaqeynta Bangiga Dhexe iyo Wasaaradda Maaliyadda',
      'Transparency iyo xisaab-xirrada bil kasta oo loo soo bandhigo shacabka',
      'Bixinta mushaharka shaqaalaha rayidka ah bishii kasta 28-keeda',
      'Canshuuraha kastamka iyo dekadaha oo loo badalay hab digital ah'
    ]
  },
  {
    id: 'passport-diplomacy',
    title: 'Xoojinta Baasaboorka & Sumcadda Doplomaasiyadda Soomaaliya',
    category: 'sovereignty',
    categoryLabel: 'Astaanta Qaranka & Diblamaasiyadda',
    year: '2017 - 2022',
    shortDesc: 'Soo celinta xiriirka caalamiga ah, kor u qaadida qiimaha Baasaboorka Soomaaliga iyo badbaadinta muwaadiniinta dibada ku dhibaataysan.',
    fullDesc: 'Waxaa dadaal weyn loo galay soo celinta sumcaddii diblamaasiyadeed ee Soomaaliya. Waxaa la soo dhoofiyay kumanaan muwaadiniin Soomaaliyeed ah oo ku dhibaataysnaa xabsiyada wadamada Liibiya, Yemen, India, Seychelles iyo Kenya, iyadoo dib looga soo furay baasaboorka Soomaaliga fiisooyin badan oo caalamka ah.',
    impactStats: '3,000+ Maxbuus & Dhibanayaal dibada lagu soo celiyay dalka',
    image: farmaajoHeroImg,
    featured: false,
    keyPoints: [
      'Badbaadinta dhalinyaradii Soomaaliyeed ee ku go’naa Liibiya iyo badaha',
      'Furitaanka safaarado cusub iyo dib-u-soo-celinta hantidii dowlada ee dibada',
      'Dhawridda go’aannada madaxbanaanida Soomaaliya ee gobolka iyo caalamka',
      'Xiriir diblamaasiyadeed oo ku dhuftay go’aannada midnimada Soomaalida'
    ]
  },
  {
    id: 'infrastructure-roads',
    title: 'Dhismaha Wadooyinka Muqdisho - Afgooye iyo Muqdisho - Balcad',
    category: 'infrastructure',
    categoryLabel: 'Kaabayaasha Dhaqaalaha',
    year: '2019 - 2021',
    shortDesc: 'Dhismaha wadooyinka laamiga ah ee isu xira Caasimada Muqdisho iyo gobollada Shabeellaha Hoose iyo Shabeellaha Dhexe.',
    fullDesc: 'Mashaariicda kaabayaasha dhaqaalaha waxaa ka mid ahaa dhismaha waddada laamiga ah ee casriga ah ee leexshada badan ee isu xingaysa Muqdisho iyo Afgooye (30km) iyo Muqdisho Balcad (36km), oo la kaashaday dowladda walaalaha ah ee Turkiga, taas oo fududaysay ganacsiga iyo isu-socodka Soomaaliya.',
    impactStats: '66km oo Laami Casri ah oo la dhisay',
    image: infraImg,
    featured: false,
    keyPoints: [
      'Waddada Muqdisho - Afgooye oo laga dhigay laami adag oo xamili kara gaadiidka waaweyn',
      'Waddada Balcad - Muqdisho oo xirta gobolka Soomaaliyeed ee Shabeellaha Dhexe',
      'Laydhka qorraxda (solar lights) oo loo yeelay waddooyinka waaweyn ee caasimadda',
      'Dib-u-dhiska Garoonka Aadan Cadde iyo terminal-ka cusub'
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2010',
    date: '14 Oktoobar 2010',
    title: 'Magacaabiddii Ra’iisul Wasaaraha Soomaaliya',
    category: 'Siyaasadda',
    description: 'Mohamed Abdullahi Farmaajo ayaa loo magacaabay Ra’iisul Wasaaraha Soomaaliya, wuxuuna bilaabay nidaam cusub oo lagu bixiyo mushaharka ciidanka.',
    highlight: false
  },
  {
    year: '2017',
    date: '8 Febraayo 2017',
    title: 'Doorashadii Madaxweynaha 9-aad ee Soomaaliya',
    category: 'Doorasho',
    description: 'Farmaajo wuxuu ku guuleystay doorashadii taariikhiga ahayd ee Muqdisho. Shacabka Soomaaliyeed ayaa sameeyay dabaaldegii ugu weynaa ee "Muqdisho Guul".',
    highlight: true
  },
  {
    year: '2017',
    date: '28 Diseembar 2017',
    title: 'Soo celinta Maamulka Hawada Soomaaliya',
    category: 'Hawada',
    description: 'Maamulka Hawada Soomaaliya ayaa markii ugu horreysay 27 sano ka dib laga soo wareejiyay magaalada Nairobi iyadoo lagu soo celiyay xarunta Muqdisho.',
    highlight: true
  },
  {
    year: '2019',
    date: '15 Maarso 2019',
    title: 'Dhameystirka Diwaangelinta Biometric ee Ciidanka (SNA)',
    category: 'Amniga',
    description: 'Dhammaan ciidamada Xoogga Land Soomaaliyeed ayaa la diwaangeliyay, laguna xirey akoonno bangi si toos ah loo siiyo mushaharkooda.',
    highlight: false
  },
  {
    year: '2020',
    date: '25 Maarso 2020',
    title: 'Gaaritaanka Qodobka Go’aanka Cafinta Deynta (HIPC Decision Point)',
    category: 'Dhaqaalaha',
    description: 'IMF iyo Bangiga Adduunka waxay si rrasmi ah u shaaciyeen in Soomaaliya ay gaartay heerka HIPC Decision Point si looga cafiyo deynta $5.2B.',
    highlight: true
  },
  {
    year: '2021',
    date: '26 Jannaayo 2021',
    title: 'Dhameystirka Dhismaha Waddada Muqdisho - Afgooye',
    category: 'Infrastructure',
    description: 'Laga bilaabo dib-u-dhiska laamiga tareenka iyo baabuurta, waddada Muqdisho iyo Afgooye isu xingaysa ayaa la dhammeystiray.',
    highlight: false
  },
  {
    year: '2022',
    date: '15 Maajo 2022',
    title: 'Wareejintii Xilka ee Hab-maamuuska Dimuqraadiga Ah',
    category: 'Dimuqraadiyadda',
    description: 'Madaxweyne Farmaajo wuxuu xilka si nabad ah oo hufan ugu wareejiyay Madaxweyne Hassan Sheikh Mohamud ka dib doorashadii Maajo 2022.',
    highlight: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sawirka Rasmiga ah ee Madaxweyne Farmaajo',
    category: 'visits',
    categoryLabel: 'Booqashooyinka',
    image: farmaajoHeroImg,
    date: '2017',
    location: 'Madaxtooyada Villa Somalia, Muqdisho',
    description: 'Sawirka rasmiga ah ee Madaxweyne Mohamed Abdullahi Farmaajo ee Villa Somalia.',
    tags: ['Farmaajo', 'Madaxweyne', 'Villa Somalia']
  },
  {
    id: 'gal-2',
    title: 'Xarunta Maamulka Hawada ee Muqdisho (FIR)',
    category: 'airspace',
    categoryLabel: 'Hawada Soomaaliya',
    image: airspaceImg,
    date: '28 Diseembar 2017',
    location: 'Garoonka Aadan Cadde, Muqdisho',
    description: 'Muuqaalka injineerada Soomaaliyeed oo maamulaya hawada dalka markii ugu horreysay 27 sano ka dib.',
    tags: ['Hawada', 'ICAO', 'Muqdisho', 'FIR']
  },
  {
    id: 'gal-3',
    title: 'Goolasha iyo Parade-ka Ciidanka Xoogga Land (SNA)',
    category: 'army',
    categoryLabel: 'Ciidanka Qaranka',
    image: snaImg,
    date: '12 Abriil 2019',
    location: 'Aakademiyeedka Ciidanka, Muqdisho',
    description: 'Munaasabaddii Maalinta Ciidanka Xoogga Land Soomaaliyeed iyo soo bandhigida ciidamada Biometric-ka ku jiro.',
    tags: ['SNA', 'Ciidanka', 'Amniga', '12 Abriil']
  },
  {
    id: 'gal-4',
    title: 'Mashaariicda Waddooyinka iyo Laydhka Qorraxda',
    category: 'infrastructure',
    categoryLabel: 'Mashaariicda & Laamiga',
    image: infraImg,
    date: '2020',
    location: 'Muqdisho - Afgooye Road',
    description: 'Dhismaha waddada cusub ee laamiga ah iyo laydhka qorraxda ku shaqeeya ee caasimadda.',
    tags: ['Laamiga', 'Muqdisho', 'Turkiga', 'Mashaariic']
  },
  {
    id: 'gal-5',
    title: 'Shirkii Cafinta Deynta Soomaaliya',
    category: 'debt_relief',
    categoryLabel: 'Cafinta Deynta',
    image: infraImg,
    date: 'Maarso 2020',
    location: 'Washington DC & Muqdisho',
    description: 'Wada-hadalladii IMF iyo World Bank ee go’aanka taariikhiga ah ee HIPC Decision Point.',
    tags: ['Debt Relief', 'IMF', 'World Bank', 'Dhaqaalaha']
  },
  {
    id: 'gal-6',
    title: 'Shirarka Caalamiga ah & Diplomaasiyadda Soomaaliya',
    category: 'diplomacy',
    categoryLabel: 'Diblamaasiyadda',
    image: farmaajoHeroImg,
    date: '2018',
    location: 'Shirarka Midowga Afrika & UN',
    description: 'Madaxweyne Farmaajo oo Soomaaliya ku đạiyeenayey shirarka caalamiga ah ee Midowga Afrika iyo Qaramada Midoobay.',
    tags: ['AU', 'UN', 'Diplomacy', 'Sovereignty']
  }
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Munaasabaddii Dib-u-soo-celinta Hawada Soomaaliya (2017)',
    duration: '04:15',
    thumbnail: airspaceImg,
    category: 'Hawada',
    description: 'Muuqaal kusaabsan go’aankii taariikhiga ahaa oo hawada Soomaaliya looga soo celiyay Nairobi oo lagu soo wareejiyay Muqdisho.',
    date: '28 Dec 2017'
  },
  {
    id: 'v2',
    title: 'Khudbaddii Taariikhiga ahayd ee Cafinta Deynta ($5.2B)',
    duration: '06:30',
    thumbnail: infraImg,
    category: 'Dhaqaalaha',
    description: 'Madaxweyne Farmaajo oo u hambalyeeyay shacabka Soomaaliyeed ka dib markii lagu guuleystay ka miradhalinta deynta cafinta.',
    date: '25 Mar 2020'
  },
  {
    id: 'v3',
    title: 'Tirakoobka Biometric-ka & Isbadalka Ciidanka Xoogga Land',
    duration: '05:40',
    thumbnail: snaImg,
    category: 'Amniga',
    description: 'Warbixin ku saabsan nidaamka electronic-ka ah ee loo sameeyay askar kasta oo ka tirsan SNA iyo bixinta mushaharka.',
    date: '15 Aug 2019'
  }
];

export const FAMOUS_QUOTES: Quote[] = [
  {
    id: 'q1',
    text: "Soomaaliya Soomaali baa leh. Dalkani ma aha mid shakhsi leeyahay ama ajaanib ay maamuli karaan. Qarrannimadu waa mid doonaysa dhabar-adayg iyo difaac.",
    context: "Khudbaddii Madaxtooyada ee Madaxbanaanida Soomaaliya",
    year: "2018",
    audioDuration: "0:28"
  },
  {
    id: 'q2',
    text: "Ciidanku waa laf-dhabarta qarrannimada. Askariga hariga iyo qorraxdaba u taagan in uu dalkiisa difaaco waa in uu mushaharkiisa si toos ah akoonkiisa u helaa bishii kasta.",
    context: "Munaasabaddii 12-ka Abriil ee Ciidanka Xoogga Land",
    year: "2019",
    audioDuration: "0:35"
  },
  {
    id: 'q3',
    text: "Deynta lagu leeyahay dalkeena waxay ahayd silsilad nagu xirtay muddo 30 sano ah. Cafinta deyntu waa guul taariikhi ah oo sahlaysa mustaqbalka dhalinyarada Soomaaliyeed.",
    context: "Warbixinta Guusha Cafinta Deynta (HIPC)",
    year: "2020",
    audioDuration: "0:42"
  },
  {
    id: 'q4',
    text: "Musuqmaasuqu waa cadowga koowaad ee dowladnimada. Hantida umadda in la dhawro waa waajib saaran maamul kasta oo daacad ah.",
    context: "Khudbaddii Shirka Maaliyadda iyo Hantidhawrka",
    year: "2017",
    audioDuration: "0:22"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Sannadkee ayaa Madaxweyne Farmaajo loo doortay Madaxweynaha 9-aad ee Soomaaliya?",
    options: ["2015", "2016", "2017", "2018"],
    correctIndex: 2,
    explanation: "Waxa loo doortay Madaxweynaha Soomaaliya bishii Febraayo 8, 2017 ka dib doorashadii ka dhacday magaalada Muqdisho."
  },
  {
    id: 2,
    question: "Immisa sano ka dib ayaa Maamulka Hawada Soomaaliya lagu soo celiyay Muqdisho?",
    options: ["10 Sano", "15 Sano", "20 Sano", "27 Sano"],
    correctIndex: 3,
    explanation: "Hawada Soomaaliya waxay ka maamuli jirtay Nairobi muddo 27 sano ah, ka hor inta aan lagu soo celin Muqdisho bishii Diseembar 28, 2017."
  },
  {
    id: 3,
    question: "Tirada deynta lagu lahaa Soomaaliya ee la guda galay cafinteeda barnaamijka HIPC waxay ahayd:",
    options: ["$1.5 Bilyan", "$3.0 Bilyan", "$5.2 Bilyan", "$10.0 Bilyan"],
    correctIndex: 2,
    explanation: "Deyntii lagu lahaa Soomaaliya ee la cafiyay barnaamijka HIPC ka dib waxay ahayd qadar dhan $5.2 Bilyan oo Dollar."
  },
  {
    id: 4,
    question: "Waa maxay nidaamka loo sameeyay ciidanka xoogga dalka (SNA) si loogu bixiyo mushaharka?",
    options: ["Gacan ku qaybin cash ah", "Biometric & akoonno bangi toos ah", "Qaybinta gobollada", "Jeegag xaashi ah"],
    correctIndex: 1,
    explanation: "Waxaa la sameeyay diwaangelin farta ah (biometric) iyo akoonno bangi oo si toos ah loogu shubo mushaharka askari kasta."
  }
];

export const CHART_DATA_REVENUE = [
  { year: '2016', revenue: 112, label: '$112M' },
  { year: '2017', revenue: 142, label: '$142M' },
  { year: '2018', revenue: 183, label: '$183M' },
  { year: '2019', revenue: 229, label: '$229M' },
  { year: '2020', revenue: 247, label: '$247M' },
  { year: '2021', revenue: 268, label: '$268M' },
];

export const DEBT_RELIEF_PROGRESS = [
  { stage: 'SMP I (2017)', completion: 100, desc: 'Dib-u-habaynta Maaliyadda I' },
  { stage: 'SMP II (2018)', completion: 100, desc: 'Xisaab-xirka Qazanada Dhexe' },
  { stage: 'HIPC Decision Point (2020)', completion: 100, desc: 'Deynta $5.2B oo la cafiyay 90%' },
  { stage: 'HIPC Completion Point', completion: 100, desc: 'Dhameystirka Barnaamijka' }
];
