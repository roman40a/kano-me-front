import * as React from 'react';
import { IconProps } from '../../../../../page/page.model';

import css from './menu-item.module.css';

export type Props = {
    label: string;
    href: string;
    Icon?: React.ComponentClass<IconProps>;
    additionalPadding?: number;
};

type State = {
    isHovered: boolean;
};

export class MenuItem extends React.PureComponent<Props, State> {
    readonly state: State = {
        isHovered: false,
    };

    handleEnter = () => {
        this.setState({ isHovered: true });
    };

    handleLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { label, href, Icon, additionalPadding = 0 } = this.props;
        const { isHovered } = this.state;

        return (
            <a
                href={href}
                className={css.container}
                style={{ paddingLeft: 40 + additionalPadding }}
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
            >
                <span className={css.content}>
                    {Icon && (
                        <div className={css.iconContainer}>
                            <Icon isActive={isHovered} />
                        </div>
                    )}
                    {label}
                </span>
            </a>
        );
    }
}
