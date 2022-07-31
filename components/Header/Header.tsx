import styles from './Header.module.css';
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
                            <button className={styles['navbar__drop-down__topic']}>TWOS</button>
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
                            <button className={styles['navbar__drop-down__topic']}>ABOUT US</button>
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
            </div>
            <div className={styles['navbar__title']}>
                <div className={styles['title']}>
                    <span className={styles['navbar__heading']}>SSEC</span>
                </div>
            </div>
            <div className={styles['navbar__right']}>
                <div className={styles['navbar']}>
                    <button className={styles['navbar__topic']}>TWOS</button>
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
                    <button className={styles['navbar__topic']}>ABOUT US</button>
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
            </div>
        </div>
    );
};

export default Header;
