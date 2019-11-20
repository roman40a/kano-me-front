import React from 'react';
import { Header } from '../header/header.component';
import { HeaderData } from './page.model';
import { ContentHeader } from '../content-header/content-header.component';
import { Quote } from '../quote/quote.component';

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
                <div className={css.content}>
                    <ContentHeader title="Code Your Galaxy" />
                    <div className={css.quoteWrapper}>
                        <Quote
                            imgSrc="https://kanome-cms-media-production.kano.me/media/components/a777ab8e-da20-4f88-a251-25ee52583a71.png?v=14bf7d202899e6d796d6f8de11c90b1135e2853a"
                            title="Unshackles us from the past and ushers in a new world of computing."
                            person="Fast Company"
                            extra="The World's Most Innovative Companies 2019"
                        />
                    </div>
                    <div className={css.quoteWrapper}>
                        <Quote
                            imgSrc="https://kanome-cms-media-production.kano.me/media/components/df00d043-c0a1-411d-a5ee-bbf76dda2258.png?v=14bf7d202899e6d796d6f8de11c90b1135e2853a"
                            title="What he's doing, though he doesn't know it, is coding. He can do this because Kano has made it instinctive."
                            person="The Guardian, “How Kano turned my son, 8, into a programmer”"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
