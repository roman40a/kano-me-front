import React from 'react';
import cn from 'classnames';

import css from './menu.module.css';
import { CloseButton } from './sub-components/close-buttton/close-button';
import { MenuItem } from './sub-components/menu-item/menu-item.component';
import { HelpMenuItem } from './sub-components/help-menu-item/help-menu-item.component';

type Props = {
    isOpened: boolean;
    onClose(): void;
};

export class Menu extends React.PureComponent<Props> {
    render() {
        const { isOpened, onClose } = this.props;

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
                        <MenuItem label={'Educator'} href={'/'} />
                        <MenuItem label={'Downloads'} href={'/'} />
                        <MenuItem label={'Store Locator'} href={'/'} />
                        <MenuItem label={'Blog'} href={'/'} />
                        <HelpMenuItem label={'Help'} />
                    </div>
                </div>
            </div>
        );
    }
}
