import * as React from 'react';

import css from './menu-item.module.css';

export type Props = {
    label: string;
    href: string;
};

export class MenuItem extends React.PureComponent<Props> {
    render() {
        const { label, href } = this.props;
        return (
            <a href={href} className={css.container}>
                <span className={css.content}>{label}</span>
            </a>
        );
    }
}
