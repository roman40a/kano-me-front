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
};

export type Item = {
    label: string;
    href: string;
    position?: Position;
};

export enum Position {
    Primary,
    Secondary,
}

export type HelpData = {
    label: string;
    items: Item[];
};
