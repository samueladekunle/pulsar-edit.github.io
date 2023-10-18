import{_ as n}from"./chocolatey.6923f762.js";import{_ as r}from"./package.424216b3.js";import{_ as s}from"./spotlight.e49299a8.js";import{_ as i,o as l,c as h,f as u,a as e,b as t,d as a,e as c,r as d}from"./app.e63a3e54.js";const p="/assets/moving.0cfb3518.png",m="/assets/title-bar-tab.c7644600.png",f="/assets/title-bar-no-tab.2e70eb94.png",g="/assets/cleaning.f5279602.png",b={},_=e("p",null,"I want you to act as a Pulsar team member writing a blog post. I will provide titles of recent changes. You will elaborate on each topic and make each paragraph coherent from my ramblings. You will welcome all readers to the September Pulsar community update.",-1),w=c('<h1 id="welcome-to-the-september-community-update" tabindex="-1"><a class="header-anchor" href="#welcome-to-the-september-community-update" aria-hidden="true">#</a> Welcome to the September Community Update!</h1><p>Welcome to this month&#39;s Pulsar community update! In store for you this month we have some massive changes to our CI process, some good news for Windows Chocolatey users, a new option for Pulsar&#39;s title bar, some improvements to our ppm <code>unpublish</code> command and work on a brand new utility to help clean up elements of a Pulsar installation.</p><p>I realise that this probably raises more questions than it answers, so read on to find out more!</p><h2 id="upheaving-our-ci-setup" tabindex="-1"><a class="header-anchor" href="#upheaving-our-ci-setup" aria-hidden="true">#</a> Upheaving our CI setup</h2><img src="'+p+'" height="200"><p>Ever since we started providing downloadable binaries shortly after the Pulsar project properly started, we have been using Cirrus CI as our continuous integration platform. This has worked very well for us for quite some time now, but unfortunately for us, they recently decided to change their free tier and our setup puts us well beyond that free tier and into some quite serious money. At this point we had a couple of choices: either we stick with Cirrus CI by using our donors&#39; money, or we move to another platform. We chose the latter option as we simply could not justify nor sustain the costs.</p>',6),y={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/DeeDeeG",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Meadowsys",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"So what does this mean for our community? Hopefully, you didn't even notice anything. The biggest effect is that Apple silicon macOS and ARM Linux binaries are produced a little less frequently (i.e.once every other day).",-1),T=e("p",null,"We have a much bigger and more detailed write-up on what went on to be published soon, as it was a particularly interesting problem (for a community project funded entirely by donations) to work around, so watch this space!",-1),C=e("h2",{id:"chocolately-packages-are-up-to-date-again",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chocolately-packages-are-up-to-date-again","aria-hidden":"true"},"#"),t(" Chocolately packages are up to date again!")],-1),P=e("img",{src:n,height:"150"},null,-1),A={href:"https://github.com/COLAMAroro",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/spiker985",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},S={href:"https://pulsar-edit.dev/blog/20230825-Daeraxa-ChocolateyUpdate.html",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"new-title-bar-configuration-option",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-title-bar-configuration-option","aria-hidden":"true"},"#"),t(" New title bar configuration option")],-1),M={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/pulsar-edit/pulsar/pull/671",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"To demonstrate, the next image shows what it currently looks like:",-1),U=e("img",{src:m,height:"50"},null,-1),L=e("p",null,"And what it looks like if you turn the setting off to remove the tab from the title:",-1),E=e("img",{src:f,height:"50"},null,-1),V={href:"https://pulsar-edit.dev/download.html#rolling-release",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"unpublishing-packages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#unpublishing-packages","aria-hidden":"true"},"#"),t(" Unpublishing packages")],-1),O=e("img",{src:r,height:"200"},null,-1),R={href:"https://github.com/bacadra/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/pulsar-edit/package-backend/pull/195",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,[t("However, shortly after this was fixed, we were contacted by a community member asking why they were unable to re-publish their package after a successful unpublish in order to fix a versioning mistake. Ultimately, we realised that the wording shown during the unpublishing process does not make it clear that once a package has been unpublished, we "),e("em",null,"permanently block the package name from being used ever again"),t(". This is intentional in order to prevent any bad actors from hijacking the name of a previous package in order to hide malicious code. This also provided the opportunity for us to come up with a process to work around this in exceptional circumstances, we will now ensure that:")],-1),Y=e("ol",null,[e("li",null,"Nobody has downloaded the unpublished package."),e("li",null,"There are no significant code changes between the unpublished version and the version the author wishes to re-publish."),e("li",null,"The author can prove ownership of the repository.")],-1),z=e("code",null,"unpublish",-1),F={href:"https://github.com/pulsar-edit/package-backend/pull/198",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"pulsar-cleanup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pulsar-cleanup","aria-hidden":"true"},"#"),t(" Pulsar cleanup")],-1),K=e("img",{src:g,height:"200"},null,-1),Q={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/pulsar-edit/pulsar-cleanup",target:"_blank",rel:"noopener noreferrer"},Z=e("code",null,"electron-builder",-1),$=e("h2",{id:"community-spotlight",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-spotlight","aria-hidden":"true"},"#"),t(" Community spotlight")],-1),ee=e("img",{src:s,height:"200"},null,-1),te={href:"https://github.com/casswedson",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/pulsar-edit/pulsar/pull/678",target:"_blank",rel:"noopener noreferrer"},ae=e("hr",null,null,-1),ne=e("p",null,"And yet again that brings us to the end of another community update. We hope you enjoyed this content and that you are looking forward to seeing some of these changes coming to a Pulsar near you! As ever, it would be amiss of us to not mention our amazing community and especially our financial donors, who without this project would simply not be possible! So thank you again and see you all again this time next month!",-1);function re(se,ie){const o=d("ExternalLinkIcon");return l(),h("div",null,[_,u(" more "),w,e("p",null,[t("We did a lot of searching for alternative platforms and ultimately settled on using GitHub actions for nearly everything. This isn't perfect; for example, we cannot use it for our Apple silicon (M1, M2) builds, nor for ARM Linux, for which we are still using Cirrus CI. Over the next week there was a huge amount of effort put in by a number of Pulsar team members, but particularly "),e("a",y,[t("@confused-techie"),a(o)]),t(", "),e("a",k,[t("@DeeDeeG"),a(o)]),t(" and "),e("a",v,[t("@Meadowsys"),a(o)]),t(" to get everything moved and migrated in order to keep our builds building and our rolling releases rolling.")]),x,T,C,P,e("p",null,[t("If you use the Chocolately package manager for Windows, you may have noticed the official packages have been a few versions behind. This has now been solved and the latest versions are available once again with a lot of improvements to the process to avoid this kind of thing ever happening again. A huge thanks to "),e("a",A,[t("@COLAMAroro"),a(o)]),t(", "),e("a",I,[t("@spiker985"),a(o)]),t(" and "),e("a",W,[t("@confused-techie"),a(o)]),t(" for implementing this. We have already put up a whole blog post for this, so if you missed it, you can "),e("a",S,[t("read it here"),a(o)]),t(".")]),j,e("p",null,[e("a",M,[t("@confused-techie"),a(o)]),t(" has recently added a "),e("a",D,[t("new feature"),a(o)]),t(" to allow some additional configuration of Pulsar's title bar data. This new settings option allows you to decide if you want the current active Pulsar tab to be prepended to the title bar or not. This can potentially aid in readability for some, particularly if you are somebody who likes to work with multiple windows.")]),N,U,L,E,e("p",null,[t("This is currently available in our "),e("a",V,[t("rolling release"),a(o)]),t(" and will be in our next regular release in a couple of weeks.")]),q,O,e("p",null,[t("There are some very good reasons to want to unpublish a package or a specific version from the Pulsar Package Repository. You may have made a mistake or simply want to deprecate an old, non-functional version. Either way, we had an issue; it just wasn't working. Thankfully, due to some great collaboration between "),e("a",R,[t("@asiloisad/@bacadra"),a(o)]),t(" and "),e("a",B,[t("@confused-techie"),a(o)]),t(", the problem was "),e("a",G,[t("found and patched"),a(o)]),t(".")]),H,Y,e("p",null,[t("So with the above process and an improvement to the wording in the "),z,t(" command coming soon, we hope that this situation can be avoided in the future. A full writeup of what was done has been added to our "),e("a",F,[t("admin actions log"),a(o)]),t(" that details events just like this for full transparency to the community.")]),J,K,e("p",null,[t("It was brought to our attention by a community member that, upon uninstall, Pulsar was not clearing up all the directories it created during installation. Whilst this is somewhat expected for the configuration directory, there were also examples of other elements being left behind. To this end, "),e("a",Q,[t("@confused-techie"),a(o)]),t(" has been putting together a new package, "),e("a",X,[t("pulsar-cleanup"),a(o)]),t(", to try and deal with these leftover elements. As "),Z,t(" is largely in control of the uninstall process, some elements do get left over at the end of the process. This utility will be a stand-alone executable that can be used to fully clean up all these extra artifacts, leaving your system entirely clean of any Pulsar installation.")]),$,ee,e("p",null,[t("In our community spotlight this month, we want to say a big thank you to new first time contributor "),e("a",te,[t("@casswedson"),a(o)]),t(" for "),e("a",oe,[t("this PR"),a(o)]),t(" to remove a bunch of deprecation warnings in one of our workflows.")]),ae,ne])}const de=i(b,[["render",re],["__file","20230904-Daeraxa-SeptemberUpdate.html.vue"]]);export{de as default};