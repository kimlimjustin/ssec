import { GmailIcon, InstagramIcon, TwitterIcon } from '../../utils/Icon';
import styles from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <div className={styles['sidebar__container']}>
            <a className={styles['sidebar__links']} href="https://instagram.com/ssec_sutomo1" target="_blank" rel="noreferrer">
                <InstagramIcon />
            </a>

            <a className={styles['sidebar__links']} href="https://twitter.com/SSEC_Sutomo1" target="_blank" rel="noreferrer">
                <TwitterIcon />
            </a>

            <a className={styles['sidebar__links']} href="mailto:" target="_blank" rel="noreferrer">
                <GmailIcon />
            </a>
        </div>
    );
};
export default Sidebar;
