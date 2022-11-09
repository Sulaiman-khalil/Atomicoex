import { c, css, Props, Ref, useEvent, useRef, useState } from "atomico/core";

function plusBottomNavigationAction(
    props: Props<typeof plusBottomNavigationAction>
) {
    // const dispatch = useEvent("Click", { bubbles: true, composed: true });
    const ref = useRef();
    const children = useSlot(ref);
    return (
        <host shadowDom>
            <a
                role="button"
                tabindex="0"
                class="anch"

                // onclick={dispatch}
            >
                <div class="icondiv">
                    <slot ref={ref} />
                    <h1>
                        Slot:
                        {children.filter((el) => el instanceof Element).length}
                    </h1>
                </div>

                <span class="anch-span">{props.label}</span>
            </a>
        </host>
    );
}

plusBottomNavigationAction.props = {
    label: {
        type: String,
        value: "sdsd",
    },
};
plusBottomNavigationAction.styles = css`
    :host {
        display: flex;
        width: 100%;
    }

    .anch {
        display: flex;

        cursor: pointer;
        margin-bottom: -2px;
        justify-items: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-basis: 0px;
        flex-grow: 1;
        width: 100%;
        color: rgb(109, 109, 109);
        fill: currentColor;
    }
    .icondiv {
        margin-top: 8px;
        margin-bottom: 6px;
        width: 24px;
        height: 24px;
    }

    .anch-span {
        position: relative;
        line-height: 18px;
        letter-spacing: 0.12px;
        font-size: 12px;
        font-weight: 700;
        font-family: "Titillium Web";
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-wrap: normal;
    }
    .anch-active {
        color: black;
    }
    /* .anch-span::after {
        display: flex;
        position: absolute;
        height: 2px;
        bottom: 0px;
        background-color: rgb(105, 165, 0);
        right: 0;
        left: 0;
        content: "";
        border-radius: 999px;
        opacity: 1;
    } */
    /* .anch-span::after {
        display: flex;
        height: 2px;
        bottom: 0px;
        background-color: rgb(105, 165, 0);
        right: 0;
        left: 0;
        content: "";
    } */

    /* .label {
    }
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
    } */

    /* .label-active:after {
        display: flex;
        position: absolute;
        height: 2px;
        bottom: 0px;
        background-color: rgb(105, 165, 0);
        right: 0;
        left: 0;
        content: "";

        border-radius: 999px;
    } */
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
function useSlot(refSlotIcon: Ref<any>) {
    throw new Error("Function not implemented.");
}
