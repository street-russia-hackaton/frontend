import { useState, useEffect, useRef, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import style from './MapSvg.module.scss';
import { mapData } from '../../pages/main/map/mapConstant';

const objects = ['парк', 'рампы', 'площадка'];
const events = ['контест', 'соревнование'];
const cities = ['Вологда', 'Невологда', 'Супервологда'];
const noObjects = ['0 объектов', 'В этом регионе пока нет наших отделений.'];

export default function MapSvg({ offset = { x: -280, y: 200 } }) {
    const [target, setTarget] = useState<boolean | HTMLElement>(false);
    const [data, setData] = useState<{ region: string; object: string; event: string; city: string[] | null; noCity: string }>({
        region: '',
        object: '',
        event: '',
        city: null,
        noCity: '',
    });

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handler(e: MouseEvent) {
            if (element.current) {
                const x = e.clientX + offset.x;
                const y = e.clientY + offset.y;
                element.current.style.transform = `translate(${x}px, ${y}px)`;
                element.current.style.display = 'block';
            }
        }
        document.addEventListener('mousemove', handler);
        return () => document.removeEventListener('mousemove', handler);
    }, [offset.x, offset.y]);

    const handleMouseEnter: MouseEventHandler<HTMLAnchorElement> = (e) => {
        const target = e.target as SVGElement;
        const g = target.closest('g');
        if (g) {
            const here = g.dataset.here === 'true';
            const p = g.dataset.name || '';
            const obj = g.dataset.objects || '';
            const evt = g.dataset.events || '';
            const ct = g.dataset.cities || '';
            setTarget(true);
            console.log(ct);
            if (here) {
                setData({
                    region: p,
                    object: obj,
                    event: evt,
                    city: ct ? ct.split(',') : null,
                    noCity: '',
                });
            } else {
                setData({
                    region: p,
                    object: '',
                    event: '',
                    city: null,
                    noCity: noObjects[1],
                });
            }
            target.style.fill = here ? '#AA433A' : '#D2D1D0';
        }
    };

    const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> = (e) => {
        const target = e.target as SVGElement;
        if (element.current) {
            element.current.style.display = 'none';
        }
        const here = target.closest('g')?.dataset.here === 'true';
        target.style.fill = here ? '#D2D1D0' : '#f3f3f3';
        setTarget(false);
    };

    return (
        <>
            <svg className={style.svg} width="1381" height="720" viewBox="0 0 1381 720" xmlns="http://www.w3.org/2000/svg">
                <g className="map__contur">
                    <path d="M6.60529 403.065L9.10529 412.599L8.5 419L2 419.565L0.105288 409.878L6.60529 403.065Z" fill="#222222"></path>
                </g>

                {mapData.map(({ id, name, path, isHere }) => (
                    <Link key={id} className={style.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={`/regional/${id}`}>
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
                    {data.city ? (
                        <p className={style.info__text}>
                            {data.object} объекта, {data.event} события
                        </p>
                    ) : (
                        <p className={style.info__text}>0 объектов</p>
                    )}
                    <p className={style.info__text}>{data.noCity}</p>
                    {data.city && (
                        <ul className={style.info__text}>
                            Города:
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
