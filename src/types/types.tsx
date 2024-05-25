import { CardAboutUsSize, AboutUsImgSize, BenefitsHeightData } from '../utils/constants';

export type CardAboutUsId = keyof typeof CardAboutUsSize;

export type ImgAboutUsId = keyof typeof AboutUsImgSize;

export type CardBenefitId = keyof typeof BenefitsHeightData;

export interface DesciplineCard {
    title: string;
    text: string;
    subtitle?: string;
    videoSrc: string;
    imageSrc: string;
}

export interface CardEvent {
    id: number;
    imageFullSrc: string;
    image: string;
    tag: string;
    date: string;
    city: string;
    register: string;
    address: string;
    timeWeek: string;
    timeDayOff: string;
    title: JSX.Element;
    text: JSX.Element;
    height?: string;
}

export interface SelectFaq {
    title: string;
    subtitle: string;
}

export interface CardBenefit {
    title: string;
    text: string[];
}

export interface PopupProps {
    open: boolean;
    onClose: () => void;
    onClick: () => void;
    children?: React.ReactNode;
}
