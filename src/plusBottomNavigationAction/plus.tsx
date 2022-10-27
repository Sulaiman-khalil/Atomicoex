import { c, css, Props, useRef, useState, useEffect } from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

import {
    barmerData,
    bounsData,
    healthData,
    homeData,
    kompassData,
} from "../icon/dData";

function plusBottomNavigationAction({ icon }) {
    return (
        <host shadowDom>
            <PlusBottomNavigationAction></PlusBottomNavigationAction>
        </host>
    );
}

plusBottomNavigationAction.props = {
    label: {
        type: String,
    },
};
plusBottomNavigationAction.styles = css``;
export const PlusBottomNavigationAction = c(plusBottomNavigationAction);

customElements.define(
    "plus-bottom-navigation-action",
    PlusBottomNavigationAction
);
