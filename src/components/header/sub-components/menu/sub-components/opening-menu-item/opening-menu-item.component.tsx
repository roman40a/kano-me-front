import * as React from 'react';
import cn from 'classnames';
import { MenuItem } from '../menu-item/menu-item.component';
import { Item } from '../../../../../page/page.model';

import css from './opening-menu-item.module.css';

export type Props = {
    label: string;
    items: Item[];
};

type State = {
    isActive: boolean;
};

export class OpeningMenuItem extends React.PureComponent<Props, State> {
    readonly state: State = {
        isActive: false,
    };

    handleToggle = () => {
        this.setState(state => ({ isActive: !state.isActive }));
    };

    render() {
        const { label, items } = this.props;
        const { isActive } = this.state;

        const containerClassName = cn(css.container, {
            [css.container__active]: isActive,
        });

        const iconContainerClassName = cn(css.iconContainer, {
            [css.iconContainer__active]: isActive,
        });

        const subItemsClassName = cn(css.subItems, {
            [css.subItems__opened]: isActive,
        });

        return (
            <div className={css.wrapper}>
                <div className={containerClassName} onClick={this.handleToggle}>
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
                </div>
                <div className={subItemsClassName}>
                    {items.map(item => (
                        <MenuItem
                            additionalPadding={40}
                            label={item.label}
                            href={item.href}
                            Icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
