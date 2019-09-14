import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

type Props = {
    src: string | string[],
    alt?: string,
    width?: string,
    height?: string,
    fit?: 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'unset' | 'scale-down',
    className?: string
}

const Picture = ({src, alt, width, height, fit, className}: Props) => {
    const srcSet = [];
    const style = {
        width: width || 'auto',
        height: height || 'auto',
        objectFit: fit || 'contain',
    };

    if (Array.isArray(src)) {
        for (let i = 0; i < src.length; ++i) {
            srcSet.push(`${src[i]} ${i + 1}x`);
        }
    } else {
        srcSet.push(src);
    }

    return (
        <picture className={cx(styles.root, className)} style={style}>
            <img srcSet={srcSet.join(' ')} alt={alt || ''} />
        </picture>
    );
};

export default Picture;
