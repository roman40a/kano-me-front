import React from 'react';
import { Page } from '../page/page.component';

import css from './app.module.css';

export class App extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <Page />
            </div>
        );
    }
}
