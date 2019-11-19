import React from 'react';
import { Page } from '../page/page.component';
import { HeaderData, Position } from '../page/page.model';

import css from './app.module.css';

const DATA: HeaderData = {
    products: {
        label: 'Products',
        products: [
            {
                title: 'Star Wars The Force™ Coding Kit',
                price: '$79.99',
                imgSrc:
                    'https://kanome-cms-media-production.kano.me/media/products/SW-nav.jpg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a',
            },
            {
                title: 'Disney Frozen 2 Coding Kit',
                price: '$79.99',
                imgSrc:
                    'https://kanome-cms-media-production.kano.me/media/products/frozen-menu-img.jpeg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a',
            },
            {
                title: 'Harry Potter Kano Coding Kit',
                price: '$99.99',
                imgSrc:
                    'https://kanome-cms-media-production.kano.me/media/products/shop-harry-potter-small2x_3.jpg?v=14bf7d202899e6d796d6f8de11c90b1135e2853a',
            },
        ],
        items: [
            {
                label: 'View all products',
                href: '/',
            },
        ],
    },
    items: [
        {
            label: 'Educator',
            href: '/',
            position: Position.Primary,
        },
        {
            label: 'Downloads',
            href: '/',
            position: Position.Primary,
        },
        {
            label: 'Store Locator',
            href: '/',
            position: Position.Secondary,
        },
        {
            label: 'Blog',
            href: '/',
            position: Position.Secondary,
        },
    ],
    help: {
        label: 'Help',
        items: [
            {
                label: 'Contact Us',
                href: '/',
            },
            {
                label: 'Help Center',
                href: '/',
            },
            {
                label: 'Community',
                href: '/',
            },
            {
                label: 'Career',
                href: '/',
            },
        ],
    },
};

export class App extends React.PureComponent {
    render() {
        return (
            <div className={css.container}>
                <Page headerData={DATA} />
            </div>
        );
    }
}
