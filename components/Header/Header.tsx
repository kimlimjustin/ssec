import styles from './Header.module.css';
import Link from 'next/link';
const Header = () => {
    return (
        <div className={styles.nav}>
            <div className={styles['navbar__left']}>
                <div className={styles['navbar-in-queries']}>
                    <div className={styles['navbar__media-queries']}>
                        <span className={styles['navbar__triple-bar']}>&equiv;</span>
                    </div>
                    <ul className={styles['navbar__drop-down-in-queries']}>
                        <li>
                            <button className={styles['navbar__drop-down__topic']}>ARCHIVE</button>
                            <div className={styles['navbar__drop-down__subtopic']}>
                                <ul>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <a href="" className={styles['navbar__link']}>
                                            Link 1
                                        </a>
                                    </li>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <a href="" className={styles['navbar__link']}>
                                            Link 2
                                        </a>
                                    </li>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <a href="" className={styles['navbar__link']}>
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button className={styles['navbar__drop-down__topic']}>NEWS</button>
                        </li>
                        <li>
                            <button className={styles['navbar__drop-down__topic']}>TWOS</button>
                            <div className={styles['navbar__drop-down__subtopic']}>
                                <ul>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <Link href={'/twos/7-beta'}>
                                            <a className={styles['navbar__link']}>7-Beta</a>
                                        </Link>
                                        <a href="" className={styles['navbar__link']}>
                                            Link 1
                                        </a>
                                    </li>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <a href="" className={styles['navbar__link']}>
                                            Link 2
                                        </a>
                                    </li>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <a href="" className={styles['navbar__link']}>
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button className={styles['navbar__drop-down__topic']}>ABOUT US</button>
                            <div className={styles['navbar__drop-down__subtopic']}>
                                <ul>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <Link href={'/about'}>
                                            <a className={styles['navbar__link']}>About us</a>
                                        </Link>
                                    </li>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <Link href={'/about/rutinitas'}>
                                            <a className={styles['navbar__link']}>Rutinitas</a>
                                        </Link>
                                    </li>
                                    <li className={styles['navbar__drop-down__item']}>
                                        <Link href={'/about/sejarah'}>
                                            <a className={styles['navbar__link']}>Sejarah</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles['navbar']}>
                    <button className={styles['navbar__topic']}>ARCHIVE</button>
                    <ul className={styles['Drop-down']}>
                        <li className={styles['navbar__drop-down__item']}>
                            <a href="" className={styles['navbar__link']}>
                                Link 1
                            </a>
                        </li>
                        <li className={styles['navbar__drop-down__item']}>
                            <a href="" className={styles['navbar__link']}>
                                Link 2
                            </a>
                        </li>
                        <li className={styles['navbar__drop-down__item']}>
                            <a href="" className={styles['navbar__link']}>
                                Link 3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['navbar']}>
                    <button className={styles['navbar__topic']}>NEWS</button>
                </div>
            </div>
            <div className={styles['navbar__title']}>
                <div className={styles['title']}>
                    <Link href={'/'}>
                        <span className={styles['navbar__heading']}>SSEC</span>
                    </Link>
                </div>
            </div>
            <div className={styles['navbar__right']}>
                <div className={styles['navbar']}>
                    <Link href={'/twos'}>
                        <a className={styles['navbar__topic']}>TWOS</a>
                    </Link>
                    <ul className={styles['Drop-down']}>
                        <li className={styles['navbar__drop-down__item']}>
                            <Link href={'/twos/7-beta'}>
                                <a className={styles['navbar__link']}>7-Beta</a>
                            </Link>
                        </li>
                        <li className={styles['navbar__drop-down__item']}>
                            <a href="" className={styles['navbar__link']}>
                                Link 2
                            </a>
                        </li>
                        <li className={styles['navbar__drop-down__item']}>
                            <a href="" className={styles['navbar__link']}>
                                Link 3
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['navbar']}>
                    <Link href={'/about'}>
                        <a className={styles['navbar__topic']}>ABOUT US</a>
                    </Link>
                    <ul className={styles['Drop-down']}>
                        <li className={styles['navbar__drop-down__item']}>
                            <Link href={'/about'}>
                                <a className={styles['navbar__link']}>About us</a>
                            </Link>
                        </li>
                        <li className={styles['navbar__drop-down__item']}>
                            <Link href={'/about/rutinitas'}>
                                <a className={styles['navbar__link']}>Rutinitas</a>
                            </Link>
                        </li>
                        <li className={styles['navbar__drop-down__item']}>
                            <Link href={'/about/sejarah'}>
                                <a className={styles['navbar__link']}>Sejarah</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
