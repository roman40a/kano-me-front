import React from 'react';
import cn from 'classnames';
import { Button } from '../button/button.component';
import { ColorTheme } from '../button/button.model';
import { MainType } from './main.module';

import css from './main.module.css';

type Props = {
    imgSrc: string;
    title: string;
    text: string;
    btnTitle: string;
    btnHref: string;
    type: MainType;
};

export class Main extends React.PureComponent<Props> {
    render() {
        const { imgSrc, title, text, btnTitle, btnHref, type } = this.props;

        const containerClassName = cn(css.container, {
            [css.container__right]: type === MainType.Right,
        });

        return (
            <div className={containerClassName}>
                <div className={css.imgWrapper}>
                    <img alt="main" src={imgSrc} className={css.img} />
                </div>
                <div className={css.info}>
                    <div className={css.title}>{title}</div>
                    <div className={css.text}>{text}</div>
                    <div className={css.btnWrapper}>
                        <Button
                            title={btnTitle}
                            href={btnHref}
                            colorTheme={ColorTheme.orange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
