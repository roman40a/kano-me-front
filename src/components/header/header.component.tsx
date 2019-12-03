import React from 'react';
import cn from 'classnames';
import { Logo } from './sub-components/logo/logo.component';
import { Cart } from './cart/cart.component';
import { Item } from './sub-components/item/item.component';
import { ProductsItem } from './sub-components/products-item/products-item.component';
import { HelpItem } from './sub-components/help-item/help-item.component';
import { ShowCaseClose } from './sub-components/show-case-close/show-case-close';
import { Product } from './sub-components/product/product.component';
import { BurgerButton } from './sub-components/burger-button/burger-button.component';
import { Menu } from './sub-components/menu/menu.component';
import { HeaderData, Position } from '../page/page.model';

import css from './header.module.css';
import { Button } from '../button/button.component';
import { ColorTheme } from '../button/button.model';

export type Props = {
    data: HeaderData;
    goods: number;
};

type State = {
    isProjectsOpened: boolean;
    isHelpOpened: boolean;
    isMenuOpened: boolean;
};

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
        const { data, goods } = this.props;
        const { items, products, help } = data;
        const { isProjectsOpened, isHelpOpened, isMenuOpened } = this.state;

        const showCaseClassName = cn(css.showCase, {
            [css.showCase__open]: isProjectsOpened,
        });

        return (
            <div className={css.container}>
                <Menu
                    data={data}
                    isOpened={isMenuOpened}
                    onClose={this.handleMenuClose}
                />
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
                                    label={products.label}
                                    isActive={isProjectsOpened}
                                    onClick={this.handleProductOpen}
                                />
                                {items
                                    .filter(
                                        item =>
                                            item.position === Position.Primary
                                    )
                                    .map(item => (
                                        <Item
                                            key={item.label}
                                            label={item.label}
                                            href={item.href}
                                        />
                                    ))}
                            </div>
                            <div className={css.secondary}>
                                {items
                                    .filter(
                                        item =>
                                            item.position === Position.Secondary
                                    )
                                    .map(item => (
                                        <Item
                                            key={item.label}
                                            label={item.label}
                                            href={item.href}
                                        />
                                    ))}
                                <HelpItem
                                    label={help.label}
                                    isActive={isHelpOpened}
                                    items={help.items}
                                    onClick={this.handleHelpOpen}
                                />
                            </div>
                        </div>
                        <div className={css.auxiliary}>
                            <div className={css.divideLine} />
                            <div className={css.cartLink}>
                                <div className={css.cartContainer}>
                                    <Cart count={goods} />
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
                            {products.products.map(product => (
                                <Product
                                    key={product.title}
                                    title={product.title}
                                    price={product.price}
                                    imgSrc={product.imgSrc}
                                    href={product.href}
                                />
                            ))}
                        </div>
                        <div className={css.viewAllButtonContainer}>
                            <Button
                                title="view all products"
                                href="/"
                                colorTheme={ColorTheme.black}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
