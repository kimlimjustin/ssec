import styles from './Writing.module.css';
import Image from 'next/image';
interface IWriting {
    title: string;
    createdAt: string;
    category: string;
    content: string;
    thumbnail: string;
}

const Writing = (props: IWriting) => {
    return (
        <div className={styles['writing']}>
            <div className={styles['writing__meta']}>
                {props.createdAt} &#8226; {props.category}
            </div>
            <h1 className={styles['writing__title']}>{props.title}</h1>
            <img className={styles['writing__thumbnail']} src={props.thumbnail} alt={props.title} />
            <div className={styles['writing__content']} dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
};

export default Writing;
