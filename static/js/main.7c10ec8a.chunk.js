(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),i=(n(9),n(2)),l=(n(10),n(0)),o=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{className:"header",children:"Kalkulator walut"})})},u=(n(12),function(e){var t=e.children;return Object(l.jsx)("main",{className:"container",children:t})}),j=(n(13),n(14),function(){var e=Object(c.useState)(new Date),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var a=n.toLocaleString("pl",{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(l.jsxs)("span",{className:"timer",children:["Dzisiaj jest ",a," "]})}),b=function(){return Object(l.jsxs)("section",{className:"infoSection",children:[Object(l.jsx)(j,{}),Object(l.jsxs)("ul",{className:"infoSection__unorderedList",children:[Object(l.jsx)("li",{className:"infoSection__listItem",children:"Kalkulator przelicza warto\u015b\u0107 waluty po kursie \u015brednim z dnia 24.06.2021."}),Object(l.jsxs)("li",{className:"infoSection__listItem",children:["Pola wymagane s\u0105 oznaczone kolorem \u017c\xf3\u0142tym:",Object(l.jsx)("span",{className:"infoSection__requiredColor"})]}),Object(l.jsxs)("li",{className:"infoSection__listItem",children:["Pola b\u0142\u0119dnie wype\u0142nione s\u0105 oznaczone kolorem czerwonym:",Object(l.jsx)("span",{className:"infoSection__invalidColor"})]})]})]})},d=(n(15),function(e){var t=e.properRating,n=e.getNewAmountValue,r=e.getNewTargetCurrency,a=e.getNewBaseCurrency,s=e.getNewClickCounterValue,o=Object(c.useState)(1),u=Object(i.a)(o,2),j=u[0],b=u[1],d=Object(c.useState)("PLN"),m=Object(i.a)(d,2),O=m[0],f=m[1],g=Object(c.useState)("EUR"),h=Object(i.a)(g,2),x=h[0],_=h[1],N=Object(c.useState)(1),C=Object(i.a)(N,2),y=C[0],S=C[1];return Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n(j),a(O),r(x),S((function(e){return e+1})),s(y)},children:[Object(l.jsxs)("fieldset",{className:"form__fieldset",children:[Object(l.jsx)("legend",{className:"form__legend",children:"Przelicznik walut"}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Podaj kwot\u0119 do przeliczenia:"}),Object(l.jsx)("input",{className:"form__numberField",type:"number",value:j,onChange:function(e){var t=e.target;return b(t.value)},step:"0.01",min:"0.01",max:"1000000",required:!0})]}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Podaj walut\u0119 bazow\u0105:"}),Object(l.jsxs)("select",{className:"form__selectField ".concat(1===t?"form__selectField--error":""),value:O,onChange:function(e){var t=e.target;return f(t.value)},required:!0,children:[Object(l.jsx)("option",{value:"PLN",children:"PLN"}),Object(l.jsx)("option",{value:"EUR",children:"EUR"}),Object(l.jsx)("option",{value:"USD",children:"USD"})]})]}),Object(l.jsxs)("label",{className:"form__label",children:[Object(l.jsx)("span",{className:"form__labelText",children:"Podaj walut\u0119 docelow\u0105:"}),Object(l.jsxs)("select",{className:"form__selectField ".concat(1===t?"form__selectField--error":""),value:x,onChange:function(e){var t=e.target;return _(t.value)},required:!0,children:[Object(l.jsx)("option",{value:"PLN",children:"PLN"}),Object(l.jsx)("option",{value:"EUR",children:"EUR"}),Object(l.jsx)("option",{value:"USD",children:"USD"})]})]})]}),Object(l.jsx)("button",{className:"form__button",children:"Przelicz!"})]})}),m=(n(16),function(e){var t=e.calculateCurrency,n=e.amount,r=e.baseCurrency,a=e.targetCurrency,s=e.clickCounter,o=Object(c.useState)(!1),u=Object(i.a)(o,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){b(!0),setTimeout((function(){b(!1)}),1e3)}),[s]),Object(l.jsxs)("section",{className:"resultSection",children:[Object(l.jsx)("h2",{className:"resultSection__header",children:"Wynik:"}),Object(l.jsxs)("p",{className:"resultSection__resultBox",children:[Object(l.jsx)("span",{className:"resultSection__resultText ".concat(!0===j?"resultSection__resultText--highlighted":""),children:"".concat(n," ").concat(r," = ")}),Object(l.jsx)("span",{className:"resultSection__resultText ".concat(!0===j?"resultSection__resultText--highlighted":""),children:"".concat(t()," ").concat(a)})]})]})});var O=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("PLN"),s=Object(i.a)(a,2),j=s[0],O=s[1],f=Object(c.useState)("EUR"),g=Object(i.a)(f,2),h=g[0],x=g[1],_=Object(c.useState)(0),N=Object(i.a)(_,2),C=N[0],y=N[1],S=[{baseCurrency:"PLN",targetCurrency:"EUR",rating:1/4.5302},{baseCurrency:"EUR",targetCurrency:"PLN",rating:4.5302},{baseCurrency:"PLN",targetCurrency:"USD",rating:1/3.7986},{baseCurrency:"USD",targetCurrency:"PLN",rating:3.7986},{baseCurrency:"USD",targetCurrency:"EUR",rating:1/1.1926},{baseCurrency:"EUR",targetCurrency:"USD",rating:1.1926},{baseCurrency:"PLN",targetCurrency:"PLN",rating:1},{baseCurrency:"EUR",targetCurrency:"EUR",rating:1},{baseCurrency:"USD",targetCurrency:"USD",rating:1}].filter((function(e){return e.baseCurrency===j&&e.targetCurrency===h}))[0].rating;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(u,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(d,{properRating:S,getNewAmountValue:function(e){r(e)},getNewTargetCurrency:function(e){x(e)},getNewBaseCurrency:function(e){O(e)},getNewClickCounterValue:function(e){y(e)}}),Object(l.jsx)(m,{calculateCurrency:function(){return(+n*S).toFixed(2)},amount:n,baseCurrency:j,targetCurrency:h,clickCounter:C})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.7c10ec8a.chunk.js.map