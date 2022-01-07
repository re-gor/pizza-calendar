(window["webpackJsonppizza-calendar"]=window["webpackJsonppizza-calendar"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(87),a(116)),s=a(117),i=a(73),m=a(34),u=a(23),d=a(125),E=a(121),f=a(33),y=a(69),p=a.n(y),g=a(70),v=a.n(g),h=a(3),_=a.n(h),b=a(71),w=a.n(b),k=function(e){var t=e.src,a=e.alt,n=e.width,l=e.height,c=e.fit,o=e.className,s=[],i={width:n||"auto",height:l||"auto",objectFit:c||"contain"};if(Array.isArray(t))for(var m=0;m<t.length;++m)s.push("".concat(t[m]," ").concat(m+1,"x"));else s.push(t);return r.a.createElement("picture",{className:_()(w.a.root,o),style:i},r.a.createElement("img",{srcSet:s.join(" "),alt:a||""}))},x=function(){return r.a.createElement("header",{className:v.a.root},r.a.createElement(d.a,{bg:"dark",variant:"dark",expand:"sm"},r.a.createElement(o.a,{className:"justify-content-between"},r.a.createElement(f.LinkContainer,{to:"/"},r.a.createElement(d.a.Brand,{title:"Can't wait no more"},r.a.createElement(k,{src:p.a,alt:"logo",width:"40px"})," Pizza calendar")),r.a.createElement(d.a.Toggle,{"aria-controls":"header-nav"}),r.a.createElement(d.a.Collapse,{id:"header-nav",className:"flex-grow-0"},r.a.createElement(E.a,null,r.a.createElement(f.LinkContainer,{to:"/",exact:!0},r.a.createElement(E.a.Link,null,"Calendar")),r.a.createElement(f.LinkContainer,{to:"/stats",exact:!0},r.a.createElement(E.a.Link,null,"Stats")),r.a.createElement(f.LinkContainer,{to:"/settings",exact:!0},r.a.createElement(E.a.Link,null,"Settings")))))))},O=a(41),S=a.n(O),j=function(){return r.a.createElement("div",null,"Some icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))},N=function(){return r.a.createElement("footer",{className:S.a.root},r.a.createElement("div",{className:S.a.padder}),r.a.createElement(d.a,{bg:"dark",fixed:"bottom",variant:"dark"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:S.a.row},r.a.createElement(i.a,{lg:"auto",md:"auto",sm:"auto",xs:"auto"},r.a.createElement(d.a.Text,null,"No copyright, for non-commercial use only")),r.a.createElement(i.a,{lg:!0,md:!0,sm:!0,xs:!0}),r.a.createElement(i.a,{lg:"auto",md:"auto",sm:"auto",xs:"auto"},r.a.createElement(d.a.Text,null,r.a.createElement(j,null)))))))},C=a(7),z=a(118),M=a(119),Y=a(10),D=a.n(Y),G=a(74),P=a.n(G),F=a(42),A=a.n(F),H=function(e){var t=e.level,a=e.max,n=e.width,l=e.height,c={height:Math.ceil(t/a*100)+"%"},o={width:n||"100%",height:l||"100%"};return r.a.createElement("span",{className:A.a.root,style:o},r.a.createElement("span",{className:A.a.empty}),r.a.createElement("span",{className:A.a.full,style:c}))},B=a(122),L=a(123),T=a(76),W=a(77),R=a(53),K="pizzaCalendar/setStorage",J="pizzaCalendar/clearStorage",I="pizzaCalendar/setDailyScore",V="pizzaCalendar/setSettings";function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X={calendar:{},eatenPizzasCount:0,settings:{dailyGoal:6,goal:160}};function U(e,t){switch(t.type){case I:var a=t.payload,n=a.score,r=a.date,l=a.comment;return Q({},e,{calendar:Q({},e.calendar,Object(R.a)({},r,{score:n,comment:l}))});case V:return Q({},e,{settings:t.payload});case K:return t.payload.state;case J:return X;default:return e}}var $="__PIZZA_STORAGE_KEY__";var q=function(){var e=Object(n.useReducer)(U,function(){var e=localStorage.getItem($);try{return e?JSON.parse(e):X}catch(t){return console.error("Can not parse localStorage",e,t),X}}()),t=Object(C.a)(e,1)[0];return Object(n.useEffect)((function(){var e=JSON.stringify(t);localStorage.setItem($,e)}),[t]),e},ee=r.a.createContext([{},function(){return null}]),te=function(e){var t=e.children,a=q();return r.a.createElement(ee.Provider,{value:a},t)},ae=function(){return Object(n.useContext)(ee)},ne=function(e){var t=e.onClose,a=e.onSubmit,n=e.date,l=e.show,c=ae(),o=Object(C.a)(c,1)[0],s=o.settings,i=o.calendar,m=s.dailyGoal,u=i[n]||{},d=u.score,E=void 0===d?0:d,f=u.comment,y=void 0===f?"":f;return r.a.createElement(B.a,{size:"sm",centered:!0,show:l,onHide:t},r.a.createElement(B.a.Header,{closeButton:!0},r.a.createElement(B.a.Title,null,"Set your score!")),r.a.createElement(B.a.Body,null,r.a.createElement(L.a,{id:"dailyScoreSet",onSubmit:a},r.a.createElement(T.a,{value:n,hidden:!0,readOnly:!0,name:"date"}),r.a.createElement(L.a.Group,null,r.a.createElement(W.a,null,"Score"),r.a.createElement(T.a,{name:"score",as:"select",placeholder:"Remember: nobody likes cheaters","aria-label":"Remember: nobody likes cheaters","aria-describedby":"daily-score",defaultValue:String(E||0)},new Array(m+1).fill(null).map((function(e,t){return r.a.createElement("option",{key:t},t)})))),r.a.createElement(L.a.Group,null,r.a.createElement(W.a,null,"Comment"),r.a.createElement(L.a.Control,{as:"textarea",rows:"3",name:"comment",defaultValue:y})))),r.a.createElement(B.a.Footer,null,r.a.createElement(z.a,{variant:"primary",type:"submit",form:"dailyScoreSet"},"Save Changes")))},re=a(31),le=a.n(re),ce=P.a.bind(le.a),oe=["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"],se=function(e,t,a){return e.isSame(t,a)||e.isBefore(t,a)},ie=function(e){for(var t=e.date,a=e.onDayClick,n=t.startOf("month"),l=t.endOf("month"),c=n.startOf("week"),o=l.endOf("week"),s=ae(),i=Object(C.a)(s,1)[0],m=[],u=c.clone();se(u,o,"day");){var d=u.week(),E=u.endOf("week"),f=[],y=function(){var e=u.format("DD"),t=u.format("YYYY-MM-DD"),c=u.isBefore(n,"day")||u.isAfter(l,"day"),o=ce({date:!0,outOfMonth:c}),s=i.calendar[t]?i.calendar[t].score:0,m=i.settings.dailyGoal;f.push(r.a.createElement("td",{className:o,key:e,onClick:function(){return a(t)}},r.a.createElement("div",{className:le.a.dailyPizzaMeter},r.a.createElement(H,{level:s,max:m})),e)),u=u.add(1,"day")};do{y()}while(se(u,E,"day"));m.push(r.a.createElement("tr",{key:d},r.a.createElement("td",{className:le.a.weekOfYear},d),f))}return r.a.createElement(r.a.Fragment,null,m.map((function(e){return e})))},me=function(){var e=Object(n.useState)(D()()),t=Object(C.a)(e,2),a=t[0],l=t[1],c=ae(),o=Object(C.a)(c,2)[1],s=Object(n.useState)(!1),i=Object(C.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(null),E=Object(C.a)(d,2),f=E[0],y=E[1],p=function(){return u(!1)};return r.a.createElement("div",{className:le.a.root},r.a.createElement("div",{className:le.a.header},r.a.createElement(z.a,{variant:"light",onClick:function(){return l(a.set("month",a.month()-1))}},"\u25c4"),r.a.createElement("h3",null,a.year()===D()().year()?a.format("MMMM"):a.format("MMMM YYYY")),r.a.createElement(z.a,{variant:"light",onClick:function(){return l(a.set("month",a.month()+1))}},"\u25ba")),r.a.createElement(M.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"#"),oe.map((function(e){return r.a.createElement("td",{key:e},e)})))),r.a.createElement("tbody",null,r.a.createElement(ie,{onDayClick:function(e){u(!0),y(e)},date:a}))),r.a.createElement(ne,{date:f,show:m,onClose:p,onSubmit:function(e){var t=new FormData(e.currentTarget),a=t.get("date"),n=Number(t.get("score")),r=String(t.get("comment"))||void 0;o(function(e){var t=e.score,a=e.date,n=e.comment;return{type:I,payload:{score:t,date:a,comment:n}}}({date:a,score:n,comment:r})),p(),e.preventDefault(),e.stopPropagation()}}))},ue=a(120),de=a(25),Ee=a.n(de),fe=function(e){var t=e.percentage;return t<0?r.a.createElement("div",{className:Ee.a.alert},r.a.createElement(ue.a,{variant:"danger"},"You owe pizza bank!")):t>=100?r.a.createElement("div",{className:Ee.a.alert},r.a.createElement(ue.a,{variant:"success"},"Hoooray! You deserve pizza!")):null},ye=function(){var e=ae(),t=Object(C.a)(e,1)[0],a=function(e){var t=e.calendar,a=e.eatenPizzasCount,n=e.settings;return Object.values(t).reduce((function(e,t){return e+(t.score||0)}),0)-n.goal*a}(t),n=t.settings.goal,l=Math.ceil(a/n*100),c=a<0?0:a>=n?100:l,o={width:"".concat(c,"%")},s={textShadow:"rgba(".concat(255*(1-c/100),", ").concat(c/100*255,", 0) 0 0 4px")};return r.a.createElement("div",{className:Ee.a.root},r.a.createElement("div",{className:Ee.a.progress},r.a.createElement("div",{className:Ee.a.empty}),r.a.createElement("div",{className:Ee.a.full,style:o})),r.a.createElement("div",{className:Ee.a.percentage,style:s},"".concat(l," %")),r.a.createElement(fe,{percentage:l}))},pe=a(124),ge=a(126),ve=a(54),he=a.n(ve),_e=function(){var e=ae(),t=Object(C.a)(e,2),a=t[0],n=t[1],l=a.settings;return r.a.createElement(o.a,{className:"flex-grow-1"},r.a.createElement(pe.a,{defaultActiveKey:"0"},r.a.createElement(ge.a,null,r.a.createElement(pe.a.Toggle,{as:ge.a.Header,eventKey:"0",className:he.a.cardHeader},"Preferences"),r.a.createElement(pe.a.Collapse,{eventKey:"0"},r.a.createElement(ge.a.Body,null,r.a.createElement(L.a,{onSubmit:function(e){var t=new FormData(e.currentTarget),a=Number(t.get("goal")),r=Number(t.get("dailyGoal"));!a||!r||a<=0||r<=0?alert("Bad preferences"):n(function(e){var t=e.dailyGoal,a=e.goal;return{type:V,payload:{dailyGoal:t,goal:a}}}({goal:a,dailyGoal:r})),console.log(Array.from(t.entries())),e.preventDefault(),e.stopPropagation()}},r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Daily goal"),r.a.createElement(L.a.Control,{as:"input",name:"dailyGoal",type:"number",defaultValue:l.dailyGoal})),r.a.createElement(L.a.Group,null,r.a.createElement(L.a.Label,null,"Pizza Goal"),r.a.createElement(L.a.Control,{as:"input",name:"goal",type:"number",defaultValue:l.goal})),r.a.createElement(z.a,{type:"submit",variant:"primary"},"Save Preferences"))))),r.a.createElement(ge.a,null,r.a.createElement(pe.a.Toggle,{as:ge.a.Header,eventKey:"1",className:he.a.cardHeader},"Store"),r.a.createElement(pe.a.Collapse,{eventKey:"1"},r.a.createElement(ge.a.Body,null,r.a.createElement("pre",null,JSON.stringify(a,null,2)),r.a.createElement(z.a,{onClick:function(){return n({type:J})},variant:"danger"},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0451!"))))))},be=a(44),we=a.n(be),ke=function(e,t){for(var a=[],n=e,r=t;r>=0;--r)a.push(n.format("YYYY-MM-DD")),n=n.subtract(1,"day");return a.sort()},xe=function(e,t){return t.map((function(t){return e[t]&&e[t].score||0}))},Oe=function(e){var t=e.id||Math.random().toString(16).slice(2);return r.a.createElement("defs",null,r.a.createElement("marker",{id:"triangle_".concat(t),viewBox:"0 0 10 10",refX:"1",refY:"5",markerUnits:"strokeWidth",markerWidth:"10",markerHeight:"10",orient:"auto"},r.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#000"})))},Se=function(e){var t=e.data,a=e.yStep,n=290/t.length,l=t.map((function(e,t){return{x:5+t*n,y:90-a*e}})),c="M "+l.map((function(e){var t=e.x,a=e.y;return"".concat(t," ").concat(a)})).join(" L ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:c,stroke:"#0f0",strokeWidth:.25,fill:"none"}),l.map((function(e){var t=e.x,a=e.y;return r.a.createElement("circle",{cx:t,cy:a,r:.5,fill:"#00f",key:"point_".concat(t,"_").concat(a)})})))},je=function(e){var t=e.data,a=e.every,n=void 0===a?3:a,l=290/t.length;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return t%n?null:r.a.createElement(r.a.Fragment,{key:"serif_x_".concat(t)},r.a.createElement("path",{d:"M ".concat(5+t*l," ").concat(89.5," v1"),stroke:"#000",strokeWidth:.05}),r.a.createElement("g",{transform:"translate(-.5, 2)"},r.a.createElement("text",{x:"".concat(5+t*l),y:89.5,className:we.a.serifText,transform:"rotate(45, ".concat(5+t*l,", ").concat(89.5,")"),textLength:e.length-2},e)))})))},Ne=function(){var e=ae(),t=Object(C.a)(e,1)[0],a=t.calendar,l=t.settings.dailyGoal,c=D()(),o=Object(n.useState)(c),s=Object(C.a)(o,2),i=s[0],m=(s[1],Object(n.useState)(30)),u=Object(C.a)(m,2),d=u[0],E=(u[1],Object.keys(a),ke(i,d)),f=xe(a,E),y=Math.abs(-80/l);return r.a.createElement("div",{className:we.a.root},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(300," 100"),preserveAspectRatio:"none",className:we.a.svg},r.a.createElement(Oe,{id:"_"}),r.a.createElement("rect",{width:"100%",height:"100%",x:"0",y:"0",fill:"none",strokeWidth:.05,stroke:"#0f0"}),r.a.createElement("path",{d:"M 0 ".concat(90," H ").concat(295," "),stroke:"#000",strokeWidth:.05,markerEnd:"url(#triangle__)"}),r.a.createElement("path",{d:"M ".concat(5," 100 V ").concat(5," "),stroke:"#000",strokeWidth:.05,markerEnd:"url(#triangle__)"}),r.a.createElement(Se,{data:f,yStep:y}),r.a.createElement(je,{data:E})))},Ce=function(e){return function(t,a){for(var n=Object.keys(t).sort()[0],r=D()(),l=D()(n,"YYYY-MM-DD"),c=0,o="none",s=0;l.isBefore(r,"day")||l.isSame(r,"day");){var i=l.format("YYYY-MM-DD"),m=t[i],u=Number(m&&m.score)||0;e(u,a)&&++s>c&&(c=s,o=i),u||(s=0),l=l.add(1,"day")}return{value:c,date:o}}},ze=function(e){return function(t,a){var n=Object.keys(t).sort(),r=n[n.length-1],l=n[0],c=D()(r,"YYYY-MM-DD"),o="newer",s=0;if(!r)return{value:0,date:o};for(;c.isAfter(l,"day")||c.isSame(l,"day");){var i=c.format("YYYY-MM-DD"),m=t[i],u=Number(m&&m.score)||0;if(e(u,a)&&(s++,o=i),!u)break;c=c.subtract(1,"day")}return{value:s,date:o}}},Me=function(){var e=ae(),t=Object(C.a)(e,1)[0],a=t.calendar,n=t.settings,l=Ce((function(e){return e>0}))(a,n.dailyGoal),c=Ce((function(e,t){return e>0&&e===t}))(a,n.dailyGoal),o=ze((function(e){return e>0}))(a,n.dailyGoal),s=ze((function(e,t){return e>0&&e===t}))(a,n.dailyGoal);return r.a.createElement(M.a,{bordered:!0,striped:!0,hover:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Longest High Series"),r.a.createElement("td",null,c.value),r.a.createElement("td",null,"finished at:"),r.a.createElement("td",null,c.date)),r.a.createElement("tr",null,r.a.createElement("td",null,"Longest Series:"),r.a.createElement("td",null,l.value),r.a.createElement("td",null,"finished at:"),r.a.createElement("td",null,l.date)),r.a.createElement("tr",null,r.a.createElement("td",null,"Current High Series:"),r.a.createElement("td",null,s.value),r.a.createElement("td",null,"started at:"),r.a.createElement("td",null,s.date)),r.a.createElement("tr",null,r.a.createElement("td",null,"Current Series:"),r.a.createElement("td",null,o.value),r.a.createElement("td",null,"started at:"),r.a.createElement("td",null,o.date))))},Ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,null),r.a.createElement(Me,null))},De=a(78),Ge=a.n(De),Pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(i.a,{lg:"auto",md:"auto",sm:"auto",xs:"auto"},r.a.createElement(ye,null))),r.a.createElement(s.a,{className:"justify-content-md-center"},r.a.createElement(i.a,null,r.a.createElement(me,null))))},Fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(i.a,null,r.a.createElement(_e,null))))},Ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(i.a,null,r.a.createElement(Ye,null))))},He=function(){return r.a.createElement(m.BrowserRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(te,null,r.a.createElement(x,null),r.a.createElement(o.a,{className:Ge.a.content},r.a.createElement(u.g,null,r.a.createElement(u.d,{path:"/",component:Pe,exact:!0}),r.a.createElement(u.d,{path:"/stats",component:Ae,exact:!0}),r.a.createElement(u.d,{path:"/settings",component:Fe,exact:!0}))),r.a.createElement(N,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(112),a(113);var Be=a(79),Le=a.n(Be),Te=a(80),We=a.n(Te),Re=a(81),Ke=a.n(Re);D.a.locale("ru"),D.a.extend(Le.a),D.a.extend(We.a),D.a.extend(Ke.a),c.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,a){e.exports={root:"styles_root__2yGfR",progress:"styles_progress__3nT8N",empty:"styles_empty__3Jv49",full:"styles_full__3NRnI",percentage:"styles_percentage__F-DJG",alert:"styles_alert__2S3Kt"}},31:function(e,t,a){e.exports={root:"styles_root__2ZEkx",header:"styles_header__M9knd",date:"styles_date__wwbG8",dailyPizzaMeter:"styles_dailyPizzaMeter__3DtwB",outOfMonth:"styles_outOfMonth__3xhaQ"}},41:function(e,t,a){e.exports={row:"styles_row__2xCRJ",padder:"styles_padder__3E2eA"}},42:function(e,t,a){e.exports={root:"styles_root__1yk8g",empty:"styles_empty__1z1lv",full:"styles_full__2gSHK"}},44:function(e,t,a){e.exports={svg:"styles_svg__3Z78Q",serifText:"styles_serifText__1AWIk",root:"styles_root__2T_Hk"}},54:function(e,t,a){e.exports={cardHeader:"styles_cardHeader__1FpO-"}},69:function(e,t,a){e.exports=a.p+"static/media/pizza_heart.c4a46534.svg"},70:function(e,t,a){e.exports={root:"styles_root__2e9Hh",row:"styles_row__uIRiK"}},71:function(e,t,a){e.exports={root:"styles_root__3jXdS"}},78:function(e,t,a){e.exports={App:"styles_App__ASPDC",justifyCenter:"styles_justifyCenter__cD8Wi",content:"styles_content__1Ykho"}},82:function(e,t,a){e.exports=a(114)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.41532fe6.chunk.js.map