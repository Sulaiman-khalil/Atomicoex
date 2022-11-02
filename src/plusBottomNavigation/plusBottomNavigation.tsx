import { c, css, Props } from "atomico/core";

function plusBottomNavigation({ value }) {
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

                <div class="all-all">
                    <slot
                        onClick={({ currentTarget, target }) => {
                            currentTarget.assignedElements().map((element) => {
                                element.active = element === target;
                            });
                        }}
                    ></slot>
                </div>
            </div>
        </host>
    );
}

plusBottomNavigation.props = {
    value: { type: String },
};

plusBottomNavigation.styles = css`
    .all {
        height: 100vh;
        background-color: rgb(242, 240, 240);
        min-height: 82px;
    }
    .all-all {
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        padding-top: 16px;
        padding-bottom: 12px;
        position: absolute;

        right: 0px;
        left: 0px;
        bottom: 0px;
        clip-path: url(#bottom-navigation-mask);
        width: 100%;
        filter: drop-shadow(rgba(0, 0, 0, 0.14) 0px 0px 24px);
    /* .all-all {
        display: flex;
        justify-content: space-evenly;
        clip-path: url(#bottom-navigation-mask);
        padding-right: 0px;
        padding-left: 0px;
        padding-top: 16px;
        padding-bottom: 12px;
        background-color: #ffffff;
        width: 100%;
       
    }
    .toclip {
        display: flex;
        justify-content: center;
        position: absolute;
        border-radius: 999px;
        clip-path: url(#bottom-navigation-mask);
        width: 72px;
        min-height: 72px;
        margin-left: -36px;
        left: 50%;

        background-color: rgb(255, 255, 255);
    }
    .all-all .slot {
        color: #ffffff;
    } */
`;

export const PlusBottomNavigation = c(plusBottomNavigation);

customElements.define("plus-bottom-navigation", PlusBottomNavigation);
