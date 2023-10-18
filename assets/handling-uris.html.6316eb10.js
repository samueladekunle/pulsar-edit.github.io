import{_ as t,o,c as r,a as e,b as a,d as p,e as n,r as l}from"./app.e63a3e54.js";const i={},c=n(`<h2 id="handling-uris" tabindex="-1"><a class="header-anchor" href="#handling-uris" aria-hidden="true">#</a> Handling URIs</h2><p>Packages have the ability to handle special URIs triggered from the system; for example, a package named <code>my-package</code> can register itself to handle any URI starting with <code>atom://my-package/</code>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Handling URIs triggered from other applications, like a web browser, is a powerful tool, but also one that can be jarring. You should shape your package&#39;s user experience to handle this well. In general, you should <strong>avoid taking direct action on behalf of a user</strong>. For example, a URI handler that immediately installs a package is too invasive, but a URI handler that shows the package&#39;s pane in the settings view is useful. A URI handler that begins to clone a repo is overly aggressive, but a URI handler that <em>prompts</em> the user to clone a repo is okay.</p><p>Any package with a URI handler that we feel violates this guideline is subject to removal from the Pulsar package registry at our discretion.</p></div><h3 id="modifying-your-package-json" tabindex="-1"><a class="header-anchor" href="#modifying-your-package-json" aria-hidden="true">#</a> Modifying your <code>package.json</code></h3><p>The first step to handling URIs from your package is to modify its <code>package.json</code> file. You should add a new key called <code>uriHandler</code>, and its value should be an object.</p><p>The <code>uriHandler</code> object <em>must</em> contain a key called <code>method</code> with a string value that tells Pulsar which method in your package to call when a URI needs to be handled. The object can <em>optionally</em> include a key called <code>deferActivation</code> which can be set to the boolean <code>false</code> to prevent Pulsar from deferring activation of your package \u2014\xA0see more below.</p><p>For example, if we want our package <code>my-package</code> to handle URIs with a method on our package&#39;s main module called <code>handleURI</code>, we could add the following to our <code>package.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;uriHandler&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;handleURI&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="modifying-your-main-module" tabindex="-1"><a class="header-anchor" href="#modifying-your-main-module" aria-hidden="true">#</a> Modifying your Main Module</h3>`,9),d=e("code",null,"atom://my-package/",-1),u=e("code",null,"handleURI",-1),h={href:"https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"url.parse(uri, true)",-1),k=n(`<p>Here&#39;s a sample package, written in JavaScript, that handles URIs with the <code>package.json</code> configuration we saw above.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// normal activation code here</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">handleURI</span><span class="token punctuation">(</span><span class="token parameter">parsedUri</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parsedUri<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When Pulsar handles, for example, the URI <code>atom://my-package/my/test/url?value=42&amp;other=false</code>, the package would log out something like the following:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&#39;atom:&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">slashes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;my-package&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&#39;my-package&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;?value=true&amp;other=false&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;42&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token string">&#39;false&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/my/test/url&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/my/test/url?value=true&amp;other=false&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;atom://my-package/my/test/url?value=true&amp;other=false&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that the query string arguments are available in the <code>query</code> property, but are strings \u2014\xA0you&#39;ll have to convert to other native types yourself.</p><h3 id="controlling-activation-deferral" tabindex="-1"><a class="header-anchor" href="#controlling-activation-deferral" aria-hidden="true">#</a> Controlling Activation Deferral</h3><p>For performance reasons, adding a <code>uriHandler</code> entry to your package&#39;s <code>package.json</code> will enable <em>deferred activation</em>. This means that Pulsar will not activate your package until it has a URI for it to handle \u2014\xA0it will then activate your package and then immediately call the URI handler method. If you want to disable the deferred activation, ensuring your package is activated upon startup, you can add <code>&quot;deferActivation&quot;: false</code> to the URI handler config. For example,</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;uriHandler&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;handleURI&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;deferActivation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Before doing this, make sure your package actually needs to be activated immediately \u2014\xA0disabling deferred activation means Pulsar takes longer to start since it has to activate all packages without deferred activation.</p><h3 id="linux-support" tabindex="-1"><a class="header-anchor" href="#linux-support" aria-hidden="true">#</a> Linux Support</h3><p>Because URI handling is different across operating systems and distributions, there is no built-in URI handler support for Pulsar on Linux. If you want to configure URI handling on your system yourself, then you should configure <code>atom:</code> protocol URI&#39;s to trigger Pulsar with the <code>--uri-handler</code> flag; for example, the URI <code>atom://test/uri</code> should launch Atom via <code>atom --uri-handler atom://test/uri</code>.</p><h2 id="core-uris" tabindex="-1"><a class="header-anchor" href="#core-uris" aria-hidden="true">#</a> Core URIs</h2><p>Pulsar provides a core URI to handle opening files with the syntax <code>atom://core/open/file?filename=&lt;filepath&gt;&amp;line=&lt;line&gt;&amp;column=&lt;col&gt;</code></p>`,13);function g(v,y){const s=l("ExternalLinkIcon");return o(),r("div",null,[c,e("p",null,[a("Now that we've told Pulsar that we want our package to handle URIs beginning with "),d,a(" via our "),u,a(" method, we need to actually write this method. Pulsar passes two arguments to your URI handler method; the first one is the fully-parsed URI plus query string, "),e("a",h,[a("parsed with Node's "),m,p(s)]),a(". The second argument is the raw, string URI; this is normally not needed since the first argument gives you structured information about the URI.")]),k])}const b=t(i,[["render",g],["__file","handling-uris.html.vue"]]);export{b as default};
