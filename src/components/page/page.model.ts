import React from 'react';

export type HeaderData = {
    products: ProductData;
    items: Item[];
    help: HelpData;
};

export type ProductData = {
    label: string;
    products: Product[];
    items: Item[];
};

export type Product = {
    title: string;
    price: string;
    imgSrc: string;
    href: string;
    icon: React.ComponentClass<IconProps>;
};

export type Item = {
    label: string;
    href: string;
    position?: Position;
    icon?: React.ComponentClass<IconProps>;
};

export enum Position {
    Primary,
    Secondary,
}

export type HelpData = {
    label: string;
    items: Item[];
};

export type IconProps = { isActive: boolean };
