(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(15),s=n.n(c),o=n(3),u=n(0),a=function(e){var t=e.value,n=e.setValue;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)}})]})},i=n(6),d=n(4),j=n.n(d),b="/api/persons",f={getAll:function(){return j.a.get(b).then((function(e){return e.data}))},addPerson:function(e){return j.a.post(b,e).then((function(e){return e.data}))},updatePerson:function(e){return j.a.put("".concat(b,"/").concat(e.id),e)},deletePerson:function(e){return j.a.delete("".concat(b,"/").concat(e))}},l=function(e){var t=e.persons,n=e.setPersons,c=e.setMessage,s=Object(r.useState)(""),a=Object(o.a)(s,2),d=a[0],j=a[1],b=Object(r.useState)(""),l=Object(o.a)(b,2),h=l[0],p=l[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=t.find((function(e){return e.name===d})),s=function(){j(""),p(""),c({text:"Added ".concat(d),type:"success"}),setTimeout((function(){return c({text:"",type:""})}),5e3)};if(r){var o=Object(i.a)(Object(i.a)({},r),{},{number:h});window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&f.updatePerson(o).then((function(e){var r=e.data;n(t.map((function(e){return e.id!==o.id?e:r}))),s()})).catch((function(e){404===e.response.status&&(n(t.filter((function(e){return e.id!==o.id}))),c({text:"Information of ".concat(d," has already been removed from server"),type:"error"}),setTimeout((function(){return c({text:"",type:""})}),5e3))}))}else{var u={name:d,number:h};f.addPerson(u).then((function(e){n(t.concat(e)),s()}))}},children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:d,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:h,onChange:function(e){return p(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var t=e.person,n=e.deletePerson;return Object(u.jsxs)("div",{children:[t.name," ",t.number," ",Object(u.jsx)("button",{onClick:n,children:"delete"})]})},p=function(e){var t=e.persons,n=e.filter,c=e.setPersons;Object(r.useEffect)((function(){f.getAll().then((function(e){c(e)}))}),[c]);return Object(u.jsx)("div",{children:t.filter((function(e){return-1!==e.name.search(new RegExp(n,"i"))})).map((function(e){return Object(u.jsx)(h,{person:e,deletePerson:function(){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&f.deletePerson(e.id).then((function(n){c(t.filter((function(t){return e.id!==t.id})))}))}(e)}},e.id)}))})},O=(n(39),function(e){var t=e.text,n=e.type;if(""===t)return null;var r="message";return"success"===n?r+=" success":"error"===n&&(r+=" error"),Object(u.jsx)("div",{className:r,children:t})}),x=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),d=i[0],j=i[1],b=Object(r.useState)({text:"",type:""}),f=Object(o.a)(b,2),h=f[0],x=f[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(O,{text:h.text,type:h.type}),Object(u.jsx)(a,{value:d,setValue:j}),Object(u.jsx)("h3",{children:"add a new"}),Object(u.jsx)(l,{persons:n,setPersons:c,setMessage:x}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(p,{persons:n,filter:d,setPersons:c})]})};s.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.72507ddb.chunk.js.map