import{_ as s,o as t,c as r,a,b as e,d as l,e as o,r as i}from"./app.e63a3e54.js";const c={},d=o(`<h2 id="hacking-on-the-core" tabindex="-1"><a class="header-anchor" href="#hacking-on-the-core" aria-hidden="true">#</a> Hacking on the Core</h2><p>You will first want to build and run Pulsar <a href="#building-pulsar">from source</a>.</p><h3 id="running-in-development-mode" tabindex="-1"><a class="header-anchor" href="#running-in-development-mode" aria-hidden="true">#</a> Running in Development Mode</h3><p>Once you have a local copy of Pulsar cloned and built, you can then run Pulsar in Development Mode. But first, if you cloned Pulsar to somewhere other than <strong><em>LNX/MAC</em></strong>: <code>~/github/pulsar</code> - <strong><em>WIN</em></strong>: <code>%USERPROFILE%\\github\\pulsar</code> you will need to set the <code>ATOM_DEV_RESOURCE_PATH</code> environment variable to point to the folder in which you cloned Pulsar. To run Pulsar in Dev Mode, use the <code>--dev</code> parameter from the terminal:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar <span class="token parameter variable">--dev</span> <span class="token operator">&lt;</span>path-to-open<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>There are a couple benefits of running Pulsar in Dev Mode:</p>`,6),u=o("<li>When the <code>ATOM_DEV_RESOURCE_PATH</code> environment variable is set correctly, Pulsar is run using the source code from your local <code>pulsar-edit/pulsar</code> repository. This means you don&#39;t have to rebuild after every change, just restart Pulsar \u{1F44D}</li><li>Packages that exist in <strong><em>LNX/MAC</em></strong>: <code>~/.pulsar/dev/packages</code> - <strong><em>WIN</em></strong>: <code>%USERPROFILE%\\.pulsar\\dev\\packages</code> are loaded instead of packages of the same name normally loaded from other locations. This means that you can have development versions of packages you use loaded but easily go back to the stable versions by launching without Dev Mode.</li>",2),h={href:"https://github.com/pulsar-edit/pulsar/tree/master/packages/dev-live-reload",target:"_blank",rel:"noopener noreferrer"},p=a("code",null,"window:reload",-1),m=o(`<h3 id="running-pulsar-core-tests-locally" tabindex="-1"><a class="header-anchor" href="#running-pulsar-core-tests-locally" aria-hidden="true">#</a> Running Pulsar Core Tests Locally</h3><p>In order to run Pulsar Core tests from the terminal, first be certain to set the <code>ATOM_DEV_RESOURCE_PATH</code> environment variable as mentioned above and then:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>path-to-your-local-pulsar-repo<span class="token operator">&gt;</span>
$ pulsar <span class="token parameter variable">--test</span> spec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(g,b){const n=i("ExternalLinkIcon");return t(),r("div",null,[d,a("ol",null,[u,a("li",null,[e("Packages that contain stylesheets, such as syntax themes, will have those stylesheets automatically reloaded by the "),a("a",h,[e("dev-live-reload"),l(n)]),e(" package. This does not live reload JavaScript or CoffeeScript files \u2014 you'll need to reload the window ("),p,e(") to see changes to those.")])]),m])}const f=s(c,[["render",v],["__file","hacking-on-the-core.html.vue"]]);export{f as default};
