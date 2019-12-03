import * as React from 'react';
import cn from 'classnames';
import { Item } from '../item/item.component';
import { ProductsItem } from '../products-item/products-item.component';

import css from './help-item.module.css';

type ItemContent = {
    label: string;
    href: string;
};

export type Props = {
    label: string;
    isActive: boolean;
    items: ItemContent[];
    onClick(): void;
};

export class HelpItem extends React.PureComponent<Props> {
    render() {
        const { label, isActive, onClick, items } = this.props;

        const contentClassName = cn(css.content, {
            [css.content__opened]: isActive,
        });

        return (
            <div className={css.container}>
                <ProductsItem
                    label={label}
                    isActive={isActive}
                    onClick={onClick}
                />
                <div className={contentClassName}>
                    {items.map(item => (
                        <div key={item.label} className={css.itemContainer}>
                            <Item label={item.label} href={item.href} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
