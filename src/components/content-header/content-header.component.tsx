import React from 'react';
import { Button } from '../button/button.component';
import { ColorTheme } from '../button/button.model';

import css from './content-header.module.css';

type Props = {
    title: string;
};

export class ContentHeader extends React.PureComponent<Props> {
    render() {
        const { title } = this.props;

        return (
            <div className={css.container}>
                <div className={css.background}>
                    <img
                        className={css.picture}
                        alt="Header"
                        src="https://kanome-cms-media-production.kano.me/media/components/f2f20519-b185-4cf0-855c-6bf43dc8f455.jpeg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a"
                    />
                </div>
                <div className={css.content}>
                    <div className={css.wrapper}>
                        <div className={css.title}>{title}</div>
                        <div className={css.buttonWrapper}>
                            <Button
                                href="/"
                                title="Learn more"
                                colorTheme={ColorTheme.red}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
