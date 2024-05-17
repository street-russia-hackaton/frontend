import style from './MapSvg.module.scss';
import { mapData } from '../../pages/main/map/mapConstant';
import { Link } from 'react-router-dom';
import * as React from 'react';

//TODO: добавить типизацию, убрать ошибки добавления стилей по движению курсора,
// добавить склонения обьектов и событий по колличеству

const objects = ['парк', 'рампы', 'площадка'];
const events = ['контест', 'соревнование'];
const cities = ['Вологда', 'Невологда', 'Супервологда'];
const noObjects = ['0 объектов', 'В этом регионе пока нет наших отделений.'];

export default function MapSvg({ offset = { x: -250, y: 300 } }) {
    const [target, setTarget] = React.useState<boolean | HTMLElement>(false);
    const [data, setData] = React.useState<{ region: string; object: string; event: string; city: any; noCity: string }>({
        region: '',
        object: '',
        event: '',
        city: null,
        noCity: '',
    });

    const element = React.useRef({});
    const styles = {};

    React.useEffect(() => {}, []);

    React.useEffect(() => {
        function handler(e: MouseEvent<HTMLButtonElement>) {
            if (element.current != null || undefined) {
                const x = e.clientX + offset.x;
                const y = e.clientY + offset.y;
                element.current.style.transform = `translate(${x}px, ${y}px)`;
                element.current.style.display = 'block';
            }
        }
        document.addEventListener('mousemove', handler);
        return () => document.removeEventListener('mousemove', handler);
    }, [offset.x, offset.y]);

    const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
        !!e.target.closest('g').dataset.here ? (e.target.style.fill = '#AA433A') : (e.target.style.fill = '#D2D1D0');
        const p = e.target.closest('g').dataset.name;
        const obj = e.target.closest('g').dataset.objects;
        const evt = e.target.closest('g').dataset.events;
        const ct = e.target.closest('g').dataset.cities;
        setTarget(true);
        console.log(ct)
        !!e.target.closest('g').dataset.here
            ? setData({
                  region: p,
                  object: `${obj}`,
                  event: `${evt}`,
                  city: ct.split(','),
                  noCity: '',
              })
            : setData({
                  region: p,
                  object: '',
                  event: '',
                  city: null,
                  noCity: noObjects[1],
              });
    };

    const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
        !!element.current ? (element.current.style.display = 'none') : '';
        !!e.target.closest('g').dataset.here ? (e.target.style.fill = '#D2D1D0') : (e.target.style.fill = '#f3f3f3');
        setTarget(false);
    };

    return (
        <>
            <svg className={style.svg} width="1381" height="720" viewBox="0 0 1381 720" xmlns="http://www.w3.org/2000/svg">
                <g className="map__contur">
                    <path d="M6.60529 403.065L9.10529 412.599L8.5 419L2 419.565L0.105288 409.878L6.60529 403.065Z" fill="#222222"></path>
                </g>

                {mapData.map(({ id, name, path, isHere }) => (
                    <Link className={style.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`/regional/${id}`}>
                        <g key={id} className={style.g} style={isHere ? { fill: '#D2D1D0' } : { fill: '#f3f3f3' }} data-id={id} data-name={name} data-objects={objects.length} data-events={events.length} data-cities={cities} data-here={isHere}>
                            {path.map((item) => (
                                <path key={item} fillRule="evenodd" clipRule="evenodd" d={item} />
                            ))}
                        </g>
                    </Link>
                ))}
            </svg>
            {target && (
                <div className={style.info} ref={element}>
                    <h4 className={style.info__region}>{data.region}</h4>
                    {!!data.city ? (<p className={style.info__text}>
                        {data.object} объекта, {data.event} события
                    </p>) : (<p className={style.info__text}>
                        0 объектов
                    </p>)}
                    <p className={style.info__text}>{data.noCity}</p>
                    {!!data.city && (
                        <ul className={style.info__text}> Города:
                            {data.city.map((item: string) => (
                                <li key={item} className={style.info__text}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
}
