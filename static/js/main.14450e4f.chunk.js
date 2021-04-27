(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{101:function(e,t,c){},104:function(e,t,c){},106:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(10),r=c.n(s),o=c(25),i=c.n(o),l=c(36),u=c(16),d=c(232),j=c(236),h=c(238),f=c(239),b=c(240),v=c(18),x=c.n(v),O=(c(101),c(3));var p=function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:x()(c).format("0,0")})})]})}))})},m=c(243),g=c(244),y=(c(103),c(104),c(90)),N=c(241),k=c(242),_=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},C={cases:{hex:"rgb(204,16,52)",multiplier:300},recovered:{hex:"#7dd71d",multiplier:300},deaths:{hex:"rgb(57,57,57)",multiplier:1200}},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(O.jsx)(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:C[t].hex,fillColor:C[t].hex,radius:Math.sqrt(e[t])*C[t].multiplier,children:Object(O.jsx)(k.a,{children:Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(O.jsxs)("h3",{className:"info-name",children:[e.country," "]}),Object(O.jsxs)("div",{className:"info-cases",children:["Cases: ",x()(e.cases).format("0,0")]}),Object(O.jsxs)("div",{className:"info-recovered",children:["Recovered: ",x()(e.recovered).format("0,0")]}),Object(O.jsxs)("div",{className:"info-deaths",children:["Deaths: ",x()(e.deaths).format("0,0")]})]})})})}))},w=function(e){return e?"+".concat(x()(e).format("0,0a")):"+0"};var S=function(e){var t=e.center,c=e.zoom,n=e.countries,a=e.casesType;return Object(O.jsx)("div",{className:"map",children:Object(O.jsxs)(m.a,{center:t,zoom:c,children:[Object(O.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),B(n,a)]})})},I=c(55),T=c(237);c(106);var R=function(e){var t=e.title,c=e.cases,n=e.total,a=e.active,s=e.isRed,r=e.isBlack,o=e.isGreen,i=Object(I.a)(e,["title","cases","total","active","isRed","isBlack","isGreen"]);return Object(O.jsx)(d.a,{onClick:i.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(r&&"infoBox--black"," ").concat(s&&"infoBox--red"," "),children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(T.a,{color:"textSecondary",className:"infoBox__title",children:t}),Object(O.jsx)("h2",{className:"infoBox__cases  ".concat(s&&"infoBox__cases--red"," ").concat(o&&"infoBox__cases--green"),children:c}),Object(O.jsxs)(T.a,{color:"textSecondary",className:"infoBox__total",children:[n," Total"]})]})})},D=c(89),F={cases:{hex:"rgb(204,16,52)",fill:"rgb(204,16,52, 0.5)",multiplier:300},recovered:{hex:"#7dd71d",fill:"rgb(125,215,29, 0.5)",multiplier:300},deaths:{hex:"rgb(57,57,57)",fill:"rgb(57,57,57, 0.5)",multiplier:700}},L={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return x()(e).format("0a")}}}]}},M=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var z=function(e){var t=e.casesType,c=void 0===t?"cases":t,a=Object(I.a)(e,["casesType"]),s=Object(n.useState)({}),r=Object(u.a)(s,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=M(e,c);d(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(O.jsx)("div",{className:a.className,children:(null===o||void 0===o?void 0:o.length)>0&&Object(O.jsx)(D.Line,{className:"lineGraph",data:{datasets:[{backgroundColor:"".concat(F[c].fill),borderColor:"".concat(F[c].hex),data:o}]},options:L})})};c(205);var E=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("worldwide"),r=Object(u.a)(s,2),o=r[0],v=r[1],x=Object(n.useState)({}),m=Object(u.a)(x,2),g=m[0],y=m[1],N=Object(n.useState)([]),k=Object(u.a)(N,2),C=k[0],B=k[1],I=Object(n.useState)("cases"),T=Object(u.a)(I,2),D=T[0],F=T[1],L=Object(n.useState)({lat:34.08,lng:-40.4796}),M=Object(u.a)(L,2),E=M[0],G=M[1],W=Object(n.useState)(3),A=Object(u.a)(W,2),J=A[0],P=A[1],Y=Object(n.useState)([]),q=Object(u.a)(Y,2),H=q[0],V=q[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=_(e);B(c),a(t),V(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var K=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,console.log(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),y(e),G([e.countryInfo.lat,e.countryInfo.long]),P(4)}));case 5:console.log("country info >> ",g);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app__left",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{children:"Covid-19 Tracker"}),Object(O.jsx)(h.a,{children:Object(O.jsxs)(f.a,{className:"header__selectBox",variant:"outlined",value:o,onChange:K,children:[Object(O.jsx)(b.a,{value:"worldwide",children:" WorldWide"}),c.map((function(e){return Object(O.jsxs)(b.a,{value:e.value,children:[" ",e.name]})}))]})})]}),Object(O.jsxs)("div",{className:"statistics",children:[Object(O.jsx)(R,{isRed:!0,active:"cases"===D,onClick:function(e){return F("cases")},title:"CoronaVirus Cases",cases:w(g.todayCases),total:w(g.cases)}),Object(O.jsx)(R,{isGreen:!0,active:"recovered"===D,onClick:function(e){return F("recovered")},title:"Recovered",cases:w(g.todayRecovered),total:w(g.recovered)}),Object(O.jsx)(R,{isBlack:!0,active:"deaths"===D,onClick:function(e){return F("deaths")},title:"Deaths",cases:w(g.todayDeaths),total:w(g.deaths)})]}),Object(O.jsx)(S,{casesType:D,center:E,zoom:J,countries:H})]}),Object(O.jsx)("div",{className:"app__right",children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)("h3",{children:"Live Cases By country"}),Object(O.jsx)(p,{countries:C}),Object(O.jsxs)("h3",{className:"app__right-secondH3",children:["World Wide New ",D]}),Object(O.jsx)(z,{className:"app__graph",casesType:D})]})})})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,246)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),G()}},[[206,1,2]]]);
//# sourceMappingURL=main.14450e4f.chunk.js.map