(this["webpackJsonppatients-test"]=this["webpackJsonppatients-test"]||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),s=(a(32),a(6)),u=(a(38),a(39),a(10)),l=a(24),o=(a(40),a(41),function(e){var t=e.data;return i.a.createElement("thead",{className:"table-header"},i.a.createElement("tr",null,t.data.map((function(e){return i.a.createElement("th",{key:e.id},e.name)}))))}),m=function(e){var t=e.data,a=e.headerData,n=e.activeTabIndex,c=e.setActivePatient,r=e.activePatient;return i.a.createElement("tbody",{className:"body"},t.map((function(e,t){var s=r===e;return i.a.createElement("tr",{key:e.historyNumber,className:s?"row_active":"",onClick:function(){return c(e)}},a.data.map((function(t,a){var c;switch(a){case 0:c=e.historyNumber;break;case 1:c="".concat(e.lastName," ").concat(e.firstName," ").concat(e.patrName);break;case 2:switch(n){case 0:c=e.bedNumber;break;case 1:c=e.cause;break;default:c="null"}break;default:c="null"}return i.a.createElement("td",{key:a},c)})))})))},d=function(e){var t,a,n=e.present,c=e.quitting,r=e.tableHeaderData,s=e.activeTabIndex,u=e.setActivePatient,l=e.activePatient;switch(s){case 0:t=n,a=r[0];break;case 1:t=c,a=r[1];break;default:t=null,a=null}return t&&null!==t&&null!==a?i.a.createElement("div",{className:"patients-table"},i.a.createElement("table",{className:"table"},i.a.createElement(o,{data:a}),i.a.createElement(m,{data:t,headerData:a,activeTabIndex:s,activePatient:l,setActivePatient:u}))):i.a.createElement(i.a.Fragment,null)},p=(a(42),function(e){var t=e.tabsData,a=e.activeTabIndex,n=e.setActiveTabIndex,c=e.presentCount,r=e.quittingCount,s=t.map((function(e,t){var s=t===a,u=0;switch(t){case 1:u=r;break;default:u=c}return i.a.createElement("button",{key:e.id,className:"tabItem ".concat(s?"tabItem_active":""),onClick:function(){n(t)}},e.name,"(",u,")")}));return i.a.createElement("div",{className:"tabs"},s)}),v=function(e){var t=e.present,a=e.quitting,n=e.activeTabIndex,c=e.tableHeaderData,r=e.setActivePatient,s=e.activePatient,u=Object(l.a)(e,["present","quitting","activeTabIndex","tableHeaderData","setActivePatient","activePatient"]),o=null!==t&&void 0!==t,m=null!==a&&void 0!==a;return i.a.createElement("div",{className:"tabView"},i.a.createElement(p,Object.assign({},u,{activeTabIndex:n,presentCount:o?t.length:0,quittingCount:m?a.length:0})),i.a.createElement(d,{present:t,quitting:a,tableHeaderData:c,activeTabIndex:n,activePatient:s,setActivePatient:r}))},f=[{id:0,name:"\u041f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"},{id:1,name:"\u0412\u044b\u0431\u044b\u0432\u0448\u0438\u0435"}],b=[{id:0,data:[{id:0,name:"\u2116 \u0418\u0411"},{id:1,name:"\u0424\u0418\u041e"},{id:2,name:"\u041f\u0430\u043b\u0430\u0442\u0430"}]},{id:1,data:[{id:0,name:"\u2116 \u0418\u0411"},{id:1,name:"\u0424\u0418\u041e"},{id:2,name:"\u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0432\u044b\u0431\u044b\u0442\u0438\u044f"}]}],E={getActivePatient:function(e){return e.app.activePatient},getCollapseMode:function(e){return e.app.collapseMode},getPresentPatients:function(e){return e.app.presentPatients},getQuittingPatients:function(e){return e.app.quittingPatients}},P=a(7),g=a.n(P),T=a(25).create({baseURL:"http://my-json-server.typicode.com/PlebeyRisk/test-server/"}),h=function(){return T.get("quitting").then((function(e){return e.data}),(function(e){return console.log("error fetching getQuitting(): "+e)}))},N=function(){return T.get("present").then((function(e){return e.data}),(function(e){return console.log("error fetching getPresent(): "+e)}))},I={fetchPresentPatients:function(){return function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.awrap(N());case 2:(t=a.sent)&&e({type:"app/SET_PRESENT_PATIENTS",present:t});case 4:case"end":return a.stop()}}))}},fetchQuittingPatients:function(){return function(e){var t;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.awrap(h());case 2:(t=a.sent)&&e({type:"app/SET_QUITTING_PATIENTS",quitting:t});case 4:case"end":return a.stop()}}))}},setActivePatient:function(e){return{type:"app/SET_ACTIVE_PATIENT",patient:e}}},_=Object(s.b)((function(e){var t=E.getPresentPatients,a=E.getQuittingPatients;return{activePatient:(0,E.getActivePatient)(e),present:t(e),quitting:a(e)}}),I)((function(e){var t=e.fetchPresentPatients,a=e.fetchQuittingPatients,c=e.setActivePatient,r=e.activePatient,s=e.present,l=e.quitting,o=Object(n.useState)(0),m=Object(u.a)(o,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){t(),a()}),[]),i.a.createElement(v,{tabsData:f,tableHeaderData:b,activeTabIndex:d,setActiveTabIndex:p,present:s,quitting:l,activePatient:r,setActivePatient:c})})),A=(a(62),function(e){var t=e.name,a=e.value;return i.a.createElement("div",{className:"infoItem"},i.a.createElement("span",{className:"infoItem__name"},t),i.a.createElement("div",{className:"infoItem__value"},a))}),w=function(e){var t,a=e.data,n=e.setCollapseMode,c=e.collapseMode,r=null,s=null,u=null;return a&&(r="".concat(a.lastName," ").concat(a.firstName," ").concat(a.patrName),t=a.birthDate,s=((new Date).getTime()-new Date(t))/315576e5|0,u=a.diagnosis),i.a.createElement("div",{className:"patientInfo".concat(c?" _collapse":"")},i.a.createElement("div",{className:"patientInfo-header"},i.a.createElement("span",{className:"patientInfo__title"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0435"),i.a.createElement("button",{className:"resizeButton",onClick:function(){n(!c)}},i.a.createElement("span",{className:"resizeButton__icon"}))),i.a.createElement("div",{className:"patientInfo-body"},i.a.createElement(A,{name:"\u0424\u0418\u041e",value:r}),i.a.createElement(A,{name:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",value:s}),i.a.createElement(A,{name:"\u0414\u0438\u0430\u0433\u043d\u043e\u0437",value:u})))},k=Object(s.b)((function(e){return{activePatient:(0,E.getActivePatient)(e)}}))((function(e){var t=e.activePatient,a=Object(n.useState)(!1),c=Object(u.a)(a,2),r=c[0],s=c[1];return i.a.createElement(w,{data:t,collapseMode:r,setCollapseMode:s})})),y=function(){return i.a.createElement("div",{className:"main"},i.a.createElement(k,null),i.a.createElement(_,null))};var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(4),x=a(26),S=a(8),q={activePatient:null,collapseMode:!1,presentPatients:null,quittingPatients:null},C=Object(j.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_ACTIVE_PATIENT":return Object(S.a)({},e,{activePatient:t.patient});case"app/SET_COLLAPSE_MODE":return Object(S.a)({},e,{collapseMode:t.mode});case"app/SET_PRESENT_PATIENTS":return Object(S.a)({},e,{presentPatients:t.present});case"app/SET_QUITTING_PATIENTS":return Object(S.a)({},e,{quittingPatients:t.quitting});default:return e}}}),D=Object(j.d)(C,Object(j.a)(x.a));r.a.render(i.a.createElement(s.a,{store:D},i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9669054c.chunk.js.map