import * as React from 'react';

import css from './products-item.module.css';
import cn from 'classnames';

export type Props = {
    label: string;
    isActive: boolean;
    onClick(): void;
}

export class ProductsItem extends React.PureComponent<Props> {
    render() {
        const {label, isActive, onClick} = this.props;

        const iconContainerClassName = cn(css.iconContainer, {
            [css.iconContainer__active]: isActive,
        });

        return (
            <a className={css.container} onClick={onClick}>
                <span className={css.content}>{label}</span>
                <svg
                    className={iconContainerClassName}
                    data-name="Help Pointer"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu item Pointer</title>
                    <path
                        className={css.icon}
                        d="M4.84,7.1s0,4.76,1.75,3.42A10.32,10.32,0,0,0,9.08,7.58a1,1,0,0,0,0-1A10.32,10.32,0,0,0,6.59,3.68C4.84,2.34,4.84,7.1,4.84,7.1Z"
                    />
                </svg>
            </a>
        );
    }
}
