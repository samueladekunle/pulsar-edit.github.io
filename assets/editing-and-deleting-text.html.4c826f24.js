import{b as u,_ as h,a as p}from"./encodings.03a1adc8.js";import{_ as b,o as m,c as g,d as a,w as l,a as e,b as t,e as c,r as d}from"./app.e63a3e54.js";const k={},f=e("h2",{id:"editing-and-deleting-text",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editing-and-deleting-text","aria-hidden":"true"},"#"),t(" Editing and Deleting Text")],-1),w=e("p",null,"So far we've looked at a number of ways to move around and select regions of a file, so now let's actually change some of that text. Obviously you can type in order to insert characters, but there are also a number of ways to delete and manipulate text that could come in handy.",-1),_=e("h3",{id:"basic-manipulation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-manipulation","aria-hidden":"true"},"#"),t(" Basic Manipulation")],-1),C=e("p",null,"There are a handful of cool keybindings for basic text manipulation that might come in handy. These range from moving around lines of text and duplicating lines to changing the case.",-1),y=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+J"),t(" - Join the next line to the end of the current line")]),e("li",null,[e("kbd",null,"Ctrl+Up/Down"),t(" - Move the current line up or down")]),e("li",null,[e("kbd",null,"Ctrl+Shift+D"),t(" - Duplicate the current line")]),e("li",null,[e("kbd",null,"Ctrl+K"),t(),e("kbd",null,"Ctrl+U"),t(" - Upper case the current word")]),e("li",null,[e("kbd",null,"Ctrl+K"),t(),e("kbd",null,"Ctrl+L"),t(" - Lower case the current word")])],-1),v=e("ul",null,[e("li",null,[e("kbd",null,"Cmd+J"),t(" - Join the next line to the end of the current line")]),e("li",null,[e("kbd",null,"Cmd+Ctrl+Up/Down"),t(" - Move the current line up or down")]),e("li",null,[e("kbd",null,"Cmd+Shift+D"),t(" - Duplicate the current line")]),e("li",null,[e("kbd",null,"Cmd+K"),t(),e("kbd",null,"Cmd+U"),t(" - Upper case the current word")]),e("li",null,[e("kbd",null,"Cmd+K"),t(),e("kbd",null,"Cmd+L"),t(" - Lower case the current word")]),e("li",null,[e("kbd",null,"Ctrl+T"),t(" - Transpose characters. This swaps the two characters on either side of the cursor.")])],-1),x=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+J"),t(" - Join the next line to the end of the current line")]),e("li",null,[e("kbd",null,"Ctrl+Up/Down"),t(" - Move the current line up or down")]),e("li",null,[e("kbd",null,"Ctrl+Shift+D"),t(" - Duplicate the current line")]),e("li",null,[e("kbd",null,"Ctrl+K"),t(),e("kbd",null,"Ctrl+U"),t(" - Upper case the current word")]),e("li",null,[e("kbd",null,"Ctrl+K"),t(),e("kbd",null,"Ctrl+L"),t(" - Lower case the current word")])],-1),A=c('<p>Pulsar also has built in functionality to re-flow a paragraph to hard-wrap at a given maximum line length. You can format the current selection to have lines no longer than 80 (or whatever number <code>editor.preferredLineLength</code> is set to) characters using <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+Shift+Q</kbd> - <strong><em>MAC</em></strong>: <kbd>Alt+Cmd+Q</kbd>. If nothing is selected, the current paragraph will be reflowed.</p><h3 id="deleting-and-cutting" tabindex="-1"><a class="header-anchor" href="#deleting-and-cutting" aria-hidden="true">#</a> Deleting and Cutting</h3><p>You can also delete or cut text out of your buffer with some shortcuts. Be ruthless.</p>',3),D=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Shift+K"),t(" - Delete current line")]),e("li",null,[e("kbd",null,"Ctrl+Backspace"),t(" - Delete to beginning of word")]),e("li",null,[e("kbd",null,"Ctrl+Delete"),t(" - Delete to end of word")])],-1),S=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Shift+K"),t(" - Delete current line")]),e("li",null,[e("kbd",null,"Alt+Backspace"),t(" or "),e("kbd",null,"Alt+H"),t(" - Delete to beginning of word")]),e("li",null,[e("kbd",null,"Alt+Delete"),t(" or "),e("kbd",null,"Alt+D"),t(" - Delete to end of word")]),e("li",null,[e("kbd",null,"Cmd+Delete"),t(" - Delete to end of line")]),e("li",null,[e("kbd",null,"Ctrl+K"),t(" - Cut to end of line")]),e("li",null,[e("kbd",null,"Cmd+Backspace"),t(" - Delete to beginning of line")])],-1),T=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Shift+K"),t(" - Delete current line")]),e("li",null,[e("kbd",null,"Ctrl+Backspace"),t(" - Delete to beginning of word")]),e("li",null,[e("kbd",null,"Ctrl+Delete"),t(" - Delete to end of word")])],-1),L=e("h3",{id:"multiple-cursors-and-selections",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#multiple-cursors-and-selections","aria-hidden":"true"},"#"),t(" Multiple Cursors and Selections")],-1),M=e("p",null,"One of the cool things that Pulsar can do out of the box is support multiple cursors. This can be incredibly helpful in manipulating long lists of text.",-1),U=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Click"),t(" - Add a new cursor at the clicked location")]),e("li",null,[e("kbd",null,"Alt+Shift+Up/Down"),t(" - Add another cursor above/below the current cursor")]),e("li",null,[e("kbd",null,"Ctrl+D"),t(" - Select the next word in the document that is the same as the currently selected word")]),e("li",null,[e("kbd",null,"Alt+F3"),t(" - Select all words in the document that are the same as the currently selected word")])],-1),I=e("ul",null,[e("li",null,[e("kbd",null,"Cmd+Click"),t(" - Add a new cursor at the clicked location")]),e("li",null,[e("kbd",null,"Ctrl+Shift+Up/Down"),t(" - Add another cursor above/below the current cursor")]),e("li",null,[e("kbd",null,"Cmd+D"),t(" - Select the next word in the document that is the same as the currently selected word")]),e("li",null,[e("kbd",null,"Cmd+Ctrl+G"),t(" - Select all words in the document that are the same as the currently selected word")]),e("li",null,[e("kbd",null,"Cmd+Shift+L"),t(" - Convert a multi-line selection into multiple cursors")])],-1),P=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Click"),t(" - Add a new cursor at the clicked location")]),e("li",null,[e("kbd",null,"Alt+Ctrl+Up/Down"),t(" - Add another cursor above/below the current cursor")]),e("li",null,[e("kbd",null,"Ctrl+D"),t(" - Select the next word in the document that is the same as the currently selected word")]),e("li",null,[e("kbd",null,"Alt+F3"),t(" - Select all words in the document that are the same as the currently selected word")])],-1),B=c('<p>Using these commands you can place cursors in multiple places in your document and effectively execute the same commands in multiple places at once.</p><p><img src="'+h+'" alt="Using multiple cursors"></p><p>This can be incredibly helpful in doing many type of repetitive tasks such as renaming variables or changing the format of some text. You can use this with almost any package or command - for example, changing case and moving or duplicating lines.</p><p>You can also use the mouse to select text with the <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd</kbd> key pressed down to select multiple regions of your text simultaneously.</p><p>Return to a single cursor with <kbd>Esc</kbd> or by clicking anywhere in the file to position a cursor there as normal.</p><h3 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace" aria-hidden="true">#</a> Whitespace</h3><p>Pulsar comes with several commands to help you manage the whitespace in your document. One very useful pair of commands converts leading spaces into tabs and converts leading tabs into spaces. If you&#39;re working with a document that has mixed whitespace, these commands are great for helping to normalize the file. There are no keybindings for the whitespace commands, so you will have to search your command palette for &quot;Convert Spaces to Tabs&quot; (or vice versa) to run one of these commands.</p>',7),K={href:"https://github.com/pulsar-edit/whitespace",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"whitespace",-1),j=c('<p><img src="'+p+'" alt="Managing your whitespace settings"></p><div class="custom-container note"><p class="custom-container-title">Note</p><p>The &quot;Remove Trailing Whitespace&quot; option is on by default. This means that every time you save any file opened in Pulsar, it will strip all trailing whitespace from the file. If you want to disable this, go to the <code>whitespace</code> package in your settings panel and uncheck that option.</p></div><p>Pulsar will also by default ensure that your file has a trailing newline. You can also disable this option on that screen.</p><h3 id="brackets" tabindex="-1"><a class="header-anchor" href="#brackets" aria-hidden="true">#</a> Brackets</h3><p>Pulsar ships with intelligent and easy to use bracket handling.</p><p>It will by default highlight <code>[]</code>, <code>()</code>, and <code>{}</code> style brackets when your cursor is over them. It will also highlight matching XML and HTML tags.</p><p>Pulsar will also automatically autocomplete <code>[]</code>, <code>()</code>, and <code>{}</code>, <code>&quot;&quot;</code>, <code>&#39;&#39;</code>, <code>\u201C\u201D</code>, <code>\u2018\u2019</code>, <code>\xAB\xBB</code>, <code>\u2039\u203A</code>, and <code>``</code> when you type the leading one. If you have a selection and you type any of these opening brackets or quotes, Pulsar will enclose the selection with the opening and closing brackets or quotes.</p><p>There are a few other interesting bracket related commands that you can use.</p>',8),J=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+M"),t(" - Jump to the bracket matching the one adjacent to the cursor. It jumps to the nearest enclosing bracket when there's no adjacent bracket.")]),e("li",null,[e("kbd",null,"Alt+Ctrl+,"),t(" - Select all the text inside the current brackets")]),e("li",null,[e("kbd",null,"Alt+Ctrl+."),t(" - Close the current XML/HTML tag")])],-1),N=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+M"),t(" - Jump to the bracket matching the one adjacent to the cursor. It jumps to the nearest enclosing bracket when there's no adjacent bracket.")]),e("li",null,[e("kbd",null,"Cmd+Ctrl+M"),t(" - Select all the text inside the current brackets")]),e("li",null,[e("kbd",null,"Alt+Cmd+."),t(" - Close the current XML/HTML tag")])],-1),q=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+M"),t(" - Jump to the bracket matching the one adjacent to the cursor. It jumps to the nearest enclosing bracket when there's no adjacent bracket.")]),e("li",null,[e("kbd",null,"Alt+Ctrl+,"),t(" - Select all the text inside the current brackets")]),e("li",null,[e("kbd",null,"Alt+Ctrl+."),t(" - Close the current XML/HTML tag")])],-1),O={href:"https://github.com/pulsar-edit/bracket-matcher",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"encoding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#encoding","aria-hidden":"true"},"#"),t(" Encoding")],-1),X=e("p",null,"Pulsar also ships with some basic file encoding support should you find yourself working with non-UTF-8 encoded files, or should you wish to create one.",-1),H=e("p",null,[e("kbd",null,"Alt+U"),t(" - Toggle menu to change file encoding")],-1),Y=e("p",null,[e("kbd",null,"Ctrl+Shift+U"),t(" - Toggle menu to change file encoding")],-1),F=e("p",null,[e("kbd",null,"Ctrl+Shift+U"),t(" - Toggle menu to change file encoding")],-1),V=e("p",null,"If you pull up the file encoding dialog, you can choose an alternate file encoding to save your file in.",-1),Q=e("p",null,"When you open a file, Pulsar will try to auto-detect the encoding. If Pulsar can't identify the encoding, the encoding will default to UTF-8, which is also the default encoding for new files.",-1),R=e("p",null,[e("img",{src:u,alt:"Changing your file encoding"})],-1),z=e("p",null,"If you pull up the encoding menu and change the active encoding to something else, the file will be written out in that encoding the next time you save the file.",-1),G={href:"https://github.com/pulsar-edit/encoding-selector",target:"_blank",rel:"noopener noreferrer"};function Z($,ee){const r=d("Tabs"),s=d("ExternalLinkIcon");return m(),g("div",null,[f,w,_,C,a(r,{id:"12",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:l(({title:n,value:i,isActive:o})=>[y]),tab1:l(({title:n,value:i,isActive:o})=>[v]),tab2:l(({title:n,value:i,isActive:o})=>[x]),_:1}),A,a(r,{id:"115",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:l(({title:n,value:i,isActive:o})=>[D]),tab1:l(({title:n,value:i,isActive:o})=>[S]),tab2:l(({title:n,value:i,isActive:o})=>[T]),_:1}),L,M,a(r,{id:"195",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:l(({title:n,value:i,isActive:o})=>[U]),tab1:l(({title:n,value:i,isActive:o})=>[I]),tab2:l(({title:n,value:i,isActive:o})=>[P]),_:1}),B,e("p",null,[t("The whitespace commands are implemented in the "),e("a",K,[t("whitespace"),a(s)]),t(" package. The settings for the whitespace commands are managed on the page for the "),W,t(" package.")]),j,a(r,{id:"324",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:l(({title:n,value:i,isActive:o})=>[J]),tab1:l(({title:n,value:i,isActive:o})=>[N]),tab2:l(({title:n,value:i,isActive:o})=>[q]),_:1}),e("p",null,[t("The brackets functionality is implemented in the "),e("a",O,[t("bracket-matcher"),a(s)]),t(" package. Like all of these packages, to change defaults related to bracket handling, or to disable it entirely, you can navigate to this package in the Settings view.")]),E,X,a(r,{id:"392",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:l(({title:n,value:i,isActive:o})=>[H]),tab1:l(({title:n,value:i,isActive:o})=>[Y]),tab2:l(({title:n,value:i,isActive:o})=>[F]),_:1}),V,Q,R,z,e("p",null,[t("The encoding selector is implemented in the "),e("a",G,[t("encoding-selector"),a(s)]),t(" package.")])])}const ne=b(k,[["render",Z],["__file","editing-and-deleting-text.html.vue"]]);export{ne as default};
