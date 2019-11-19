import React from 'react';
import cn from 'classnames';

import css from './header.module.css';
import { Logo } from '../logo/logo.component';
import { Cart } from '../cart/cart.component';
import { PointerIcon } from '../icons/pointer/pointer';

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

    handleProductEnter = () => {
        this.setState({isProductHovered: true});
    };

    handleProductLeave = () => {
        this.setState({isProductHovered: false});
    };

    render() {
        const {isProjectsOpened, isProductHovered} = this.state;

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
                                <div className={css.itemContainer}>
                                    <a className={cn(css.item, css.item__product)}
                                       onClick={this.handleProductOpen}
                                       onMouseEnter={this.handleProductEnter}
                                       onMouseLeave={this.handleProductLeave}
                                    >
                                        <span className={css.label}>Products</span>
                                        <PointerIcon active={isProjectsOpened} hovered={isProductHovered} />
                                    </a>
                                </div>
                                <a href='/' className={css.item}>
                                    <span className={css.label}>Educators</span>
                                </a>
                                <a href='/' className={css.item}>
                                    <span className={css.label}>DownLoads</span>
                                </a>
                            </div>
                            <div className={css.secondary}>
                                <a href='/' className={css.item}>
                                    <span className={css.label}>Blog</span>
                                </a>
                                <a href='/' className={css.item}>
                                    <span className={css.label}>Story Locator</span>
                                </a>
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
