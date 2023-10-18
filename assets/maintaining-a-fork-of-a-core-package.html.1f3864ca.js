import{_ as s,o as r,c as i,a,b as e,d as o,e as n,r as c}from"./app.e63a3e54.js";const d={},l=a("h2",{id:"maintaining-a-fork-of-a-core-package",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#maintaining-a-fork-of-a-core-package","aria-hidden":"true"},"#"),e(" Maintaining a Fork of a Core Package")],-1),p={href:"https://github.com/atom/atom/blob/master/docs/rfcs/003-consolidate-core-packages.md",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/atom/atom",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/atom/one-light-ui",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/pulsar-edit/one-light-ui",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,"packages/one-light-ui",-1),f={href:"https://github.com/pulsar-edit/pulsar/blob/master/packages/README.md",target:"_blank",rel:"noopener noreferrer"},k=a("p",null,"If you forked one of the core packages before it was moved into the atom/atom or pulsar-edit/pulsar repository, and you want to continue merging upstream changes into your fork, please follow the steps below.",-1),b=a("h3",{id:"step-by-step-guide",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#step-by-step-guide","aria-hidden":"true"},"#"),e(" Step-by-step guide")],-1),v={href:"https://github.com/pulsar-edit/one-light-ui",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"one-light-ui-plus",-1),y=n(`<h4 id="add-pulsar-edit-pulsar-as-a-remote" tabindex="-1"><a class="header-anchor" href="#add-pulsar-edit-pulsar-as-a-remote" aria-hidden="true">#</a> Add pulsar-edit/pulsar as a Remote</h4><p>Navigate to your local clone of your fork:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> path/to/your/fork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),x={href:"https://github.com/pulsar-edit/pulsar",target:"_blank",rel:"noopener noreferrer"},w=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> upstream https://github.com/pulsar-edit/pulsar.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="get-the-latest-changes-for-the-core-package" tabindex="-1"><a class="header-anchor" href="#get-the-latest-changes-for-the-core-package" aria-hidden="true">#</a> Get the Latest Changes for the Core Package</h4><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Follow these steps each time you want to merge upstream changes into your fork.</p></div><p>Fetch the latest changes from the pulsar-edit/pulsar repository:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Identify recent changes to the core package. For example, if you&#39;re maintaining a fork of the one-light-ui package, then you&#39;ll want to identify recent changes in the <code>packages/one-light-ui</code> directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> upstream/master -- packages/one-light-ui
f884f6de8 <span class="token punctuation">[</span>themes<span class="token punctuation">]</span> Rename A<span class="token punctuation">[</span>a<span class="token punctuation">]</span>tom -<span class="token operator">&gt;</span> P<span class="token punctuation">[</span>p<span class="token punctuation">]</span>ulsar
0db3190f4 Additional rebranding where needed
234adb874 Remove deprecated code strings
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Look through the log and identify the commits that you want to merge into your fork.</p><h4 id="merge-upstream-changes-into-your-fork" tabindex="-1"><a class="header-anchor" href="#merge-upstream-changes-into-your-fork" aria-hidden="true">#</a> Merge Upstream Changes into Your Fork</h4><p>For each commit that you want to bring into your fork, use [<code>git format-patch</code>][https://git-scm.com/docs/git-format-patch] in conjunction with [<code>git am</code>][https://git-scm.com/docs/git-am]. For example, to merge commit <code>f884f6de8</code> into your fork:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> format-patch <span class="token parameter variable">-1</span> <span class="token parameter variable">--stdout</span> f884f6de8 <span class="token operator">|</span> <span class="token function">git</span> am <span class="token parameter variable">-p3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Repeat this step for each commit that you want to merge into your fork.</p>`,12);function A(F,C){const t=c("ExternalLinkIcon");return r(),i("div",null,[l,a("p",null,[e("Originally, each of Atom's core packages resided in a separate repository. In 2018, in an effort to streamline the development of Atom by reducing overhead, the Atom team "),a("a",p,[e("consolidated many core Atom packages"),o(t)]),e(" into the "),a("a",h,[e("atom/atom repository"),o(t)]),e(". For example, the one-light-ui package was originally maintained in the "),a("a",u,[e("atom/one-light-ui"),o(t)]),e(" repository, but was moved to the "),a("a",m,[g,e(" directory"),o(t)]),e(" in the main repository.")]),a("p",null,[e("The Pulsar team has continued this trend and has move even more packages into the core, particularly default language packages. A list of these packages moved can be found in "),a("a",f,[e("this document"),o(t)]),e(".")]),k,b,a("p",null,[e("For the sake of this guide, let's assume that you forked the "),a("a",v,[e("pulsar-edit/one-light-ui"),o(t)]),e(" repository, renamed your fork to "),_,e(", and made some customizations.")]),y,a("p",null,[e("Add the "),a("a",x,[e("pulsar-edit/pulsar repository"),o(t)]),e(" as a git remote:")]),w])}const I=s(d,[["render",A],["__file","maintaining-a-fork-of-a-core-package.html.vue"]]);export{I as default};
