import { renderToString } from 'react-dom/server';
import * as React from "react";
import { Response } from 'express';

export function render(res: Response, page: string, data = {}) {
    var componentPath = require(`../pages/${page}`);
    var Component = componentPath.default;
    var content = renderToString(<Component {...data} />);
    var htm = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page}</title><link rel="stylesheet" href="/static/css/main.css" type="text/css"><script id="page-script" src="/static/${page}.js" async></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" /></head><body><div id="page-name">${page}</div><div id="page-data">${JSON.stringify(data)}</div><div id="root">${content}</div></body></html>`
    res.send(htm);
}
