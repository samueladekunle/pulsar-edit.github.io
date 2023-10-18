import{_ as c,o as n,c as i,a as t,b as e,d as a,e as s,r}from"./app.e63a3e54.js";const h={},l=s('<h3 id="why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc" tabindex="-1"><a class="header-anchor" href="#why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc" aria-hidden="true">#</a> Why does macOS say that Atom wants to access my calendar, contacts, photos, etc.?</h3><p>With macOS 10.14 Mojave, Apple introduced new privacy protections similar to the existing protections found in iOS. Whenever an application attempts to access the files inside certain newly-protected directories, macOS asks the user whether they want to allow the application to access the content in those directories. These new privacy protections apply to the directories that contain your calendars, contacts, photos, mail, messages, and Time Machine backups.</p><p>Applications trigger these new macOS prompts when attempting to access these directories in any way. Simply attempting to <em>list</em> the files in one of these directories is enough to trigger these prompts. These protections even apply to Apple&#39;s own applications. For example, if you open <code>Terminal.app</code> and try to list the files in <code>~/Library/Calendars</code>, macOS shows a prompt saying, &#39;&quot;Terminal&quot; would like access to your calendar.&#39;</p><img width="602" alt="screen shot 2018-10-03 at 14 04 40 pm" src="https://user-images.githubusercontent.com/2988/46432184-9bfe9f80-c71b-11e8-8916-e844b7f4110e.png"><h4 id="why-does-atom-need-access-to-my-calendar-contacts-photos-etc" tabindex="-1"><a class="header-anchor" href="#why-does-atom-need-access-to-my-calendar-contacts-photos-etc" aria-hidden="true">#</a> Why does Atom need access to my calendar, contacts, photos, etc.?</h4>',5),d=t("code",null,"~",-1),p={href:"https://flight-manual.atom.io/getting-started/sections/atom-basics/#opening-a-file-in-a-project",target:"_blank",rel:"noopener noreferrer"},m=t("img",{width:"1030",alt:"fuzzy-finder can trigger prompt",src:"https://user-images.githubusercontent.com/2988/46432185-9bfe9f80-c71b-11e8-83f7-758c3212d16c.png"},null,-1),y={href:"https://flight-manual.atom.io/using-atom/sections/find-and-replace/",target:"_blank",rel:"noopener noreferrer"},u=s('<p>In addition to containing the files you&#39;re <em>intending</em> to edit inside Atom, your home directory also contains your files that have new OS-level protections in Mojave:</p><ul><li>Calendar files (<code>~/Library/Calendars</code>)</li><li>Contacts files (<code>~/Library/Application\\ Support/AddressBook</code></li><li>Mail files (<code>~/Library/Mail</code>)</li><li>Photos files (<code>~/Pictures/Photos\\ Library.photoslibrary</code>)</li></ul><p>Before letting Atom read these files, Mojave is understandably asking whether you want Atom to be able to access this personal data.</p><h4 id="what-should-i-do-when-i-see-these-prompts" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-when-i-see-these-prompts" aria-hidden="true">#</a> What should I do when I see these prompts?</h4><p>Most people don&#39;t use Atom to view or edit their calendar files, contact files, photo library, etc. If you don&#39;t intend to use Atom to view/edit these files, then Atom doesn&#39;t need access to them. If you see a prompt from macOS saying that Atom would like to access these items, simply click <strong>Don&#39;t Allow</strong>.</p><h4 id="what-happens-if-i-allow-atom-to-access-my-calendar-contacts-photos-etc" tabindex="-1"><a class="header-anchor" href="#what-happens-if-i-allow-atom-to-access-my-calendar-contacts-photos-etc" aria-hidden="true">#</a> What happens if I <em>allow</em> Atom to access my calendar, contacts, photos, etc.?</h4><p>To Atom, these items are just files on disk. Atom treats them exactly like any other file you would view in Atom. Therefore, if you allow Atom to access these items, you&#39;ll be able to use Atom to browse the directories that contain these items, and you&#39;ll be able to view the files in those directories. That&#39;s it. Nothing more.</p><h4 id="you-ll-only-be-prompted-once" tabindex="-1"><a class="header-anchor" href="#you-ll-only-be-prompted-once" aria-hidden="true">#</a> You&#39;ll only be prompted once</h4><p>Fortunately, macOS will only prompt you once for each type of personal data. In other words, you might see a prompt asking you whether Atom can access your calendar, and you might see a prompt asking you whether Atom can access your contacts, but once you make those decisions, you won&#39;t see those prompts again.</p><h4 id="what-if-i-change-my-mind" tabindex="-1"><a class="header-anchor" href="#what-if-i-change-my-mind" aria-hidden="true">#</a> What if I change my mind?</h4><p>At any time, you can change your choices via System Preferences. Inside System Preferences, go to <code>Security and Privacy</code>, click the <code>Privacy</code> tab, and then click on <code>Calendars</code> to manage which apps can access your <code>Calendars</code>. The same goes for <code>Contacts</code>, <code>Photos</code>, etc.:</p><img width="780" alt="manage access in system preferences" src="https://user-images.githubusercontent.com/2988/46432459-51315780-c71c-11e8-96b5-83edea8b4be2.png"><h4 id="what-if-i-never-want-to-see-these-prompts" tabindex="-1"><a class="header-anchor" href="#what-if-i-never-want-to-see-these-prompts" aria-hidden="true">#</a> What if I never want to see these prompts?</h4><p>Many people understandably expect their text editor to be able to open any file on disk. And that&#39;s exactly how things worked prior to macOS Mojave. If you would like to restore that behavior, you can proactively instruct macOS to allow you to access all files with Atom. To do so:</p><ol><li>Open your <code>Applications</code> folder in the Finder</li><li>Open System Preferences, click the <code>Security and Privacy</code> icon, click the <code>Privacy</code> tab, and then click on <code>Full Disk Access</code> in the left-hand sidebar</li><li>Click the lock icon to unlock System Preferences</li><li>Drag Atom into <code>Full Disk Access</code> as shown below</li></ol><p><img src="https://user-images.githubusercontent.com/2988/46491820-cf9fff00-c7d9-11e8-8b92-44fea5d3c437.gif" alt="restore pre-mojave security via full-disk access"></p>',16);function f(w,g){const o=r("ExternalLinkIcon");return n(),i("div",null,[l,t("p",null,[e("Atom doesn't need access to these items, but you might unintentionally cause Atom to try to access these items. This commonly occurs when you open your home directory ("),d,e(") inside Atom and run a command that examines all files and directories beneath your home directory. For example, when you open the "),t("a",p,[e("fuzzy-finder"),a(o)]),e(", it indexes the currently-open directory so that it can show you the available files:")]),m,t("p",null,[e("Similarly, using "),t("a",y,[e("find-and-replace"),a(o)]),e(" across the entire home directory will cause Atom to scan all files under your home directory.")]),u])}const A=c(h,[["render",f],["__file","why-does-macos-say-that-atom-wants-to-access-my-calendar-contacts-photos-etc.html.vue"]]);export{A as default};