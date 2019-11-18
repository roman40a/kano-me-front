import React from 'react';

import css from './logo.module.css';

export class Logo extends React.PureComponent {
    render() {
        return (
            <div className={css.container} />
        );
    }
}
