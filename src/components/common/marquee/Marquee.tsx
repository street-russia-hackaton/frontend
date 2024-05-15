import styles from './Marquee.module.scss';

interface MarqueeProps {
    content?: string;
    color?: string;
    background?: string;
    rotate?: string;
    marginTop?: string;
}

export default function Marquee({ content, color, background, rotate, marginTop }: MarqueeProps) {
    const textStyle = {
        color: color,
    };

    const lineStyle = {
        background: background,
        transform: rotate,
        marginTop: marginTop,
    };

    return (
        <section className={styles.marquee} style={lineStyle}>
            <p className={styles.marquee__text_first} style={textStyle}>
                {content}
            </p>
            <p className={styles.marquee__text_second} style={textStyle}>
                {content}
            </p>
        </section>
    );
}
