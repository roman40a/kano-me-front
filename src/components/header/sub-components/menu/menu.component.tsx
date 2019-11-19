import React from 'react';
import cn from 'classnames';
import { CloseButton } from './sub-components/close-buttton/close-button';
import { MenuItem } from './sub-components/menu-item/menu-item.component';
import { HelpMenuItem } from './sub-components/help-menu-item/help-menu-item.component';
import { HeaderData } from '../../../page/page.model';

import css from './menu.module.css';

type Props = {
    data: HeaderData;
    isOpened: boolean;
    onClose(): void;
};

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

        return (
            <div className={containerClassName}>
                <div className={contentClassName}>
                    <div className={css.closeButtonWrapper}>
                        <CloseButton onClick={onClose} />
                    </div>
                    <div className={css.itemList}>
                        {items.map(item => (
                            <MenuItem label={item.label} href={item.href} />
                        ))}
                        <HelpMenuItem label={help.label} items={help.items} />
                    </div>
                </div>
            </div>
        );
    }
}
