import * as React from 'react';
import cn from 'classnames';

import css from './harry-potter-icon.module.css';

type Props = {
    isActive: boolean;
};

export class HarryPotterIcon extends React.PureComponent<Props> {
    render() {
        const { isActive } = this.props;

        const iconContainer = cn(css.icon, {
            [css.icon__active]: isActive,
        });

        return (
            <div className={css.container}>
                <svg
                    className={iconContainer}
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <clipPath id="clip-path">
                            <path
                                className="cls-1"
                                d="M-806.44-3426.64H-816a.86.86,0,0,1-.86-.87v-1.12a.86.86,0,0,1,.86-.87h9.53a.87.87,0,0,1,.87.87v1.12a.87.87,0,0,1-.87.87m4.61,3.84v-1.13a.86.86,0,0,0-.87-.86H-816a.85.85,0,0,0-.86.86v1.13a.86.86,0,0,0,.86.86h13.27a.87.87,0,0,0,.87-.86m-11.93,5.23v-1.12a.86.86,0,0,0-.86-.87H-816a.86.86,0,0,0-.86.87v1.12a.86.86,0,0,0,.86.87h1.35a.86.86,0,0,0,.86-.87m5.13,0v-1.12a.86.86,0,0,0-.86-.87h-1.35a.86.86,0,0,0-.86.87v1.12a.86.86,0,0,0,.86.87h1.35a.86.86,0,0,0,.86-.87"
                            />
                        </clipPath>
                        <clipPath id="clip-path-2">
                            <path
                                className="kano-app-navbar-icon-component"
                                d="M-650.44-3421.64H-660a.86.86,0,0,1-.86-.87v-1.12a.86.86,0,0,1,.86-.87h9.53a.87.87,0,0,1,.87.87v1.12a.87.87,0,0,1-.87.87m4.61,3.84v-1.13a.86.86,0,0,0-.87-.86H-660a.85.85,0,0,0-.86.86v1.13a.86.86,0,0,0,.86.86h13.27a.87.87,0,0,0,.87-.86m-11.93,5.23v-1.12a.86.86,0,0,0-.86-.87H-660a.86.86,0,0,0-.86.87v1.12a.86.86,0,0,0,.86.87h1.35a.86.86,0,0,0,.86-.87m5.13,0v-1.12a.86.86,0,0,0-.86-.87h-1.35a.86.86,0,0,0-.86.87v1.12a.86.86,0,0,0,.86.87h1.35a.86.86,0,0,0,.86-.87"
                            />
                        </clipPath>
                    </defs>
                    <title>KANO-ICONS-KANO-CODING-KIT</title>
                    <g data-name="Layer 1" id="Layer_1">
                        <path
                            className="kano-app-navbar-icon-component"
                            d="M12.81,26.21,8.43,30.6a1.79,1.79,0,0,1-2.54-2.53l4.39-4.39Zm13.3-15.82a1.8,1.8,0,0,0-2.54,0L12.14,21.82l2.54,2.53L26.11,12.92A1.79,1.79,0,0,0,26.11,10.39ZM20.18,2.07,19,2.72l1.19.65.65,1.19.65-1.19,1.19-.65-1.19-.65L20.83.88ZM14.53,9.25l-1.83,1,1.83,1,1,1.82,1-1.82,1.82-1-1.82-1-1-1.83Z"
                        />
                    </g>
                </svg>
            </div>
        );
    }
}
