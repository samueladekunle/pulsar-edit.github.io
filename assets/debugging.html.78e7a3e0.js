import{_ as u,a as m,b as p,c as g,d as f,e as b,f as k,g as v,h as y,i as _}from"./cpu-profile-done.5c7ee634.js";import{_ as w,o as x,c as A,a as e,b as t,d as o,w as n,e as l,r as h}from"./app.e63a3e54.js";const C={},I=e("h3",{id:"debugging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debugging","aria-hidden":"true"},"#"),t(" Debugging")],-1),T={href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#submitting-issues",target:"_blank",rel:"noopener noreferrer"},S=l(`<h4 id="update-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#update-to-the-latest-version" aria-hidden="true">#</a> Update to the Latest Version</h4><p>You might be running into an issue which was already fixed in a more recent version of Atom than the one you&#39;re using.</p><p>If you&#39;re using a released version, check which version of Atom you&#39;re using:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --version
&gt; Atom    : 1.8.0
&gt; Electron: 0.36.8
&gt; Chrome  : 47.0.2526.110
&gt; Node    : 5.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),P={href:"https://github.com/atom/atom/releases/latest",target:"_blank",rel:"noopener noreferrer"},U={href:"https://atom.io",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/atom/atom/releases/latest",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/atom/about",target:"_blank",rel:"noopener noreferrer"},q=e("em",null,"Atom > About",-1),Y={href:"https://github.com/atom/about",target:"_blank",rel:"noopener noreferrer"},E=e("em",null,"Help > About",-1),F={href:"https://github.com/atom/atom#building",target:"_blank",rel:"noopener noreferrer"},G=l(`<h4 id="using-safe-mode" tabindex="-1"><a class="header-anchor" href="#using-safe-mode" aria-hidden="true">#</a> Using Safe Mode</h4><p>A large part of Atom&#39;s functionality comes from packages you can install. Atom will also execute the code in your <a href="/hacking-atom/sections/the-init-file">init script</a> on startup. In some cases, these packages and the code in the init script might be causing unexpected behavior, problems, or performance issues.</p><p>To determine if that is happening, start Atom from the terminal in safe mode:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --safe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This starts Atom, but does not load packages from <code>~/.atom/packages</code> or <code>~/.atom/dev/packages</code> and disables loading of your init script. If you can no longer reproduce the problem in safe mode, it&#39;s likely it was caused by one of the packages or the init script.</p><p>If removing or commenting out all content from the init script and starting Atom normally still produces the error, then try figuring out which package is causing trouble. Start Atom normally again and open the Settings View with <kbd class="platform-mac">Cmd+,</kbd><kbd class="platform-windows platform-linux">Ctrl+,</kbd>. Since the Settings View allows you to disable each installed package, you can disable packages one by one until you can no longer reproduce the issue. Restart Atom or reload Atom with <kbd class="platform-mac">Alt+Cmd+Ctrl+L</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+F5</kbd> after you disable each package to make sure it&#39;s completely gone.</p><p>When you find the problematic package, you can disable or uninstall the package. We strongly recommend creating an issue on the package&#39;s GitHub repository.</p><h4 id="clearing-saved-state" tabindex="-1"><a class="header-anchor" href="#clearing-saved-state" aria-hidden="true">#</a> Clearing Saved State</h4><p>Atom saves a number of things about your environment when you exit in order to restore Atom to the same configuration when you next launch the program. In some cases the state that gets saved can be something undesirable that prevents Atom from working properly. In these cases, you may want to clear the state that Atom has saved.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>:rotating<em>light: <strong>Danger:</strong> Clearing the saved state permanently destroys any state that Atom has saved _across all projects</em>. This includes unsaved changes to files you may have been editing in all projects. This is a destructive action.</p></div><p>Clearing the saved state can be done by opening a terminal and executing:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --clear-window-state
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="reset-to-factory-defaults" tabindex="-1"><a class="header-anchor" href="#reset-to-factory-defaults" aria-hidden="true">#</a> Reset to Factory Defaults</h4><p>In some cases, you may want to reset Atom to &quot;factory defaults&quot;, in other words clear all of your configuration and remove all packages. This can easily be done by opening a terminal and executing:</p>`,14),L=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ mv ~/.atom ~/.atom-backup
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ mv ~/.atom ~/.atom-backup
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ rename %USERPROFILE%\\.atom .atom-backup
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),V=l(`<p>Once that is complete, you can launch Atom as normal. Everything will be just as if you first installed Atom.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Tip:</strong> The command given above doesn&#39;t delete the old configuration, just puts it somewhere that Atom can&#39;t find it. If there are pieces of the old configuration you want to retrieve, you can find them in the <span class="platform-mac platform-linux"><code>~/.atom-backup</code></span><span class="platform-windows"><code>%USERPROFILE%\\.atom-backup</code></span> directory.</p></div><h4 id="check-for-linked-packages" tabindex="-1"><a class="header-anchor" href="#check-for-linked-packages" aria-hidden="true">#</a> Check for Linked Packages</h4><p>If you develop or contribute to Atom packages, there may be left-over packages linked to your <code>~/.atom/packages</code> or <code>~/.atom/dev/packages</code> directories. You can use the <code>apm links</code> command to list all linked packages:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm links
&gt; /Users/octocat/.atom/dev/packages (0)
&gt; \u2514\u2500\u2500 (no links)
&gt; /Users/octocat/.atom/packages (1)
&gt; \u2514\u2500\u2500 color-picker -&gt; /Users/octocat/github/color-picker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can remove links using the <code>apm unlink</code> command:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm unlink color-picker
&gt; Unlinking /Users/octocat/.atom/packages/color-picker \u2713
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>See <code>apm links --help</code> and <code>apm unlink --help</code> for more information on these commands.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Tip:</strong> You can also use <code>apm unlink --all</code> to easily unlink all packages and themes.</p></div><h4 id="check-for-incompatible-packages" tabindex="-1"><a class="header-anchor" href="#check-for-incompatible-packages" aria-hidden="true">#</a> Check for Incompatible Packages</h4>`,10),W={href:"https://github.com/atom/incompatible-packages",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[e("img",{src:u,alt:"Incompatible Packages Status Bar Indicator",title:"Incompatible Packages Status Bar Indicator"})],-1),$=e("p",null,"If you see this indicator, click it and follow the instructions.",-1),B=e("h4",{id:"check-atom-and-package-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#check-atom-and-package-settings","aria-hidden":"true"},"#"),t(" Check Atom and Package Settings")],-1),K=e("p",null,"In some cases, unexpected behavior might be caused by settings in Atom or in one of the packages.",-1),j={href:"https://github.com/atom/settings-view",target:"_blank",rel:"noopener noreferrer"},M=e("kbd",{class:"platform-mac"},"Cmd+,",-1),H=e("kbd",{class:"platform-windows platform-linux"},"Ctrl+,",-1),J=e("span",{class:"platform-mac"},[e("em",null,"Atom > Preferences")],-1),Q=e("span",{class:"platform-windows"},[e("em",null,"File > Preferences")],-1),X=e("span",{class:"platform-linux"},[e("em",null,"Edit > Preferences")],-1),Z={href:"https://github.com/atom/command-palette",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,[e("img",{src:m,alt:"Settings View"})],-1),te=e("p",null,"Some of these options are also available on a per-language basis which means that they may be different for specific languages, for example JavaScript or Python. To check the per-language settings, open the settings for the language package under the Packages tab in the Settings View, for example the language-javascript or language-python package.",-1),oe={href:"https://atom.io/packages/wrap-guide",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://atom.io/packages/whitespace",target:"_blank",rel:"noopener noreferrer"},ne=e("p",null,[e("img",{src:p,alt:"Package Settings"})],-1),ie=e("h4",{id:"check-your-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#check-your-configuration","aria-hidden":"true"},"#"),t(" Check Your Configuration")],-1),se=e("h4",{id:"check-your-keybindings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#check-your-keybindings","aria-hidden":"true"},"#"),t(" Check Your Keybindings")],-1),re={href:"https://atom.io/packages/keybinding-resolver",target:"_blank",rel:"noopener noreferrer"},le=l('<p>Show the keybinding resolver with <kbd class="platform-mac">Cmd+.</kbd><kbd class="platform-windows platform-linux">Ctrl+.</kbd> or with &quot;Keybinding Resolver: Show&quot; from the Command palette. With the Keybinding Resolver shown, press a key combination:</p><p><img src="'+f+'" alt="Keybinding Resolver"></p><p>The Keybinding Resolver shows you a list of keybindings that exist for the key combination, where each item in the list has the following:</p><ul><li>the command for the keybinding</li><li>the CSS selector used to define the context in which the keybinding is valid</li><li>the file in which the keybinding is defined</li></ul><p>The keybindings are listed in two colors. All the keybindings that are matched but not executed are shown in gray. The one that is executed, if any, is shown in green. If the command you wanted to trigger isn&#39;t listed, then a keybinding for that command hasn&#39;t been loaded.</p>',5),ce=e("ul",null,[e("li",null,[e("p",null,"The key combination was not used in the context defined by the keybinding's selector"),e("p",null,[t("For example, you can't trigger the keybinding for the "),e("code",null,"tree-view:add-file"),t(" command if the Tree View is not focused.")])]),e("li",null,[e("p",null,"There is another keybinding that took precedence"),e("p",null,"This often happens when you install a package which defines keybindings that conflict with existing keybindings. If the package's keybindings have selectors with higher specificity or were loaded later, they'll have priority over existing ones.")])],-1),de=e("code",null,"keymap.cson",-1),he={href:"https://github.com/atom/atom/discussions",target:"_blank",rel:"noopener noreferrer"},ue=e("h4",{id:"check-font-rendering-issues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#check-font-rendering-issues","aria-hidden":"true"},"#"),t(" Check Font Rendering Issues")],-1),me=e("kbd",{class:"platform-mac"},"Alt+Cmd+I",-1),pe=e("kbd",{class:"platform-windows platform-linux"},"Ctrl+Shift+I",-1),ge={href:"https://developers.google.com/web/tools/chrome-devtools/inspect-styles/",target:"_blank",rel:"noopener noreferrer"},fe=l('<p><img src="'+b+'" alt="Fonts In Use" title="Fonts In Use"></p><h4 id="check-for-errors-in-the-developer-tools" tabindex="-1"><a class="header-anchor" href="#check-for-errors-in-the-developer-tools" aria-hidden="true">#</a> Check for Errors in the Developer Tools</h4><p>When an unexpected error occurs in Atom, you will normally see a red notification which provides details about the error and allows you to create an issue on the right repository:</p><p><img src="'+k+'" alt="Exception Notification"></p><p>Not all errors are logged with a notification so if you suspect you&#39;re experiencing an error but there&#39;s no notification, you can also look for errors in the developer tools Console tab. To access the Console tab, press <kbd class="platform-mac">Alt-Cmd-I</kbd><kbd class="platform-windows platform-linux">Ctrl-Shift-I</kbd> to open developer tools and then click the Console tab:</p><p><img src="'+v+'" alt="DevTools Error"></p><p>If there are multiple errors, you can scroll down to the bottom of the panel to see the most recent error. Or while reproducing an error, you can right click in the Console tab panel, select <code>Clear console</code> to remove all Console output, and then reproduce the error to see what errors are logged to the Console tab.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p><strong>Note:</strong> When running in Dev Mode, the developer tools are automatically shown with the error logged in the Console tab.</p></div><h4 id="find-crash-logs" tabindex="-1"><a class="header-anchor" href="#find-crash-logs" aria-hidden="true">#</a> Find Crash Logs</h4>',9),be=e("p",null,"When Atom crashes, it should write a core dump if system settings permit. In order to find whether the core dump is written and to where, consult the documentation for your distribution of Linux. Once you have the core dump, you can save it to send in later if it is needed for debugging.",-1),ke=e("p",null,[t("When Atom crashes, you will find a crash dump in Console.app. You can launch Console.app using Spotlight or you can find it in "),e("code",null,"/Applications/Utilities/Console.app"),t(". Once you have launched the program, you can find the latest crash dump by following these instructions:")],-1),ve=e("ol",null,[e("li",null,'Click "User Reports" in the left-most column'),e("li",null,[t("Find the latest entry in the middle column that starts with "),e("code",null,"Atom"),t(" and ends with "),e("code",null,".crash")])],-1),ye=e("p",null,"Once you have the crash dump, you can save it to send in later if it is needed for debugging.",-1),_e=e("p",null,[t("When Atom crashes, you will find a crash dump inside your "),e("code",null,"%TEMP%\\Atom Crashes"),t(" directory. It will be the newest file with the "),e("code",null,".dmp"),t(" extension. Once you have the crash dump, you can save it to send in later if it is needed for debugging.")],-1),we=e("h4",{id:"diagnose-startup-performance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diagnose-startup-performance","aria-hidden":"true"},"#"),t(" Diagnose Startup Performance")],-1),xe={href:"https://github.com/atom/timecop",target:"_blank",rel:"noopener noreferrer"},Ae=e("p",null,[e("img",{src:g,alt:"Timecop"})],-1),Ce=e("p",null,"Timecop displays the following information:",-1),Ie=e("ul",null,[e("li",null,"Atom startup times"),e("li",null,"File compilation times"),e("li",null,"Package loading and activation times"),e("li",null,"Theme loading and activation times")],-1),Te=e("p",null,"If a specific package has high load or activation times, you might consider reporting an Issue to the maintainers. You can also disable the package to potentially improve future startup times.",-1),Se=e("h4",{id:"diagnose-runtime-performance",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diagnose-runtime-performance","aria-hidden":"true"},"#"),t(" Diagnose Runtime Performance")],-1),Pe={href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#submitting-issues",target:"_blank",rel:"noopener noreferrer"},Ue=l('<p>To run a profile, open the Developer Tools with <kbd class="platform-mac">Alt+Cmd+I</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+I</kbd>. From there:</p><ol><li>Click the Profiles tab</li><li>Select &quot;Collect JavaScript CPU Profile&quot;</li><li>Click &quot;Start&quot;</li></ol><p><img src="'+y+'" alt="DevTools Profiler"></p><p>Once that is done, then perform the slow action to capture a recording. When finished, click &quot;Stop&quot;. Switch to the &quot;Chart&quot; view, and a graph of the recorded actions will appear. You can save and post the profile data by clicking &quot;Save&quot; next to the profile&#39;s name in the left panel.</p><p><img src="'+_+'" alt="DevTools Profiler"></p>',5),Re={href:"https://developer.chrome.com/devtools/docs/cpu-profiling",target:"_blank",rel:"noopener noreferrer"},De=l(`<h4 id="profiling-startup-performance" tabindex="-1"><a class="header-anchor" href="#profiling-startup-performance" aria-hidden="true">#</a> Profiling Startup Performance</h4><p>If the time for loading the window looks high, you can create a CPU profile for that period using the <code>--profile-startup</code> command line flag when starting Atom:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --profile-startup .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will automatically capture a CPU profile as Atom is loading and open the Developer Tools once Atom loads. From there:</p><ol><li>Click the Profiles tab in the Developer Tools</li><li>Select the &quot;startup&quot; profile</li><li>Click the &quot;Save&quot; link for the startup profile</li></ol><p>You can then include the startup profile in any Issue you report.</p><h4 id="check-your-build-tools" tabindex="-1"><a class="header-anchor" href="#check-your-build-tools" aria-hidden="true">#</a> Check Your Build Tools</h4><p>If you are having issues installing a package using <code>apm install</code>, this could be because the package has dependencies on libraries that contain native code. This means you will need to have a C++ compiler and Python installed to be able to install it. You can run <code>apm install --check</code> to see if the Atom package manager can build native code on your machine.</p>`,8),qe={href:"https://github.com/atom/atom/tree/master/docs/build-instructions",target:"_blank",rel:"noopener noreferrer"},Ye=l(`<h4 id="check-if-your-gpu-is-causing-the-problem" tabindex="-1"><a class="header-anchor" href="#check-if-your-gpu-is-causing-the-problem" aria-hidden="true">#</a> Check if your GPU is causing the problem</h4><p>If you encounter flickering or other rendering issues, you can stop Atom from using your Graphics Processing Unit (GPU) with the <code>--disable-gpu</code> Chromium flag to see if the fault lies with your GPU:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --disable-gpu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Chromium (and thus Atom) normally uses the GPU to accelerate drawing parts of the interface. <code>--disable-gpu</code> tells Atom to not even attempt to do this, and just use the CPU for rendering everything. This means that the parts of the interface that would normally be accelerated using the GPU will instead take slightly longer and render on the CPU. This likely won&#39;t make a noticeable difference, but does slightly increase the battery usage as the CPU has to work harder to do the things the GPU is optimized for.</p><p>Two other Chromium flags that are useful for debugging are <code>--enable-gpu-rasterization</code> and <code>--force-gpu-rasterization</code>:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --enable-gpu-rasterization --force-gpu-rasterization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--enable-gpu-rasterization</code> allows other commands to determine how a layer tile (graphics) should be drawn and <code>--force-gpu-rasterization</code> determines that the Skia GPU backend should be used for drawing layer tiles (only valid with GPU accelerated compositing).</p><p>Be sure to use Chromium flags at the end of the terminal call if you want to use other Atom flags as they will not be executed after the Chromium flags e.g.:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --safe --enable-gpu-rasterization --force-gpu-rasterization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function Ee(Fe,Ge){const a=h("ExternalLinkIcon"),c=h("RouterLink"),d=h("Tabs");return x(),A("div",null,[I,e("p",null,[t("Atom provides several tools to help you understand unexpected behavior and debug problems. This guide describes some of those tools and a few approaches to help you debug and provide more helpful information when "),e("a",T,[t("submitting issues"),o(a)]),t(":")]),S,e("p",null,[t("Then check for the "),e("a",P,[t("latest Stable version"),o(a)]),t(".")]),o(d,{id:"19",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"Updating"},{tab0:n(({title:i,value:s,isActive:r})=>[e("p",null,[t("To update to the latest version, you can download it from "),e("a",U,[t("the atom.io website"),o(a)]),t(" or "),e("a",R,[t("the latest release on GitHub"),o(a)]),t(" and follow the "),o(c,{to:"/getting-started/sections/installing-atom/#installing-atom-on-linux"},{default:n(()=>[t("Installation instructions for Atom on Linux")]),_:1}),t(".")])]),tab1:n(({title:i,value:s,isActive:r})=>[e("p",null,[t("If there is a more recent release available, you can update to the most recent release with the auto-update functionality built in to Atom and the "),e("a",D,[t("about package"),o(a)]),t(". You can open the About View by using the "),q,t(' menu option to see whether Atom is up-to-date, downloading a new update or click the button to "Restart and Install Update".')])]),tab2:n(({title:i,value:s,isActive:r})=>[e("p",null,[t("If there is a more recent release available, you can update to the most recent release with the auto-update functionality built in to Atom and the "),e("a",Y,[t("about package"),o(a)]),t(". You can open the About View by using the "),E,t(' menu option to see whether Atom is up-to-date, downloading a new update or click the button to "Restart and Install Update".')])]),_:1}),e("p",null,[t("If you're building Atom from source, pull down the latest version of master and "),e("a",F,[t("re-build"),o(a)]),t(".")]),G,o(d,{id:"79",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"Debugging"},{tab0:n(({title:i,value:s,isActive:r})=>[L]),tab1:n(({title:i,value:s,isActive:r})=>[N]),tab2:n(({title:i,value:s,isActive:r})=>[O]),_:1}),V,e("p",null,[t("If you have packages installed that use native Node modules, when you upgrade to a new version of Atom, they might need to be rebuilt. Atom detects this and through the "),e("a",W,[t("incompatible-packages package"),o(a)]),t(" displays an indicator in the status bar when this happens.")]),z,$,B,K,e("p",null,[t("Open Atom's "),e("a",j,[t("Settings View"),o(a)]),t(" with "),M,H,t(", the "),J,Q,X,t(' menu option, or the "Settings View: Open" command from the '),e("a",Z,[t("Command Palette"),o(a)]),t(".")]),ee,e("p",null,[t("Check Atom's settings in the Settings View, there's a description of most configuration options in the "),o(c,{to:"/using-atom/sections/basic-customization/#configuration-key-reference"},{default:n(()=>[t("Basic Customization section")]),_:1}),t('. For example, if you want Atom to hide the invisible symbols representing whitespace characters, disable the "Show Invisibles" option.')]),te,e("p",null,[t("Since Atom ships with a set of packages and you can also install additional packages yourself, check the list of packages and their settings. For instance, if you'd like to get rid of the vertical line in the middle of the editor, disable the "),e("a",oe,[t("Wrap Guide package"),o(a)]),t(". And if you don't like it when Atom strips trailing whitespace or ensures that there's a single trailing newline in the file, you can configure that in the "),e("a",ae,[t("whitespace package's"),o(a)]),t(" settings.")]),ne,ie,e("p",null,[t("You might have defined some custom styles, keymaps or snippets in "),o(c,{to:"/using-atom/sections/basic-customization/"},{default:n(()=>[t("one of your configuration files")]),_:1}),t(". In some situations, these personal hacks might be causing the unexpected behavior you're observing so try clearing those files and restarting Atom.")]),se,e("p",null,[t("If a command is not executing when you press a key combination or the wrong command is executing, there might be an issue with the keybinding for that combination. Atom ships with the "),e("a",re,[t("Keybinding Resolver"),o(a)]),t(", a neat package which helps you understand what key Atom saw you press and the command that was triggered because of it.")]),le,e("p",null,[t("If multiple keybindings are matched, Atom determines which keybinding will be executed based on the "),o(c,{to:"/behind-atom/sections/keymaps-in-depth/#specificity-and-cascade-order"},{default:n(()=>[t("specificity of the selectors and the order in which they were loaded")]),_:1}),t(". If the command you wanted to trigger is listed in the Keybinding Resolver, but wasn't the one that was executed, this is normally explained by one of two causes:")]),ce,e("p",null,[t("Atom loads core Atom keybindings and package keybindings first, and user-defined keybindings last. Since user-defined keybindings are loaded last, you can use your "),de,t(" file to tweak the keybindings and sort out problems like these. See the "),o(c,{to:"/behind-atom/sections/keymaps-in-depth/"},{default:n(()=>[t("Keymaps in Depth section")]),_:1}),t(" for more information.")]),e("p",null,[t("If you notice that a package's keybindings are taking precedence over core Atom keybindings, it might be a good idea to report the issue on that package's GitHub repository. You can contact atom maintainers on "),e("a",he,[t("Atom's github discussions"),o(a)])]),ue,e("p",null,[t("You can determine which fonts are being used to render a specific piece of text by using the Developer Tools. To open the Developer Tools press "),me,pe,t('. Once the Developer Tools are open, click the "Elements" tab. Use the '),e("a",ge,[t("standard tools for finding the element"),o(a)]),t(' containing the text you want to check. Once you have selected the element, you can click the "Computed" tab in the styles pane and scroll to the bottom. The list of fonts being used will be shown there:')]),fe,o(d,{id:"256",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"Debugging"},{tab0:n(({title:i,value:s,isActive:r})=>[be]),tab1:n(({title:i,value:s,isActive:r})=>[ke,ve,ye]),tab2:n(({title:i,value:s,isActive:r})=>[_e]),_:1}),we,e("p",null,[t("If Atom is taking a long time to start, you can use the "),e("a",xe,[t("Timecop package"),o(a)]),t(" to get insight into where Atom spends time while loading.")]),Ae,Ce,Ie,Te,Se,e("p",null,[t("If you're experiencing performance problems in a particular situation, your "),e("a",Pe,[t("Issue reports"),o(a)]),t(" will be more valuable if you include a saved profile from Chrome's CPU profiler that gives some insight into what is slow.")]),Ue,e("p",null,[t("To learn more, check out the "),e("a",Re,[t("Chrome documentation on CPU profiling"),o(a)]),t(".")]),De,e("p",null,[t("Check out the pre-requisites in the "),e("a",qe,[t("build instructions"),o(a)]),t(" for your platform for more details.")]),Ye])}const Oe=w(C,[["render",Ee],["__file","debugging.html.vue"]]);export{Oe as default};
