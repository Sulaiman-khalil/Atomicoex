import { c, css, Props, useEvent } from "atomico/core";

function plusBottomNavigationAction({ label, active }) {
    const dispatch = useEvent("Click", { bubbles: true, composed: true });

    return (
        <host shadowDom>
            <div
                role="button"
                tabindex="0"
                class={`anch ${active ? "anch-active" : "label"}`}
                onclick={dispatch}
                value={label}
            >
                <div class="icondiv">
                    <slot />
                </div>
                <div class="spandiv">
                    <span
                        class={`anch-span ${
                            active ? "label-active" : "label-span"
                        }`}
                    >
                        {label}
                    </span>
                </div>
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
    .anch {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: -2px;
        flex-basis: 0px;
        flex-grow: 1;
        cursor: pointer;
        color: #6d6d6d;
        fill: currentColor;
    }
    .icondiv {
        margin-top: 8px;
        margin-bottom: 6px;
        width: 24px;
        height: 24px;
    }
    .spandiv {
        line-height: 18px;
        letter-spacing: 0.12px;
        font-size: 12px;
        font-weight: 700;
        font-family: "Titillium Web", sans-serif;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-wrap: normal;
    }
    .anch-active {
        color: black;
        fill: currentColor;
    }
    .anch-span {
        position: relative;
    }

    .label-active:after {
        display: flex;
        position: absolute;
        height: 2px;
        bottom: 0px;
        background-color: rgb(105, 165, 0);
        right: 0;
        left: 0;
        content: "";

        border-radius: 999px;
    }
    /* .col-container {
        display: table; 
        width: 100%; 
    }
    .anch {
        display: table-cell;
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
    .anch-active {
        display: inline-block;
        position: relative;
        color: tomato;
    }
    .anch-active::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;

        border-bottom: 5px solid red;
    }  */
    /* .label {
        display: flex;
        text-decoration: none;
        position: relative;
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
    .label::after {
        position: absolute;
        content: "";
        height: 2px;
    } */
`;
export const PlusBottomNavigationAction = c(plusBottomNavigationAction);

customElements.define(
    "plus-bottom-navigation-action",
    PlusBottomNavigationAction
);
