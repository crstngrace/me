(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{436:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5a0e5697",content,!0,{sourceMap:!1})},438:function(t,e,n){"use strict";n(436)},439:function(t,e,n){var r=n(15)(!1);r.push([t.i,".page-title[data-v-3227a552]{width:100%;font-weight:700;text-align:right;text-transform:uppercase}.divider-1[data-v-3227a552],.divider-2[data-v-3227a552]{width:5px;height:5px;border-radius:50%}",""]),t.exports=r},441:function(t,e,n){"use strict";n.r(e);var r={props:{title:String}},c=(n(438),n(49)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-content mx-auto mb-12 scale-out"},[n("div",{staticClass:"page-title text-center text-h6 text-sm-h5"},[t._v(t._s(t.title))]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-row justify-center align-center"},[n("div",{staticClass:"divider divider-0"}),t._v(" "),n("div",{staticClass:"divider divider-1"}),t._v(" "),n("div",{staticClass:"flower"}),t._v(" "),n("div",{staticClass:"divider divider-2"}),t._v(" "),n("div",{staticClass:"divider divider-3"})])}],!1,null,"3227a552",null);e.default=component.exports},474:function(t,e,n){var content=n(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6947290b",content,!0,{sourceMap:!1})},509:function(t,e,n){"use strict";n(474)},510:function(t,e,n){var r=n(15)(!1);r.push([t.i,".date[data-v-4c13c092]{text-align:right;border-right:1px solid red}img[data-v-4c13c092]{display:block;width:75%;margin:0 auto}.sm-date[data-v-4c13c092]{white-space:nowrap}.title[data-v-4c13c092]{word-break:break-word}",""]),t.exports=r},562:function(t,e,n){"use strict";n.r(e);n(60);var r={name:"Experience",data:function(){return{certReveal:!1,experience:[]}},watch:{portfolio:{immediate:!0,handler:function(t){var e=this;t.experience.data.map((function(t){t.toggle=!1,e.experience.push(t)}))}}}},c=(n(509),n(49)),l=n(57),o=n.n(l),v=n(420),d=n(449),_=n(440),x=n(547),m=n(429),f=n(511),C=n(202),h=n(192),w=n(166),y=n(430),k=n(548),V=n(551),E=n(552),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"experience",attrs:{id:"experience"}},[n("v-layout",{staticClass:"content px-2 px-md-15"},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("PageTitle",{attrs:{title:"Education and Experience"}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4",md:"3"}},[n("v-card",{staticClass:"fade-in mx-auto px-2 py-5"},[n("div",{staticClass:"px-10"},[n("img",{attrs:{src:t.portfolio.education.data.img}})]),t._v(" "),n("v-card-subtitle",{staticClass:"text-center"},[n("div",[n("v-icon",{staticClass:"text-subtitle-2 grey--text pa-1"},[t._v("\n                  mdi-school\n                ")]),t._v("\n                "+t._s(t.portfolio.education.data.course)+"\n              ")],1),t._v(" "),n("div",[n("v-icon",{staticClass:"text-subtitle-2 grey--text pa-1"},[t._v("\n                  mdi-map-marker\n                ")]),t._v("\n                "+t._s(t.portfolio.education.data.location)+"\n              ")],1)]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"text-uppercase",attrs:{href:t.portfolio.education.data.link,target:"_blank",color:"secondary",block:"",rel:"noopener noreferrer"}},[t._v("\n                Visit\n              ")])],1)],1),t._v(" "),n("v-card",{staticClass:"fade-in mx-auto px-2 py-5 mt-5"},[n("v-card-title",{staticClass:"title"},[t._v("\n              "+t._s(t.portfolio.trainings.title))]),t._v(" "),t._l(t.portfolio.trainings.data,(function(e,i){return n("div",{key:i},[i<3?[n("v-card-text",{staticClass:"pb-1"},[n("strong",{staticClass:"text-body-2"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"grey--text"},[n("div",{staticClass:"text-caption"},[t._v(t._s(e.source))]),t._v(" "),n("em",{staticClass:"text-caption"},[n("v-icon",{staticClass:"text-caption grey--text"},[t._v("\n                        mdi-calendar-blank\n                      ")]),t._v("\n                      "+t._s(e.start_date)+"\n                    ")],1)]),t._v(" "),n("v-divider")],1)]:[n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.certReveal,expression:"certReveal"}]},[n("v-card-text",{staticClass:"pb-1"},[n("strong",{staticClass:"text-body-2"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"grey--text"},[n("div",{staticClass:"text-caption"},[t._v(t._s(e.source))]),t._v(" "),n("em",{staticClass:"text-caption"},[n("v-icon",{staticClass:"text-caption grey--text"},[t._v("\n                            mdi-calendar-blank\n                          ")]),t._v("\n                          "+t._s(e.start_date)+"\n                        ")],1)]),t._v(" "),n("v-divider")],1)],1)])]],2)})),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"orange"},on:{click:function(e){t.certReveal=!t.certReveal}}},[t._v("\n                "+t._s(t.certReveal?"Show Less":"Show More")+"\n              ")])],1)],2)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8",md:"9"}},[n("v-timeline",{attrs:{dense:""}},t._l(t.experience,(function(e,i){return n("v-timeline-item",{key:i,attrs:{color:"#ffa500","fill-dot":"",small:""}},[n("v-card",{staticClass:"elevation-0 mb-6"},[n("v-row",{staticClass:"slide-up pa-3"},[n("v-col",{staticClass:"pr-0",attrs:{cols:"12",md:"2"}},[n("strong",[n("small",{staticClass:"text-caption"},[n("span",{staticClass:"sm-date"},[t._v(t._s(e.start_date))]),t._v("\n                        -\n                        "),n("span",{staticClass:"sm-date"},[t._v(t._s(e.end_date))])])])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"mb-2"},[n("strong",{staticClass:"text-uppercase"},[t._v("\n                        "+t._s(e.title))]),t._v(" "),n("div",{staticClass:"small"},[n("a",{staticClass:"link text-body-2 orange--text",attrs:{href:e.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.company)+"\n                        ")])]),t._v(" "),n("div",{staticClass:"d-flex align-start"},[n("v-icon",{staticClass:"text-subtitle-2 grey--text pa-1"},[t._v("\n                          mdi-map-marker\n                        ")]),t._v(" "),n("div",{staticClass:"text-subtitle-2 grey--text"},[t._v("\n                          "+t._s(e.location)+"\n                        ")])],1)])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"2"}},[n("small",{staticClass:"link",on:{click:function(t){e.toggle=!e.toggle}}},[t._v("\n                      "+t._s(e.toggle?"Show Less":"Show More")+"\n                      "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("\n                          "+t._s(e.toggle?"mdi-chevron-up":"mdi-chevron-down")+"\n                        ")])],1)],1)])],1),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.toggle,expression:"experience.toggle"}]},[n("v-divider"),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-5 pr-0 d-flex justify-center align-center",attrs:{cols:"12",md:"2"}},[n("v-img",{attrs:{src:e.img,"lazy-src":e.img,height:"100","max-width":"100",contain:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",t._l(e.tasks,(function(e,r){return n("ul",{key:r},[n("li",[t._v(t._s(e))])])})),0)],1)],1)],1)])],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,"4c13c092",null);e.default=component.exports;o()(component,{PageTitle:n(441).default}),o()(component,{VBtn:v.a,VCard:d.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VCol:x.a,VContainer:m.a,VDivider:f.a,VExpandTransition:C.a,VIcon:h.a,VImg:w.a,VLayout:y.a,VRow:k.a,VTimeline:V.a,VTimelineItem:E.a})}}]);