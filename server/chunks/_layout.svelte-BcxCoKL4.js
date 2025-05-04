import { h as attr_class, i as attr, j as stringify, d as base } from './index-BIfeC0yn.js';

/* empty css                                                */
function Navigation($$payload) {
  let isOpen = false;
  $$payload.out += `<nav><button class="burger" aria-label="Toggle navigation">≡</button> <div class="hamburger-menu"><ul${attr_class("", void 0, { "open": isOpen })}><span><a${attr("href", `${stringify(base)}/`)}>Home</a></span> <span><a${attr("href", `${stringify(base)}/About-Me`)}>About Me</a></span> <span><a${attr("href", `${stringify(base)}/CV`)}>CV</a></span> <span><a${attr("href", `${stringify(base)}/Art-Catagories`)}>Art Categories</a></span> <span><a${attr("href", `${stringify(base)}/Animations`)}>Animations</a></span> <span><a${attr("href", `${stringify(base)}/Digital-Art`)}>Digital Art</a></span> <span><a${attr("href", `${stringify(base)}/Game-Catagories`)}>Game Categories</a></span> <span><a${attr("href", `${stringify(base)}/Games-College`)}>Games Education</a></span> <span><a${attr("href", `${stringify(base)}/Games-Personal`)}>Games Personal</a></span></ul></div></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1iail2i"><p>©2025 Kacie Franklin. Portfolio</p></footer>`;
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div id="background"></div> <header>`;
  Navigation($$payload);
  $$payload.out += `<!----></header> `;
  Footer($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->;`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BcxCoKL4.js.map
