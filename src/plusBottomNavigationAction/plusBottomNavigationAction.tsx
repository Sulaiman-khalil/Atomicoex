import {
    c,
    css,
    Props,
    useRef,
    useState,
    useEffect,
    useEvent,
    useProp,
} from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

function plusBottomNavigationAction({ label, active }) {
    // console.log(focused);
    // const [active, setActive] = useState(true);
    // const [focused, setFocused] = useProp("focused");
    const dispatch = useEvent("Click", { bubbles: true, composed: true });
    // console.log("focused", focused);
    return (
        <host shadowDom>
            <div
                class={`label-icon ${active ? "label-active" : "label-icon"}`}
                onclick={dispatch}
            >
                {/* <icon-home data={icon}></icon-home> */}
                {/* {active ? (
                    <strong>
                        <slot /> hvhjvhjvhjvhj
                    </strong>
                ) : (
                    <slot />
                )} */}
                <slot />
                <span
                    class={`label-span ${
                        active ? "label-active-span" : "label-span"
                    }`}
                >
                    {label}
                </span>
            </div>
        </host>
    );
}

plusBottomNavigationAction.props = {
    label: {
        type: String,
    },
    icon: {
        type: String,
    },

    focused: {
        type: Boolean,
        value: false,
        reflect: true,
    },
    active: Boolean,
};
plusBottomNavigationAction.styles = css`
    .label-active-span {
        color: #000000;
    }
    .label-active {
        color: #000000;
        fill: black;
        background-color: #f0d0d0;
    }
    .label-icon {
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-left: 50px;
        padding-right: 50px;
        color: #6d6d6d;
        max-width: 100%;
    }
    .label-span:hover {
    }
    .label-span {
        line-height: 18px;
        letter-spacing: 0.12px;
        font-size: 12px;
        text-align: center;
        font-weight: 400;
        max-width: 100%;
        font-family: titillium-web, sans-serif;
        /* padding-left: 4px;
        padding-right: 4px; */
        /* overflow-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; */
    }
    /* .label-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contet;space-between;
    }
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
        color: #000000;
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
    
    } */
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
