import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_Bf5EEhKV.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_3uBQStd4.mjs';
import 'es-module-lexer';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/workspace/","cacheDir":"file:///home/runner/workspace/node_modules/.astro/","outDir":"file:///home/runner/workspace/dist/","srcDir":"file:///home/runner/workspace/src/","publicDir":"file:///home/runner/workspace/public/","buildClientDir":"file:///home/runner/workspace/dist/client/","buildServerDir":"file:///home/runner/workspace/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-transcript-request","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-transcript-request\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-transcript-request","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-transcript-request.js","pathname":"/api/submit-transcript-request","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bios","isIndex":false,"type":"page","pattern":"^\\/bios\\/?$","segments":[[{"content":"bios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bios.astro","pathname":"/bios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".iframe-container[data-astro-cid-xb3inwvi]{height:80vh;margin-top:0}iframe[data-astro-cid-xb3inwvi]{width:100%;height:100%;border:none;z-index:1}\n"}],"routeData":{"route":"/form","isIndex":false,"type":"page","pattern":"^\\/form\\/?$","segments":[[{"content":"form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/form.astro","pathname":"/form","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".form-container[data-v-ff991b89]{max-width:700px;margin:0 auto;padding:20px}.transcript-form[data-v-ff991b89]{background-color:#f9f9f9;padding:30px;border-radius:8px;box-shadow:0 2px 10px #0000001a}.form-group[data-v-ff991b89]{margin-bottom:20px}.form-group label[data-v-ff991b89]{display:block;margin-bottom:8px;font-weight:525;color:#333}.required[data-v-ff991b89]{color:red;margin-left:3px}.form-group input[data-v-ff991b89],.form-group textarea[data-v-ff991b89]{width:100%;padding:12px;border:1px solid #ccc;border-radius:4px;font-size:16px;font-family:Overpass,sans-serif;background-color:#e3f2fd}.form-group input[data-v-ff991b89]:focus,.form-group textarea[data-v-ff991b89]:focus{outline:none;border-color:#3f9cd1}.submit-button[data-v-ff991b89]{width:100%;padding:15px;background-color:#b7def6;color:#000;border:none;border-radius:15px;font-size:18px;font-weight:525;cursor:pointer;transition:.2s}.submit-button[data-v-ff991b89]:hover:not(:disabled){background-color:#3f9cd1;color:#fff}.submit-button[data-v-ff991b89]:disabled{opacity:.6;cursor:not-allowed}.success-message[data-v-ff991b89],.error-message[data-v-ff991b89]{padding:15px;margin-bottom:20px;border-radius:4px;text-align:center}.success-message[data-v-ff991b89]{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.error-message[data-v-ff991b89]{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}\n"}],"routeData":{"route":"/request-form","isIndex":false,"type":"page","pattern":"^\\/request-form\\/?$","segments":[[{"content":"request-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/request-form.astro","pathname":"/request-form","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/workspace/src/pages/bios.astro",{"propagation":"none","containsHead":true}],["/home/runner/workspace/src/pages/form.astro",{"propagation":"none","containsHead":true}],["/home/runner/workspace/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/runner/workspace/src/pages/request-form.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/submit-transcript-request@_@js":"pages/api/submit-transcript-request.astro.mjs","\u0000@astro-page:src/pages/bios@_@astro":"pages/bios.astro.mjs","\u0000@astro-page:src/pages/form@_@astro":"pages/form.astro.mjs","\u0000@astro-page:src/pages/request-form@_@astro":"pages/request-form.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_oww6ljQq.mjs","/home/runner/workspace/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DUtg-q2S.mjs","/home/runner/workspace/src/components/TranscriptRequestForm.vue":"_astro/TranscriptRequestForm.gX6ynJBb.js","@astrojs/vue/client.js":"_astro/client.C1nyO7PP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_astro/TranscriptRequestForm.gX6ynJBb.js","/_astro/client.C1nyO7PP.js","/_astro/runtime-dom.esm-bundler.CObu5r5e.js","/assets/images/AAERT.png","/assets/images/CET.png","/assets/images/courthouse.jpg","/assets/images/favicon.ico","/assets/images/fullLogo.png","/assets/images/judge.png","/assets/images/servicing-map.png","/assets/images/testimonials.png","/assets/images/white-favicon.png","/assets/stylesheets/form.css","/assets/stylesheets/w3.css","/assets/scripts/scripts.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"xWQhksdhbhe9hZ3MMYrjl60ujkCONEqEdlAvlLakjas="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
