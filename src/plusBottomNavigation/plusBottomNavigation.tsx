import { c, css, Props, useRef, useState, useEffect } from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

import {
    barmerData,
    homeData,
    healthData,
    kompassData,
    bounsData,
} from "../icon/dData";

function plusBottomNavigation({}) {
    return (
        <host shadowDom>
            <div class="all-of-all">
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
                    <slot></slot>
                </div>
            </div>
        </host>
    );
}

plusBottomNavigation.props = {};
plusBottomNavigation.styles = css`
    .all-of-all {
        dispaly: flex;
        min-height: 82px;
        right: 0px;
        align-items: center;
        justify-content: center;
    }

    .all-all {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        clip-path: url(#bottom-navigation-mask);
        padding-right: 0px;
        padding-left: 0px;
        padding-top: 16px;
        padding-bottom: 12px;
        background-color: rgb(255, 255, 255);
        width: 100%;
    }
    // .let {
    //     display: flex;
    //     position: absolute;
    //     background-color: rgb(46, 46, 46);
    //     width: 72px;
    //     min-height: 72px;
    //     margin-left: -36px;
    //     left: 50%;
    //     z-index: 0;
    //     justify-content: center;
    //     pointer-events: none !important;
    // }
`;
export const PlusBottomNavigation = c(plusBottomNavigation);

customElements.define("plus-bottom-navigation", PlusBottomNavigation);
