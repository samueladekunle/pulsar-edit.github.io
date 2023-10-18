import{a as h,_ as u}from"./find-replace-project.fe3ff270.js";import{_ as p,o as f,c as m,d as o,w as r,a as e,b as t,e as c,r as s}from"./app.e63a3e54.js";const _={},g=e("h2",{id:"find-and-replace",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#find-and-replace","aria-hidden":"true"},"#"),t(" Find and Replace")],-1),b=e("p",null,"Finding and replacing text in your file or project is quick and easy in Pulsar.",-1),k=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+F"),t(" - Search within a buffer")]),e("li",null,[e("kbd",null,"Ctrl+Shift+F"),t(" - Search the entire project")])],-1),y=e("ul",null,[e("li",null,[e("kbd",null,"Cmd+F"),t(" - Search within a buffer")]),e("li",null,[e("kbd",null,"Cmd+Shift+F"),t(" - Search the entire project")])],-1),x=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+F"),t(" - Search within a buffer")]),e("li",null,[e("kbd",null,"Ctrl+Shift+F"),t(" - Search the entire project")])],-1),w=c('<p>If you launch either of those commands, you&#39;ll be greeted with the Find and Replace panel at the bottom of your screen.</p><p><img src="'+h+'" alt="Find and replace text in the current file" title="Find and replace text in the current file"></p><p>To search within your current file you can press <strong><em>LNX/WIN</em></strong>: <kbd>Cmd+F</kbd> - <strong><em>MAC</em></strong>: <kbd>Ctrl+F</kbd>, type in a search string and press <strong><em>LNX/WIN/MAC</em></strong>: <kbd>Enter</kbd> or <strong><em>LNX/WIN</em></strong><kbd>F3</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+G</kbd> or the &quot;Find Next&quot; button) multiple times to cycle through all the matches in that file. <kbd>Alt+Enter</kbd> will find all occurrences of the search string. The Find and Replace panel also contains buttons for toggling case sensitivity, performing regular expression matching, scoping the search to selections, and performing whole word search.</p><p>If you type a string in the replacement text box, you can replace matches with a different string. For example, if you wanted to replace every instance of the string &quot;Atom&quot; with the string &quot;Pulsar&quot;, you would enter those values in the two text boxes and press the &quot;Replace All&quot; button to perform the replacements.</p>',4),F={class:"custom-container note"},v=e("p",{class:"custom-container-title"},"Note",-1),C=e("p",null,[e("strong",null,"Note:"),t(" Pulsar uses JavaScript regular expressions to perform regular expression searches.")],-1),S={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noopener noreferrer"},N=c('<p>You can also find and replace throughout your entire project if you invoke the panel with <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+Shift+F</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+Shift+F</kbd>.</p><p><img src="'+u+'" alt="Find and replace text in your project" title="Find and replace text in your project"></p><p>This is a great way to find out where in your project a function is called, an anchor is linked to or a specific misspelling is located. Click on the matching line to jump to that location in that file.</p>',3),j={href:"https://en.wikipedia.org/wiki/Glob_%28programming%29",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"src/*.js",-1),q=e("code",null,"src",-1),R=e("code",null,"**",-1),I=e("code",null,"docs/**/*.md",-1),T=e("code",null,"docs/a/foo.md",-1),W=e("code",null,"docs/a/b/foo.md",-1),E=e("p",null,[t("When you have multiple project folders open, this feature can also be used to search in only one of those folders. For example, if you had the folders "),e("code",null,"/path1/folder1"),t(" and "),e("code",null,"/path2/folder2"),t(" open, you could enter a pattern starting with "),e("code",null,"folder1"),t(" to search only in the first folder.")],-1),L=e("p",null,[t("Press "),e("kbd",null,"Esc"),t(" while focused on the Find and Replace panel to clear the pane from your workspace.")],-1),P={href:"https://github.com/pulsar-edit/find-and-replace",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/pulsar-edit/scandal",target:"_blank",rel:"noopener noreferrer"};function M(V,X){const d=s("Tabs"),n=s("ExternalLinkIcon");return f(),m("div",null,[g,b,o(d,{id:"6",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:r(({title:a,value:l,isActive:i})=>[k]),tab1:r(({title:a,value:l,isActive:i})=>[y]),tab2:r(({title:a,value:l,isActive:i})=>[x]),_:1}),w,e("div",F,[v,C,e("p",null,[t("When doing a regular expression search, the replacement syntax to refer back to search groups is $1, $2, \u2026 $&. Refer to JavaScript's "),e("a",S,[t("guide to regular expressions"),o(n)]),t(" to learn more about regular expression syntax you can use in Pulsar.")])]),N,e("p",null,[t("You can limit a search to a subset of the files in your project by entering a "),e("a",j,[t("glob pattern"),o(n)]),t(' into the "File/Directory pattern" text box. For example, the pattern '),A,t(" would restrict the search to JavaScript files in the "),q,t(' directory. The "globstar" pattern ('),R,t(") can be used to match arbitrarily many subdirectories. For example, "),I,t(" will match "),T,t(", "),W,t(", etc. You can enter multiple glob patterns separated by commas, which is useful for searching in multiple file types or subdirectories.")]),E,L,e("p",null,[t("The Find and Replace functionality is implemented in the "),e("a",P,[t("find-and-replace"),o(n)]),t(" package and uses the "),e("a",J,[t("scandal"),o(n)]),t(" Node module to do the actual searching.")])])}const Y=p(_,[["render",M],["__file","find-and-replace.html.vue"]]);export{Y as default};