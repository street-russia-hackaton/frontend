import AboutUsImgMan from '../assets/images/AboutUsImgMan.svg';
import AboutUsImgWoman from '../assets/images/AboutUsImgWoman.svg';
import StreetArtImg from '../assets/images/StreetArtImg.svg';
import WorkoutImg from '../assets/images/WorkOutImg.svg';
import FreeRunImg from '../assets/images/FreeRunImg.svg';
import HipHopDanceImg from '../assets/images/HipHopDanceImg.svg';
import TrickingImg from '../assets/images/TrickingImg.svg';
import RapImg from '../assets/images/RapImg.svg';
import BreakingImg from '../assets/images/BreakinImg.svg';
import BmxImg from '../assets/images/BmxImg.svg';
import ParkourImg from '../assets/images/ParkourImg.svg';
import SkateboardImg from '../assets/images/SkateboardImg.svg';
import ScootImg from '../assets/images/ScootImg.svg';
import GraffitiImg from '../assets/images/news-graffiti.png';
import GraffitiFullImg from '../assets/images/new-graffiti.png';
import AgreementImg from '../assets/images/news-agreement.png';
import SportbaseImg from '../assets/images/news-sportbase.png';
import SkateboardManEvent from '../assets/images/SkateboardManEvent.svg';
import FenixCampEvent from '../assets/images/FenixCampEvent.svg';
import SkateboardWomanEvent from '../assets/images/SkateboardWomanEvent.svg';
import EducationForumEvent from '../assets/images/EducationForumEvent.svg';
import CuratorImg from '../assets/images/CuratorImg.png';
import userImg from '../assets/images/UserImg.png';
import CuratorImgVyacheslav from '../assets/images/CuratorImgVyacheslav.svg';
import StreetArtGorkiyPark from '../assets/images/StreetArtGorkiyPark.svg';
import BasketChampionatImg from '../assets/images/BasketChampionatImg.svg';
import FenixBattleImg from '../assets/images/FenixBattleImg.svg';
import StreetDanceCompetition from '../assets/images/StreetDanceCompetition.svg';
import StreetFashionWeek from '../assets/images/StreetFashionWeek.svg';
import PilatesFitnesVorobievyGory from '../assets/images/PilatesFitnesVorobievyGory.svg';

import { CardEvent, DesciplineCard } from '../types/types';

export const MIN_LAPTOP_DISPLAY = 1024;

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

export const BenefitsHeightData = {
    sport: { height: '236px' },
    school: { height: '206px' },
    parents: { height: '206px' },
    students: { height: '236px' },
};

export const DesciplineCardData: DesciplineCard[] = [
    {
        title: 'Street art',
        text: 'Стрит-арт — это разновидность современного урбанистического искусства. Бытует широкое заблуждение, что граффити является единственным проявлением стрит-арт. Однако, это не так, граффити является лишь одним из видов уличного искусства, но далеко не единственным.',
        subtitle: 'Разделение на стили можно наблюдать, в основном, среди граффити: writing, bombing, tagging, bubble-letter, throw-up, character, wild style, 3D-style. Стрит-арт своеобразный способ выразить себя и свое творчество, а также самоутвердиться в обществе.',
        videoSrc: 'https://www.youtube.com/embed/WZR_pnSyt5A?si=hR-BIKo_JClrFy99',
        imageSrc: StreetArtImg,
    },
    {
        title: 'Parkour',
        text: 'Паркур — искусство рационального преодоления препятствий и перемещения по городу из точки А в точку Б. В нем человек преодолевает физические препятствия (стены, заборы, дома и т.д.), при помощи возможностей своего тела. При этом препятствия он преодолевает как можно быстрее и эффективнее (это означает, что он не делает движений, которые отнимают слишком много энергии и время).',
        subtitle: 'Паркур не просто физические усилия, техника и набор элементов передвижения, а ещё эмоциональный и духовный смысл. Мы играем и получаем удовольствие от движения. Говоря о препятствиях, мы говорим не только о физических и психологических преградах. Паркур учит быть сильным, быть полезным. Он учит уверенности в себе, своих силах. Он учит стремлению к постоянному развитию.',
        videoSrc: 'https://www.youtube.com/embed/V8TXtBs537Y?si=1swXHJAmb01Y-TkO',
        imageSrc: ParkourImg,
    },
    {
        title: 'Workout',
        text: 'Воркаут – система тренировок с собственным весом или небольшим отягощением, основой которых является пропорциональное развитие силы, выносливости и гибкости всего тела; уличная культуры, любительский и профессиональный вид спорта.',
        videoSrc: 'https://www.youtube.com/embed/AdRNZehYk00?si=xGe0WIPQ5YWearMQ',
        imageSrc: WorkoutImg,
    },
    {
        title: 'Freerun',
        text: '«Паркур — это две точки — A и Б, то есть перемещение осуществляется из точки A в точку Б и всё. Во фриране нет точки A и точки Б — это пространство без границ. Ты можешь двигаться без остановки и тебя ничего не ограничивает.» – С.Фукан.',
        videoSrc: 'https://www.youtube.com/embed/Q3Fj7r8wfKE?si=HeUIBba1clyF_hxf',
        imageSrc: FreeRunImg,
    },
    {
        title: 'Hip-hop dance',
        text: `Очень часто хип- хоп, который пришел к нам и принес рэп, брейк и спрей-арт, становится следствием выражения одного элемента через другой. Все элементы связаны и их нельзя разделять.
        Зажигательные ритмичные биты афроамериканских напевов с элементами r’n’b , хауса и рэпа – вот концепция музыки хип-хопа. Танцы в стиле хип-хоп – это взрывоопасный микс свободы брейка и силы афроамериканских танцев.`,
        videoSrc: 'https://www.youtube.com/embed/5mUgFggZzNw?si=xhCc3w9eTHDzDoGw',
        imageSrc: HipHopDanceImg,
    },
    {
        title: 'Tricking',
        text: 'Трикинг – уличное спортивное направление, сочетающее в себе элементы из боевых искусств, паркура, капоэйры, брейкданса, аэробики, гимнастики и других смежных дисциплин. Такое искусство предполагает выполнение сложнейших элементов вращения и прыжков во всех плоскостях, обороты на 360̊, трюки в невесомости. Слово «трикинг» является сокращенным название дисциплины «martial arts tricking», что означает «трюки боевых искусств».',
        videoSrc: 'https://www.youtube.com/embed/Jw_ZFonKzcY?si=0-6Y2PZlNE9Z6iyG',
        imageSrc: TrickingImg,
    },
    {
        title: 'Rap',
        text: 'Хип-хоп и рэп – это не одно и то же. Рэп – это то, что ты делаешь, хип-хоп – то, как ты живешь. Живя хип-хопом, ты живешь настоящей жизнью. Хип-хоп – это имя нашей креативной силы в этом мире, это наш образ жизни и коллективное сознание. Хип-хоп – это название нашей культуры и артистичных элементов. Хип-хоп – больше, чем рэп музыка и активы мэйнстрима” – отмечает один из членов организации UNIVERSAL ZULU NATION.',
        videoSrc: 'https://www.youtube.com/embed/izgsppAKtjE?si=ntK09MJDetFF4lC8',
        imageSrc: RapImg,
    },
    {
        title: 'Breacking',
        text: `Хип-Хоп состоит из таких элементов: D.J'ing, M.C'ing, Graffiti Aerosol Art, Bboy'ing, Knowledge. Пионеры, такие как DJ Kool Herc и DJ Afrika Bambaataa устраивали джемы в парках и это было рождением хип-хопа в Бронксе, Нью Йорк в 70-х. Диджеи использовали две вертушки с микшером посредине, чтобы играть порции музыки. В основном это были фанковые записи. Кусок записи, который содержит быстрый драм и басс линию. Отсюда и появилось слово «брейк», которое танцоры использовали для показа своих ломаных телодвижений. Отсюда и назвали этих людей break-boy или break-girl или B-Boys.
        Брейкинг помогает подросткам держаться дальше от улиц и быть более позитивными, один бибой может вдохновить других изучать хип-хоп культуру более детально.`,
        videoSrc: 'https://www.youtube.com/embed/TVM6YjflExI?si=KhsUxQZN0Bdo-2Xm',
        imageSrc: BreakingImg,
    },
    {
        title: 'Bmx',
        text: 'BMX – самый зрелищный и опасный вид велосипедного спорта, сочетающий в себе особенности мотокросса, а также сложные акробатические и цирковые трюки, выполняемые на BMX-велосипедах. BMX, как известно, является также одним из самых демократичных видов спорта, не требующих даже специально оборудованных площадок: для выполнения вело-трюков вполне подходят и «естественные» препятствия на городских улицах. Особой популярностью пользуется, например, катание на перилах и уличных парапетах. BMX также рассматривают как направление молодежной уличной культуры.',
        videoSrc: 'https://www.youtube.com/embed/sn2jtNqldyI?si=gvAje76cDADVENXR',
        imageSrc: BmxImg,
    },
    {
        title: 'Skateboarding',
        text: 'Скейтбординг (англ. skateboarding) — экстремальный вид спорта, связанный с катанием, преодолением препятствий и акробатическими трюками на доске с роликами. Скейтбординг привлекает не только молодежь, но и людей среднего возраста. Это можно объяснить его зрелищностью и доступностью. Как вид спорта скейтборд популярен давно, но международным спортивным комитетом он признан относительно недавно и стал официальным видом спорта.',
        videoSrc: 'https://www.youtube.com/embed/fcjrLx2T4lU?si=iz_5kvBPQyL0dsfz',
        imageSrc: SkateboardImg,
    },
    {
        title: 'Scoot',
        text: 'SCOOT – экстремальный вид спорта, заключающийся в катании и исполнении трюков на специальном трюковом самокате. Имеет широкое распространение по всему миру, существуют профессиональные команды, проводятся соревнования и другие мероприятия. Наиболее распространён среди подростков, образует уличную культуру скут-райдеров.',
        videoSrc: 'https://www.youtube.com/embed/6keisP5M6w8?si=MYDA85qEjfYr136a',
        imageSrc: ScootImg,
    },
];

export const newsCardData = [
    {
        id: 1,
        tag: 'Street Art',
        city: 'Москва',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'ТОП фильмов про граффити',
        text: (
            <>
                1. Выход через суверенную лавку (2010) (комедия, документальный, история/ рейтинг 7.9) В фильме рассказывается о невероятной, но правдивой истории поиска эксцентричным буржуа французского происхождения, пытавшегося отыскать Бэнкси и подружиться с ним.
                <br />
                <br />
                2. Бомба (2007) (документальный / рейтинг 7) Документальный фильм с интервью уличных художников и их признанием, зачем они это делают, о границе между вандализмом и искусством. В фильме рассказывается о том, как они сделали улицы и промзоны территорией искусства.
                <br />
                <br />
                3. Девиантное поведение (2011) (документальный / рейтинг 7.8) В фильме можно увидеть, как участники «Зачем» расписывают стены города уже давно знакомой всем жителям Москвы комбинацией из пяти букв.
                <br />
                <br />
                4.Марта Купер: История о граффити (2019) (документальный, биография / рейтинг 8.4) Марта Купер — легенда для уличной культуры. Её альбом Subway Art о зарождении граффити в Нью-Йорке называют «Библией стрит-арта».
                <br />
                <br />
                Приятного просмотра!
            </>
        ),
        subtitle: '1. Выход через суверенную лавку (2010) (комедия, документальный, история/ рейтинг 7.9)',
        imageSrc: GraffitiImg,
        imageFullSrc: GraffitiFullImg,
    },
    {
        id: 2,
        tag: 'Community',
        city: 'Челябинск',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'Улицы России и Молодежь Южного Урала подписали соглашение о развитии уличной культуры и спорта!',
        text: <>В 2024-м году в Челябинске ожидается проведение регионального этапа Международной конкурс-премии уличной культуры и спорта КАРДО.', subtitle: 'В 2024-м году в Челябинске ожидается проведение регионального этапа Международной конкурс-премии уличной культуры и спорта КАРДО.</>,
        imageSrc: AgreementImg,
        imageFullSrc: AgreementImg,
    },
    {
        id: 3,
        tag: 'Workout',
        city: 'Москва',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'Запускаем мощный проект в сфере спорта',
        text: <>СпортБаза — курс, который подготовит тебя для новых побед в спортивной деятельности.', subtitle: 'СпортБаза — курс, который подготовит тебя для новых побед в спортивной деятельности.</>,
        imageSrc: SportbaseImg,
        imageFullSrc: SportbaseImg,
    },
    {
        id: 4,
        tag: 'Street Art',
        city: 'Москва',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'ТОП фильмов про граффити',
        text: (
            <>
                1. Выход через суверенную лавку (2010) (комедия, документальный, история/ рейтинг 7.9) В фильме рассказывается о невероятной, но правдивой истории поиска эксцентричным буржуа французского происхождения, пытавшегося отыскать Бэнкси и подружиться с ним.
                <br />
                <br />
                2. Бомба (2007) (документальный / рейтинг 7) Документальный фильм с интервью уличных художников и их признанием, зачем они это делают, о границе между вандализмом и искусством. В фильме рассказывается о том, как они сделали улицы и промзоны территорией искусства.
                <br />
                <br />
                3. Девиантное поведение (2011) (документальный / рейтинг 7.8) В фильме можно увидеть, как участники «Зачем» расписывают стены города уже давно знакомой всем жителям Москвы комбинацией из пяти букв.
                <br />
                <br />
                4.Марта Купер: История о граффити (2019) (документальный, биография / рейтинг 8.4) Марта Купер — легенда для уличной культуры. Её альбом Subway Art о зарождении граффити в Нью-Йорке называют «Библией стрит-арта».
                <br />
                <br />
                Приятного просмотра!
            </>
        ),
        subtitle: '1. Выход через суверенную лавку (2010) (комедия, документальный, история/ рейтинг 7.9)',
        imageSrc: GraffitiImg,
        imageFullSrc: GraffitiFullImg,
    },
    {
        id: 5,
        tag: 'Community',
        city: 'Челябинск',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'Улицы России и Молодежь Южного Урала подписали соглашение о развитии уличной культуры и спорта!',
        text: <>В 2024-м году в Челябинске ожидается проведение регионального этапа Международной конкурс-премии уличной культуры и спорта КАРДО.', subtitle: 'В 2024-м году в Челябинске ожидается проведение регионального этапа Международной конкурс-премии уличной культуры и спорта КАРДО.</>,
        imageSrc: AgreementImg,
        imageFullSrc: AgreementImg,
    },
    {
        id: 6,
        tag: 'Workout',
        city: 'Челябинск',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'Запускаем мощный проект в сфере спорта',
        text: <>СпортБаза — курс, который подготовит тебя для новых побед в спортивной деятельности.', subtitle: 'СпортБаза — курс, который подготовит тебя для новых побед в спортивной деятельности.</>,
        imageSrc: SportbaseImg,
        imageFullSrc: SportbaseImg,
    },
    {
        id: 7,
        tag: 'Street Art',
        city: 'Москва',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'ТОП фильмов про граффити',
        text: (
            <>
                1. Выход через суверенную лавку (2010) (комедия, документальный, история/ рейтинг 7.9) В фильме рассказывается о невероятной, но правдивой истории поиска эксцентричным буржуа французского происхождения, пытавшегося отыскать Бэнкси и подружиться с ним.
                <br />
                <br />
                2. Бомба (2007) (документальный / рейтинг 7) Документальный фильм с интервью уличных художников и их признанием, зачем они это делают, о границе между вандализмом и искусством. В фильме рассказывается о том, как они сделали улицы и промзоны территорией искусства.
                <br />
                <br />
                3. Девиантное поведение (2011) (документальный / рейтинг 7.8) В фильме можно увидеть, как участники «Зачем» расписывают стены города уже давно знакомой всем жителям Москвы комбинацией из пяти букв.
                <br />
                <br />
                4.Марта Купер: История о граффити (2019) (документальный, биография / рейтинг 8.4) Марта Купер — легенда для уличной культуры. Её альбом Subway Art о зарождении граффити в Нью-Йорке называют «Библией стрит-арта».
                <br />
                <br />
                Приятного просмотра!
            </>
        ),
        subtitle: '1. Выход через суверенную лавку (2010) (комедия, документальный, история/ рейтинг 7.9)',
        imageSrc: GraffitiImg,
        imageFullSrc: GraffitiFullImg,
    },
    {
        id: 8,
        tag: 'Community',
        city: 'Челябинск',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'Улицы России и Молодежь Южного Урала подписали соглашение о развитии уличной культуры и спорта!',
        text: <>В 2024-м году в Челябинске ожидается проведение регионального этапа Международной конкурс-премии уличной культуры и спорта КАРДО.', subtitle: 'В 2024-м году в Челябинске ожидается проведение регионального этапа Международной конкурс-премии уличной культуры и спорта КАРДО.</>,
        imageSrc: AgreementImg,
        imageFullSrc: AgreementImg,
    },
    {
        id: 9,
        tag: 'Workout',
        city: 'Москва',
        date: '12.05.2024',
        duration: '5',
        views: '1321',
        title: 'Запускаем мощный проект в сфере спорта',
        text: <>СпортБаза — курс, который подготовит тебя для новых побед в спортивной деятельности.', subtitle: 'СпортБаза — курс, который подготовит тебя для новых побед в спортивной деятельности.</>,
        imageSrc: SportbaseImg,
        imageFullSrc: SportbaseImg,
    },
];

export const cities = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Владивосток' },
    { id: 2, name: 'Москва' },
    { id: 3, name: 'Санкт-Петербург' },
    { id: 4, name: 'Екатеринбург' },
    { id: 5, name: 'Казань' },
    { id: 6, name: 'Челябинск' },
];

export const disciplines = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Street Art' },
    { id: 2, name: 'Parkour' },
    { id: 3, name: 'Workout' },
    { id: 4, name: 'Freerun' },
    { id: 5, name: 'Hip-hop dance' },
    { id: 6, name: 'Tricking' },
    { id: 7, name: 'Rap' },
    { id: 8, name: 'Breaking' },
    { id: 9, name: 'Bmx' },
    { id: 10, name: 'Skateboarding' },
    { id: 11, name: 'Scoot' },
];

export const EventCardData = [
    {
        height: '368px',
        id: 0,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        image: SkateboardManEvent,
        imageFullSrc: SkateboardManEvent,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: (
            <>
                Паркур соревнования
                <br />
                на скорость
                <br />
                «Забег
                <br /> за подарками»
            </>
        ),
        text: (
            <>
                Море рационального перемещения, в виде соревнований по прохождению заданной трассы на время,
                <br />
                излюбленные всеми паркур-челленджи, еда и напитки в кругу единомышленников, а ещё вас
                <br />
                ждут призы от наших спонсоров и денежный призовой фонд.
            </>
        ),
    },

    {
        height: '292px',
        id: 1,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: SkateboardWomanEvent,
        image: SkateboardWomanEvent,
        city: 'Санкт-Петербург',
        tag: 'Hip-Hop Dance',
        date: '12-15 октября 2024 г',
        title: (
            <>
                Скейт <br />
                соревнования
            </>
        ),
        text: <>Творческо-спортивные сборы по скейт катанию.</>,
    },
    { height: '264px', id: 2, register: '1321', address: ' ул. Лужники, 24; метро Воробьевы горы', timeWeek: 'ПН-ПТ 10.00-21.00 ', timeDayOff: 'СБ-ВС 11.00-22.00', imageFullSrc: FenixCampEvent, image: FenixCampEvent, city: 'Санкт-Петербург', tag: 'Hip-Hop Dance', date: '12-15 октября 2024 г', title: <>FENIX CAMP 2024</>, text: <>Творческо-спортивные сборы по хип-хопу, брейкингу, стрит-арту (граффити) и музыке (диджеинг)</> },
    {
        height: '362px',
        id: 3,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: EducationForumEvent,
        image: EducationForumEvent,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: (
            <>
                Образователь
                <br />
                ный форум уличной культуры и спорта УЛИЦЫ КОМИ
            </>
        ),
        text: (
            <>
                Образовательный форум
                <br /> уличной культуры и спорта УЛИЦЫ КОМИ
            </>
        ),
        eventOff: true,
    },
    {
        height: '362px',
        id: 3,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: EducationForumEvent,
        image: EducationForumEvent,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: (
            <>
                Образователь
                <br />
                ный форум уличной культуры и спорта УЛИЦЫ КОМИ
            </>
        ),
        text: (
            <>
                Образовательный форум
                <br /> уличной культуры и спорта УЛИЦЫ КОМИ
            </>
        ),
        eventOff: true,
    },
    { height: '264px', id: 2, register: '1321', address: ' ул. Лужники, 24; метро Воробьевы горы', timeWeek: 'ПН-ПТ 10.00-21.00 ', timeDayOff: 'СБ-ВС 11.00-22.00', imageFullSrc: FenixCampEvent, image: FenixCampEvent, city: 'Санкт-Петербург', tag: 'Hip-Hop Dance', date: '12-15 октября 2024 г', title: <>FENIX CAMP 2024</>, text: <>Творческо-спортивные сборы по хип-хопу, брейкингу, стрит-арту (граффити) и музыке (диджеинг)</> },

    {
        height: '292px',
        id: 1,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: SkateboardWomanEvent,
        image: SkateboardWomanEvent,
        city: 'Санкт-Петербург',
        tag: 'Hip-Hop Dance',
        date: '12-15 октября 2024 г',
        title: (
            <>
                Скейт <br />
                соревнования
            </>
        ),
        text: <>Творческо-спортивные сборы по скейт катанию.</>,
    },

    {
        height: '368px',
        id: 0,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        image: SkateboardManEvent,
        imageFullSrc: SkateboardManEvent,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: (
            <>
                Паркур соревнования
                <br />
                на скорость
                <br />
                «Забег
                <br /> за подарками»
            </>
        ),
        text: (
            <>
                Море рационального перемещения, в виде соревнований по прохождению заданной трассы на время,
                <br />
                излюбленные всеми паркур-челленджи, еда и напитки в кругу единомышленников, а ещё вас
                <br />
                ждут призы от наших спонсоров и денежный призовой фонд.
            </>
        ),
    },
];

export const EventPageCardData: CardEvent[] = [
    {
        height: '362px',
        id: 0,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: StreetArtGorkiyPark,
        image: StreetArtGorkiyPark,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: (
            <>
                Стрит-арт Party!
                <br /> Парк горького
                <br /> V 2.1.2 Новички и Профи в одном месте
            </>
        ),
        text: (
            <>
                Море рационального перемещения, в виде соревнований по прохождению заданной трассы на время,
                <br />
                излюбленные всеми паркур-челленджи, еда и напитки в кругу единомышленников, а ещё вас
                <br />
                ждут призы от наших спонсоров и денежный призовой фонд.
            </>
        ),
    },

    {
        height: '290px',
        id: 1,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: BasketChampionatImg,
        image: BasketChampionatImg,
        city: 'Санкт-Петербург',
        tag: 'Hip-Hop Dance',
        date: '12-15 октября 2024 г',
        title: <>Баскетбольный чемпионат</>,
        text: <>Открываем приём заявок на Массовый турнир Moscow Open 2024, который пройдёт 2 июня (воскресенье) на легендарной площадке «Под мостом».В Массовом турнире примут участие следующие категории: сентябрь-октябрь 2024 г.</>,
        aboutTitle: 'Открываем приём заявок на Массовый турнир Moscow Open 2024, который пройдёт 2 июня (воскресенье) на легендарной площадке «Под мостом».',
        aboutSubtitle: 'В Массовом турнире примут участие следующие категории:',
        aboutText: `Девушки 2009-2010 г.р.
        Юноши 2009-2010 г.р.
        Девушки 2007-2008 г.р.
        Юноши 2007-2008 г.р.
        Женщины 2002-2006 г.р.
        Мужчины 2002-2006 г.р.
        Женщины 23+ - игроки 2001 года рождения и старше
        Мужчины 23+ - игроки 2001 года рождения и старше
        Женщины 40+ - игроки 1984 года рождения и старше
        Мужчины 40+ - игроки 1984 года рождения и старше
        Количество игроков в команде: 3-4 человека.`,
        aboutInfo: 'Организатор оставляет за собой право объединять категории (если это потребуется).',
    },
    {
        height: '290px',
        id: 2,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: FenixBattleImg,
        image: FenixBattleImg,
        city: 'Санкт-Петербург',
        tag: 'Hip-Hop Dance',
        date: '12-15 октября 2024 г',
        title: <>FENIX BATTLE 10 лет Фениксу</>,
        text: <>Юбилейный 10-й баттл школы хип-хоп танца Феникс и торжественная церемония награждения сентябрь-октябрь 2024 г.</>,
    },
    {
        height: '362px',
        id: 3,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: StreetDanceCompetition,
        image: StreetDanceCompetition,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: (
            <>
                Конкурс-премия за вклад в<br /> уличные танцы КОМИ ЧЕМП 2024
            </>
        ),
        text: <>«Коми Чемп» - это танцевальный фестиваль, направленный на популяризацию современного искусства, творчества и здорового образа жизни среди детей и молодежи</>,
    },
    {
        height: '362px',
        id: 4,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: AboutUsImgWoman,
        image: AboutUsImgWoman,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: <>Соревнование по тенису</>,
        text: <>Соревнование юниоров по тенису пройдет в центральном парке. Присоединяйтесь!</>,
    },
    {
        height: '290px',
        id: 5,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: StreetFashionWeek,
        image: StreetFashionWeek,
        city: 'Санкт-Петербург',
        tag: 'Hip-Hop Dance',
        date: '12-15 мая 2024 г',
        title: <>Street fashion week</>,
        text: <>Жаркие танцевальные выходные прошли в Дмитрове. 2 и 3 октябрья Подмосковный город стал эпицентром хип-хоп культуры.</>,
    },
    {
        height: '290px',
        id: 6,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: AboutUsImgMan,
        image: AboutUsImgMan,
        city: 'Санкт-Петербург',
        tag: 'Hip-Hop Dance',
        date: '12-15 мая 2024 г',
        title: <>Street Fashion week</>,
        text: <>Жаркие танцевальные выходные прошли в Дмитрове. 2 и 3 октябрья Подмосковный город стал эпицентром хип-хоп культуры.</>,
    },
    {
        height: '362x',
        id: 7,
        register: '1321',
        address: ' ул. Лужники, 24; метро Воробьевы горы',
        timeWeek: 'ПН-ПТ 10.00-21.00 ',
        timeDayOff: 'СБ-ВС 11.00-22.00',
        imageFullSrc: PilatesFitnesVorobievyGory,
        image: PilatesFitnesVorobievyGory,
        city: 'Москва',
        tag: 'Street art',
        date: '12-15 мая 2024 г',
        title: <>Дружеская встреча на Воробьевых горах: Фитнес, Бег, Пилатес</>,
        text: <>Море рационального перемещения, в виде соревнований по прохождению заданной трассы на время, излюбленные всеми паркур-челленджи, еда и напитки в кругу единомышленников, а ещё вас ждут призы от наших спонсоров и денежный призовой фонд.</>,
    },
];

export const FaqSelectData = {
    select: [
        {
            title: 'Как стать спонсором?',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Зачем быть волонтером?',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Как стать спонсором?',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Зачем быть волонтером?',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Зачем быть волонтером?',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ],
};

export const BenefitsData = {
    sport: {
        title: 'Для деятелей искусства и спорта',
        text: ['Участие в федеральных и международных мероприятиях.', 'Вступление в состав сборной страны.', 'Подписание контрактов с известными брендами.', 'Бесплатное участие в мастер-классах от топовых деятелей с мировым именем.'],
    },
    school: {
        height: '200px',
        title: 'Для школьников',
        text: ['Баллы к ЕГЭ.', 'Возможности для самореализации и новые знакомства.', 'Участие в спортивных и культурных мероприятиях в качестве участника или волонтера.'],
    },
    parents: {
        title: 'Для молодых родителей',
        text: ['Близкое знакомство с уличной культурой.', 'Обучающие программы экспертного состава «Улицы Росии».', 'Возможность качественно организовать досуг ребенка и развить его как сильную личность.'],
    },
    students: {
        title: 'Для Студентов',
        text: [' Прохождение учебной или производственной практики.', 'Обучение и стажировки.', 'Опыт работы с крупными объединениями и кейс по содействию в подготовке масштабных событий + рекомендательное письмо с характеристикой.'],
    },
};

export const curators = [
    {
        id: 1,
        link: '#',
        name: 'Валентин Работенко',
        text: 'Председатель Общероссийской общественной организации уличной культуры и спорта «Улицы России», генеральный директор международной конкурс-премии «КАРДО», директор общественной организации «ОФФБИТС», член экспертного совета Комитета Государственной Думы Российской Федерации по молодежной политике, советник ректора Северо-Кавказского федерального университета по общественным проекта, эксперт Государственного Совета Российской Федерации по направлению «Молодёжная политика».',
        position: 'Председатель',
        imageSrc: CuratorImg,
    },
    {
        id: 2,
        link: '#',
        name: 'Вячеслав Груднев',
        text: (
            <>
                Заместитель Председателя по GR политике и административному управлению ОООУКС «Улицы России»
                <br />
                Эксперт Всероссийского конкурса молодежных проектов Федерального агентства по делам молодежи', position: 'Заместитель Председателя по GR политике и административному управлению
            </>
        ),
        imageSrc: CuratorImgVyacheslav,
    },
];

export const userData = [
    {
        id: 1,
        firstName: 'Валерий',
        lastName: 'Пупкин',
        patronimicName: 'Юрьевич',
        role: '',
        email: 'pupkin.valera00@mail.ru',
        tel: '+79834561527',
        imageSrc: userImg,
    },
];
