import React from 'react';

import css from './card.module.css';

type Props = {
    imgSrc: string;
    avatarSrc: string;
    title: string;
    subTitle: string;
};

export class Card extends React.PureComponent<Props> {
    render() {
        const { imgSrc, avatarSrc, title, subTitle } = this.props;
        return (
            <div className={css.container}>
                <div className={css.imgContainer}>
                    <img alt={title} src={imgSrc} className={css.image} />
                    <figure className={css.avatarContainer}>
                        <img
                            alt={title}
                            src={avatarSrc}
                            className={css.avatar}
                        />
                    </figure>
                </div>
                <div className={css.header}>
                    <div className={css.title}>{title}</div>
                    <div className={css.subTitle}>{subTitle}</div>
                </div>
            </div>
        );
    }
}
