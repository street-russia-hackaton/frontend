import Header from '../../common/header/Header';
import AboutUs from './aboutUs/AboutUs';
import styles from './Main.module.scss';

export default function Main() {
    return (
        <div className={styles.main__container}>
            <Header />
            <AboutUs />
        </div>
    );
}
