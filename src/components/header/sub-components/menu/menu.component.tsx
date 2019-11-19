import React from 'react';
import cn from 'classnames';

import css from './menu.module.css';

type Props = {
    isOpened: boolean;
    onClose(): void;
}

export class Menu extends React.PureComponent<Props> {
    render() {
        const {isOpened} = this.props;

        const containerClassName = cn(css.container, {
            [css.container__opened]: isOpened,
        });

        const contentClassName = cn(css.content, {
            [css.content__opened]: isOpened,
        });

        return (
            <div className={containerClassName}>
                <div className={contentClassName}></div>
            </div>
        );
    }
}
