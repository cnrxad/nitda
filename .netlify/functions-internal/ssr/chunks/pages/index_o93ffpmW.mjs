/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, u as unescapeHTML, j as Fragment, k as defineScriptVars, l as renderSlot, s as spreadAttributes, h as addAttribute, n as renderHead } from '../astro_DHb6ja2A.mjs';
import 'kleur/colors';
import { g as getSession, a as authConfig } from './__DNKPD4wd.mjs';
import 'clsx';

const $$Astro$5 = createAstro();
const $$Auth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Auth;
  const { authConfig: authConfig$1 = authConfig } = Astro2.props;
  let session = await getSession(Astro2.request, authConfig$1);
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Astro2.slots.render("default", [session]))}` })} </div>`;
}, "C:/working-directory/node_modules/auth-astro/src/components/Auth.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro();
const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SignIn;
  const key = Math.random().toString(36).slice(2, 11);
  const { provider, options, authParams, ...attrs } = Astro2.props;
  attrs.class = `signin-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(`.signin-${key}`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document\n		.querySelector(\\`.signin-\\${key}\\`)\n		?.addEventListener('click', () => signIn(provider, options, authParams))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ provider, options, authParams, key }));
}, "C:/working-directory/node_modules/auth-astro/src/components/SignIn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$SignOut = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SignOut;
  const key = Math.random().toString(36).slice(2, 11);
  const { params, ...attrs } = Astro2.props;
  attrs.class = `signout-${key} ${attrs.class ?? ""}`;
  return renderTemplate(_a || (_a = __template(["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(`.signout-${key}`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"], ["", "<button", "> ", " </button>  <script>(function(){", "\n	document.querySelector(\\`.signout-\\${key}\\`)?.addEventListener('click', () => signOut(params))\n})();<\/script>"])), maybeRenderHead(), spreadAttributes(attrs), renderSlot($$result, $$slots["default"]), defineScriptVars({ params, key }));
}, "C:/working-directory/node_modules/auth-astro/src/components/SignOut.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const session = await getSession(Astro2.request);
  return renderTemplate`${maybeRenderHead()}<div class="safety-menu"> <div class="min-w-[100%] bg-[rgba(221,221,221,0)] z-[1000] relative"> <div class="container-1180px flex justify-between max-w-[1180px] min-[80px] ml-auto mr-auto" style="align-items: center;"> <a href="/" class="w-nav-brand float-left relative" style="text-decoration: none;"><img class="opacity-100 block border-none pt-0 h-[80px]" src="w-nav-logo.png" alt="brand-logo"></a> <nav role="navigation" class="mr-[11px] float-right relative block"> <div class="div-block-4" style="text-decoration: none;"> <a class="ml-[10px] mr-[10px] p-[10px] font-semibold transition-all align-top text-left inline-block relative" href="/">Lorem</a> <a class="ml-[10px] mr-[10px] p-[10px] font-semibold transition-all align-top text-left inline-block relative" href="/">Lorem1</a> <a class="ml-[10px] mr-[10px] p-[10px] font-semibold transition-all align-top text-left inline-block relative" href="/">Lorem2</a> <a class="ml-[10px] mr-[10px] p-[10px] font-semibold transition-all align-top text-left inline-block relative" href="/">Lorem3</a> </div> </nav> <div class="nav-button-wrap justify-end min-w-[116px] flex"> ${session ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <p>${session.user?.name}</p> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignIn", $$SignIn, { "provider": "twitch" }, { "default": ($$result3) => renderTemplate` <a class="button-white w-button bg-white font-bold transition-all" style="color: #121212; border-radius: 40px; padding: 13px 16px; font-size: 14px; line-height: 24px;" href="/" id="signin-button">
Acceder
</a> ` })} ` })}`} </div> </div> </div> </div> `;
}, "C:/working-directory/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/working-directory/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main><a href="auth.astro">GO TO AUTH</a></main> ` })} `;
}, "C:/working-directory/src/pages/index.astro", void 0);

const $$file = "C:/working-directory/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
