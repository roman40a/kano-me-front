import * as React from 'react';
import cn from 'classnames';

import css from './pointer.module.css';

export type Props = {
    active: boolean;
    hovered: boolean;
}

export class PointerIcon extends React.PureComponent<Props> {
    render() {
        const { active, hovered } = this.props;

        const containerClassName = cn(css.container, {
            [css.container__active]: active,
        });

        const iconClassName = cn(css.icon, {
            [css.icon__hovered]: hovered,
        });

        return (
            <svg
                className={containerClassName}
                data-name="Help Pointer"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Menu item Pointer</title>
                <path
                    className={iconClassName}
                    d="M4.84,7.1s0,4.76,1.75,3.42A10.32,10.32,0,0,0,9.08,7.58a1,1,0,0,0,0-1A10.32,10.32,0,0,0,6.59,3.68C4.84,2.34,4.84,7.1,4.84,7.1Z"
                />
            </svg>
        );
    }
}
