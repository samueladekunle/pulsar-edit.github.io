import{d as p,_ as m,a as f,b as g,c as y,e as b,f as w,g as u}from"./finder.3011bbbb.js";import{_ as k,o as v,c as _,a as e,b as t,d as o,w as n,e as l,r as c}from"./app.e63a3e54.js";const P={},S=l('<h2 id="pulsar-basics" tabindex="-1"><a class="header-anchor" href="#pulsar-basics" aria-hidden="true">#</a> Pulsar Basics</h2><p>Now that Pulsar is installed on your system, let&#39;s fire it up, configure it and get acquainted with the editor.</p><p>When you launch Pulsar for the first time, you should get a screen that looks like this:</p><p><img src="'+m+'" alt="Pulsar&#39;s welcome screen"></p><p>This is the Pulsar welcome screen and gives you a pretty good starting point for how to get started with the editor.</p><h3 id="terminology" tabindex="-1"><a class="header-anchor" href="#terminology" aria-hidden="true">#</a> Terminology</h3>',6),C=l('<h3 id="command-palette" tabindex="-1"><a class="header-anchor" href="#command-palette" aria-hidden="true">#</a> Command Palette</h3><p>In that welcome screen, we are introduced to probably the most important command in Pulsar, the Command Palette. If you press <kbd class="platform-mac"> Cmd+Shift+P</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+P </kbd> while focused in an editor pane, the command palette will pop up.</p><div class="custom-container note"><p class="custom-container-title">Note:</p><p>Throughout the book, we will use shortcut keybindings like <strong><em>LNX</em></strong>: <kbd>Ctrl+Shift+P</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+Shift+P</kbd> - <strong><em>WIN</em></strong>: <kbd>Ctrl+Shift+P</kbd> to demonstrate how to run a command and tabbed sections where necessary where instructions for different platforms may differ.</p><p>If you have customized your Pulsar keymap, you can always see the keybinding you have mapped in the Command Palette or the Keybindings tab in the <a href="#settings-and-preferences">Settings View</a>.</p></div><p>This search-driven menu can do just about any major task that is possible in Pulsar. Instead of clicking around all the application menus to look for something, you can press <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+Shift+P</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+Shift+P</kbd> and search for the command.</p><p><img src="'+f+'" alt="Command Palette" title="Command Palette"></p><p>Not only can you see and quickly search through thousands of possible commands, but you can also see if there is a keybinding associated with it. This is great because it means you can guess your way to doing interesting things while also learning the shortcut key strokes for doing it.</p><p>For the rest of the book, we will try to be clear as to the text you can search for in the Command Palette in addition to the keybinding for different commands.</p><h3 id="settings-and-preferences" tabindex="-1"><a class="header-anchor" href="#settings-and-preferences" aria-hidden="true">#</a> Settings and Preferences</h3><p>Pulsar has a number of settings and preferences you can modify in the Settings View.</p><p><img src="'+g+'" alt="Settings View" title="Settings View"></p><p>This includes things like changing the theme, specifying how to handle wrapping, font settings, tab size, scroll speed and much more. You can also use this screen to install new packages and themes, which we&#39;ll cover in <a href="/docs/packages">Pulsar Packages</a>.</p><p>To open the Settings View, you can:</p><ul><li>Use the <strong><em>LNX</em></strong>: <em>Edit &gt; Preferences</em> - <strong><em>MAC</em></strong>: <em>Pulsar &gt; Preferences</em> - <strong><em>WIN</em></strong>: <em>File &gt; Settings</em> menu item in the menu bar</li><li>Search for <code>settings-view:open</code> in the <a href="#command-palette">Command Palette</a></li><li>Use the <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+,</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+,</kbd> keybinding.</li></ul><h4 id="changing-the-theme" tabindex="-1"><a class="header-anchor" href="#changing-the-theme" aria-hidden="true">#</a> Changing the Theme</h4><p>The Settings View also lets you change the themes for Pulsar. Pulsar ships with 4 different UI themes, dark and light variants of the Pulsar and One theme, as well as 8 different syntax themes. You can modify the active theme by clicking on the Themes tab in the sidebar of the Settings View, or you can install new themes by clicking the Install tab.</p><p><img src="'+y+'" alt="Changing the theme from the Settings View" title="Changing the theme from the Settings View"></p><p>The UI themes control the style of UI elements like the tabs and the tree view, while the syntax themes control the syntax highlighting of text you load into the editor. To change the syntax or UI theme, simply pick something different in the appropriate dropdown list.</p>',17),T={href:"https://web.pulsar-edit.dev",target:"_blank",rel:"noopener noreferrer"},F=e("h4",{id:"soft-wrap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#soft-wrap","aria-hidden":"true"},"#"),t(" Soft Wrap")],-1),x=e("p",null,"You can use the Settings View to specify your whitespace and wrapping preferences.",-1),z=e("p",null,[e("img",{src:p,alt:"Whitespace and wrapping preferences settings"})],-1),A=e("p",null,[t('Enabling "Soft Tabs" will insert spaces instead of actual tab characters when you press the '),e("kbd",null,"Tab"),t(' key and the "Tab Length" setting specifies how many spaces to insert when you do so, or how many spaces are used to represent a tab if "Soft Tabs" is disabled.')],-1),I=e("p",null,'The "Soft Wrap" option will wrap lines that are too long to fit in your current window. If soft wrapping is disabled, the lines will simply run off the side of the screen and you will have to scroll the window to see the rest of the content. If "Soft Wrap At Preferred Line Length" is toggled, the lines will wrap at 80 characters instead of the end of the screen. You can also change the default line length to a value other than 80 on this screen.',-1),O=l('<h3 id="opening-modifying-and-saving-files" tabindex="-1"><a class="header-anchor" href="#opening-modifying-and-saving-files" aria-hidden="true">#</a> Opening, Modifying, and Saving Files</h3><p>Now that your editor is looking and acting how you want, let&#39;s start opening up and editing files. This is a text editor after all, right?</p><h4 id="opening-a-file" tabindex="-1"><a class="header-anchor" href="#opening-a-file" aria-hidden="true">#</a> Opening a File</h4><p>There are several ways to open a file in Pulsar. You can do it by choosing <em>File &gt; Open</em> from the menu bar or by pressing</p><p><strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+O</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+O</kbd></p><p>to choose a file from the standard dialog.</p><p><img src="'+b+'" alt="Open file by dialog" title="Open file by dialog"></p><p>This is useful for opening a file that is not contained in the project you&#39;re currently in (more on that next), or if you&#39;re starting from a new window for some reason.</p><p>Another way to open a file in Pulsar is from the command line using the <code>pulsar</code> command.</p>',9),j={class:"custom-container note"},N=e("p",{class:"custom-container-title"},"Note",-1),Y=e("p",null,[e("strong",null,"Install Shell Commands on macOS")],-1),V=e("p",null,[t('The Pulsar menu has an item named "Install Shell Commands" which installs the '),e("code",null,"pulsar"),t(" and "),e("code",null,"ppm"),t(" commands if Pulsar wasn't able to install them itself on a macOS system.")],-1),W={href:"https://github.com/pulsar-edit/pulsar/issues/187",target:"_blank",rel:"noopener noreferrer"},L=l(`<p>You can run the <code>pulsar</code> command with one or more file paths to open up those files in Pulsar.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar <span class="token parameter variable">--help</span>
<span class="token operator">&gt;</span> Pulsar Editor v1.100.0

<span class="token operator">&gt;</span> Usage: pulsar <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>path <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token operator">&gt;</span> One or <span class="token function">more</span> paths to files or folders may be specified. If there is an
<span class="token operator">&gt;</span> existing Pulsar window that contains all of the given folders, the paths
<span class="token operator">&gt;</span> will be opened <span class="token keyword">in</span> that window. Otherwise, they will be opened <span class="token keyword">in</span> a new
<span class="token operator">&gt;</span> window.

<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a great tool if you&#39;re used to the terminal or you work from the terminal a lot. Just fire off <code>pulsar [files]</code> and you&#39;re ready to start editing. You can even open a file at a certain line (and optionally column) so the cursor will be positioned exactly where you want. For example, you may search some keyword in a repository to find the line you want to edit:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;Opening a File$&#39;</span>
getting-started/sections/pulsar-basics.md:130:<span class="token comment">##### Opening a File</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and then jump to the beginning of that line by appending a colon and the line number to the file path:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar getting-started/sections/pulsar-basics.md:130
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sometimes you may want the cursor to jump to the exact column position of the searched keyword. Just append another colon plus the column number:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">--column</span> <span class="token string">&#39;Windows Explorer&#39;</span>
getting-started/sections/pulsar-basics.md.md:150:722
$ pulsar getting-started/sections/pulsar-basics.md:150:722
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="editing-and-saving-a-file" tabindex="-1"><a class="header-anchor" href="#editing-and-saving-a-file" aria-hidden="true">#</a> Editing and Saving a File</h4>`,9),q={href:"https://web.pulsar-edit.dev",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,[t("To save a file you can choose "),e("em",null,"File > Save"),t(" from the menu bar or "),e("kbd",null,"Ctrl+S"),t(" to save the file. If you choose "),e("em",null,"File > Save As"),t(" or press "),e("kbd",null,"Ctrl+Shift+S"),t(" then you can save the current content in your editor under a different file name. Finally,you can choose "),e("em",null,"File > Save All"),t(" to save all the open files in Pulsar.")],-1),M=e("p",null,[t("To save a file you can choose "),e("em",null,"File > Save"),t(" from the menu bar or "),e("kbd",null,"Cmd+S"),t(" to save the file. If you choose "),e("em",null,"File > Save As"),t(" or press "),e("kbd",null,"Cmd+Shift+S"),t(" then you can save the current content in your editor under a different file name. Finally,you can choose "),e("em",null,"File > Save All"),t(" or press "),e("kbd",null,"Alt+Cmd+S"),t(" to save all the open files in Pulsar.")],-1),E=e("p",null,[e("kbd",null,"Ctrl+S"),t(" to save the file. If you choose "),e("em",null,"File > Save As"),t(" or press "),e("kbd",null,"Ctrl+Shift+S"),t(" then you can save the current content in your editor under a different file name. Finally,you can choose "),e("em",null,"File > Save All"),t(" to save all the open files in Pulsar.")],-1),U=e("h3",{id:"opening-directories",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-directories","aria-hidden":"true"},"#"),t(" Opening Directories")],-1),G=e("p",null,[t("Pulsar doesn't just work with single files though; you will most likely spend most of your time working on projects with multiple files. To open a directory, choose the menu item "),e("em",null,"File > Open Folder"),t(" and select a directory from the dialog. You can also add more than one directory to your current Pulsar window, by choosing "),e("em",null,"File > Add Project Folder"),t(" from the menu bar or pressing "),e("kbd",null,"Ctrl+Shift+A"),t(".")],-1),$=e("p",null,[t("Pulsar doesn't just work with single files though; you will most likely spend most of your time working on projects with multiple files. To open a directory, choose the menu item "),e("em",null,"File > Open"),t(" and select a directory from the dialog. You can also add more than one directory to your current Pulsar window, by choosing "),e("em",null,"File > Add Project Folder"),t(" from the menu bar or pressing "),e("kbd",null,"Cmd+Shift+O"),t(".")],-1),R=e("p",null,[t("Pulsar doesn't just work with single files though; you will most likely spend most of your time working on projects with multiple files. To open a directory, choose the menu item "),e("em",null,"File > Open Folder"),t(" and select a directory from the dialog. You can also add more than one directory to your current Pulsar window, by choosing "),e("em",null,"File > Add Project Folder"),t(" from the menu bar or pressing "),e("kbd",null,"Ctrl+Shift+A"),t(".")],-1),X=l('<p>You can open any number of directories from the command line by passing their paths to the <code>pulsar</code> command line tool. For example, you could run the command <code>pulsar ./hopes ./dreams</code> to open both the <code>hopes</code> and the <code>dreams</code> directories at the same time.</p><p>When you open Pulsar with one or more directories, you will automatically get a Tree View on the side of your window.</p><p><img src="'+w+'" alt="Tree View in an open project" title="Tree View in an open project"></p><p>The Tree View allows you to explore and modify the file and directory structure of your project. You can open, rename, delete and create new files from this view.</p>',4),D=e("p",null,[t("You can also hide and show it with "),e("kbd",null,"Ctrl+\\"),t(" or the "),e("code",null,"tree-view: toggle"),t(" command from the Command Palette, and "),e("kbd",null,"Alt+\\"),t(" will focus it. When the Tree view has focus you can press "),e("kbd",null,"A"),t(", "),e("kbd",null,"M"),t(", or "),e("kbd",null,"Delete"),t(" to add, move or delete files and folders. You can also right-click on a file or folder in the Tree view to see many of the various options, including all of these plus showing the file in your native filesystem or copying the file path to the clipboard.")],-1),J=e("p",null,[t("You can also hide and show it with "),e("kbd",null,"Cmd+\\"),t(" or the "),e("code",null,"tree-view: toggle"),t(" command from the Command Palette, and "),e("kbd",null,"Ctrl+0"),t(" will focus it. When the Tree view has focus you can press "),e("kbd",null,"A"),t(", "),e("kbd",null,"M"),t(", or "),e("kbd",null,"Delete"),t(" to add, move or delete files and folders. You can also right-click on a file or folder in the Tree view to see many of the various options, including all of these plus showing the file in Finder or copying the file path to the clipboard.")],-1),H=e("p",null,[t("You can also hide and show it with "),e("kbd",null,"Ctrl+\\"),t(" or the "),e("code",null,"tree-view: toggle"),t(" command from the Command Palette, and "),e("kbd",null,"Alt+\\"),t(" will focus it. When the Tree view has focus you can press "),e("kbd",null,"A"),t(", "),e("kbd",null,"M"),t(", or "),e("kbd",null,"Delete"),t(" to add, move or delete files and folders. You can also right-click on a file or folder in the Tree view to see many of the various options, including all of these plus showing the file in Windows Explorer or copying the file path to the clipboard.")],-1),K=e("div",{class:"custom-container note"},[e("p",{class:"custom-container-title"},"Note"),e("p",null,[e("strong",null,"Pulsar Packages")]),e("p",null,"Like many parts of Pulsar, the Tree View is not built directly into the editor, but is its own standalone package that is shipped with Pulsar by default. Packages that are bundled with Pulsar are referred to as Core packages. Ones that aren't bundled with Pulsar are referred to as Community packages."),e("p",null,"You can find the source code to the Tree View on GitHub at https://github.com/pulsar-edit/tree-view."),e("p",null,"This is one of the interesting things about Pulsar. Many of its core features are actually just packages implemented the same way you would implement any other functionality. This means that if you don't like the Tree View for example, you could write your own implementation of that functionality and replace it entirely.")],-1),Q=e("h4",{id:"opening-a-file-in-a-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-a-file-in-a-project","aria-hidden":"true"},"#"),t(" Opening a File in a Project")],-1),Z=e("p",null,"Once you have a project open in Pulsar, you can easily find and open any file within that project.",-1),ee=e("p",null,[t("If you press "),e("kbd",null,"Ctrl+T"),t(" or "),e("kbd",null,"Ctrl+P"),t(", the Fuzzy Finder will pop up. This will let you quickly search for any file in your project by typing parts of the path.")],-1),te=e("p",null,[e("img",{src:u,alt:"Opening files with the Fuzzy Finder",title:"Opening files with the Fuzzy Finder"})],-1),ne=e("p",null,[t("You can also search through only the files currently opened (rather than every file in your project) with "),e("kbd",null,"Ctrl+B"),t('. This searches through your "buffers" or open files. You can also limit this fuzzy search with '),e("kbd",null,"Ctrl+Shift+B"),t(", which searches only through the files which are new or have been modified since your last Git commit.")],-1),oe=e("p",null,[t("If you press "),e("kbd",null,"Cmd+T"),t(" or "),e("kbd",null,"Cmd+P"),t(", the Fuzzy Finder will pop up. This will let you quickly search for any file in your project by typing parts of the path.")],-1),ie=e("p",null,[e("img",{src:u,alt:"Opening files with the Fuzzy Finder",title:"Opening files with the Fuzzy Finder"})],-1),se=e("p",null,[t("You can also search through only the files currently opened (rather than every file in your project) with "),e("kbd",null,"Cmd+B"),t('. This searches through your "buffers" or open files. You can also limit this fuzzy search with '),e("kbd",null,"Cmd+Shift+B"),t(", which searches only through the files which are new or have been modified since your last Git commit.")],-1),ae=e("p",null,[t("If you press "),e("kbd",null,"Ctrl+T"),t(" or "),e("kbd",null,"Ctrl+P"),t(", the Fuzzy Finder will pop up. This will let you quickly search for any file in your project by typing parts of the path.")],-1),le=e("p",null,[e("img",{src:u,alt:"Opening files with the Fuzzy Finder",title:"Opening files with the Fuzzy Finder"})],-1),re=e("p",null,[t("You can also search through only the files currently opened (rather than every file in your project) with "),e("kbd",null,"Ctrl+B"),t('. This searches through your "buffers" or open files. You can also limit this fuzzy search with '),e("kbd",null,"Ctrl+Shift+B"),t(", which searches only through the files which are new or have been modified since your last Git commit.")],-1),de=e("code",null,"core.ignoredNames",-1),he=e("code",null,"fuzzy-finder.ignoredNames",-1),ce=e("code",null,"core.excludeVCSIgnoredPaths",-1),ue={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},pe=e("code",null,".gitignore",-1),me=e("code",null,"core.ignoredNames",-1),fe=e("code",null,"fuzzy-finder.ignoredNames",-1),ge={href:"https://github.com/isaacs/minimatch",target:"_blank",rel:"noopener noreferrer"},ye=l('<div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Configuration Setting Notation</strong></p><p>Sometimes you&#39;ll see us refer to configuration settings all spelled out like &quot;Ignored Names in Core Settings&quot;. Other times you&#39;ll see us use the shorthand name like <code>core.ignoredNames</code>. Both of these refer to the same thing. The shorthand is the package name, then a dot <code>.</code>, followed by the &quot;camel-cased&quot; name of the setting.</p><p>If you have a phrase you want to camel-case, follow these steps:</p><ol><li>Lowercase the first word</li><li>Capitalize the first letter in all other words</li><li>Remove the spaces</li></ol><p>So &quot;Ignored Names&quot; becomes &quot;ignoredNames&quot;.</p></div>',1);function be(we,ke){const r=c("RouterLink"),d=c("ExternalLinkIcon"),h=c("Tabs");return v(),_("div",null,[S,e("p",null,[t("You can find definitions for all the various terms that we use throughout the manual in our "),o(r,{to:"/docs/launch-manual/sections/getting-started/resources/glossary/"},{default:n(()=>[t("Glossary")]),_:1}),t(".")]),C,e("p",null,[t("There are also dozens of themes on the "),e("a",T,[t("Pulsar Package Repository"),o(d)]),t(" that you can choose from if you want something different. We will cover customizing a theme in "),o(r,{to:"/docs/launch-manual/sections/using-pulsar/#basic-customization"},{default:n(()=>[t("Style Tweaks")]),_:1}),t(" and creating your own theme in "),o(r,{to:"/docs/launch-manual/sections/core-hacking/#creating-a-theme"},{default:n(()=>[t("Creating a Theme")]),_:1}),t(".")]),F,x,z,A,I,e("p",null,[t("In "),o(r,{to:"/docs/launch-manual/sections/using-pulsar/#basic-customization"},{default:n(()=>[t("Basic Customization")]),_:1}),t(" we will see how to set different wrap preferences for different types of files (for example, if you want to wrap Markdown files but not other files).")]),O,e("div",j,[N,Y,V,e("p",null,[t("On Linux commands are installed automatically as a part of Pulsar's installation process. Windows requires the path to be "),e("a",W,[t("exposed manually"),o(d)]),t(" by the user at this time.")])]),L,e("p",null,[t("Editing a file is pretty straightforward. You can click around and scroll with your mouse and type to change the content. There is no special editing mode or key commands. If you prefer editors with modes or more complex key commands, you should take a look at the "),e("a",q,[t("Pulsar Package Repository"),o(d)]),t(". There are a lot of packages that emulate popular styles.")]),o(h,{id:"172",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"getting-started"},{tab0:n(({title:i,value:s,isActive:a})=>[B]),tab1:n(({title:i,value:s,isActive:a})=>[M]),tab2:n(({title:i,value:s,isActive:a})=>[E]),_:1}),U,o(h,{id:"192",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"getting-started"},{tab0:n(({title:i,value:s,isActive:a})=>[G]),tab1:n(({title:i,value:s,isActive:a})=>[$]),tab2:n(({title:i,value:s,isActive:a})=>[R]),_:1}),X,o(h,{id:"221",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"getting-started"},{tab0:n(({title:i,value:s,isActive:a})=>[D]),tab1:n(({title:i,value:s,isActive:a})=>[J]),tab2:n(({title:i,value:s,isActive:a})=>[H]),_:1}),K,Q,Z,o(h,{id:"258",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"getting-started"},{tab0:n(({title:i,value:s,isActive:a})=>[ee,te,ne]),tab1:n(({title:i,value:s,isActive:a})=>[oe,ie,se]),tab2:n(({title:i,value:s,isActive:a})=>[ae,le,re]),_:1}),e("p",null,[t("The fuzzy finder uses the "),de,t(", "),he,t(" and "),ce,t(" configuration settings to filter out files and folders that will not be shown. If you have a project with tons of files you don't want it to search through, you can add patterns or paths to either of these config settings or your "),e("a",ue,[t("standard "),pe,t(" files"),o(d)]),t(". We'll learn more about config settings in "),o(r,{to:"/docs/launch-manual/sections/using-pulsar/#global-configuration-settings"},{default:n(()=>[t("Global Configuration Settings")]),_:1}),t(", but for now you can easily set these in the Settings View under Core Settings.")]),e("p",null,[t("Both "),me,t(" and "),fe,t(" are interpreted as glob patterns as implemented by the "),e("a",ge,[t("minimatch Node module"),o(d)]),t(".")]),ye])}const Pe=k(P,[["render",be],["__file","pulsar-basics.html.vue"]]);export{Pe as default};
