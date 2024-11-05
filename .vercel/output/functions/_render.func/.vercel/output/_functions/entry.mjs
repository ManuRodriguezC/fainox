import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DoNus1cq.mjs';
import { manifest } from './manifest_BvH5JfOU.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/cotizacion.astro.mjs');
const _page2 = () => import('./pages/api/sellproduct.astro.mjs');
const _page3 = () => import('./pages/api/sendemail.astro.mjs');
const _page4 = () => import('./pages/api/sendsellproducto.astro.mjs');
const _page5 = () => import('./pages/contacto.astro.mjs');
const _page6 = () => import('./pages/cotizacion.astro.mjs');
const _page7 = () => import('./pages/desarrollosynovedades.astro.mjs');
const _page8 = () => import('./pages/equiposusados.astro.mjs');
const _page9 = () => import('./pages/industriasyservicios/_industry_.astro.mjs');
const _page10 = () => import('./pages/industriasyservicios.astro.mjs');
const _page11 = () => import('./pages/producto/_product_.astro.mjs');
const _page12 = () => import('./pages/productos/_category_.astro.mjs');
const _page13 = () => import('./pages/productos.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/cotizacion.html", _page1],
    ["src/pages/api/sellProduct.html", _page2],
    ["src/pages/api/sendEmail.ts", _page3],
    ["src/pages/api/sendSellProducto.ts", _page4],
    ["src/pages/contacto.astro", _page5],
    ["src/pages/cotizacion.astro", _page6],
    ["src/pages/desarrollosynovedades.astro", _page7],
    ["src/pages/equiposusados.astro", _page8],
    ["src/pages/industriasyservicios/[industry].astro", _page9],
    ["src/pages/industriasyservicios/index.astro", _page10],
    ["src/pages/producto/[product].astro", _page11],
    ["src/pages/productos/[category].astro", _page12],
    ["src/pages/productos/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8f9a7b46-1317-49ea-917d-93ce106aa163",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
