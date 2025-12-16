import { Category, Service } from './types';

export const WHATSAPP_NUMBER = "213600000000";

export const CATEGORIES: Category[] = [
  { id: 'social-design', name: 'تصاميم سوشيال ميديا', icon: '🎨' },
  { id: 'logo-design', name: 'تصميم وتطوير شعارات', icon: '✒️' },
  { id: 'web-design', name: 'تصميم مواقع وتطبيقات', icon: '💻' },
  { id: 'presentations', name: 'تصميم عروض تقديمية', icon: '📊' },
  { id: 'resume', name: 'تصميم سيرة ذاتية', icon: '📄' },
  { id: 'branding', name: 'تصميم هوية بصرية', icon: '👁️' },
  { id: 'app-dev', name: 'تطوير تطبيقات جوال', icon: '📱' },
  { id: 'ecommerce', name: 'إنشاء متجر إلكتروني', icon: '🛍️' },
  { id: 'wordpress', name: 'ووردبريس', icon: 'W' },
  { id: 'video-editing', name: 'مونتاج فيديو', icon: '🎬' },
  { id: 'motion-graphics', name: 'موشن جرافيك', icon: '🎞️' },
  { id: 'seo', name: 'تحسين محركات البحث', icon: '🔍' },
  { id: 'translation', name: 'ترجمة وكتابة محتوى', icon: '📝' },
  { id: 'voice-over', name: 'تعليق صوتي', icon: '🎙️' },
  { id: 'marketing', name: 'تسويق إلكتروني', icon: '📢' },
];

const mockPackages = {
  basic: { name: 'أساسية', price: '50$', deliveryTime: '2 يوم', features: ['تصميم واحد', 'جودة عالية', 'تعديل واحد'] },
  standard: { name: 'متوسطة', price: '100$', deliveryTime: '4 أيام', features: ['3 تصاميم', 'ملفات مفتوحة', '3 تعديلات'] },
  premium: { name: 'احترافية', price: '200$', deliveryTime: '7 أيام', features: ['5 تصاميم', 'كافة الملفات', 'دعم فني', 'تعديلات لا نهائية'] },
};

// Helper to generate image portfolio items
const getImgPortfolio = (seed: number) => [
  { type: 'image' as const, url: `https://picsum.photos/800/600?random=${seed}1` },
  { type: 'image' as const, url: `https://picsum.photos/800/600?random=${seed}2` },
  { type: 'image' as const, url: `https://picsum.photos/800/600?random=${seed}3` },
];

// Helper to generate video portfolio items
const getVideoPortfolio = (seed: number) => [
  { type: 'video' as const, url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', thumbnail: `https://picsum.photos/800/600?random=${seed}1` },
  { type: 'video' as const, url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', thumbnail: `https://picsum.photos/800/600?random=${seed}2` },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'تصميم شعار احترافي للشركات',
    category: 'تصميم وتطوير شعارات',
    shortDescription: 'نقدم لك شعاراً يعكس هوية شركتك بلمسة إبداعية.',
    description: 'احصل على تصميم شعار فريد ومميز لعلامتك التجارية. نقوم بدراسة السوق والمنافسين لنقدم لك فكرة إبداعية تلتصق بذهن العميل.',
    image: '/portfolio/post.png',
    rating: 4.9,
    reviewsCount: 120,
    portfolio: getImgPortfolio(100),
    packages: {
        basic: { ...mockPackages.basic, price: '40$' },
        standard: { ...mockPackages.standard, price: '80$' },
        premium: { ...mockPackages.premium, price: '150$' }
    }
  },
  {
  id: '2',
  title: 'تصميم منشورات سوشيال ميديا',
  category: 'تصاميم سوشيال ميديا',
  shortDescription: 'تصميم احترافي لمنصات التواصل الاجتماعي.',
  description: 'نقدّم تصاميم جذابة لمنصات التواصل الاجتماعي تساعدك على بناء هوية قوية وزيادة التفاعل.',
  image: 'https://picsum.photos/800/600?random=2',
  rating: 4.8,
  reviewsCount: 85,

  portfolio: [
    {
      id: 'p1',
      title: 'شعار شركة',
      image: '/portfolio/logo.png',
    },
  ],

  packages: {
    basic: { ...mockPackages.basic, price: '20$' },
    standard: { ...mockPackages.standard, price: '50$' },
    premium: { ...mockPackages.premium, price: '100$' },
  },
}

  {
    id: '3',
    title: 'برمجة متجر إلكتروني متكامل',
    category: 'إنشاء متجر إلكتروني',
    shortDescription: 'ابدأ تجارتك الإلكترونية بمتجر احترافي وسريع.',
    description: 'نقوم ببناء متجر إلكتروني يدعم بوابات الدفع، الشحن، ومتجاوب مع جميع الأجهزة. لوحة تحكم سهلة وتدريب مجاني.',
    image: 'https://picsum.photos/800/600?random=3',
    rating: 5.0,
    reviewsCount: 40,
    portfolio: getImgPortfolio(300),
    packages: {
        basic: { ...mockPackages.basic, price: '300$', deliveryTime: '10 أيام' },
        standard: { ...mockPackages.standard, price: '600$', deliveryTime: '20 يوم' },
        premium: { ...mockPackages.premium, price: '1000$', deliveryTime: '30 يوم' }
    }
  },
  {
    id: '4',
    title: 'فيديو موشن جرافيك ترويجي',
    category: 'موشن جرافيك',
    shortDescription: 'فيديو يشرح فكرتك بطريقة مبسطة وجذابة.',
    description: 'نقوم بكتابة السيناريو، التعليق الصوتي، والتحريك لإنتاج فيديو موشن جرافيك يشرح خدماتك بشكل رائع.',
    image: 'https://picsum.photos/800/600?random=4',
    rating: 4.7,
    reviewsCount: 200,
    portfolio: getVideoPortfolio(400),
    packages: {
        basic: { ...mockPackages.basic, price: '100$', deliveryTime: '5 أيام' },
        standard: { ...mockPackages.standard, price: '200$', deliveryTime: '10 أيام' },
        premium: { ...mockPackages.premium, price: '400$', deliveryTime: '15 يوم' }
    }
  },
  {
    id: '5',
    title: 'تطوير تطبيق جوال (iOS & Android)',
    category: 'تطوير تطبيقات جوال',
    shortDescription: 'حول فكرتك إلى تطبيق جوال يعمل على جميع الأنظمة.',
    description: 'نستخدم أحدث التقنيات مثل React Native أو Flutter لبناء تطبيقات قوية وسريعة.',
    image: 'https://picsum.photos/800/600?random=5',
    rating: 4.9,
    reviewsCount: 30,
    portfolio: getImgPortfolio(500),
    packages: {
        basic: { ...mockPackages.basic, price: '500$' },
        standard: { ...mockPackages.standard, price: '1200$' },
        premium: { ...mockPackages.premium, price: '2500$' }
    }
  },
  {
    id: '6',
    title: 'كتابة محتوى تسويقي إبداعي',
    category: 'ترجمة وكتابة محتوى',
    shortDescription: 'نصوص إعلانية ومقالات تتصدر نتائج البحث.',
    description: 'فريق من الكتاب المحترفين لكتابة محتوى موقعك أو مدونتك أو إعلاناتك بما يتوافق مع SEO.',
    image: 'https://picsum.photos/800/600?random=6',
    rating: 4.6,
    reviewsCount: 150,
    portfolio: getImgPortfolio(600),
    packages: {
        basic: { ...mockPackages.basic, price: '15$' },
        standard: { ...mockPackages.standard, price: '40$' },
        premium: { ...mockPackages.premium, price: '80$' }
    }
  },
  {
    id: '7',
    title: 'مونتاج فيديو يوتيوب احترافي',
    category: 'مونتاج فيديو',
    shortDescription: 'تحويل لقطاتك الخام إلى قصة بصرية مذهلة.',
    description: 'قص، تلوين، إضافة مؤثرات صوتية وبصرية لفيديوهات اليوتيوب أو المناسبات.',
    image: 'https://picsum.photos/800/600?random=7',
    rating: 4.8,
    reviewsCount: 90,
    portfolio: getVideoPortfolio(700),
    packages: {
        basic: { ...mockPackages.basic, price: '50$' },
        standard: { ...mockPackages.standard, price: '100$' },
        premium: { ...mockPackages.premium, price: '200$' }
    }
  },
  {
    id: '8',
    title: 'تعليق صوتي (Voice Over) عربي',
    category: 'تعليق صوتي',
    shortDescription: 'أصوات إذاعية احترافية لجميع الأغراض.',
    description: 'تسجيل تعليق صوتي للإعلانات، الرد الآلي، الكتب الصوتية، والوثائقيات بأعلى جودة.',
    image: 'https://picsum.photos/800/600?random=8',
    rating: 5.0,
    reviewsCount: 60,
    portfolio: getVideoPortfolio(800), // Using video for audio as it's common to show waveforms
    packages: {
        basic: { ...mockPackages.basic, price: '30$' },
        standard: { ...mockPackages.standard, price: '60$' },
        premium: { ...mockPackages.premium, price: '120$' }
    }
  },
  {
    id: '9',
    title: 'تصميم واجهة مستخدم UX/UI',
    category: 'تصميم مواقع وتطبيقات',
    shortDescription: 'تصميم تجربة مستخدم سهلة وواجهات عصرية.',
    description: 'نحلل سلوك المستخدم ونبني واجهات Figma قابلة للتطوير وسهلة الاستخدام.',
    image: 'https://picsum.photos/800/600?random=9',
    rating: 4.9,
    reviewsCount: 45,
    portfolio: getImgPortfolio(900),
    packages: {
        basic: { ...mockPackages.basic, price: '100$' },
        standard: { ...mockPackages.standard, price: '250$' },
        premium: { ...mockPackages.premium, price: '500$' }
    }
  },
  {
    id: '10',
    title: 'تحسين محركات البحث SEO',
    category: 'تحسين محركات البحث',
    shortDescription: 'اجعل موقعك يتصدر الصفحة الأولى في جوجل.',
    description: 'تحليل شامل للموقع، تحسين الكلمات المفتاحية، وبناء روابط خلفية لزيادة الزيارات.',
    image: 'https://picsum.photos/800/600?random=10',
    rating: 4.7,
    reviewsCount: 110,
    portfolio: getImgPortfolio(1000),
    packages: {
        basic: { ...mockPackages.basic, price: '200$' },
        standard: { ...mockPackages.standard, price: '400$' },
        premium: { ...mockPackages.premium, price: '800$' }
    }
  },
  {
    id: '11',
    title: 'تصميم هوية بصرية كاملة',
    category: 'تصميم هوية بصرية',
    shortDescription: 'كل ما تحتاجه لعلامتك التجارية من الألف للياء.',
    description: 'شعار، كروت شخصية، أوراق رسمية، أظرف، وكل ما يخص المطبوعات والهوية الرقمية.',
    image: 'https://picsum.photos/800/600?random=11',
    rating: 5.0,
    reviewsCount: 25,
    portfolio: getImgPortfolio(1100),
    packages: {
        basic: { ...mockPackages.basic, price: '150$' },
        standard: { ...mockPackages.standard, price: '300$' },
        premium: { ...mockPackages.premium, price: '600$' }
    }
  },
  {
    id: '12',
    title: 'إدارة حسابات التواصل الاجتماعي',
    category: 'تسويق إلكتروني',
    shortDescription: 'ندير حساباتك ونزيد متابعيك بينما تتفرغ لعملك.',
    description: 'نشر محتوى يومي، الرد على التعليقات، وتصميم خطة تسويقية شهرية.',
    image: 'https://picsum.photos/800/600?random=12',
    rating: 4.5,
    reviewsCount: 180,
    portfolio: getImgPortfolio(1200),
    packages: {
        basic: { ...mockPackages.basic, price: '200$' },
        standard: { ...mockPackages.standard, price: '500$' },
        premium: { ...mockPackages.premium, price: '1000$' }
    }
  },
  {
    id: '13',
    title: 'تصميم سيرة ذاتية CV احترافي',
    category: 'تصميم سيرة ذاتية',
    shortDescription: 'سيرة ذاتية تضمن لك الوظيفة.',
    description: 'تصميم وتنسيق سيرة ذاتية ATS Friendly باللغتين العربية والإنجليزية.',
    image: 'https://picsum.photos/800/600?random=13',
    rating: 4.9,
    reviewsCount: 300,
    portfolio: getImgPortfolio(1300),
    packages: {
        basic: { ...mockPackages.basic, price: '10$' },
        standard: { ...mockPackages.standard, price: '25$' },
        premium: { ...mockPackages.premium, price: '50$' }
    }
  },
  {
    id: '14',
    title: 'تطوير قوالب ووردبريس',
    category: 'ووردبريس',
    shortDescription: 'تعديل وتطوير قوالب وإضافات ووردبريس.',
    description: 'خدمات برمجية خاصة لمنصة ووردبريس، تسريع الموقع، وحل المشاكل التقنية.',
    image: 'https://picsum.photos/800/600?random=14',
    rating: 4.8,
    reviewsCount: 70,
    portfolio: getImgPortfolio(1400),
    packages: {
        basic: { ...mockPackages.basic, price: '50$' },
        standard: { ...mockPackages.standard, price: '100$' },
        premium: { ...mockPackages.premium, price: '200$' }
    }
  },
  {
    id: '15',
    title: 'تصميم عروض تقديمية PowerPoint',
    category: 'تصميم عروض تقديمية',
    shortDescription: 'عروض تقديمية تبهر الجمهور.',
    description: 'تصميم شرائح بوربوينت احترافية للشركات، الطلاب، والمؤتمرات.',
    image: 'https://picsum.photos/800/600?random=15',
    rating: 4.7,
    reviewsCount: 55,
    portfolio: getImgPortfolio(1500),
    packages: {
        basic: { ...mockPackages.basic, price: '30$' },
        standard: { ...mockPackages.standard, price: '60$' },
        premium: { ...mockPackages.premium, price: '120$' }
    }
  }
];

export const generateWhatsAppLink = (serviceTitle: string, packageName: string, price: string, deliveryTime: string) => {
  const message = `مرحباً، أريد طلب الخدمة التالية من خدمات Ultra Pro:
اسم الخدمة: ${serviceTitle}
الباقة: ${packageName}
السعر: ${price}
مدة التسليم: ${deliveryTime}`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};