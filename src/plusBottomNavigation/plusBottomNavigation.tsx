import { c, css, Props, useRef, useState, Ref, useProp } from "atomico/core";
import { useSlot } from "@atomico/hooks/use-slot";
import { PlusBottomNavigationAction } from "../plusBottomNavigationAction/plusBottomNavigationAction";

function plusBottomNavigation(props: Props<typeof plusBottomNavigation>) {
    const [flaoting, setFloating] = useState(true);
    const [value, setValue] = useProp("value");

    // console.log(active);
    const ref = useRef();
    const children = useSlot(ref, (eleo) => eleo.label);
    console.log(
        "firstchildren",
        children.filter((el) => {
            console.log("elchi", el);
        }),
        ref.current
    );
    console.log("firstvalue :>> ", value);
    console.log("firstchilderensdad :>> ", children);
    return (
        <host shadowDom>
            <div class="all">
                <svg width="0" height="0" aria-hidden="true">
                    <defs>
                        <clipPath
                            id="bottom-navigation-mask"
                            clipPathUnits="objectBoundingBox"
                        >
                            <path d="M 0,0 C 0.167,0.081 0.333,0.122 0.5,0.122 0.667,0.122 0.833,0.081 1,0 V 1 H 0 Z"></path>
                        </clipPath>
                    </defs>
                </svg>
                {flaoting && <div class="toclip"></div>}
                <div
                    class="alla"
                    onclick={(e) => {
                        setValue(e.target.label);
                        console.log("firstcccc", e.target.label);
                    }}
                >
                    {/* <plus-bottom-navigation-action label="Start"></plus-bottom-navigation-action> */}
                    <slot ref={ref}></slot>
                </div>
            </div>
        </host>
    );
}

plusBottomNavigation.props = {
    value: {
        type: String,
        reflect: true,
    },
};

plusBottomNavigation.styles = css`
    :host {
        width: 100%;
    }

    .all {
        position: absolute;
        min-height: 82px;
        filter: drop-shadow(rgba(0, 0, 0, 0.14) 0px 0px 24px);
        background-color: rgba(0, 0, 0, 0);
        right: 0px;
        left: 0px;
        bottom: 0px;
        justify-content: center;
        align-items: center;
    }

    .alla {
        display: flex;
        clip-path: url(#bottom-navigation-mask);
        padding-top: 16px;

        padding-bottom: 12px;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        align-items: center;
        flex-direction: row;
        width: 100%;
        padding-right: 0px;
        padding-left: 0px;
        cursor: pointer;
    }

    .toclip {
        display: flex;
        position: absolute;
        border-radius: 999px;
        clip-path: url(#bottom-navigation-mask);
        width: 72px;
        min-height: 72px;
        margin-left: -36px;
        left: 50%;

        background-color: rgb(255, 255, 255);
        z-index: 0;
        justify-content: center;

        transform: rotate(3.142rad);
    }

    /* .all-all {
        display: flex;
        justify-content: space-between;
        position: absolute;
        min-height: 82px;
        clip-path: url(#bottom-navigation-mask);
        background-color: #ffffff;
        padding-right: 0px;
        padding-left: 0px;
        padding-top: 16px;
        padding-bottom: 12px;
        align-items: center;
        width: 100%;
    } */
`;

export const PlusBottomNavigation = c(plusBottomNavigation);

customElements.define("plus-bottom-navigation", PlusBottomNavigation);

// onClick={({ currentTarget, target }) => {
//     currentTarget.assignedElements().map((element) => {
//         element.active = element === target;
//     });
// }}
