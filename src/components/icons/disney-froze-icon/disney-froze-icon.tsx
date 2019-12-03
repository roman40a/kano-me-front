import * as React from 'react';
import cn from 'classnames';

import css from './disney-froze-icon.module.css';

type Props = {
    isActive: boolean;
};

export class DisneyFrozeIcon extends React.PureComponent<Props> {
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
                    viewBox="0 0 18 16"
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <title>fir-kit-nav-icon</title>
                    <desc>Created with Sketch.</desc>
                    <g
                        fill="none"
                        fillRule="evenodd"
                        id="Landing"
                        stroke="none"
                        strokeWidth="1"
                    >
                        <g
                            fill="#FFFFFF"
                            id="FIR-D-PDP-Landing"
                            transform="translate(-150.000000, -80.000000)"
                        >
                            <g id="NAV-(with-sub)">
                                <g
                                    id="Subnav-3"
                                    transform="translate(0.000000, 64.000000)"
                                >
                                    <g
                                        id="fir-kit-nav-icon"
                                        transform="translate(150.000000, 16.000000)"
                                    >
                                        <g id="Group-5">
                                            <path
                                                className="kano-app-navbar-icon-component"
                                                d="M10.9265,0 L6.3105,0 C4.8805,0 3.5595,0.763 2.8435,2.001 L0.5365,5.999 C-0.1785,7.237 -0.1785,8.763 0.5365,10.001 L2.8435,13.999 C3.5595,15.237 4.8805,16 6.3105,16 L10.9265,16 C12.3565,16 13.6775,15.237 14.3925,13.999 L16.7005,10.001 C17.4155,8.763 17.4155,7.237 16.7005,5.999 L14.3925,2.001 C13.6775,0.763 12.3565,0 10.9265,0 M10.9265,2 C11.6395,2 12.3035,2.384 12.6605,3.001 L14.9685,6.999 C15.3245,7.616 15.3245,8.384 14.9685,9.001 L12.6605,12.999 C12.3035,13.616 11.6395,14 10.9265,14 L6.3105,14 C5.5975,14 4.9325,13.616 4.5765,12.999 L2.2685,9.001 C1.9115,8.384 1.9115,7.616 2.2685,6.999 L4.5765,3.001 C4.9325,2.384 5.5975,2 6.3105,2 L10.9265,2"
                                                id="Fill-1"
                                            />
                                            <path
                                                className="kano-app-navbar-icon-component"
                                                d="M10.0676,4 L7.1696,4 C6.6366,4 6.1456,4.284 5.8796,4.745 L4.4296,7.255 C4.1636,7.716 4.1636,8.284 4.4296,8.745 L5.8796,11.255 C6.1456,11.716 6.6366,12 7.1696,12 L10.0676,12 C10.5996,12 11.0916,11.716 11.3576,11.255 L12.8076,8.745 C13.0736,8.284 13.0736,7.716 12.8076,7.255 L11.3576,4.745 C11.0916,4.284 10.5996,4 10.0676,4"
                                                id="Fill-3"
                                            />
                                        </g>
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
