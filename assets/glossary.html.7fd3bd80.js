import{_ as r,o as l,c as h,a as e,b as a,d as t,w as c,e as i,r as n}from"./app.e63a3e54.js";const d={},p=i('<h3 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary" aria-hidden="true">#</a> Glossary</h3><p>Below is a list of some useful terms we use with regard to Atom.</p><h4 id="buffer" tabindex="-1"><a class="header-anchor" href="#buffer" aria-hidden="true">#</a> Buffer</h4><p>A buffer is the text content of a file in Atom. It&#39;s basically the same as a file for most descriptions, but it&#39;s the version Atom has in memory. For instance, you can change the text of a buffer and it isn&#39;t written to its associated file until you save it.</p><h4 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h4><p>A command is a bit of functionality in Atom that can be triggered by the user either through a <a href="#keybinding">keybinding</a> or a menu item.</p><h4 id="dock" tabindex="-1"><a class="header-anchor" href="#dock" aria-hidden="true">#</a> Dock</h4><p>Docks are collapsible <a href="#pane-container">pane containers</a> that attach to the left, right, and bottom sides of the Atom window.</p><p>Examples:</p><ul><li>Tree View</li><li>Git</li><li>GitHub</li></ul><h4 id="key-combination" tabindex="-1"><a class="header-anchor" href="#key-combination" aria-hidden="true">#</a> Key Combination</h4><p>A key combination is some combination or sequence of keys that are pressed to perform a task.</p><p>Examples:</p><ul><li><kbd class="platform-all">A</kbd></li><li><kbd class="platform-all">Ctrl+Enter</kbd></li><li><kbd class="platform-all">Ctrl+K</kbd> <kbd class="platform-all">Right</kbd></li></ul><h4 id="key-sequence" tabindex="-1"><a class="header-anchor" href="#key-sequence" aria-hidden="true">#</a> Key Sequence</h4><p>A key sequence is a special case of a key combination. It is a key combination that consists of keys that must be pressed and released in sequence. <kbd class="platform-all">Ctrl+K</kbd> <kbd class="platform-all">Down</kbd> is a key sequence. <kbd class="platform-all">Alt+S</kbd> is not a key sequence because it is two keys that are pressed and released together rather than in succession.</p><h4 id="keybinding" tabindex="-1"><a class="header-anchor" href="#keybinding" aria-hidden="true">#</a> Keybinding</h4><p>A keybinding is the mapping of a <a href="#key-combination">key combination</a>, such as <kbd class="platform-all">Ctrl+Enter</kbd> to an Atom command.</p><h4 id="keymap" tabindex="-1"><a class="header-anchor" href="#keymap" aria-hidden="true">#</a> Keymap</h4><p>A keymap is a collection of <a href="#keybinding">keybindings</a>. It can also refer to a file or files containing keybindings for an Atom package or Atom itself.</p><h4 id="package" tabindex="-1"><a class="header-anchor" href="#package" aria-hidden="true">#</a> Package</h4>',21),m=i('<h4 id="pane" tabindex="-1"><a class="header-anchor" href="#pane" aria-hidden="true">#</a> Pane</h4><p>A pane is a visual section of the editor space. Each pane can hold multiple <a href="#pane-item">pane items</a>. There is always at least one pane in each Atom window.</p><h4 id="pane-container" tabindex="-1"><a class="header-anchor" href="#pane-container" aria-hidden="true">#</a> Pane Container</h4><p>A section of the Atom UI that can contain multiple <a href="#pane">panes</a>.</p><h4 id="pane-item" tabindex="-1"><a class="header-anchor" href="#pane-item" aria-hidden="true">#</a> Pane Item</h4><p>Some item, often an editor, that is displayed within a <a href="#pane">pane</a>. In the default configuration of Atom, pane items are represented by tabs at the top of each pane.</p>',6),f={class:"custom-container note"},u=e("p",{class:"custom-container-title"},"Note",-1),b=e("strong",null,"Note:",-1),k={href:"https://github.com/atom/tabs",target:"_blank",rel:"noopener noreferrer"},y=e("h4",{id:"panel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#panel","aria-hidden":"true"},"#"),a(" Panel")],-1),g=e("p",null,"A piece of the Atom UI that is outside the editor space.",-1),_=e("p",null,"Examples:",-1),A=e("ul",null,[e("li",null,"Find and Replace"),e("li",null,"Keybinding Resolver")],-1);function x(w,C){const o=n("RouterLink"),s=n("ExternalLinkIcon");return l(),h("div",null,[p,e("p",null,[a("An Atom plugin. There is a bunch more information in the section on "),t(o,{to:"/using-atom/sections/atom-packages/"},{default:c(()=>[a("Atom Packages")]),_:1}),a(".")]),m,e("div",f,[u,e("p",null,[b,a(` The reason why we don't call them "tabs" is because you can disable the `),e("a",k,[a("tabs package"),t(s)]),a(" and then there aren't any tabs. For a similar reason, we don't call them files because some things can be shown in a pane that aren't files, like the Settings View.")])]),y,g,_,A])}const I=r(d,[["render",x],["__file","glossary.html.vue"]]);export{I as default};
