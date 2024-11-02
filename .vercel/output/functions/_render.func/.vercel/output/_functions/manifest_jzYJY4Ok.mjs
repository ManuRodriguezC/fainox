import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BuIjysCP.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_CQFcNYbx.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/manurodriguez/fainox/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"api/cotizacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/cotizacion","isIndex":false,"type":"page","pattern":"^\\/api\\/cotizacion\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"cotizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/cotizacion.html","pathname":"/api/cotizacion","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/sellProduct/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sellproduct","isIndex":false,"type":"page","pattern":"^\\/api\\/sellProduct\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sellProduct","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sellProduct.html","pathname":"/api/sellProduct","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/sendEmail","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.ts","pathname":"/api/sendEmail","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/sendSellProducto","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendsellproducto","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendSellProducto\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendSellProducto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendSellProducto.ts","pathname":"/api/sendSellProducto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"cotizacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cotizacion","isIndex":false,"type":"page","pattern":"^\\/cotizacion\\/?$","segments":[[{"content":"cotizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cotizacion.astro","pathname":"/cotizacion","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"desarrollosynovedades/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/desarrollosynovedades","isIndex":false,"type":"page","pattern":"^\\/desarrollosynovedades\\/?$","segments":[[{"content":"desarrollosynovedades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/desarrollosynovedades.astro","pathname":"/desarrollosynovedades","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"equiposusados/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/equiposusados","isIndex":false,"type":"page","pattern":"^\\/equiposusados\\/?$","segments":[[{"content":"equiposusados","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equiposusados.astro","pathname":"/equiposusados","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"industriasyservicios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/industriasyservicios","isIndex":true,"type":"page","pattern":"^\\/industriasyservicios\\/?$","segments":[[{"content":"industriasyservicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/industriasyservicios/index.astro","pathname":"/industriasyservicios","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"productos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/productos","isIndex":true,"type":"page","pattern":"^\\/productos\\/?$","segments":[[{"content":"productos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/productos/index.astro","pathname":"/productos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/manurodriguez/fainox/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/cotizacion.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/desarrollosynovedades.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/equiposusados.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/industriasyservicios/[industry].astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/industriasyservicios/index.astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/producto/[product].astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/productos/[category].astro",{"propagation":"none","containsHead":true}],["/home/manurodriguez/fainox/src/pages/productos/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/cotizacion@_@html":"pages/api/cotizacion.astro.mjs","\u0000@astro-page:src/pages/api/sellProduct@_@html":"pages/api/sellproduct.astro.mjs","\u0000@astro-page:src/pages/api/sendEmail@_@ts":"pages/api/sendemail.astro.mjs","\u0000@astro-page:src/pages/api/sendSellProducto@_@ts":"pages/api/sendsellproducto.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/desarrollosynovedades@_@astro":"pages/desarrollosynovedades.astro.mjs","\u0000@astro-page:src/pages/equiposusados@_@astro":"pages/equiposusados.astro.mjs","\u0000@astro-page:src/pages/producto/[product]@_@astro":"pages/producto/_product_.astro.mjs","\u0000@astro-page:src/pages/productos/index@_@astro":"pages/productos.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/productos/[category]@_@astro":"pages/productos/_category_.astro.mjs","\u0000@astro-page:src/pages/cotizacion@_@astro":"pages/cotizacion.astro.mjs","\u0000@astro-page:src/pages/industriasyservicios/[industry]@_@astro":"pages/industriasyservicios/_industry_.astro.mjs","\u0000@astro-page:src/pages/industriasyservicios/index@_@astro":"pages/industriasyservicios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/manurodriguez/fainox/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/manurodriguez/fainox/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_jzYJY4Ok.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DRvVldVO.js","/astro/hoisted.js?q=1":"_astro/hoisted.BfbuNAqS.js","/astro/hoisted.js?q=2":"_astro/hoisted.Yn58lOSj.js","/home/manurodriguez/fainox/src/components/tsx/Ofices":"_astro/Ofices.oZ_1fNRR.js","/home/manurodriguez/fainox/src/components/tsx/FilterListProduct":"_astro/FilterListProduct.CU5EK3KA.js","@astrojs/react/client.js":"_astro/client.BY2mA-CD.js","/home/manurodriguez/fainox/src/components/tsx/BannerLoop":"_astro/BannerLoop.DukidmoF.js","/home/manurodriguez/fainox/src/components/tsx/ButtonCotizacion":"_astro/ButtonCotizacion.BNH-3Oz4.js","/home/manurodriguez/fainox/src/components/tsx/FormContact":"_astro/FormContact.D0nm-atG.js","/home/manurodriguez/fainox/src/components/tsx/ProductForLists":"_astro/ProductForLists.Cv1wjt_-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/cotizacion.Qi3rWTS0.css","/_astro/index.PKP-pcee.css","/_astro/BannerLoop.DukidmoF.js","/_astro/ButtonCotizacion.BNH-3Oz4.js","/_astro/FilterListProduct.CU5EK3KA.js","/_astro/FormContact.D0nm-atG.js","/_astro/Ofices.oZ_1fNRR.js","/_astro/ProductForLists.Cv1wjt_-.js","/_astro/carCotizacion.fPw7GQVz.js","/_astro/client.BY2mA-CD.js","/_astro/index.B52nOzfP.js","/_astro/jsx-runtime.CRkqtJS5.js","/images/helpers.png","/images/helpers.webp","/images/icono.jpg","/images/images1.png","/images/images2.png","/images/logo.png","/images/quienes-somos.webp","/industrys/aceite.webp","/industrys/aceites.webp","/industrys/aderesos.webp","/industrys/aliment.jpg","/industrys/carnes.webp","/industrys/cereales.webp","/industrys/conservas.webp","/industrys/cows.jpg","/industrys/derivados.webp","/industrys/fruts.jpg","/industrys/jugos.webp","/industrys/leche.webp","/industrys/mantequilla.webp","/industrys/milk.webp","/industrys/pulpas.webp","/industrys/quesos.webp","/industrys/salsas.webp","/industrys/yogurt.webp","/offices/office1.jpg","/offices/office2.jpg","/offices/office3.jpg","/products/15.webp","/products/17.webp","/products/18.webp","/products/34-485.webp","/products/7.webp","/products/8.webp","/products/producto1.jpg","/products/producto2.jpg","/products/producto3.jpg","/products/producto4.jpg","/products/producto5.jpg","/products/producto6.jpg","/products/producto7.jpg","/servicios/automatizacion.webp","/servicios/capacitacion.webp","/servicios/fabricacion.webp","/servicios/helpers.webp","/servicios/montajes.webp","/servicios/servicios.webp","/servicios/soporte.webp","/api/cotizacion/index.html","/api/sellProduct/index.html","/api/sendEmail","/api/sendSellProducto","/contacto/index.html","/cotizacion/index.html","/desarrollosynovedades/index.html","/equiposusados/index.html","/industriasyservicios/index.html","/productos/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mYO87yOiJOzFrD3Lo0ZnaDSr9PfH2Kh+oBpJqj/tVnw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
