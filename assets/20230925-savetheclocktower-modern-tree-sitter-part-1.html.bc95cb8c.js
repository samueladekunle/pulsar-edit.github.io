import{_ as n,o,c as s,f as l,a as e,b as t,d as a,e as i,r as h}from"./app.e63a3e54.js";const d={},u=e("p",null,[t("The last few releases of Pulsar have been bragging about a feature that arguably isn\u2019t even new: our "),e("strong",null,"experimental \u201Cmodern\u201D Tree-sitter implementation"),t(". You might\u2019ve read that phrase a few times now without fully understanding what it means, and an explanation is long overdue.")],-1),c=e("p",null,"This is the first of a series of articles about Pulsar\u2019s ongoing project to migrate its Tree-sitter implementation to a more modern version \u2014\xA0the culmination of hundreds of hours of development work that started back in February of this year. It first shipped in Pulsar version 1.106 back in June as an opt-in feature, and is being improved on an ongoing basis with each new monthly release.",-1),m=e("p",null,"This is a big feature, perhaps the biggest since Pulsar was forked from Atom \u2014 and yet it\u2019s a feature that, if we\u2019ve done our jobs right, won\u2019t even seem like much of a change to most users. Before we dive into the deep end, I\u2019ll try to explain why this is a topic worthy of multiple blog posts.",-1),g=e("h2",{id:"what-is-tree-sitter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-tree-sitter","aria-hidden":"true"},"#"),t(" What is Tree-sitter?")],-1),p={href:"https://tree-sitter.github.io/tree-sitter/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/maxbrunsfeld",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zed.dev/",target:"_blank",rel:"noopener noreferrer"},w=i('<p>It\u2019s a code parsing system that represents your code as a tree of nodes. It\u2019s very fast on first parse \u2014 and even faster at re-parsing code after you\u2019ve made changes, because it can reuse the output from the last parse and reprocess only the parts that have changed.</p><p>You can use its output to underpin lots of features that you\u2019d need in a code editor:</p><ul><li>syntax highlighting</li><li>code folding</li><li>contextual awareness (for example: <em>is the cursor currently within a string?</em>)</li><li>indentation hinting (for example: <em>if I press <kbd>Return</kbd> here, should the next line be indented by one level?</em>)</li><li>buffer navigation (for example: <em>select the entire string that my cursor is in</em>, or <em>move the cursor to the nearest opening HTML tag</em>)</li><li>symbol navigation (viewing an outline of your current file, or jumping to a symbol with a specific name)</li></ul><p>A Tree-sitter parser is designed to parse code <em>quickly</em>, but not necessarily with 100% accuracy; the goal is to be accurate <em>enough</em> for the purposes listed above.</p><h2 id="what-is-the-new-tree-sitter-integration-replacing" tabindex="-1"><a class="header-anchor" href="#what-is-the-new-tree-sitter-integration-replacing" aria-hidden="true">#</a> What is the new Tree-sitter integration replacing?</h2><p>The new Tree-sitter integration \u2014 which I\u2019ll be calling <strong>modern Tree-sitter</strong> throughout this series \u2014 won\u2019t replace anything except for the <em>previous</em> Tree-sitter integration, which I\u2019ll be calling <strong>legacy Tree-sitter</strong>.</p><p>Once we decide modern Tree-sitter is stable, we\u2019ll drop support for legacy Tree-sitter so that Pulsar can update to a newer version of Electron.</p>',7),b={href:"https://macromates.com/manual/en/language_grammars",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"TextMate grammars",-1),T={href:"https://macromates.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"if-tree-sitter-is-already-in-pulsar-why-write-a-new-implementation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#if-tree-sitter-is-already-in-pulsar-why-write-a-new-implementation","aria-hidden":"true"},"#"),t(" If Tree-sitter is already in Pulsar, why write a new implementation?")],-1),I=e("p",null,"Good question! Atom was, after all, the first code editor to ship with support for Tree-sitter. It was introduced in late 2017, and was made the preferred system for syntax highlighting starting with Atom 1.32 nearly a year later.",-1),M=e("p",null,"There are two major reasons why the legacy implementation needs to be replaced:",-1),P=e("p",null,[e("strong",null,"Tree-sitter now has powerful features that the legacy implementation doesn\u2019t leverage."),t(" As is often the case, being the first to implement it meant that Atom found all of Tree-sitter\u2019s early pain points. It was a stated goal to use TextMate-style scope names in the new Tree-sitter grammars \u2014\xA0so as to make migration easier \u2014 but Atom had to invent its own system for mapping Tree-sitter output to scope names, and that system didn\u2019t have the flexibility it needed to match TextMate grammars\u2019 syntax highlighting in all cases. This revealed a need for a more robust system of describing tree nodes, and for highlighting ranges that didn\u2019t correspond to the exact ranges of tree nodes.")],-1),S={href:"https://tree-sitter.github.io/tree-sitter/using-parsers#pattern-matching-with-queries",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,"That\u2019s a task worth doing, but it will change how Tree-sitter grammars are written, so there\u2019s no way to avoid the fact that backward compatibility will be broken. But this is a perfect time to make the leap, because\u2026",-1),j=e("strong",null,[t("We need to switch to the "),e("code",null,"web-tree-sitter"),t(" bindings.")],-1),B={href:"https://nodejs.github.io/node-addon-examples/special-topics/context-awareness/",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"node-tree-sitter",-1),W=e("code",null,"node-tree-sitter",-1),E={href:"https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"web-tree-sitter",-1),N={href:"https://webassembly.org/",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"node-tree-sitter",-1),R=e("code",null,"web-tree-sitter",-1),V=e("code",null,"node-tree-sitter",-1),q=e("p",null,[t("If, someday, the "),e("code",null,"node-tree-sitter"),t(" bindings were updated to be easier to use in an Electron context, we\u2019d be able to migrate back without any further loss of backward compatibility. But for now, "),e("code",null,"web-tree-sitter"),t(" is the way forward, and we\u2019re pleasantly surprised at how well it does the job.")],-1),U=i('<p>Nobody likes to break backward compatibility, but needing to switch to <code>web-tree-sitter</code> presents us with an opportunity. Tree-sitter is more stable and more robust than it was in 2017, so we\u2019re able to replace legacy Tree-sitter with something <em>better</em> rather than something that\u2019s merely <em>equivalent</em>.</p><h2 id="why-is-tree-sitter-better-in-general" tabindex="-1"><a class="header-anchor" href="#why-is-tree-sitter-better-in-general" aria-hidden="true">#</a> Why is Tree-sitter better in general?</h2><p>Here are a few reasons why Pulsar is using Tree-sitter at all, and why Pulsar is configured to prefer a Tree-sitter grammar over a TextMate grammar when both are present:</p><ul><li>Tree-sitter can offer far more accurate and specific syntax highlighting.</li><li>It can give you better understanding of context. For example: it makes it much easier to write snippets that can behave differently based on the context of the cursor.</li><li>It makes it much easier for grammar authors to describe features like code folding and indentation hinting \u2014 making Pulsar smarter and easier to work with.</li><li>It allows for smarter code navigation \u2014 meaning a more modern and flexible way to view the important symbols in your current file.</li><li>It offers package authors a richer system for working with source code files. The syntax tree generated by Tree-sitter can be consumed by packages and leveraged in a number of ways.</li></ul><p>The <em>specific</em> ways in which Tree-sitter will make your life easier will vary based on which languages you use most often, but this post series will explore a handful of examples.</p><h2 id="why-is-this-new-implementation-better-than-the-old-one" tabindex="-1"><a class="header-anchor" href="#why-is-this-new-implementation-better-than-the-old-one" aria-hidden="true">#</a> Why is this new implementation better than the old one?</h2><p>An under-the-hood change like this isn\u2019t necessarily something you\u2019d notice. But Pulsar users may notice some of the downstream effects:</p><ul><li>Most notably, modern Tree-sitter is better at understanding and syntax highlighting your code than legacy Tree-sitter.</li><li>You may notice that Pulsar is better at indenting and dedenting your code as you type, or suggesting ways to fold code blocks that weren\u2019t possible before.</li><li>You may notice new features being added to existing language support \u2014 for example, snippets that do different things based on context \u2014\xA0that weren\u2019t possible under the legacy system.</li></ul><p>The benefits are much more direct to grammar authors:</p><ul><li>It gives authors a more intuitive system for describing syntax highlighting, and one which can finally match a TextMate grammar\u2019s flexibility in how it applies scopes.</li><li>It gives authors brand new systems for describing code folding and indentation hinting.</li><li>Modern Tree-sitter grammars are easier to iterate on \u2014 they allow someone to make changes to a grammar in progress and see them applied instantly.</li></ul><h2 id="i-disabled-tree-sitter-grammars-at-some-point-and-i-don-t-feel-like-i-ve-missed-anything-why-should-i-turn-them-back-on" tabindex="-1"><a class="header-anchor" href="#i-disabled-tree-sitter-grammars-at-some-point-and-i-don-t-feel-like-i-ve-missed-anything-why-should-i-turn-them-back-on" aria-hidden="true">#</a> I disabled Tree-sitter grammars at some point, and I don\u2019t feel like I\u2019ve missed anything. Why should I turn them back on?</h2><p>TextMate grammars are still the main style of grammar in Visual Studio Code, Sublime Text, and other editors. They can\u2019t do all the things that Tree-sitter parsers can do, and most new editors on the market have chosen to use Tree-sitter instead; but even just VSCode\u2019s example tells us that TextMate grammars are no impediment to having a popular and feature-filled editor.</p><p>So I\u2019ll be clear: <strong>we have no plans to deprecate TextMate-style grammars.</strong> They still have their place in Pulsar, and the only thing we\u2019d achieve by deprecating them is to disrupt the editor experience of many of our users.</p><p>In the future, it will still be possible (as it is today) to turn off Tree-sitter grammars, either altogether or selectively for certain kinds of files, and fall back to a TextMate grammar for a given language (if it exists).</p><p>But <strong>our hope is that you\u2019ll give this new Tree-sitter system a chance</strong>, even if you\u2019d disabled Tree-sitter grammars in the past for any reason. We think it\u2019s got all the upsides of the legacy Tree-sitter integration without any of the downsides.</p><h2 id="can-i-use-this-new-implementation-now" tabindex="-1"><a class="header-anchor" href="#can-i-use-this-new-implementation-now" aria-hidden="true">#</a> Can I use this new implementation now?</h2><p>Yes, you can, as long as you\u2019re on Pulsar 1.106 or greater. Open your Pulsar settings and focus the \u201CCore\u201D pane. Find the setting named <strong>Use Modern Tree-Sitter Implementation</strong> and make sure it\u2019s checked, then make sure that the nearby setting named <strong>Use Tree-Sitter Parsers</strong> is also checked. Then restart Pulsar or reload your window.</p><p>If you routinely use the grammar selector and want to be able to switch between Tree-sitter grammars and TextMate grammars at will, locate the <code>grammar-selector</code> package in the \u201CPackages\u201D pane, then click on its <kbd>Settings</kbd> button. Uncheck the setting named <strong>Hide Duplicate TextMate Grammars</strong>. This will give you the ability to choose between modern Tree-sitter, legacy Tree-sitter, and TextMate grammars.</p><h2 id="which-tree-sitter-grammars-come-with-pulsar" tabindex="-1"><a class="header-anchor" href="#which-tree-sitter-grammars-come-with-pulsar" aria-hidden="true">#</a> Which Tree-sitter grammars come with Pulsar?</h2><p>Currently, these grammars are built in:</p><ul><li>C and C++</li><li>Clojure</li><li>CSS</li><li>EJS and ERB (HTML with embedded JavaScript/Ruby)</li><li>Go</li><li>HTML</li><li>Java</li><li>JavaScript</li><li>JSON</li><li>Markdown</li><li>Python</li><li>Ruby</li><li>Rust</li><li>Shell</li><li>TOML</li><li>TypeScript (and TSX)</li><li>YAML</li></ul><p>In addition, Pulsar ships with several specialty Tree-sitter parsers that can be injected into other grammars:</p><ul><li>A parser to detect URLs in text (for identifying and highlighting URLs in strings and comments)</li><li>A parser to detect TODO-style remarks in comments so that they can be highlighted</li><li>A parser to highlight regular expressions in various languages</li><li>A parser for separating YAML front matter from Markdown</li></ul><p>If you use a language that isn\u2019t on the list above and you\u2019re curious about what it would take to give that language a Tree-sitter grammar, you\u2019ll get extra value out of this post series.</p><h2 id="the-old-grammar-highlighted-my-code-in-a-way-that-i-liked-now-things-are-colored-differently-and-it-s-driving-me-nuts-should-i-turn-off-tree-sitter" tabindex="-1"><a class="header-anchor" href="#the-old-grammar-highlighted-my-code-in-a-way-that-i-liked-now-things-are-colored-differently-and-it-s-driving-me-nuts-should-i-turn-off-tree-sitter" aria-hidden="true">#</a> The old grammar highlighted my code in a way that I liked. Now things are colored differently and it\u2019s driving me nuts. Should I turn off Tree-sitter?</h2><p>Please don\u2019t! It\u2019d be like amputating your finger to get rid of a hangnail.</p>',26),Y={href:"https://github.com/orgs/pulsar-edit/discussions",target:"_blank",rel:"noopener noreferrer"},H=e("h2",{id:"why-should-i-write-a-tree-sitter-grammar-for-pulsar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-should-i-write-a-tree-sitter-grammar-for-pulsar","aria-hidden":"true"},"#"),t(" Why should I write a Tree-sitter grammar for Pulsar?")],-1),J=e("p",null,"Because it\u2019s a much friendlier experience than writing your own TextMate grammar, provided that a Tree-sitter parser exists for the language in question.",-1),G=e("code",null,"nvim-treesitter",-1),F={href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"In my experience, turning a Tree-sitter parser into a full-fledged Pulsar grammar takes less than two hours.",-1),D=e("h2",{id:"why-is-this-interesting-enough-to-write-about",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-is-this-interesting-enough-to-write-about","aria-hidden":"true"},"#"),t(" Why is this interesting enough to write about?")],-1),Z=e("p",null,"This Tree-sitter overhaul is the biggest feature to be introduced to Pulsar since it was forked from Atom, and it\u2019s a feature that covers a lot of the surface area of the core editing experience.",-1),X={href:"https://zed.dev/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://nova.app/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://lapce.dev/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://en.wikipedia.org/wiki/Greenfield_project",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,[t("But we\u2019ve got a harder job. Atom embraced most of the concepts inherent to TextMate grammars and built major editor features around them. It wouldn\u2019t be very user-friendly if we introduced a parallel system with a different set of concepts \u2014 it would force users to be aware of "),e("em",null,"which kind"),t(" of language grammar they\u2019re using, and to juggle their mental model accordingly.")],-1),te=e("p",null,"But also: most Pulsar users rely on at least a few community packages that were written for Atom and aren\u2019t actively maintained. We have to be very careful to break backward compatibility as little as possible, and only when it\u2019s absolutely necessary.",-1),re=e("p",null,"For these reasons, we shouldn\u2019t just introduce brand new systems for code highlighting, contextual awareness, and the rest. Instead, we\u2019ll do whatever we can to make the new Tree-sitter system work within \u2014 or identically to \u2014 systems that Atom originally shipped with. The Tree-sitter integration can offer enhancements beyond what TextMate grammars do \u2014 and it will! \u2014 but it\u2019s still got to live in the world that TextMate grammars created.",-1),ae=e("em",null,"conventions",-1),ie={href:"https://github.com/nvim-treesitter/nvim-treesitter",target:"_blank",rel:"noopener noreferrer"},ne=e("p",null,"If you\u2019re at all interested in how we did it, stay tuned for the rest of this series.",-1);function oe(se,le){const r=h("ExternalLinkIcon");return o(),s("div",null,[u,l(" more "),c,m,g,e("p",null,[e("a",p,[t("Tree-sitter"),a(r)]),t(" is a code parsing system. It\u2019s the brainchild of "),e("a",f,[t("Max Brunsfeld"),a(r)]),t(", current "),e("a",y,[t("Zed"),a(r)]),t(" contributor and former contributor to Atom.")]),w,e("p",null,[t("Tree-sitter will continue to exist alongside Atom\u2019s original system for syntax highlighting: "),e("a",b,[_,a(r)]),t(". This grammar system is based on the one invented by "),e("a",T,[t("TextMate"),a(r)]),t(" many years ago, and it\u2019s still being used by editors like "),e("a",v,[t("Visual Studio Code"),a(r)]),t(" and "),e("a",k,[t("Sublime Text"),a(r)]),t(".")]),x,I,M,e("ol",null,[e("li",null,[P,e("p",null,[t("Tree-sitter eventually introduced a powerful "),e("a",S,[t("query language"),a(r)]),t(" that could make the job of syntax highlighting easier. But by that point, Microsoft had bought GitHub, and Atom seemed not to be a major priority anymore, so the legacy implementation was never updated to adopt this query language.")]),A]),e("li",null,[e("p",null,[j,t(" One of the goals of Pulsar is to be able to run the editor on the latest version of Electron. Unfortunately, newer Electron versions make it difficult for Pulsar to use Node modules that are not "),e("a",B,[t("context-aware"),a(r)]),t(". The legacy Tree-sitter implementation uses the "),C,t(" bindings, and it appears to be a tall task to adapt these bindings so that they can be used in newer Electron versions. Right now, Pulsar\u2019s reliance on "),W,t(" is preventing us from upgrading Electron to anything past our current version, 12.2.3 \u2014\xA0which is nearly two years old.")]),e("p",null,[t("So we decided to migrate to the "),e("a",E,[L,t(" bindings"),a(r)]),t(". They use "),e("a",N,[t("WebAssembly"),a(r)]),t(" and can run safely inside a browser or an Electron application. Using WebAssembly instead of a native C++ module like "),O,t(" involves a performance penalty, but we\u2019ve found that penalty to be very small in practice. The "),R,t(" bindings are robust and can do nearly everything that "),V,t(" can do.")]),q])]),U,e("p",null,[t("Instead, you can use your user stylesheet to apply a few lines of overrides to your syntax theme and restore the look you\u2019re used to. "),e("a",Y,[t("Open a topic in our discussion forums"),a(r)]),t(" and someone can tell you exactly how to do it.")]),H,J,e("p",null,[t("Pulsar already has built-in Tree-sitter grammars for most common programming languages. But if you\u2019re a consumer of something more obscure, you might find that someone\u2019s already written a parser for it. The "),G,t(" project \u2014 arguably the largest extant consumer of Tree-sitter \u2014 is responsible for the creation of "),e("a",F,[t("dozens of Tree-sitter parsers"),a(r)]),t(" for niche languages.")]),z,D,Z,e("p",null,[t("Other Tree-sitter\u2013integrated editors like "),e("a",X,[t("Zed"),a(r)]),t(", "),e("a",K,[t("Nova"),a(r)]),t(", and "),e("a",Q,[t("Lapce"),a(r)]),t(" are, to the best of my knowledge, "),e("a",$,[t("greenfield projects"),a(r)]),t(". They are free to invent entirely new conventions.")]),ee,te,re,e("p",null,[t("So in order to pull this off \u2014 to make modern Tree-sitter grammars work within existing systems \u2014 we had to create a brand new set of "),ae,t(" for writing Tree-sitter grammars. In some places, there was prior art from implementations like "),e("a",ie,[t("neovim"),a(r)]),t("\u2019s; in others we were flying blind and had to invent things from scratch.")]),ne])}const de=n(d,[["render",oe],["__file","20230925-savetheclocktower-modern-tree-sitter-part-1.html.vue"]]);export{de as default};