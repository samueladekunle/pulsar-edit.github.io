import{_ as i,o as c,c as p,a as n,b as s,d as e,f as t,e as o,r as l}from"./app.e63a3e54.js";const u={},r=o(`<h2 id="configuration-api" tabindex="-1"><a class="header-anchor" href="#configuration-api" aria-hidden="true">#</a> Configuration API</h2><h3 id="reading-config-settings" tabindex="-1"><a class="header-anchor" href="#reading-config-settings" aria-hidden="true">#</a> Reading Config Settings</h3><p>If you are writing a package that you want to make configurable, you&#39;ll need to read config settings via the <code>atom.config</code> global. You can read the current value of a namespaced config key with <code>atom.config.get</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// read a value with \`config.get\`</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;editor.showInvisibles&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showInvisibles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or you can subscribe via <code>atom.config.observe</code> to track changes from any view object.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>View<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;space-pen&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">MyView</span> <span class="token keyword">extends</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fontSizeObserveSubscription <span class="token operator">=</span>
      atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&#39;editor.fontSize&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> <span class="token punctuation">{</span>previous<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">adjustFontSize</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">detached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fontSizeObserveSubscription<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>atom.config.observe</code> method will call the given callback immediately with the current value for the specified key path, and it will also call it in the future whenever the value of that key path changes. If you only want to invoke the callback the next time the value changes, use <code>atom.config.onDidChange</code> instead.</p>`,7),d={href:"https://atom.io/docs/api/latest/Disposable",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"Disposable",-1),h=n("code",null,"@fontSizeObserveSubscription",-1),m={href:"https://atom.io/docs/api/latest/CompositeDisposable",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"CompositeDisposable",-1),g=o(`<h3 id="writing-config-settings" tabindex="-1"><a class="header-anchor" href="#writing-config-settings" aria-hidden="true">#</a> Writing Config Settings</h3><p>The <code>atom.config</code> database is populated on startup from <strong><em>LNX/MAC</em></strong>: <code>~/.pulsar/config.cson</code> - <strong><em>WIN</em></strong>: <code>%USERPROFILE%\\.pulsar\\config.cson</code> but you can programmatically write to it with <code>atom.config.set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// basic key update</span>
atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;core.showInvisibles&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),f={href:"https://atom.io/docs/api/latest/Config",target:"_blank",rel:"noopener noreferrer"};function b(w,y){const a=l("ExternalLinkIcon");return c(),p("div",null,[r,n("p",null,[s("Subscription methods return "),n("a",d,[k,e(a)]),t("TODO: There is no Pulsar API documented yet so keeping link to Atom until we have this"),s(" objects that can be used to unsubscribe. Note in the example above how we save the subscription to the "),h,s(" instance variable and dispose of it when the view is detached. To group multiple subscriptions together, you can add them all to a "),n("a",m,[v,e(a)]),s(" that you dispose when the view is detached.")]),g,n("p",null,[s("If you're exposing package configuration via specific key paths, you'll want to associate them with a schema in your package's main module. Read more about schemas in the "),n("a",f,[s("Config API documentation"),e(a)]),s(". "),t("TODO: There is no Pulsar API documented yet so keeping link to Atom until we have this")])])}const x=i(u,[["render",b],["__file","configuration-api.html.vue"]]);export{x as default};
