import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_7IybbWlT.mjs';
import { manifest } from './manifest_CI-Fk37t.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/sendemail.astro.mjs');
const _page3 = () => import('./pages/api/sendsellproducto.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/cotizacion.astro.mjs');
const _page6 = () => import('./pages/desarrollosynovedades.astro.mjs');
const _page7 = () => import('./pages/nuestras-soluciones/_industry_.astro.mjs');
const _page8 = () => import('./pages/nuestras-soluciones.astro.mjs');
const _page9 = () => import('./pages/producto/_product_.astro.mjs');
const _page10 = () => import('./pages/servicios-industriales.astro.mjs');
const _page11 = () => import('./pages/soluciones/indexxxx.astro.mjs');
const _page12 = () => import('./pages/soluciones/_servicio_/_servicioyproducto_.astro.mjs');
const _page13 = () => import('./pages/soluciones/_category_.astro.mjs');
const _page14 = () => import('./pages/trabaje-con-nosotros.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/sendEmail.ts", _page2],
    ["src/pages/api/sendSellProducto.ts", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/cotizacion.astro", _page5],
    ["src/pages/desarrollosynovedades.astro", _page6],
    ["src/pages/nuestras-soluciones/[industry].astro", _page7],
    ["src/pages/nuestras-soluciones/index.astro", _page8],
    ["src/pages/producto/[product].astro", _page9],
    ["src/pages/servicios-industriales.astro", _page10],
    ["src/pages/soluciones/indexxxx.astro", _page11],
    ["src/pages/soluciones/[servicio]/[servicioyproducto].astro", _page12],
    ["src/pages/soluciones/[category].astro", _page13],
    ["src/pages/trabaje-con-nosotros.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "86915f54-34f8-4121-af58-828b6c7fdbc2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
