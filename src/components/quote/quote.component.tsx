import React from 'react';

import css from './quote.module.css';

type Props = {
    imgSrc: string;
    title: string;
    person: string;
    extra?: string;
};

export class Quote extends React.PureComponent<Props> {
    render() {
        const { imgSrc, title, person, extra } = this.props;
        return (
            <div className={css.container}>
                <div className={css.imgWrapper}>
                    <img alt="quote" src={imgSrc} className={css.img} />
                </div>
                <div className={css.info}>
                    <div className={css.title}>
                        <span className={css.titleQuote}>"</span>
                        {title}
                        <span className={css.titleQuote}>"</span>
                    </div>
                    <div className={css.person}>{person}</div>
                    {extra && <div className={css.extra}>{extra}</div>}
                </div>
            </div>
        );
    }
}
