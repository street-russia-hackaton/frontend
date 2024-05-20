import { CardAboutUsSize, AboutUsImgSize, BenefitsHeightData } from '../utils/constants';

export type CardAboutUsId = keyof typeof CardAboutUsSize;

export type ImgAboutUsId = keyof typeof AboutUsImgSize;

export type HeightBenefit = keyof typeof BenefitsHeightData;

export interface DesciplineCard {
    title: string;
    text: string;
    subtitle?: string;
    videoSrc: string;
    imageSrc: string;
}

export interface CardEvent {
    image: string;
    country: string;
    subtitle: string;
    date: string;
    title: string | JSX.Element;
    text: string | JSX.Element;
    height: string;
}

export interface SelectFaq {
    title: string;
    subtitle: string;
}

export interface CardBenefit {
    title: string;
    text: string[];
}
