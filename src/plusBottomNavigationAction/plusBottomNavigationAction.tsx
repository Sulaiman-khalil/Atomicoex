import { c, css, Props, useEvent } from "atomico/core";

function plusBottomNavigationAction({ label, active }) {
    const dispatch = useEvent("Click", { bubbles: true, composed: true });

    return (
        <host shadowDom>
            <a
                class={`label ${active ? "label-active" : "label"}`}
                onclick={dispatch}
            >
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
        font-family: "Titillium Web", sans-serif;
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
