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
    aboutTitle?: string;
    aboutSubtitle?: string;
    aboutText?: string;
    aboutInfo?: string | undefined;
    eventOff?: boolean;
}

export interface CardNew {
    id: number;
    tag?: string;
    city?: string;
    date?: string;
    duration?: string;
    views?: string;
    title?: string;
    text?: JSX.Element;
    subtitle?: string;
    imageSrc?: string;
    imageFullSrc?: string;
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

export interface CardUser {
    id: number;
    firstName: string;
    lastName: string;
    patronimicName: string;
    role: string;
    email: string;
    tel: string;
    region: string;
    imageSrc: string;
}

export interface CardObject {
    id?: number;
    image?: string;
    videoSrc?: string;
    tag: string;
    secondTag: string;
    city: string;
    address: string;
    timeWeek: string;
    timeDayOff: string;
    title: string;
}

export interface CardDocFilmAbout {
    id?: number;
    image: string;
    tag: string;
    city?: string;
    title: string;
    text: string;
}

export interface AboutDepartment {
    id?: number;
    link?: string;
    name: string;
    text: JSX.Element;
    position: string;
    imageSrc: string;
}

export interface CardPartnerAbout {
    id?: number;
    image: string;
    title: string;
    text: string;
}
