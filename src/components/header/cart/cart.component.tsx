import React from 'react';

import css from './cart.module.css';

export type Props = {
    count: number;
};

export class Cart extends React.PureComponent<Props> {
    render() {
        const { count } = this.props;
        return (
            <div className={css.container}>
                {count > 0 && <div className={css.count}>{count}</div>}
                <svg
                    style={{
                        height: '1.4rem',
                        margin: '.37rem 0 0 .3rem',
                        width: '1.4rem',
                    }}
                    id="kano-app-navbar-cart-icon"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Kano Cart Icon</title>
                    <path
                        style={{ fill: '#fff' }}
                        d="M11.5,9H4.29a.57.57,0,0,1-.56-.45L2.62,3.39l-1-.08a.57.57,0,0,1,.08-1.14l1.47.11a.57.57,0,0,1,.52.45l1.1,5.15H11l.83-3.83A.57.57,0,1,1,13,4.3l-.92,4.28A.57.57,0,0,1,11.5,9Z"
                    ></path>
                    <circle
                        style={{ fill: '#fff' }}
                        cx="5.53"
                        cy="10.9"
                        r="1.14"
                    ></circle>
                    <circle
                        style={{ fill: '#fff' }}
                        cx="10.35"
                        cy="10.9"
                        r="1.14"
                    ></circle>
                    <path
                        style={{ fill: '#fff' }}
                        d="M10.55,5.38H5.24a.57.57,0,0,1,0-1.14h5.32a.57.57,0,1,1,0,1.14Z"
                    ></path>
                    <path
                        style={{ fill: '#fff' }}
                        d="M10.17,7.19H5.62A.57.57,0,1,1,5.62,6h4.56a.57.57,0,1,1,0,1.14Z"
                    ></path>
                </svg>
            </div>
        );
    }
}
