export interface ServicePackage {
  name: string;
  price: string;
  deliveryTime: string;
  features: string[];
}

export interface PortfolioItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string; // Optional thumbnail for videos
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  rating: number;
  reviewsCount: number;
  portfolio: PortfolioItem[]; // New field for previous work
  packages: {
    basic: ServicePackage;
    standard: ServicePackage;
    premium: ServicePackage;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}