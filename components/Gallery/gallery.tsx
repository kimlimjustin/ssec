import styles from './gallery.module.css';
import Image from 'next/image';

interface IGallery {
    source: string;
    description: string;
}
const Gallery = ({ sources }: { sources: IGallery[] }) => {
    return (
        <div className={styles.gallery}>
            {sources.map((source, index) => (
                <div className={styles.gallery__container} key={index}>
                    <img src={source.source} alt="gallery" className={styles.gallery__image} />
                    <span className={styles.gallery__description}>{source.description}</span>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
