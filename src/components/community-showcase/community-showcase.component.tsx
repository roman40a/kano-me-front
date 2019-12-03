import React from 'react';
import Carousel from 'react-multi-carousel';
import { Card } from './card/card.component';

import css from './community-showcase.module.css';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1400, min: 681 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 681, min: 0 },
        items: 1,
    },
};

const cards = [
    {
        imgSrc:
            'https://kanome-cms-static-production.kano.me/assets/images/component/share-weather-station.gif',
        avatarSrc:
            'https://kanome-cms-static-production.kano.me/assets/images/component/share-avatar-1%402x.png',
        title: 'Weather Station',
        subTitle: 'burrilo',
    },
    {
        imgSrc:
            'https://kanome-cms-static-production.kano.me/assets/images/component/share-rainbow-colors%402x.jpg',
        avatarSrc:
            'https://kanome-cms-static-production.kano.me/assets/images/component/share-avatar-2%402x.png',
        title: 'Rainbow Colors',
        subTitle: 'DJPMcG',
    },
    {
        imgSrc:
            'https://kanome-cms-static-production.kano.me/assets/images/component/share-moon-orbit.gif',
        avatarSrc:
            'https://kanome-cms-static-production.kano.me/assets/images/component/share-avatar-3%402x.png',
        title: 'Moon Orbit',
        subTitle: 'Kevin86',
    },
];

export class CommunityShowcase extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <div className={css.columns}>
                    <h1 className={css.header}>Make apps, games and music</h1>
                    <div className={css.subHeader}>
                        Create, don’t just consume technology. Code art, make
                        games, musical masterpieces. Don't just play games, hack
                        Minecraft, Snake, and Pong, change them to do something
                        new. Build apps, create data visuals, and stories.
                    </div>
                    <div className={css.content}>
                        <Carousel
                            showDots={true}
                            renderDotsOutside={false}
                            arrows={false}
                            className={css.carousel}
                            responsive={responsive}
                        >
                            {cards.map(card => (
                                <Card
                                    key={card.title}
                                    imgSrc={card.imgSrc}
                                    avatarSrc={card.avatarSrc}
                                    title={card.title}
                                    subTitle={card.subTitle}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
