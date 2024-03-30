import 'cookie';
import 'kleur/colors';
import './chunks/astro_DHb6ja2A.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const b=\"modulepreload\",k=function(e){return\"/\"+e},p={},v=function(i,s,d){let f=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName(\"link\"),r=document.querySelector(\"meta[property=csp-nonce]\"),c=r?.nonce||r?.getAttribute(\"nonce\");f=Promise.all(s.map(t=>{if(t=k(t),t in p)return;p[t]=!0;const a=t.endsWith(\".css\"),h=a?'[rel=\"stylesheet\"]':\"\";if(!!d)for(let l=o.length-1;l>=0;l--){const u=o[l];if(u.href===t&&(!a||u.rel===\"stylesheet\"))return}else if(document.querySelector(`link[href=\"${t}\"]${h}`))return;const n=document.createElement(\"link\");if(n.rel=a?\"stylesheet\":b,a||(n.as=\"script\",n.crossOrigin=\"\"),n.href=t,c&&n.setAttribute(\"nonce\",c),document.head.appendChild(n),a)return new Promise((l,u)=>{n.addEventListener(\"load\",l),n.addEventListener(\"error\",()=>u(new Error(`Unable to preload CSS for ${t}`)))})}))}return f.then(()=>i()).catch(o=>{const r=new Event(\"vite:preloadError\",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},{signIn:E}=await v(()=>Promise.resolve().then(()=>P),\"__VITE_PRELOAD__\"),$=document.querySelector(\"#signin-button\");$?.addEventListener(\"click\",async e=>{e.preventDefault(),await E(\"twitch\")});async function g(e,i,s){const{callbackUrl:d=window.location.href,redirect:f=!0}=i??{},{prefix:o=\"/api/auth\",...r}=i??{},c=e===\"credentials\",a=c||e===\"email\",m=`${`${o}/${c?\"callback\":\"signin\"}/${e}`}?${new URLSearchParams(s)}`,n=await fetch(`${o}/csrf`),{csrfToken:l}=await n.json(),u=await fetch(m,{method:\"post\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\",\"X-Auth-Return-Redirect\":\"1\"},body:new URLSearchParams({...r,csrfToken:l,callbackUrl:d})}),w=await u.clone().json(),R=new URL(w.url).searchParams.get(\"error\");if(f||!a||!R){window.location.href=w.url??d,w.url.includes(\"#\")&&window.location.reload();return}return u}async function y(e){const{callbackUrl:i=window.location.href,prefix:s=\"/api/auth\"}=e??{},d=await fetch(`${s}/csrf`),{csrfToken:f}=await d.json(),c=(await(await fetch(`${s}/signout`,{method:\"post\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\",\"X-Auth-Return-Redirect\":\"1\"},body:new URLSearchParams({csrfToken:f,callbackUrl:i})})).json()).url??i;window.location.href=c,c.includes(\"#\")&&window.location.reload()}const P=Object.freeze(Object.defineProperty({__proto__:null,signIn:g,signOut:y},Symbol.toStringTag,{value:\"Module\"}));window.signIn=g;window.signOut=y;\n"}],"styles":[{"type":"external","src":"/_astro/index.4GI0g02Z.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/working-directory/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BLS7XI9s.mjs","/src/pages/index.astro":"chunks/pages/index_o93ffpmW.mjs","\u0000@astrojs-manifest":"manifest_CvnOTH0D.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CpbzYkin.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"chunks/_.._CCVg3U8V.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CTycbukA.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BNBt4uKr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.4GI0g02Z.css","/favicon.svg","/w-nav-logo.png"],"buildFormat":"directory"});

export { manifest };
