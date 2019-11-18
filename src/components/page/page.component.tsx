import React from 'react';

import css from './page.module.css';

export class Page extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <Page />
            </div>
        );
    }
}
