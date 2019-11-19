import * as React from 'react';

import css from './menu-item.module.css';

export type Props = {
    label: string;
    href: string;
    additionalPadding?: number;
};

export class MenuItem extends React.PureComponent<Props> {
    render() {
        const { label, href, additionalPadding = 0 } = this.props;
        return (
            <a
                href={href}
                className={css.container}
                style={{ paddingLeft: 40 + additionalPadding }}
            >
                <span className={css.content}>{label}</span>
            </a>
        );
    }
}
