import React from 'react';
import cn from 'classnames';

import css from './header.module.css';
import { Logo } from '../logo/logo.component';
import { Cart } from '../cart/cart.component';
import { PointerIcon } from '../icons/pointer/pointer';
import { Item } from './sub-components/item/item.component';
import { ProductsItem } from './sub-components/products-item/products-item.component';

export type Props = {
    data?: any;
}

type State = {
    isProductHovered: boolean;
    isProjectsOpened: boolean;
}

export class Header extends React.PureComponent<Props, State> {
    readonly state: State = {
        isProductHovered: false,
        isProjectsOpened: false,
    };

    handleProductOpen = () => {
        this.setState(state => ({ isProjectsOpened: !state.isProjectsOpened }));
    };

    render() {
        const {isProjectsOpened} = this.state;

        const showCaseClassName = cn(css.showCase, {
            [css.showCase__open]: isProjectsOpened,
        });

        return (
            <div className={css.container}>
                <div className={css.content}>
                    <a href={'https://kano.me/row'} className={css.logoContainer}>
                        <Logo />
                    </a>
                    <div className={css.main}>
                        <div className={css.mainContainer}>
                            <div className={css.primary}>
                                <ProductsItem
                                    label={'Products'}
                                    isActive={isProjectsOpened}
                                    onClick={this.handleProductOpen}
                                />
                                <Item label={'Educators'} href={'/'} />
                                <Item label={'DownLoads'} href={'/'} />
                            </div>
                            <div className={css.secondary}>
                                <Item label={'Blog'} href={'/'} />
                                <Item label={'Story Locator'} href={'/'} />
                            </div>
                        </div>
                        <div className={css.auxiliary}>
                            <div className={css.divideLine} />
                            <div className={css.cartLink}>
                                <div className={css.cartContainer}>
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={showCaseClassName}>
                    showCase
                </div>
            </div>
        );
    }
}
