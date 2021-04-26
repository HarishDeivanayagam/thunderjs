import React from "react";
import ReactDOM from "react-dom";
import { makeTrip } from './router';

export function load(Component: any) {
    let pageData: any = document.getElementById('page-data');
    let data = JSON.parse(pageData['innerHTML']);
    ReactDOM.hydrate(<Component {...data} />, document.getElementById("root"));

    window.onpopstate = function (event: any) {
        makeTrip(document.location.pathname, false)
    };

}
