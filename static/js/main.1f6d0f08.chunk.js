(this.webpackJsonpfirebase_realtime_database=this.webpackJsonpfirebase_realtime_database||[]).push([[0],{36:function(e,t,a){e.exports=a(53)},41:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(17),o=a.n(r),l=(a(41),a(16)),s=a.n(l),i=a(22),m=a(11),u=a(58),p=a(19),d=a(7),f=a(12),b=(a(43),a(44),a(45),{quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0}),E=a(9),g=a.n(E),h=(a(46),a(54),a(59)),y=a(60),O=a(61),v=a(62),j=a(63),N=a(64),C=a(65),T=a(66),x=a(34),k=a(75),w=Object(n.createContext)(),S=function(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch,r=t.contactToUpdate,o=t.contactToUpdateKey,l=Object(d.f)(),p=Object(n.useState)(""),E=Object(m.a)(p,2),S=E[0],A=E[1],_=Object(n.useState)(""),U=Object(m.a)(_,2),D=U[0],I=U[1],L=Object(n.useState)(""),G=Object(m.a)(L,2),P=G[0],K=G[1],R=Object(n.useState)(!1),M=Object(m.a)(R,2),W=M[0],B=M[1],F=Object(n.useState)(null),J=Object(m.a)(F,2),z=J[0],H=J[1],Q=Object(n.useState)(!1),V=Object(m.a)(Q,2),q=V[0],X=V[1],Y=Object(n.useState)(!1),Z=Object(m.a)(Y,2),$=(Z[0],Z[1],Object(n.useState)(!1)),ee=Object(m.a)($,2),te=ee[0],ae=ee[1];Object(n.useEffect)((function(){r&&(A(r.date),I(r.time),K(r.description),X(r.star),H(r.picture),ae(!0))}),[r]);var ne=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,c,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.target.files[0],n={contentType:a.type},console.log(a.name),console.log(a.type),e.next=7,Object(x.readAndCompressImage)(a,b);case 7:return c=e.sent,e.next=10,g.a.storage().ref();case 10:r=e.sent,(o=r.child("images/"+a.name).put(c,n)).on(g.a.storage.TaskEvent.STATE_CHANGED,(function(e){B(!0);var t=e.bytesTransferred/e.totalBytes*100;switch(e.state){case g.a.storage.TaskState.PAUSED:B(!1),console.log("Uploading is paused");break;case g.a.storage.TaskState.RUNNING:console.log("Uploading is in progress...")}100==t&&(B(!1),Object(f.b)("uploaded",{type:"success"}))}),(function(e){switch(e.code){case"storage/unauthorized":console.log("User doesn't have permission to access the object");break;case"storage/canceled":console.log("User canceled the upload");break;case"storage/unknown":console.log("Unknown error occurred, inspect error.serverResponse")}Object(f.b)("something is wrong in state change",{type:"error"})}),(function(){o.snapshot.ref.getDownloadURL().then((function(e){H(e)})).catch((function(e){return console.log(e)}))})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),Object(f.b)("Something went wrong",{type:"error"});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{g.a.database().ref("Contacts/"+Object(k.a)()).set({date:S,time:D,description:P,picture:z,star:q})}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{g.a.database().ref("Contacts/"+o).set({date:S,time:D,description:P,picture:z,star:q})}catch(t){console.log(t),Object(f.b)("Oppss..",{type:"error"})}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(u.a,{fluid:!0,className:"mt-5"},c.a.createElement(h.a,null,c.a.createElement(y.a,{md:"6",className:"offset-md-3 p-2"},c.a.createElement(O.a,{onSubmit:function(e){e.preventDefault(),te?re():ce(),Object(f.b)("Success",{type:"success"}),a({type:"CONTACT_TO_UPDATE",payload:null,key:null}),l.push("/")}},c.a.createElement("div",{className:"text-center"},W?c.a.createElement(v.a,{type:"grow",color:"primary"}):c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"imagepicker",className:""},c.a.createElement("img",{src:z,alt:"",className:"profile"})),c.a.createElement("input",{type:"file",name:"image",id:"imagepicker",accept:"image/*",multiple:!1,onChange:function(e){return ne(e)},className:"hidden"}))),c.a.createElement(j.a,null,c.a.createElement(N.a,{type:"date",name:"date",id:"date",placeholder:"",value:S,onChange:function(e){return A(e.target.value)}})),c.a.createElement(j.a,null,c.a.createElement(N.a,{type:"time",name:"time",id:"time",value:D,onChange:function(e){return I(e.target.value)},placeholder:"Email"})),c.a.createElement(j.a,null,c.a.createElement(N.a,{type:"textarea",name:"area",id:"area",value:P,onChange:function(e){return K(e.target.value)},placeholder:"Description"})),c.a.createElement(j.a,{check:!0},c.a.createElement(C.a,{check:!0},c.a.createElement(N.a,{type:"checkbox",onChange:function(){X(!q)},checked:q})," ",c.a.createElement("span",{className:"text-right"},"Mark as Star"))),c.a.createElement(T.a,{type:"submit",color:"primary",block:!0,className:"text-uppercase"},te?"Update Event":"Add Event")))))},A=a(67),_=a(68),U=a(24),D=a(21),I=function(e){var t=e.contact,a=e.contactKey,r=Object(n.useContext)(w).dispatch,o=Object(d.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement(y.a,{md:"1",className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"icon",onClick:function(){g.a.database().ref("Contacts/".concat(a)).update({star:!t.star},(function(e){console.log(e)})).then((function(){Object(f.b)("Contact Updates",{type:"info"})})).catch((function(e){return console.log(e)}))}},t.star?c.a.createElement(U.c,{className:" text-primary"}):c.a.createElement(U.b,{className:" text-info"}))),c.a.createElement(y.a,{md:"2",className:"d-flex justify-content-center align-items-center"},c.a.createElement("img",{src:t.picture,alt:"",className:"img-circle profile"})),c.a.createElement(y.a,{md:"8",onClick:function(){return r({type:"SET_SINGLE_CONTACT",payload:t}),void o.push("/contact/view")}},c.a.createElement("div",{className:"text-primary"},t.date),c.a.createElement("div",{className:"text-secondary"},t.time),c.a.createElement("div",{className:"text-info"},t.description)),c.a.createElement(y.a,{md:"1",className:"d-flex justify-content-center align-items-center"},c.a.createElement(D.b,{onClick:function(){g.a.database().ref("Contacts/".concat(a)).remove().then((function(){Object(f.b)("DELETED SUCCESSFULLY",{type:"warning"})})).catch((function(e){return console.log(e)}))},color:"danger",className:"text-danger icon"}),c.a.createElement(D.c,{className:"icon text-info ml-2",onClick:function(){return r({type:"CONTACT_TO_UPDATE",payload:t,key:a}),void o.push("/contact/add")}}))))},L=function(){var e=Object(n.useContext)(w),t=e.state,a=e.dispatch,r=t.contacts,o=t.isLoading;console.log(r);var l=Object(d.f)();return o?c.a.createElement("div",{className:"Center"},c.a.createElement(v.a,{color:"primary"}),c.a.createElement("div",{className:"text-primary"},"Loading...")):c.a.createElement(u.a,{className:"mt-4"},0!==r.length||o?c.a.createElement(A.a,null,Object.entries(r).map((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1];return c.a.createElement(_.a,{key:a},c.a.createElement(I,{contact:n,contactKey:a}))}))):c.a.createElement("div",{className:"Center text-large text-primary"},"NO Events found in firebase"),c.a.createElement(D.a,{className:"fab icon ",onClick:function(){a({type:"CONTACT_TO_UPDATE",payload:null,key:null}),l.push("/contact/add")}}))},G=a(69),P=a(70),K=a(71),R=function(){return c.a.createElement(G.a,{color:"info",light:!0},c.a.createElement(P.a,{tag:p.b,to:"/",className:"text-white"},"Event Management App"),c.a.createElement(K.a,{className:"text-white float-right"},"A simple event manage app"))},M=function(){return c.a.createElement("footer",{className:"bg-info text-center pt-3 pb-2 mt-5 sticky-bottom footer"},"A simple Event Management App")},W=a(72),B=a(73),F=a(74),J=function(){var e=Object(n.useContext)(w).state.contact;return c.a.createElement(u.a,null,c.a.createElement(h.a,{className:"mt-5 mb-5"},c.a.createElement(y.a,{md:"5",className:"offset-md-3"},c.a.createElement(W.a,{className:"pt-3 pb-5"},c.a.createElement(B.a,{className:"text-center "},c.a.createElement("img",{height:"150",width:"150",className:"cardImg profile border-danger",src:null===e||void 0===e?void 0:e.picture}),c.a.createElement(F.a,{className:"text-primary mt-3"},c.a.createElement("h1",null,null===e||void 0===e?void 0:e.date)),c.a.createElement("a",{className:"btn btn-primary btn-block",target:"_blank"},c.a.createElement(U.a,{className:"icon mr-2"}),null===e||void 0===e?void 0:e.time),c.a.createElement("a",{className:"btn btn-primary btn-block",target:"_blank"},null===e||void 0===e?void 0:e.description))))))},z=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"404 page not found"))},H=a(15),Q=function(e,t){switch(t.type){case"SET_CONTACT":return null==t.payload?Object(H.a)(Object(H.a)({},e),{},{contacts:[]}):Object(H.a)(Object(H.a)({},e),{},{contacts:t.payload});case"SET_LOADING":return Object(H.a)(Object(H.a)({},e),{},{isLoading:t.payload});case"CONTACT_TO_UPDATE":return Object(H.a)(Object(H.a)({},e),{},{contactToUpdate:t.payload,contactToUpdateKey:t.key});case"SET_SINGLE_CONTACT":return Object(H.a)(Object(H.a)({},e),{},{contact:t.payload});default:return e}};g.a.initializeApp({apiKey:"AIzaSyCW7_WbZ_f96GjJsIOQpDdhCuJy3uFMNuQ",authDomain:"mycontactapp-69594.firebaseapp.com",databaseURL:"https://mycontactapp-69594.firebaseio.com",projectId:"mycontactapp-69594",storageBucket:"mycontactapp-69594.appspot.com",messagingSenderId:"980024466685",appId:"1:980024466685:web:c07a573064029e9c3ef294",measurementId:"G-P8GX92HVV9"});var V={contacts:[],contact:{},contactToUpdate:null,contactToUpdateKey:null,isLoading:!1},q=function(){var e=Object(n.useReducer)(Q,V),t=Object(m.a)(e,2),a=t[0],r=t[1],o=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"SET_LOADING",payload:!0}),e.next=3,g.a.database().ref("/Contacts");case 3:t=e.sent,console.log(t),t.on("value",(function(e){r({type:"SET_CONTACT",payload:e.val()}),r({type:"SET_LOADING",payload:!1})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),c.a.createElement(p.a,null,c.a.createElement(w.Provider,{value:{state:a,dispatch:r}},c.a.createElement(f.a,null),c.a.createElement(R,null),c.a.createElement(u.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/contact/add",component:S}),c.a.createElement(d.a,{exact:!0,path:"/contact/view",component:J}),c.a.createElement(d.a,{exact:!0,path:"/",component:L}),c.a.createElement(d.a,{exact:!0,path:"*",component:z}))),c.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1f6d0f08.chunk.js.map