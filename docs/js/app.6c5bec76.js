(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],p=0,u=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Personal-Website/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"0c1b":function(e,t,n){},1094:function(e,t,n){},"2ee4":function(e,t,n){},3988:function(e,t,n){"use strict";var a=n("1094"),s=n.n(a);s.a},"4ee2":function(e,t,n){"use strict";var a=n("d2f8"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Profile",{attrs:{id:"profile_container",bio:e.bio},on:{contact_button:e.toggle_contact}}),n("div",{class:{blur:e.show_contact},attrs:{id:"interactive_resume"}},[n("h2",[e._v("Get to know my")]),n("div",{attrs:{id:"page_dropdown"}},[n("span",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide_dropdown,expression:"hide_dropdown"}],class:{empty_fill:""==e.resume_section,dropdown_active:e.show_dropdown},attrs:{id:"resume_page"},on:{click:function(t){e.show_dropdown=!e.show_dropdown}}},[e._v(" "+e._s(e.resume_section)+" "),n("font-awesome-icon",{class:{invert:e.show_dropdown},attrs:{id:"dropdown_chevron",icon:"chevron-down"}})],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.show_dropdown,expression:"show_dropdown"}],staticClass:"panel dropdown"},e._l(e.resume_elements,(function(t){return n("li",{directives:[{name:"show",rawName:"v-show",value:e.resume_section!=t.name,expression:"resume_section != page.name"}],key:t,attrs:{value:t.name},on:{click:function(n){return e.update_page(t.name)}}},[n("font-awesome-icon",{staticClass:"dropdown_icon",attrs:{icon:t.icon}}),e._v(" "+e._s(t.name)+" ")],1)})),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:""==e.resume_section,expression:"resume_section == ''"}],attrs:{id:"starting_page"}},[n("font-awesome-icon",{attrs:{id:"point_icon",icon:"hand-point-up"}}),n("h3",[e._v("Select an item from the list above to get started")])],1),""!=e.resume_section?n("ResumeComponent",{attrs:{resume_elements:e.resume_elements[e.resume_section].elements,display_props:e.resume_elements[e.resume_section].display_props,title:"Test"}}):e._e(),n("font-awesome-icon",{staticClass:"panel panel_hover",attrs:{id:"dark_toggle",icon:["fas","moon"]},on:{click:e.toggle_dark}})],1),n("transition",{attrs:{name:"slide-up-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show_contact,expression:"show_contact"}]},[n("Contact",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide_contact,expression:"hide_contact"}],on:{close_contact:this.force_hide_cont}})],1)])],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"bio"},[e._m(1),n("div",{staticClass:"info_container"},[n("p",[e._v(e._s(e.bio))])])]),n("div",{staticClass:"call_to_action"},[n("button",{on:{click:function(t){return e.$emit("contact_button","show_contact")}}},[e._v("Contact Me")])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile"},[a("img",{staticClass:"profile_picture",attrs:{src:n("d161")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"title"},[e._v(" Liam "),n("br"),e._v("Telenko ")])}],c={name:"Profile",data:function(){return{show_contact:!1}},props:{bio:String},methods:{}},l=c,d=(n("671e"),n("2877")),p=Object(d["a"])(l,o,r,!1,null,"00099c38",null),u=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume_page",class:{half:"half"==e.display_props.size,no_timeline:!e.display_props.timeline}},e._l(e.resume_elements,(function(t){return n("ResumeElement",{key:t.name,staticClass:"resume_element",class:{half:"half"==e.display_props.size,no_timeline:!e.display_props.timeline},attrs:{display_props:e.display_props,element_data:t}})})),1)},_=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{expand:e.expand_element}},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}],class:{expanded:e.expand_element},style:{"background-image":"linear-gradient(140deg, var(--panel_colour), 78%, "+e.element_data.accent+"), url(/images/"+e.element_data.image+")"},on:{click:e.toggle_element}},[n("div",{staticClass:"above_fold"},[n("h3",[e._v(e._s(e.element_data.name))]),n("p",{staticClass:"year"},[e._v(e._s(e.element_data.dates))]),n("div",{staticClass:"intro"},[n("p",[e._v(e._s(e.element_data.description))])])]),n("div",{staticClass:"below_fold",class:{expand_below_fold:e.expand_element}},[n("p",{directives:[{name:"show",rawName:"v-show",value:null!=e.element_data.location,expression:"element_data.location != null"}],staticClass:"location"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"map-marker-alt"}}),e._v(" "+e._s(e.element_data.location)+" ")],1),n("div",{attrs:{id:"expand_points_cont"}},e._l(e.element_data.points,(function(t){return n("div",{key:t.title,staticClass:"expand_point"},[n("h4",[e._v(e._s(t.title))]),n("td",{staticClass:"expand_point_content",domProps:{innerHTML:e._s(t.content)}})])})),0)])])])},h=[],v={props:{title:String,element_data:Object,display_props:Object},data:function(){return{expand_element:!0}},methods:{hide:function(){this.expand_element=!1},toggle_element:function(){this.display_props.expand&&(this.expand_element=!this.expand_element)}}},g=v,w=(n("3988"),Object(d["a"])(g,f,h,!1,null,"5ca88d52",null)),b=w.exports,y={name:"ResumeComponent",props:{title:String,resume_elements:Array,display_props:Object},components:{ResumeElement:b},data:function(){return{}}},x=y,C=(n("4ee2"),Object(d["a"])(x,m,_,!1,null,null,null)),k=C.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container panel"},[n("h2",[e._v("Let's get in touch")]),n("p",[e._v("Fill in the form below and I'll get back to you as soon as possible")]),n("div",{staticClass:"form_container"},[e.form_submitted?e._e():n("form",{attrs:{id:"contact_form",action:"https://formspree.io/xaypeppj",method:"POST"}},[n("input",{staticClass:"input",attrs:{placeholder:"",type:"text",name:"name"}}),n("label",[e._v("Name:")]),n("input",{staticClass:"input",attrs:{placeholder:"",type:"email",name:"email"}}),n("label",[e._v("Email:")]),n("textarea",{staticClass:"input",attrs:{id:"message",placeholder:"",type:"text",name:"message"}}),n("label",[e._v("Message:")])]),e.form_submitted?n("div",{attrs:{id:"form_success"}},[n("font-awesome-icon",{staticClass:"success_icon",attrs:{icon:"thumbs-up"}}),n("h3",[e._v("Thanks!")]),n("p",[e._v("Your message sent successfully, we'll be in touch.")])],1):e._e()]),e.form_submitted?e._e():n("button",{attrs:{id:"contact-form-button"}},[n("font-awesome-icon",{staticClass:"button_icon",attrs:{icon:"paper-plane"}}),e._v("Submit")],1),n("button",{directives:[{name:"show",rawName:"v-show",value:e.form_submitted,expression:"form_submitted"}],attrs:{id:"close"},on:{click:function(t){return e.$emit("close_contact")}}},[e._v("Close")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.form_submitted,expression:"!form_submitted"}],attrs:{id:"contact-form-status"}}),n("p",{attrs:{id:"contact-form-succ"},on:{click:this.update_form_status}})])},j=[],S={name:"contact",data:function(){return{form_submitted:!1}},methods:{update_form_status:function(){this.form_submitted=!0}},props:{}},P=S,M=(n("a6d1"),Object(d["a"])(P,O,j,!1,null,"35dfe9e4",null)),T=M.exports,E={name:"App",components:{Profile:u,ResumeComponent:k,Contact:T},methods:{toggle_dark:function(){this.dark_mode?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark"),this.dark_mode=!this.dark_mode},hide_dropdown:function(){this.show_dropdown=!1},force_hide_cont:function(){this.show_contact=!1},hide_contact:function(e){"Contact Me"!=e.explicitOriginalTarget.innerHTML&&(this.show_contact=!1)},update_page:function(e){this.resume_section=e},toggle_contact:function(){this.show_contact=!this.show_contact,this.show_contact?this.contact_component="":this.contact_component="Contact"}},data:function(){return{resume_section:"",bio:"I am a second year engineering student studying at McMaster University in Hamilton, Ontario. I am an avid developer who creates fluid layouts and efficient code.",dark_mode:!1,show_contact:!1,show_dropdown:!1,resume_elements:{education:{name:"education",icon:["fas","graduation-cap"],display_props:{expand:!0,timeline:!0},elements:[{name:"McMaster University",dates:"2019 - Present",description:"Bachelor of Engineering (co-op)",image:"mcmaster.jpg",points:[{title:"Course Highlights",content:"<span class='bold_text'>Engineering Computation</span><ul class='expand_list'><li>Analysed and implemented algorithms in Python</li><li>Studied best practices and methods of development</li></ul><hr/><span class='bold_text'>Engineering Profession & Practice</span><ul class='expand_list'><li>Developed strong interpersonal and team building skills.</li><li>Studied the ethics and expectations of working in a professional setting.</li></ul>"}],location:"Hamilton, ON",accent:"rgba(202 , 111, 0, .2)"},{name:"William Lyon Mackenzie",dates:"2019 - Present",location:"Toronto, ON",description:"OSSD, MaCS (Math and Computer Science)",points:[{title:"Course Highlights",content:"<span class='bold_text'>Computer Engineering Technology</span><ul class='expand_list'><li>Studied and applied CISCO IT training in small scale simulations.</li><li>Developed low level programs for 8085 microprocessors.</li></ul><hr/><span class='bold_text'>Introduction to Computer Science</span><ul class='expand_list'><li>Worked in teams to develop full stack software in Java.</li><li>Studied computer science theory at the AP level.</li></ul>"}],image:"wlmac.jpg",accent:"rgba(0,0,0,0)"}]},"work experience":{name:"work experience",icon:["fas","briefcase"],display_props:{timeline:!0,expand:!0},elements:[{name:"McMaster University",dates:"2020",description:"Information Technology Assistant",points:[{title:"Responsibilities",content:"<ul class='expand_list'><li>Provided individual and group support for users in a variety of production environments.</li><li>Troubleshooted computer systems using a priority ticketing system.</li><li>Performed maintenance on customer systems including disk imaging, virus removal, and hardware upgrades.</ul>"}],image:"mcmaster.jpg",location:"Hamilton, ON",accent:"rgba(202 , 111, 0, .2)"},{name:"Camp Kawartha",dates:"2018 - 2020",description:"Head of Ropes & Lifeguard.",location:"Douro-Dummer, ON",image:"ck.JPG",points:[{title:"Responsibilities",content:"<ul class='expand_list'><li>Planned, communicated, and led group activities.</li><li>Worked in a team to ensure the safe operation of the waterfront and ropes areas.</li></ul>"}],accent:"rgba(0,0,0,0)"}]},certifications:{name:"certifications",icon:["fas","award"],size:"half",display_props:{timeline:!1,size:"half",expand:!1},elements:[{name:"CISCO IT Essentials",dates:"2020",image:"keyboard.jpg",accent:"rgba(21 , 73, 91, .2)"},{name:"FIT Network Systems and Operations with Industry Certificate",dates:"2019",image:"network.jpg",accent:"rgba(0,0,0,0)"},{name:"FIT Software Design and Development",dates:"2019",image:"programming.jpeg",accent:"rgba(0,0,0,0)"},{name:"Standard First Aid and CPR/AED Level C",dates:"2018",image:"aed.jpeg",accent:"rgba(0,0,0,0)"},{name:"WHMIS",dates:"2018",image:"whmis.jpg",accent:"rgba(0,0,0,0)"}]}}}}},N=E,I=(n("034f"),Object(d["a"])(N,s,i,!1,null,null,null)),$=I.exports,A=n("37c3"),H=n.n(A),R=n("ecee"),D=n("c074"),L=n("ad3d");a["a"].component("font-awesome-icon",L["a"]),R["c"].add(D["d"],D["b"],D["g"],D["h"],D["i"],D["c"],D["e"],D["f"],D["a"]),a["a"].config.productionTip=!1,a["a"].use(H.a),new a["a"]({render:function(e){return e($)}}).$mount("#app")},"671e":function(e,t,n){"use strict";var a=n("0c1b"),s=n.n(a);s.a},"85ec":function(e,t,n){},a6d1:function(e,t,n){"use strict";var a=n("2ee4"),s=n.n(a);s.a},d161:function(e,t,n){e.exports=n.p+"img/Liam_Telenko.00af789c.jpg"},d2f8:function(e,t,n){}});
//# sourceMappingURL=app.6c5bec76.js.map