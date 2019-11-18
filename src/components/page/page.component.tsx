import React from 'react';
import { Header } from '../header/header.component';

import css from './page.module.css';

export class Page extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.headerContainer}>
                    <Header />
                </div>
                <div className={css.content}>
                    page
                </div>
            </div>
        );
    }
}
