import React from 'react';

import css from './burger-button.module.css';

type Props = {
    onClick(): void;
}

export class BurgerButton extends React.PureComponent<Props> {
    render() {
        const {onClick} = this.props;
        return (
            <div className={css.container} onClick={onClick}>
                <svg className={css.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <clipPath id="clip-path">
                            <path style={{fill: 'node', clipRule: 'evenodd'}} className="cls-1"
                                  d="M-684.35-3234.14h-9.53a.87.87,0,0,1-.87-.87v-1.12a.87.87,0,0,1,.87-.87h9.53a.87.87,0,0,1,.86.87v1.12a.87.87,0,0,1-.86.87m4.6,3.84v-1.13a.86.86,0,0,0-.87-.86h-13.26a.86.86,0,0,0-.87.86v1.13a.87.87,0,0,0,.87.86h13.26a.87.87,0,0,0,.87-.86m-11.92,5.23v-1.12a.87.87,0,0,0-.87-.87h-1.34a.87.87,0,0,0-.87.87v1.12a.87.87,0,0,0,.87.87h1.34a.87.87,0,0,0,.87-.87m5.13,0v-1.12a.87.87,0,0,0-.87-.87h-1.35a.87.87,0,0,0-.86.87v1.12a.87.87,0,0,0,.86.87h1.35a.87.87,0,0,0,.87-.87"></path>
                        </clipPath>
                        <clipPath id="clip-path-2">
                            <path className="cls-1"
                                  d="M-528.35-3229.14h-9.53a.87.87,0,0,1-.87-.87v-1.12a.87.87,0,0,1,.87-.87h9.53a.87.87,0,0,1,.86.87v1.12a.87.87,0,0,1-.86.87m4.6,3.84v-1.13a.86.86,0,0,0-.87-.86h-13.26a.86.86,0,0,0-.87.86v1.13a.87.87,0,0,0,.87.86h13.26a.87.87,0,0,0,.87-.86m-11.92,5.23v-1.12a.87.87,0,0,0-.87-.87h-1.34a.87.87,0,0,0-.87.87v1.12a.87.87,0,0,0,.87.87h1.34a.87.87,0,0,0,.87-.87m5.13,0v-1.12a.87.87,0,0,0-.87-.87h-1.35a.87.87,0,0,0-.86.87v1.12a.87.87,0,0,0,.86.87h1.35a.87.87,0,0,0,.87-.87"></path>
                        </clipPath>
                    </defs>
                    <title>KANO-ICONS-HAMBURGER</title>
                    <g data-name="Layer 1" id="Layer_1">
                        <path
                            d="M14,10.5H8.38a1.5,1.5,0,0,1,0-3H23.62a1.5,1.5,0,1,1,0,3H14Zm4,7h5.62a1.5,1.5,0,1,0,0-3H8.38a1.5,1.5,0,0,0,0,3H18Zm0,7h5.62a1.5,1.5,0,1,0,0-3H8.38a1.5,1.5,0,0,0,0,3H18Z"></path>
                    </g>
                </svg>
            </div>
        );
    }
}
