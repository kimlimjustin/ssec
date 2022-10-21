import styles from './Writing.module.css';
import Router from 'next/router';
interface IWriting {
    title: string;
    createdAt: string;
    category: string;
    content: string;
    thumbnail: string;
    redirect?: string;
}

const MAX_CHAR = 400;

const Writing = (props: IWriting) => {
    return (
        <div className={styles['writing']} onClick={() => (props.redirect ? Router.push(props.redirect) : null)}>
            <div className={styles['writing__meta']}>
                {props.createdAt} &#8226; {props.category}
            </div>
            <h1 className={styles['writing__title']}>{props.title}</h1>
            <img className={styles['writing__thumbnail']} src={props.thumbnail} alt={props.title} />
            <div
                className={styles['writing__content']}
                dangerouslySetInnerHTML={{ __html: props.content.slice(0, MAX_CHAR) + (props.content.length > MAX_CHAR ? '...' : '') }}
            />
        </div>
    );
};

export default Writing;
