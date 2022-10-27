import { c, css, Props, useRef, useState, useEffect } from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

function plusBottomNavigationAction({ icon, label, iconcolor }) {
    const [floating, setFloating] = useState(true);
    return (
        <host shadowDom>
            <div class="plus-bottom-navigation-action">
                <a
                    class="anchortag"
                    onclick={(e) => {
                        setFloating(!floating);
                    }}
                >
                    <slot>
                        <icon-home
                            data={icon}
                            color={floating ? "rgb(179, 179, 179)" : "#000000"}
                        ></icon-home>
                    </slot>
                    <span class={floating ? "label-span" : "label-active"}>
                        {label}
                    </span>
                </a>
            </div>
        </host>
    );
}

plusBottomNavigationAction.props = {
    label: {
        type: String,
    },
    icon: {
        icon: {
            type: String,
        },
    },
    iconcolor: {
        type: String,
    },
};
plusBottomNavigationAction.styles = css`
    a {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-contet: center;
        align-items: center;
        flex-basis: 0px;
        margin-bottom: -2px;
        cursor: pointer;
    }

    #active span {
        color: #000000;
    }
    #active svg {
        fill: #000000;
    }
    .label-active {
        color: rgb(0, 0, 0);
        line-height: 18px;
        letter-spacing: 0.12px;
        font-size: 12px;
        text-align: center;
        font-weight: 400;
        max-width: 100%;
        font-family: titillium-web, sans-serif;
        padding-left: 4px;
        padding-right: 4px;
        overflow-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .label-span {
        color: rgb(179, 179, 179);
        line-height: 18px;
        letter-spacing: 0.12px;
        font-size: 12px;
        text-align: center;
        font-weight: 400;
        max-width: 100%;
        font-family: titillium-web, sans-serif;
        padding-left: 4px;
        padding-right: 4px;
        overflow-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .plus-bottom-navigation-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contet: center;
    }
    // .one {
    //     display: flex;
    //     flex-direction: column;
    //     flex-grow: 1;
    //     justify-contet: center;
    //     align-items: center;
    //     flex-basis: 0px;
    //     margin-bottom: -2px;
    //     cursor: pointer;
    // }
    // .one-svg {
    //     display: inline-flex;
    //     margin-top: 8px;
    //     margin-bottom: 4px;
    // }
    // .secound-svg {
    //     display: inline-flex;
    //     position: relative;
    //     flex-direction: column;
    // }
    // .alone {
    //     display: flex;
    //     align-items: stretch;
    //     background-color: rgb(230, 110, 165);
    //     border-radius: 999px;
    //     flex-direction: column;
    //     overflow: hidden;
    //     height: 16px;
    //     min-width: 16px;
    //     position: absolute;
    //     right: -4px;
    //     top: -4px;
    //     z-index: 1;
    //     transform: scale(0);
    // }
    // .a-element {
    //     display: flex;
    //     flex-direction: column;
    //     flex-grow: 1;
    //     justify-contet: center;
    //     align-items: center;
    //     flex-basis: 0px;
    //     margin-bottom: -2px;
    //     cursor: pointer;
    // }
    // .svg-beside {
    //     align-items: stretch;
    //     background-color: rgb(230, 110, 165);
    //     border-radius: 999px;
    //     display: flex;
    //     flex-direction: column;
    //     overflow: hidden;
    //     height: 16px;
    //     min-width: 16px;
    //     position: absolute;
    //     right: -4px;
    //     top: -4px;
    //     z-index: 1;
    //     transform: scale(0);
    // }
    // inside-svg-beside {
    //     color: rgb(0, 0, 0);
    //     padding-left: 4px;
    //     padding-right: 4px;
    //     letter-spacing: 0.12px;
    //     font-weight: 700;
    //     line-height: 16px;
    //     font-size: 10px;
    //     font-family: "Titillium";
    //     text-align: center;
    // }
    // .outer {
    //     display: flex-inline;
    //     flex-direction: column;
    //     position: relative;
    // }
    // .outer-space {
    //     display: inline-flex;
    //     margin-top: 8px;
    //     margin-bottom: 4px;
    // }
    // .secound-span-div {
    //     display: inline-flex;
    // }
    // .secound-span-text {
    //     color: rgb(179, 179, 179);
    //     line-height: 18px;
    //     letter-spacing: 0.12px;
    //     font-size: 12px;
    //     text-align: center;
    //     font-weight: 700;
    //     max-width: 100%;
    //     font-family: "Titillium";
    //     padding-left: 4px;
    //     padding-right: 4px;
    //     overflow-wrap: normal;
    //     white-space: nowrap;
    //     text-overflow: ellipsis;
    //     overflow: hidden;
    // }
    // underline-div {
    //     background-color: rgb(130, 180, 45);
    // }
    // .one-label {
    //     line-height: 18px;
    //     color: rgb(179, 179, 179);
    //     letter-spacing: 0.12px;
    //     font-size: 12px;
    //     text-align: center;
    //     font-weight: 700;
    //     max-width: 100%;
    //     font-family: "Titillium";
    //     padding-left: 4px;
    //     padding-right: 4px;
    // }
`;
export const PlusBottomNavigationAction = c(plusBottomNavigationAction);

customElements.define(
    "plus-bottom-navigation-action",
    PlusBottomNavigationAction
);
