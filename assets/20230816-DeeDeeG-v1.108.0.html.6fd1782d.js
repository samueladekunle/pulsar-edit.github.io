import{_ as o,o as n,c as i,a as e,b as t,d as a,f as l,e as s,r as d}from"./app.e63a3e54.js";const u={},h={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.108.0",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"what-is-new-in-1-108-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-new-in-1-108-0","aria-hidden":"true"},"#"),t(" What is new in 1.108.0?")],-1),c=e("p",null,"Welcome to our latest Pulsar release! We have some really exciting new features this month that we can't wait to share.",-1),m=e("code",null,"pulsar-updater",-1),g={href:"https://pulsar-edit.dev/blog/20230801-Daeraxa-AugustUpdate.html#pulsar-updater-package-in-the-works",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"pulsar-updater",-1),_={href:"https://pulsar-edit.dev/community.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://pulsar-edit.dev/blog/20230601-Daeraxa-JuneUpdate.html#tree-sitter-updates-are-live",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"markdown-preview",-1),k={href:"https://pulsar-edit.dev/blog/20230801-Daeraxa-AugustUpdate.html#update-to-markdown-preview-language-identifiers",target:"_blank",rel:"noopener noreferrer"},v=s('<p>Last, but definitely not least, we have finally begun the migration from <code>apm</code> to <code>ppm</code>. When we started the Pulsar project, one of the first things we did was rename the &quot;Atom Package Manager&quot; to the &quot;Pulsar Package Manager&quot; for obvious reasons. However, under the hood, you would still find <code>apm</code> binaries and files; this was particularly relevant for Windows users, for which there was no automatic <code>PATH</code> registration. The good news is that we have begun the transition to change them. For the time being, <code>apm</code> will remain alongside <code>ppm</code> until we can be sure we haven&#39;t hit any unforeseen issues.</p><p>And with that, we bring this to a close. As ever, a huge thank you to all of our community members and especially our donors, without whom this project just wouldn&#39;t be possible.</p><p>Until next time, happy coding, and see you amongst the stars!</p><ul><li>The Pulsar Team</li></ul><hr><h3 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h3><ul><li>Restored ability for <code>less</code> files in packages to use inline JavaScript inside backticks.</li><li>Fixed a syntax highlighting issue inside the <code>styleguide</code> package.</li><li>Fixed an issue with rubygems timing out on ARM Linux workflow.</li><li>Rewrote Tree-sitter scope predicates to use <code>#is?</code> and <code>#is-not?</code> where applicable.</li><li>Ensure that project-specific setting overrides don&#39;t leak to the user&#39;s config file when the settings UI is visited.</li><li>Added a feature in <code>markdown-preview</code> that adds support for Linguist, Chroma, Rouge, and HighlightJS for language identifiers in fenced code blocks.</li><li>Fixed the <code>TextMate</code> <code>language-toml</code> grammar to properly support whitespace where-ever it may appear.</li><li>Added a Tree-Sitter grammar for YAML files.</li><li>Added a new core package <code>pulsar-updater</code> to help users update Pulsar.</li><li>Added <code>ppm</code> and <code>ppm.cmd</code> binaries/launchers within ppm. This allows easier integration of correctly named binaries on more systems in more contexts (especially Windows). Existing <code>apm</code> and <code>apm.cmd</code> binaries/launchers are still there for the time being.</li><li>Added a modern Tree-Sitter grammar for Markdown files.</li></ul><h4 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h4>',8),y={href:"https://github.com/pulsar-edit/pulsar/pull/659",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/pulsar-edit/pulsar/pull/669",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/pulsar-edit/pulsar/pull/660",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"pulsar-updater",-1),M={href:"https://github.com/pulsar-edit/pulsar/pull/656",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"autocomplete-atom-api",-1),P=e("code",null,"autoflow",-1),S=e("code",null,"deprecation-cop",-1),F={href:"https://github.com/pulsar-edit/pulsar/pull/664",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/pulsar-edit/pulsar/pull/666",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/pulsar-edit/pulsar/pull/653",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/pulsar-edit/pulsar/pull/634",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/pulsar-edit/pulsar/pull/646",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/pulsar-edit/pulsar/pull/629",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/pulsar-edit/pulsar/pull/622",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/pulsar-edit/pulsar/pull/654",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/pulsar-edit/pulsar/pull/655",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/pulsar-edit/pulsar/pull/652",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/pulsar-edit/pulsar/pull/651",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/pulsar-edit/pulsar/pull/632",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/pulsar-edit/pulsar/pull/648",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"less-cache",-1),H={href:"https://github.com/pulsar-edit/pulsar/pull/644",target:"_blank",rel:"noopener noreferrer"},Y=e("h4",{id:"ppm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ppm","aria-hidden":"true"},"#"),t(" ppm")],-1),J={href:"https://github.com/pulsar-edit/ppm/pull/80",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/pulsar-edit/ppm/pull/62",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/pulsar-edit/ppm/pull/57",target:"_blank",rel:"noopener noreferrer"};function K(Q,X){const r=d("ExternalLinkIcon");return n(),i("div",null,[e("p",null,[t("Great Scott! A new Pulsar release. Pulsar 1.108.0 is "),e("a",h,[t("available now!"),a(r)])]),l(" more "),p,c,e("p",null,[t("To kick things off, we have a brand new core package, "),m,t(". We recently featured this on our monthly "),e("a",g,[t("Community update"),a(r)]),t(" , but in case you missed it (or simply just want to read more about it), "),f,t(" is a new package designed to help notify users about new Pulsar releases and where they can get them. As always, we are open to feedback, especially when we have brand new functionality like this, so please let us know via any of our "),e("a",_,[t("social channels"),a(r)]),t(" if you have anything for us.")]),e("p",null,[t("Next, we have yet more grammars for our modern Tree-sitter implementation. If you have missed any details on this, then you can read more on "),e("a",w,[t("our blog"),a(r)]),t('. The two new grammars in question are for Markdown and YAML. So what benefits does this give us? Well, for example, with Markdown, this provides significantly more accurate highlighting than the existing "Textmate" grammar; it provides HTML syntax highlighting as well as YAML frontmatter support (a common addition to Markdown documents these days, particularly for static site generators), and it allows us to clean up some of the scope names to suit a more conventional approach to naming. All these features should provide a much better Markdown writing experience in Pulsar and allow us to easily keep it up to date with anything new we might want to add in the future.')]),e("p",null,[t("On the topic of Markdown we also have a rather large update to our "),b,t(' package, which provides a window to display the rendered output of your Markdown documents. The big change here is the syntax highlighting displayed within code blocks specified via a "language identifier". The list of these supported identifiers was rather out of date, and the world had moved on around it, so the decision was made to bring this up to date with the behaviour that people expect from such functionality. We go into far more detail about this change in our '),e("a",k,[t("Blog post"),a(r)]),t(" so have a read of that if you want to know the full details about this change.")]),v,e("ul",null,[e("li",null,[t("Added: Add the Tree-Sitter Markdown grammar "),e("a",y,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Fixed: [pulsar-updater] Correct deb-get instructions ( + readme change) "),e("a",x,[t("@Daeraxa"),a(r)])]),e("li",null,[t("Added: Tree-sitter running fixes "),e("a",A,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Added: Add "),T,t(" as a core bundled Package "),e("a",M,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Added: Manual Decaf Bundle ("),D,t(", "),P,t(", "),S,t(") Source "),e("a",F,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Bumped: [Time Sensitive] Update Cirrus Encrypted token for GitHub Access "),e("a",B,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Added: [core]: Transforming Deprecated Math Usage - Support for Variables "),e("a",L,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Added: Add Tree-sitter grammar for YAML "),e("a",U,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Fixed: [language-toml] Add whitespace rule to values "),e("a",W,[t("@arite"),a(r)])]),e("li",null,[t("Added: [markdown-preview]: Support for nested table objects in Yaml Frontmatter "),e("a",C,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Added: [markdown-preview]: Revamp Fenced Code Block Language Identifiers "),e("a",j,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Bumped: ppm: Update submodule to 49c8ced8f9552bb4aeb279130 "),e("a",V,[t("@DeeDeeG"),a(r)])]),e("li",null,[t("Fixed: [settings-view] Don't let project-specific settings pollute the UI "),e("a",E,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Added: [modern-tree-sitter] Overhaul Tree-sitter scope tests "),e("a",G,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Fixed: fix(arm): use rubygems from APT "),e("a",I,[t("@cat-master21"),a(r)])]),e("li",null,[t("Added: [language-*]: Manual Spec Decaf (Part 1) "),e("a",N,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Fixed: [styleguide] Fix error when styleguide is shown... "),e("a",R,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Bumped: Bump "),q,t(" to 2.0.1 "),e("a",H,[t("@savetheclocktower"),a(r)])])]),Y,e("ul",null,[e("li",null,[t("Added: Add 'ppm' bins to complement existing 'apm' bins "),e("a",J,[t("@DeeDeeG"),a(r)])]),e("li",null,[t('Fixed: Replace "apm" by "ppm" in help messages. '),e("a",O,[t("@azuledu"),a(r)])]),e("li",null,[t("Bumped: Update OS, actions, node "),e("a",z,[t("@Spiker985"),a(r)])])])])}const $=o(u,[["render",K],["__file","20230816-DeeDeeG-v1.108.0.html.vue"]]);export{$ as default};