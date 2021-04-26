import axios from 'axios';
import React from 'react';
import NProgress from 'nprogress';

export function makeTrip(to: string, isNext: boolean) {
    let pageName: any = document.getElementById('page-name');
    let pageData: any = document.getElementById('page-data');
    let docRoot: any = document.getElementById('root');
    NProgress.start();
    axios.get(to)
        .then((res) => {
            let resHTML: any = new DOMParser().parseFromString(res.data, "text/html");
            let newPageName = resHTML.getElementById("page-name").innerHTML;
            let newPageData = resHTML.getElementById("page-data").innerHTML;
            let newDocRoot = resHTML.getElementById("root");
            pageName.innerHTML = newPageName;
            pageData.innerHTML = newPageData;
            docRoot.remove();
            document.getElementsByTagName('body')[0].append(newDocRoot);
            document.title = newPageName;
            let pgscript = document.getElementById('page-script');
            pgscript?.remove();
            let head = document.getElementsByTagName('head')[0];
            let newScript = document.createElement('script');
            newScript.id = 'page-script';
            newScript.src = `/static/${newPageName}.js`;
            head.append(newScript);
            if (isNext) {
                history.pushState({}, newPageName, to)
            }
            NProgress.done();
        })
        .catch((err) => {
            makeTrip('/404', true);
        })
}

export function Link(props: any) {
    return (
        <a id="link-btn" role="button" onClick={() => { makeTrip(props.to, true) }}>{props.name}</a>
    )
}
