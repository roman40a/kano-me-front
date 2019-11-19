import React from 'react';
import cn from 'classnames';
import { Logo } from './sub-components/logo/logo.component';
import { Cart } from './cart/cart.component';
import { Item } from './sub-components/item/item.component';
import { ProductsItem } from './sub-components/products-item/products-item.component';
import { HelpItem } from './sub-components/help-item/help-item.component';
import { ShowCaseClose } from './sub-components/show-case-close/show-case-close';
import { Product } from './sub-components/product/product.component';

import css from './header.module.css';
import { BurgerButton } from './sub-components/burger-button/burger-button.component';
import { Menu } from './sub-components/menu/menu.component';

export type Props = {
    data?: any;
};

type State = {
    isProjectsOpened: boolean;
    isHelpOpened: boolean;
    isMenuOpened: boolean;
};

export const HELP_ITEMS = [
    {
        label: 'Contact Us',
        href: '/',
    },
    {
        label: 'Help Center',
        href: '/',
    },
    {
        label: 'Community',
        href: '/',
    },
    {
        label: 'Career',
        href: '/',
    },
];

const PRODUCTS = [
    {
        title: 'Star Wars The Force™ Coding Kit',
        price: '$79.99',
        imgSrc:
            'https://kanome-cms-media-production.kano.me/media/products/SW-nav.jpg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a',
    },
    {
        title: 'Disney Frozen 2 Coding Kit',
        price: '$79.99',
        imgSrc:
            'https://kanome-cms-media-production.kano.me/media/products/frozen-menu-img.jpeg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a',
    },
    {
        title: 'Harry Potter Kano Coding Kit',
        price: '$99.99',
        imgSrc:
            'https://kanome-cms-media-production.kano.me/media/products/shop-harry-potter-small2x_3.jpg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a',
    },
];

export class Header extends React.PureComponent<Props, State> {
    readonly state: State = {
        isProjectsOpened: false,
        isHelpOpened: false,
        isMenuOpened: false,
    };

    handleProductOpen = () => {
        this.setState(state => ({ isProjectsOpened: !state.isProjectsOpened }));
    };

    handleProductClose = () => {
        this.setState({ isProjectsOpened: false });
    };

    handleHelpOpen = () => {
        this.setState(state => ({ isHelpOpened: !state.isHelpOpened }));
    };

    handleMenuOpen = () => {
        this.setState({ isMenuOpened: true });
    };

    handleMenuClose = () => {
        this.setState({ isMenuOpened: false });
    };

    render() {
        const { isProjectsOpened, isHelpOpened, isMenuOpened } = this.state;

        const showCaseClassName = cn(css.showCase, {
            [css.showCase__open]: isProjectsOpened,
        });

        return (
            <div className={css.container}>
                <Menu isOpened={isMenuOpened} onClose={this.handleMenuClose} />
                <div className={css.content}>
                    <BurgerButton onClick={this.handleMenuOpen} />
                    <div className={css.logoContainer}>
                        <a
                            href={'https://kano.me/row'}
                            className={css.logoLink}
                        >
                            <Logo />
                        </a>
                    </div>
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
                                <Item label={'Store Locator'} href={'/'} />
                                <HelpItem
                                    label={'Help'}
                                    isActive={isHelpOpened}
                                    items={HELP_ITEMS}
                                    onClick={this.handleHelpOpen}
                                />
                            </div>
                        </div>
                        <div className={css.auxiliary}>
                            <div className={css.divideLine} />
                            <div className={css.cartLink}>
                                <div className={css.cartContainer}>
                                    <Cart count={12} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={showCaseClassName}>
                    <div className={css.showCaseWrapper}>
                        <div className={css.closeShowCase}>
                            <ShowCaseClose onClose={this.handleProductClose} />
                        </div>
                        <div className={css.productList}>
                            {PRODUCTS.map(product => (
                                <Product
                                    title={product.title}
                                    price={product.price}
                                    imgSrc={product.imgSrc}
                                    href={'/'}
                                />
                            ))}
                        </div>
                        <div className={css.viewAllButtonContainer}>
                            <a href={'/'} className={css.viewAllButton}>
                                view all products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
