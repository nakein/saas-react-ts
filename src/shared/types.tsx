export enum SelectedPage {
  Home = "home",
  Features = "features",
  Benefits = "benefits",
  Pricing = "pricing",
  ContactUs = "contactus",
}

export interface SupportType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface FeatureType {
  image: JSX.Element;
  title: string;
  description: string;
}

export interface BenefitType {
  title: string;
}

export interface PriceType {
  priceMonthly: number;
  priceYearly: number;
  title: string;
  description: string;
  benefits: Array<BenefitType>;
  buttonText: string;
  isFeatured: boolean;
}
