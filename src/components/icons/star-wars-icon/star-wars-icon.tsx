import * as React from 'react';
import cn from 'classnames';

import css from './star-wars-icon.module.css';

type Props = {
    isActive: boolean;
};

export class StarWarsIcon extends React.PureComponent<Props> {
    render() {
        const { isActive } = this.props;

        const iconContainer = cn(css.icon, {
            [css.icon__active]: isActive,
        });

        return (
            <div className={css.container}>
                <svg
                    className={iconContainer}
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                    width="16px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <title>sw-kit-nav-icon</title>
                    <desc>Created with Sketch.</desc>
                    <g
                        fill="none"
                        fillRule="evenodd"
                        id="Landing-Page"
                        stroke="none"
                        strokeWidth="1"
                    >
                        <g
                            fill="#FFFFFF"
                            id="TFCK-T-PDP-Landing"
                            transform="translate(-24.000000, -80.000000)"
                        >
                            <g id="NAV-+-Sub">
                                <g
                                    id="Subnav"
                                    transform="translate(0.000000, 64.000000)"
                                >
                                    <g
                                        id="sw-kit-nav-icon"
                                        transform="translate(24.000000, 16.000000)"
                                    >
                                        <path
                                            d="M8,0 C3.582,0 0,3.582 0,8 C0,12.418 3.582,16 8,16 C12.418,16 16,12.418 16,8 C16,3.582 12.418,0 8,0 M8,2 C11.309,2 14,4.691 14,8 C14,11.309 11.309,14 8,14 C4.691,14 2,11.309 2,8 C2,4.691 4.691,2 8,2"
                                            id="Fill-1"
                                        />
                                        <path
                                            d="M12,8 C12,10.209 10.209,12 8,12 C5.791,12 4,10.209 4,8 C4,5.791 5.791,4 8,4 C10.209,4 12,5.791 12,8"
                                            id="Fill-3"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}
