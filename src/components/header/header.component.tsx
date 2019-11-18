import React from 'react';

import css from './header.module.css';
import { Logo } from '../logo/logo.component';
import { Cart } from '../cart/cart.component';

export class Header extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.content}>
                    <a href={'https://kano.me/row'} className={css.logoContainer}>
                        <Logo />
                    </a>
                    <div className={css.main}>
                        <div className={css.mainContainer}>
                            <div className={css.primary}>primary</div>
                            <div className={css.secondary}>secondary</div>
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
            </div>
        );
    }
}
