import React from 'react';
import cn from 'classnames';
import { CloseButton } from './sub-components/close-buttton/close-button';
import { MenuItem } from './sub-components/menu-item/menu-item.component';
import { OpeningMenuItem } from './sub-components/opening-menu-item/opening-menu-item.component';
import { HeaderData, Item, Product } from '../../../page/page.model';

import css from './menu.module.css';

type Props = {
    data: HeaderData;
    isOpened: boolean;
    onClose(): void;
};

const parseProduct = (product: Product): Item => ({
    label: product.title,
    href: product.href,
    icon: product.icon,
});

export class Menu extends React.PureComponent<Props> {
    render() {
        const { isOpened, onClose, data } = this.props;

        const { products, help, items } = data;

        const containerClassName = cn(css.container, {
            [css.container__opened]: isOpened,
        });

        const contentClassName = cn(css.content, {
            [css.content__opened]: isOpened,
        });

        const parsedProductItems: Item[] = products.products
            .map(product => parseProduct(product))
            .concat(products.items);

        return (
            <div className={containerClassName}>
                <div className={contentClassName}>
                    <div className={css.closeButtonWrapper}>
                        <CloseButton onClick={onClose} />
                    </div>
                    <div className={css.itemList}>
                        <OpeningMenuItem
                            label={products.label}
                            items={parsedProductItems}
                        />
                        {items.map(item => (
                            <MenuItem
                                key={item.label}
                                label={item.label}
                                href={item.href}
                            />
                        ))}
                        <OpeningMenuItem
                            label={help.label}
                            items={help.items}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
