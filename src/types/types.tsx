import { CardAboutUsSize, AboutUsImgSize } from '../utils/constants';

export type CardAboutUsId = keyof typeof CardAboutUsSize;

export type ImgAboutUsId = keyof typeof AboutUsImgSize;

export interface DesciplineCard {
    title: string;
    text: string;
    subtitle?: string;
    videoSrc: string;
    imageSrc: string;
}
