import React from 'react';
import { Header } from '../header/header.component';
import { HeaderData } from './page.model';

import css from './page.module.css';

type Props = {
    headerData: HeaderData;
    goods: number;
};

export class Page extends React.PureComponent<Props> {
    render() {
        const { headerData, goods } = this.props;

        return (
            <div className={css.container}>
                <div className={css.headerContainer}>
                    <Header data={headerData} goods={goods} />
                </div>
                <div className={css.content}>page</div>
            </div>
        );
    }
}
