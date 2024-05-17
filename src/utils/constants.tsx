import AboutUsImgMan from '../assets/images/AboutUsImgMan.svg';
import AboutUsImgWoman from '../assets/images/AboutUsImgWoman.svg';

export const AboutUsData = [
    { id: 'mission', title: 'Миссия', text: 'Создать условия для успешной реализации потенциала каждого связанного с уличными дисциплинами в духовной и профессиональной сфере.' },
    { id: 'idea', title: 'Идея', text: 'Идея создания единого сообщества улиц в разных регионах нашей страны появилась на основе уличных субкультур, которые объединяли тысячи людей из разных городов и стран.' },
    { id: 'target', title: 'Цели', text: 'Комплексное развитие уличной культуры и спорта. Популяризация уличных дисциплин.', subtitle: 'Создание положительного образа в информационном пространстве у дисциплин, которые считаются травмоопасными и агрессивными.' },
];

export const CardAboutUsSize = {
    mission: { width: '426px', height: '300px', top: '592px', left: '172px', zIndex: 5 },
    idea: { width: '426px', height: '339px', top: '340px', left: '507px', zIndex: 4 },
    target: { width: '427px', height: '382px', top: '663px', left: '730px', zIndex: 5 },
};

export const AboutUsImgData = [
    { id: 'man', img: AboutUsImgMan, borderColor: '#fff' },
    { id: 'woman', img: AboutUsImgWoman, borderColor: '#2E5B97' },
];

export const AboutUsImgSize = {
    man: { width: '538px', height: '350px', top: '178px', left: '60px' },
    woman: { width: '427px', height: '552px', top: '353px', left: '953px' },
};
