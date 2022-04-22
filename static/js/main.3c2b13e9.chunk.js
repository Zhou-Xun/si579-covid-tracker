(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{119:function(e,t,a){e.exports=a(235)},124:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},230:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),l=(a(124),a(24)),s=a.n(l),i=a(40),u=a(5),d=(a(126),a(255)),f=a(253),m=a(256),v=(a(127),function(e){return o.a.createElement(d.a,{onClick:e.onClick,className:"infoBox ".concat(e.active&&"infoBox--selected"," ").concat("blue"===e.color&&"infoBox--blue"," \n      ").concat("red"===e.color&&"infoBox--red")},o.a.createElement(f.a,null,o.a.createElement(m.a,{color:"textSecondary",gutterBottom:!0},e.title),o.a.createElement("h2",{className:"infoBox__cases ".concat("red"===e.color&&"infoBox__cases--red"," ").concat("blue"===e.color&&"infoBox__cases--blue")},e.cases),o.a.createElement(m.a,{className:"infoBox__total",color:"textSecondary"},e.total," Total")))}),C=a(26),p=a(87),h=["#666666","#CC1034","#6699CC","#CCCCCC","#9999CC","#99CCFF","#999933","#666699","#CC9933","#006666","#3399FF","#993300","#CCCC99","#336699","#FFCC66","#663366","#669999","#CCCC66","#CC6600","#9999FF","#0066CC","#99CCCC","#999999","#FFCC00","#009999","#99CC33","#FF9900","#999966","#66CCCC","#339966","#CCCC33","#003f5c","#665191","#a05195","#d45087","#2f4b7c","#f95d6a","#ff7c43","#ffa600","#EF6F6C","#465775","#56E39F","#59C9A5","#5B6C5D","#0A2342","#2CA58D","#84BC9C","#CBA328","#F46197","#DBCFB0","#545775"],E=a(18),b=a.n(E),y=(a(227),function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)([]),d=Object(u.a)(l,2),f=(d[0],d[1],Object(n.useState)([])),m=Object(u.a)(f,2),v=m[0],E=m[1],y={pieContainer:{width:"30%",height:"30%",position:"relative"},relative:{position:"relative"}},g={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return b()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return b()(e).format("0a")}}}]}},j={maintainAspectRatio:!1,responsive:!1,labels:["todayCases","todayDeaths","todayRecovered"],datasets:[{data:v,backgroundColor:h,hoverBackgroundColor:h}]},O=function(e){E([]),E((function(t){return[].concat(Object(C.a)(t),[e.todayCases])})),E((function(t){return[].concat(Object(C.a)(t),[e.todayDeaths])})),E((function(t){return[].concat(Object(C.a)(t),[e.todayRecovered])})),console.log("why"),console.log(e.todayCases),console.log(v)},x=function(e,t){var a,n=[];for(var o in console.log(e[t]),e[t]){if(a){var r={x:o,y:e[t][o]-a};n.push(r)}a=e[t][o]}return n};Object(n.useEffect)((function(){(function(){var t=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(t){var a=x(t,e.casesType);console.log(a),c(a)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.casesType]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries/usa").then((function(e){return e.json()})).then((function(e){O(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w="",k="";return"cases"===e.casesType?(w="#666666",k="#CCCCCC"):"recovered"===e.casesType?(w="#6699CC",k="#99CCFF"):(w="#CC1034",k="#f95d6a"),o.a.createElement("div",null,o.a.createElement("h3",null,"Worldwide ",e.casesType," last month"),o.a.createElement("div",{style:y.relative},r.length>0&&o.a.createElement(p.Line,{data:{datasets:[{label:"New cases",backgroundColor:k,borderColor:w,data:r}]},legend:{display:!0,position:"bottom",labels:{fontColor:"#323130",fontSize:14}},options:g})),o.a.createElement("h3",null,"Today in the United States"),o.a.createElement("div",{style:y.pieContainer},o.a.createElement(p.Pie,{data:j,options:{legend:{display:!0,position:"right"},elements:{arc:{borderWidth:0}}}})))}),g=(a(228),a(111));var j=function(e){var t=e.countries;return o.a.createElement("div",{style:{overflow:"scroll"}},o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Country"),o.a.createElement("th",null,"Case Number"))),o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.country),o.a.createElement("td",null,o.a.createElement("strong",null,b()(e.cases).format("0,0"))))})))))},O=a(254),x=a(257),w={cases:{hex:"#999999",rgb:"#999999",half_op:"#666666",multiplier:200},recovered:{hex:"#99CCFF",rgb:"#99CCFF",half_op:"#6699CC",multiplier:200},deaths:{hex:"#f95d6a",rgb:"#f95d6a",half_op:"#CC1034",multiplier:200}},k=function(e){var t=Object(C.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},F=function(e){return e?"+".concat(b()(e).format("0.0a")):"+0"},S=a(258),_=a(259),B=(a(230),function(e){return console.log(e.countries),o.a.createElement("div",{className:"map"},o.a.createElement(S.a,{center:e.center,zoom:e.zoom},o.a.createElement(_.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return o.a.createElement(O.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:w[t].hex,fillColor:w[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*w[t].multiplier},o.a.createElement(x.a,null,o.a.createElement("div",{className:"info-container"},o.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),o.a.createElement("div",{className:"info-name"},e.country),o.a.createElement("div",{className:"info-population"},"Population: ",e.population),o.a.createElement("div",{className:"info-confirmed"},"Cases: ",b()(e.cases).format("0,0")),o.a.createElement("div",{className:"info-recovered"},"Recovered: ",b()(e.recovered).format("0,0")),o.a.createElement("div",{className:"info-deaths"},"Deaths: ",b()(e.deaths).format("0,0")))))}))}(e.countries,e.casesType)))}),N=(a(231),a(232),a(114)),T=a(56),D=a(88),I=a(41),A=a(113),R=a(89),z=function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)({}),c=Object(u.a)(r,2),l=c[0],m=c[1],C=Object(n.useState)([]),p=Object(u.a)(C,2),h=p[0],E=p[1],g=Object(n.useState)([]),O=Object(u.a)(g,2),x=O[0],w=O[1],S=Object(n.useState)([]),_=Object(u.a)(S,2),z=_[0],K=_[1],M=Object(n.useState)("cases"),W=Object(u.a)(M,2),L=W[0],J=W[1],P=Object(n.useState)({lat:34.80746,lng:-40.4796}),Y=Object(u.a)(P,2),q=Y[0],U=Y[1],V=Object(n.useState)(3),$=Object(u.a)(V,2),G=$[0],H=$[1],Q=Object(n.useState)(""),X=Object(u.a)(Q,2),Z=X[0];X[1];Object(n.useEffect)((function(){var e=setTimeout((function(){}),3e3);return function(){return clearTimeout(e)}}),[Z]),Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){m(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=k(e);E(t),w(e),K(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var ee=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,console.log("country Code: ",t),console.log("country Code type: ",typeof n),console.log("worldwide"===t),o="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=7,fetch(o).then((function(e){return e.json()})).then((function(e){a(n),m(e),U([e.countryInfo.lat,e.countryInfo.long]),H(4)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__left"},o.a.createElement("div",{className:"app__header"},o.a.createElement(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(D.a,null,o.a.createElement(T.a.Brand,{href:"#home"},"Covid-19 Data Visualization"),o.a.createElement(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(T.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(N.a,{variant:"pills",activeKey:"1"},o.a.createElement(I.a,{title:"Case Type",id:"nav-dropdown",onSelect:function(e){return J(e)}},o.a.createElement(I.a.Item,{eventKey:"cases"},"Coronavirus Cases"),o.a.createElement(I.a.Item,{eventKey:"recovered"},"Recovered"),o.a.createElement(I.a.Item,{eventKey:"deaths"},"Deaths")),o.a.createElement(I.a,{title:"Country",id:"nav-dropdown",onSelect:ee},h.map((function(e){return o.a.createElement(I.a.Item,{eventKey:e.value},e.name)}))))))),o.a.createElement(D.a,null,o.a.createElement(A.a,null,o.a.createElement(R.a,null,o.a.createElement("h3",null,"Live Cases by Country"),o.a.createElement(j,{countries:z})),o.a.createElement(R.a,null,"cases"===L?o.a.createElement(v,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",active:"cases"===L,cases:F(l.todayCases),total:b()(l.cases).format("0.0a"),color:"grey"}):"recovered"===L?o.a.createElement(v,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===L,cases:F(l.todayRecovered),total:b()(l.recovered).format("0.0a"),color:"blue"}):o.a.createElement(v,{onClick:function(e){return J("deaths")},title:"Deaths",active:"deaths"===L,cases:F(l.todayDeaths),total:b()(l.deaths).format("0.0a"),color:"red"}),o.a.createElement(B,{countries:x,casesType:L,center:q,zoom:G})))))),o.a.createElement(d.a,{className:"app__right"},o.a.createElement(f.a,null,o.a.createElement("div",{className:"app__information"},o.a.createElement(y,{casesType:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.3c2b13e9.chunk.js.map