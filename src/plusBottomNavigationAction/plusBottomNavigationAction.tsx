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
            <a
                class={`label ${active ? "label-active" : "label"}`}
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
                <span class={`label ${active ? "label-active" : "label-span"}`}>
                    {label}
                </span>
            </a>
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
    .label {
        display: flex;
        flex: 1;
        align-items: center;
        align-items: center;
        flex-direction: column;
        color: #6d6d6d;
        fill: currentColor;
        cursor: pointer;
        line-height: 18px;
        letter-spacing: 0.12px;
        font-size: 12px;
        text-align: center;
        font-weight: 400;
        width: 100%;
        font-family: titillium-web, sans-serif;
    }
    .label-active {
        text-decoration: underline;
        text-decoration-color: #69a500;
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
        color: #000000;
    }
`;
export const PlusBottomNavigationAction = c(plusBottomNavigationAction);

customElements.define(
    "plus-bottom-navigation-action",
    PlusBottomNavigationAction
);
