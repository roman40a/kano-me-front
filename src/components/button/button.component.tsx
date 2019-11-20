import React from 'react';
import cn from 'classnames';
import { ColorTheme } from './button.model';

import css from './button.module.css';

type Props = {
    title: string;
    href: string;
    colorTheme: ColorTheme;
};

export class Button extends React.PureComponent<Props> {
    render() {
        const { title, href, colorTheme } = this.props;

        const containerClassName = cn(css.container, {
            [css.container__black]: colorTheme === ColorTheme.black,
            [css.container__red]: colorTheme === ColorTheme.red,
            [css.container__orange]: colorTheme === ColorTheme.orange,
        });

        return (
            <a className={containerClassName} href={href}>
                {title}
            </a>
        );
    }
}
