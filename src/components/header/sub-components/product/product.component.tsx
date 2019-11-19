import React from 'react';

import css from './product.module.css';

export type Props = {
    title: string;
    price: string;
    imgSrc: string;
    href: string;
}

export class Product extends React.PureComponent<Props> {
    render() {
        const {title, price, imgSrc, href} = this.props;
        return (
            <a href={href} className={css.container}>
                <img src={imgSrc} className={css.image} />
                <div className={css.info}>
                    <div className={css.title}>{title}</div>
                    <div className={css.price}>{price}</div>
                </div>
            </a>
        );
    }
}
