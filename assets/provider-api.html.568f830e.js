import{_ as t,o as i,c as p,a as s,b as e,d as a,e as o,r}from"./app.e63a3e54.js";const l="/assets/autocomplete-description.1efc24d3.jpg",c={},u=o(`<h1 id="provider-api" tabindex="-1"><a class="header-anchor" href="#provider-api" aria-hidden="true">#</a> Provider API</h1><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please note that its possible this is outdated, as its original version was published by @&#39;Nathan Sobo&#39; on Jan 3, 2018.</p></div><p>The Provider API allows you to make autocomplete+ awesome. The Pulsar community will ultimately judge the quality of Pulsar&#39;s autocomplete experience by the breadth and depth of the provider ecosystem. We&#39;re so excited that you&#39;re here reading about how to make Pulsar awesome.</p><blockquote><p>The following examples are in CoffeeScript. If you would like to add JavaScript examples, please feel free to edit this page!</p></blockquote><h2 id="defining-a-provider" tabindex="-1"><a class="header-anchor" href="#defining-a-provider" aria-hidden="true">#</a> Defining A Provider</h2><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>provider <span class="token operator">=</span>
  <span class="token comment"># This will work on JavaScript and CoffeeScript files, but not in js comments.</span>
  <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.source.js, .source.coffee&#39;</span>
  <span class="token property">disableForSelector</span><span class="token operator">:</span> <span class="token string">&#39;.source.js .comment&#39;</span>

  <span class="token comment"># This will take priority over the default provider, which has an inclusionPriority of 0.</span>
  <span class="token comment"># \`excludeLowerPriority\` will suppress any providers with a lower priority</span>
  <span class="token comment"># i.e. The default provider will be suppressed</span>
  <span class="token property">inclusionPriority</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token property">excludeLowerPriority</span><span class="token operator">:</span> <span class="token keyword">true</span>

  <span class="token comment"># This will be suggested before the default provider, which has a suggestionPriority of 1.</span>
  <span class="token property">suggestionPriority</span><span class="token operator">:</span> <span class="token number">2</span>

  <span class="token comment"># Let autocomplete+ filter and sort the suggestions you provide.</span>
  <span class="token property">filterSuggestions</span><span class="token operator">:</span> <span class="token keyword">true</span>

  <span class="token comment"># Required: Return a promise, an array of suggestions, or null.</span>
  <span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">,</span> scopeDescriptor<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> activatedManually<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token property">text</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment"># (optional): (*experimental*) called when user the user selects a suggestion for the purpose of loading additional information about the suggestion.</span>
  <span class="token property">getSuggestionDetailsOnSelect</span><span class="token operator">:</span> <span class="token punctuation">(</span>suggestion<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>newSuggestion<span class="token punctuation">)</span>

  <span class="token comment"># (optional): called _after_ the suggestion \`replacementPrefix\` is replaced</span>
  <span class="token comment"># by the suggestion \`text\` in the buffer</span>
  <span class="token property">onDidInsertSuggestion</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> triggerPosition<span class="token punctuation">,</span> suggestion<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>

  <span class="token comment"># (optional): called when your provider needs to be cleaned up. Unsubscribe</span>
  <span class="token comment"># from things, kill any processes, etc.</span>
  <span class="token property">dispose</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The properties of a provider:</p>`,7),d=o("<li><code>selector</code> (required): Defines the scope selector(s) (can be comma-separated) for which your provider should receive suggestion requests</li><li><code>getSuggestions</code> (required): Is called when a suggestion request has been dispatched by <code>autocomplete+</code> to your provider. Return an array of suggestions (if any) in the order you would like them displayed to the user. Returning a Promise of an array of suggestions is also supported.</li><li><code>getSuggestionDetailsOnSelect</code> (optional): (<strong>experimental</strong>) Is called when a suggestion is selected by the user for the purpose of loading more information about the suggestion. Return a Promise of the new suggestion to replace it with or return <code>null</code> if no change is needed.</li><li><code>disableForSelector</code> (optional): Defines the scope selector(s) (can be comma-separated) for which your provider should not be used</li><li><code>inclusionPriority</code> (optional): A number to indicate its priority to be included in a suggestions request. The default provider has an inclusion priority of <code>0</code>. Higher priority providers can suppress lower priority providers with <code>excludeLowerPriority</code>.</li><li><code>excludeLowerPriority</code> (optional): Will not use lower priority providers when this provider is used.</li><li><code>suggestionPriority</code> (optional): A number to determine the sort order of suggestions. The default provider has an suggestion priority of <code>1</code></li><li><code>filterSuggestions</code> (optional): If set to <code>true</code>, <code>autocomplete+</code> will perform fuzzy filtering and sorting on the list of matches returned by <code>getSuggestions</code>.</li><li><code>dispose</code> (optional): Will be called if your provider is being destroyed by <code>autocomplete+</code></li>",9),h=s("code",null,"onDidInsertSuggestion",-1),g=s("code",null,"editor",-1),m={href:"https://atom.io/docs/api/latest/TextEditor",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"triggerPosition",-1),v={href:"https://atom.io/docs/api/latest/Point",target:"_blank",rel:"noopener noreferrer"},f=s("li",null,[s("code",null,"suggestion"),e(": The suggestion object that was inserted.")],-1),b=o(`<h2 id="support-for-asynchronous-request-handling" tabindex="-1"><a class="header-anchor" href="#support-for-asynchronous-request-handling" aria-hidden="true">#</a> Support For Asynchronous Request Handling</h2><p>Some providers satisfy a suggestion request in an asynchronous way (e.g. it may need to dispatch requests to an external process to get suggestions). To asynchronously provide suggestions, simply return a <code>Promise</code> from your <code>getSuggestions</code>:</p><div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre class="language-coffeescript"><code><span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token comment"># Build your suggestions here asynchronously...</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>suggestions<span class="token punctuation">)</span> <span class="token comment"># When you are done, call resolve and pass your suggestions to it</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-suggestion-request-s-options-object" tabindex="-1"><a class="header-anchor" href="#the-suggestion-request-s-options-object" aria-hidden="true">#</a> The Suggestion Request&#39;s Options Object</h2><p>An <code>options</code> object will be passed to your <code>getSuggestions</code> function, with the following properties:</p>`,5),y=s("li",null,[s("code",null,"editor"),e(": The current "),s("code",null,"TextEditor")],-1),_=s("li",null,[s("code",null,"bufferPosition"),e(": The position of the cursor")],-1),w=s("code",null,"scopeDescriptor",-1),x={href:"http://flight-manual.atom.io/behind-atom/sections/scoped-settings-scopes-and-scope-descriptors/#scope-descriptors",target:"_blank",rel:"noopener noreferrer"},P=s("li",null,[s("code",null,"prefix"),e(": The word characters immediately preceding the current cursor position")],-1),T=s("li",null,[s("code",null,"activatedManually"),e(": Whether the autocomplete request was initiated by the user (e.g. with ctrl+space)")],-1),S=o(`<h2 id="suggestions" tabindex="-1"><a class="header-anchor" href="#suggestions" aria-hidden="true">#</a> Suggestions</h2><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>provider <span class="token operator">=</span>
  <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.source.js, .source.coffee&#39;</span>
  <span class="token property">disableForSelector</span><span class="token operator">:</span> <span class="token string">&#39;.source.js .comment&#39;</span>

  <span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">,</span> scopeDescriptor<span class="token punctuation">,</span> prefix<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
      <span class="token comment"># Find your suggestions here</span>
      suggestion <span class="token operator">=</span>
        <span class="token property">text</span><span class="token operator">:</span> <span class="token string">&#39;someText&#39;</span> <span class="token comment"># OR</span>
        <span class="token property">snippet</span><span class="token operator">:</span> <span class="token string">&#39;someText(\${1:myArg})&#39;</span>
        <span class="token property">displayText</span><span class="token operator">:</span> <span class="token string">&#39;someText&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">replacementPrefix</span><span class="token operator">:</span> <span class="token string">&#39;so&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;function&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">leftLabel</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">leftLabelHTML</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">rightLabel</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">rightLabelHTML</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">className</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">iconHTML</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">description</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">descriptionMoreURL</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># (optional)</span>
        <span class="token property">characterMatchIndices</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># (optional)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>suggestion<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your suggestions should be returned from <code>getSuggestions</code> as an array of objects with the following properties:</p>`,3),q=s("li",null,[s("code",null,"text"),e(" (required; or "),s("code",null,"snippet"),e("): The text which will be inserted into the editor, in place of the prefix")],-1),L=s("code",null,"snippet",-1),A=s("code",null,"text",-1),j=s("code",null,"'myFunction(${1:arg1}, ${2:arg2})'",-1),I={href:"https://github.com/pulsar-edit/snippets",target:"_blank",rel:"noopener noreferrer"},M=o("<li><code>displayText</code> (optional): A string that will show in the UI for this suggestion. When not set, <code>snippet || text</code> is displayed. This is useful when <code>snippet</code> or <code>text</code> displays too much, and you want to simplify. e.g. <code>{type: &#39;attribute&#39;, snippet: &#39;class=&quot;$0&quot;$1&#39;, displayText: &#39;class&#39;}</code></li><li><code>replacementPrefix</code> (optional): The text immediately preceding the cursor, which will be replaced by the <code>text</code>. If not provided, the prefix passed into <code>getSuggestions</code> will be used.</li>",2),H=s("code",null,"type",-1),R={href:"https://github.com/atom-community/autocomplete-plus/pull/334",target:"_blank",rel:"noopener noreferrer"},W=s("code",null,"variable",-1),D=s("code",null,"constant",-1),F=s("code",null,"property",-1),N=s("code",null,"value",-1),C=s("code",null,"method",-1),E=s("code",null,"function",-1),U=s("code",null,"class",-1),O=s("code",null,"type",-1),$=s("code",null,"keyword",-1),B=s("code",null,"tag",-1),V=s("code",null,"snippet",-1),z=s("code",null,"import",-1),J=s("code",null,"require",-1),Y=s("code",null,"leftLabel",-1),G={href:"https://github.com/atom-community/autocomplete-plus/pull/334",target:"_blank",rel:"noopener noreferrer"},K=o("<li><code>leftLabelHTML</code> (optional): Use this instead of <code>leftLabel</code> if you want to use html for the left label.</li><li><code>rightLabel</code> (optional): An indicator (e.g. <code>function</code>, <code>variable</code>) denoting the &quot;kind&quot; of suggestion this represents</li><li><code>rightLabelHTML</code> (optional): Use this instead of <code>rightLabel</code> if you want to use html for the right label.</li><li><code>className</code> (optional): Class name for the suggestion in the suggestion list. Allows you to style your suggestion via CSS, if desired</li>",4),Q=s("code",null,"iconHTML",-1),X=s("code",null,` iconHTML: '<i class="icon-move-right"></i>'`,-1),Z={href:"https://github.com/atom-community/autocomplete-plus/pull/334",target:"_blank",rel:"noopener noreferrer"},ss=s("code",null,"type",-1),es=s("li",null,[s("code",null,"description"),e(" (optional): A doc-string summary or short description of the suggestion. When specified, it will be displayed at the bottom of the suggestions list.")],-1),ns=s("li",null,[s("code",null,"descriptionMoreURL"),e(" (optional): A url to the documentation or more information about this suggestion. When specified, a "),s("code",null,"More.."),e(" link will be displayed in the description area. "),s("img",{src:l,alt:"autocomplete-description"})],-1),as=s("li",null,[s("code",null,"characterMatchIndices"),e(` (optional): A list of indexes where the characters in the prefix appear in this suggestion's text. e.g. "foo" in "foo_bar" would be `),s("code",null,"[0, 1, 2]"),e(".")],-1),os=o(`<h2 id="registering-your-provider-with-autocomplete" tabindex="-1"><a class="header-anchor" href="#registering-your-provider-with-autocomplete" aria-hidden="true">#</a> Registering Your Provider With <code>autocomplete+</code></h2><h3 id="api-4-0-0" tabindex="-1"><a class="header-anchor" href="#api-4-0-0" aria-hidden="true">#</a> API 4.0.0</h3><p>In your <code>package.json</code>, add:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;providedServices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;autocomplete.provider&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;versions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;4.0.0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;provide&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, in your <code>main.coffee</code> (or whatever file you define as your <code>main</code> in <code>package.json</code> i.e. <code>&quot;main&quot;: &quot;./lib/your-main&quot;</code> would imply <code>your-main.coffee</code>), add the following:</p><p>For a single provider:</p><div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre class="language-coffeescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
  <span class="token property">provide</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token class-member variable">@yourProviderHere</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>For multiple providers, just return an array:</p><div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre class="language-coffeescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
  <span class="token property">provide</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token class-member variable">@yourProviderHere</span><span class="token punctuation">,</span> <span class="token class-member variable">@yourOtherProviderHere</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="provider-examples" tabindex="-1"><a class="header-anchor" href="#provider-examples" aria-hidden="true">#</a> Provider Examples</h2><p>We&#39;ve taken to making each provider its own clean repo:</p>`,11),ts={href:"https://github.com/pulsar-edit/autocomplete-css",target:"_blank",rel:"noopener noreferrer"},is={href:"https://github.com/pular-edit/autocomplete-html",target:"_blank",rel:"noopener noreferrer"},ps={href:"https://github.com/pulsar-edit/autocomplete-snippets",target:"_blank",rel:"noopener noreferrer"},rs=o(`<p>Check out the lib directory in each of these for the code!</p><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h2><h3 id="generating-a-new-prefix" tabindex="-1"><a class="header-anchor" href="#generating-a-new-prefix" aria-hidden="true">#</a> Generating a new prefix</h3><p>The <code>prefix</code> passed to <code>getSuggestions</code> may not be sufficient for your language. You may need to generate your own prefix. Here is a pattern to use your own prefix:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>provider <span class="token operator">=</span>
  <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.source.js, .source.coffee&#39;</span>

  <span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    prefix <span class="token operator">=</span> @<span class="token function">getPrefix</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">)</span>

    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
      suggestion <span class="token operator">=</span>
        <span class="token property">text</span><span class="token operator">:</span> <span class="token string">&#39;someText&#39;</span>
        <span class="token property">replacementPrefix</span><span class="token operator">:</span> prefix
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>suggestion<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token property">getPrefix</span><span class="token operator">:</span> <span class="token punctuation">(</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token comment"># Whatever your prefix regex might be</span>
    regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\w0-9_-]+$</span><span class="token regex-delimiter">/</span></span>

    <span class="token comment"># Get the text for the line up to the triggered buffer position</span>
    line <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getTextInRange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>bufferPosition<span class="token punctuation">.</span>row<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> bufferPosition<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment"># Match the regex to the line, and return the match</span>
    line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regex<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">or</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function ls(cs,us){const n=r("ExternalLinkIcon");return i(),p("div",null,[u,s("ul",null,[d,s("li",null,[h,e(" (optional): Function that is called when a suggestion from your provider was inserted into the buffer "),s("ul",null,[s("li",null,[g,e(": the "),s("a",m,[e("TextEditor"),a(n)]),e(" your suggestion was inserted in")]),s("li",null,[k,e(": A "),s("a",v,[e("Point"),a(n)]),e(" where autocomplete was triggered")]),f])])]),b,s("ul",null,[y,_,s("li",null,[w,e(": The "),s("a",x,[e("scope descriptor"),a(n)]),e(" for the current cursor position")]),P,T]),S,s("ul",null,[q,s("li",null,[L,e(" (required; or "),A,e("): A snippet string. This will allow users to tab through function arguments or other options. e.g. "),j,e(". See the "),s("a",I,[e("snippets"),a(n)]),e(" package for more information.")]),M,s("li",null,[H,e(" (optional): The suggestion type. It will be converted into an icon shown against the suggestion. "),s("a",R,[e("screenshot"),a(n)]),e(". Predefined styles exist for "),W,e(", "),D,e(", "),F,e(", "),N,e(", "),C,e(", "),E,e(", "),U,e(", "),O,e(", "),$,e(", "),B,e(", "),V,e(", "),z,e(", "),J,e(". This list represents nearly everything being colorized.")]),s("li",null,[Y,e(" (optional): This is shown before the suggestion. Useful for return values. "),s("a",G,[e("screenshot"),a(n)])]),K,s("li",null,[Q,e(" (optional): If you want complete control over the icon shown against the suggestion. e.g. "),X,e(),s("a",Z,[e("screenshot"),a(n)]),e(". The background color of the icon will still be determined (by default) from the "),ss,e(".")]),es,ns,as]),os,s("ul",null,[s("li",null,[s("a",ts,[e("Autocomplete CSS"),a(n)])]),s("li",null,[s("a",is,[e("Autocomplete HTML"),a(n)])]),s("li",null,[s("a",ps,[e("Autocomplete Snippets"),a(n)])])]),rs])}const hs=t(c,[["render",ls],["__file","provider-api.html.vue"]]);export{hs as default};
