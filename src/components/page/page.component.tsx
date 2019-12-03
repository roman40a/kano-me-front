import React from 'react';
import { Header } from '../header/header.component';
import { HeaderData } from './page.model';
import { ContentHeader } from '../content-header/content-header.component';
import { Quote } from '../quote/quote.component';
import { Main } from '../main/main.component';
import { MainType } from '../main/main.module';

import css from './page.module.css';
import { CommunityShowcase } from '../community-showcase/community-showcase.component';

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
                    <div className={css.mainWrapper1}>
                        <Main
                            imgSrc="https://kanome-cms-media-production.kano.me/media/components/cfe942a0-df00-4be7-8587-56899f223da8.jpeg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a"
                            title="Make computers"
                            text="Anyone can build and code technology, with a step-by-step book. Connect the bits, boards, and buttons. Bring computers, tablets, wands, sensors, and more to life. Simple, fun, and for everyone."
                            btnTitle="SHOP ALL KITS"
                            btnHref="/"
                            type={MainType.Left}
                        />
                    </div>
                    <div className={css.mainWrapper2}>
                        <Main
                            imgSrc="https://kanome-cms-media-production.kano.me/media/components/72eb6cee-d7cb-4527-b1f1-52a9e6a36676.jpeg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a"
                            title="Learn real code"
                            text="Go from beginner to code master with step-by-step challenges, and stories. Drag blocks, type code, unlock programming powers. Projects with Python, JavaScript, Unix, and more."
                            btnTitle="SHOP KANO"
                            btnHref="/"
                            type={MainType.Right}
                        />
                    </div>
                    <div className={css.quoteWrapper}>
                        <Quote
                            imgSrc="https://kanome-cms-media-production.kano.me/media/components/df00d043-c0a1-411d-a5ee-bbf76dda2258.png?v=14bf7d202899e6d796d6f8de11c90b1135e2853a"
                            title="What he's doing, though he doesn't know it, is coding. He can do this because Kano has made it instinctive."
                            person="The Guardian, “How Kano turned my son, 8, into a programmer”"
                        />
                    </div>
                    <div className={css.communityShowcaseWrapper}>
                        <CommunityShowcase />
                    </div>
                </div>
            </div>
        );
    }
}
