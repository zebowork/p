(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[15],{696:function(e,t,n){"use strict";var r=n(4),a=n(73),c=n(0),i=n.n(c),s=n(688),o=n.n(s),l=n(365),d=n.n(l),u=n(135),b=n.n(u),p=n(118),j=n(660),f=n.n(j),m=n(180),h=n.n(m),O=n(1);var v=function(e){var t,n=Object(c.useState)(!1),r=Object(a.a)(n,2),i=r[0],s=r[1],o=e.contacts,l=e.contactNumberChange,u=e.contactNumber,j=e.updateEmailJob,m=e.email,v=e.toggleTimekeeper,g=e.pickupAfter,x=e.pickupBefore,N=e.deliverAfter,k=e.deliverBefore,C=e.pickupNote,y=e.deliverNote,A=e.pickupNoteChange,S=e.isLoading,B=e.handleCancelJob,w=e.deliverNoteChange,T=e.validateAndHandlePostJob;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:{marginBottom:20},children:["CONTACT NUMBER"," ",Object(O.jsx)(f.a,{children:"We will share this number to zebo, if something confusing zebo can contact you on this"}),Object(O.jsx)(h.a,{type:"dropDownAddNew",label:"Phone number: ",isClearable:"true",options:o.map((function(e){return{value:e,label:e}})),onChange:function(e){return l((t=e)?t.value:"");var t},defaultValue:(t=u,0!==t.length?{value:t,label:t}:null),onlyNumbers:!0})]}),Object(O.jsxs)("div",{style:{marginBottom:20},children:["EMAIL "," ",Object(O.jsx)(f.a,{children:"We will use this to update you about your job status e-g we will send you email once your job is complete"}),Object(O.jsx)(d.a,{type:"email",name:"email",placeholder:"Email",meta:{},defaultValue:m,onChange:function(e){return j(e.target.value)}})]}),!i&&Object(O.jsxs)("div",{style:{marginBottom:20},children:["PICK-UP & DELIVERY - in working hours as soon as possible or "," ",Object(O.jsx)(p.a,{variant:"light",className:"btn",size:"sm",onClick:function(){return s(!0)},children:"Schedule"})]}),i&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:{marginBottom:20},children:[Object(O.jsxs)("div",{children:["PREFERRED PICK UP "," ",Object(O.jsx)(f.a,{children:"Zebo will come to pick up clothes between these time. You can mention any notes as well e-g pickup from front door"})]}),Object(O.jsxs)("div",{className:"btn-group",style:{marginBottom:5},children:[Object(O.jsxs)("button",{type:"button","data-testid":"pickupAfter",className:"btn btn-default",onClick:function(){return v("pa")},children:["After ",g]}),Object(O.jsxs)("button",{type:"button","data-testid":"pickupBefore",className:"btn btn-default",onClick:function(){return v("pb")},children:["Before ",x]})]}),Object(O.jsx)(d.a,{type:"text",placeholder:"pick up notes - e.g i need urgent service",meta:{},input:{value:C,onChange:function(e){return A(e.target.value)}}})]}),Object(O.jsxs)("div",{style:{marginBottom:20},children:[Object(O.jsxs)("div",{children:["PREFERRED DELIVERY "," ",Object(O.jsx)(f.a,{children:"Zebo will come to deliver clothes between these time. You should be at home this time. You can also mention any notes as well e-g door ball is not working"})]}),Object(O.jsxs)("div",{className:"btn-group",style:{marginBottom:5},children:[Object(O.jsxs)("button",{type:"button","data-testid":"deliverAfter",className:"btn btn-default",onClick:function(){return v("da")},children:["After ",N]}),Object(O.jsxs)("button",{type:"button","data-testid":"deliverBefore",className:"btn btn-default",onClick:function(){return v("db")},children:["Before ",k]})]}),Object(O.jsx)(d.a,{type:"text",placeholder:"delivery notes - e.g deliver me on 16th",meta:{},input:{value:y,onChange:function(e){return w(e.target.value)}}})]})]}),Object(O.jsx)("div",{className:"row float-right",children:Object(O.jsxs)("div",{className:"col-md-12 input-group",children:[Object(O.jsxs)(p.a,{variant:"light",className:"btn btn-wd",onClick:function(){return B()},children:["Cancel ",Object(O.jsx)("i",{className:"icofont-close icofont-md","aria-hidden":"true"})]}),Object(O.jsx)(p.a,{className:"btn btn-success btn-fill btn-wd ml-1",onClick:function(){return T()},disabled:S,children:Object(O.jsxs)(b.a,{variant:"light",show:S,id:"postJobButtonText",children:["POST ",Object(O.jsx)("i",{className:"icofont-paper-plane icofont-md","aria-hidden":"true"})]})})]})})]})};t.a=function(e){var t=i.a.useState(""),n=Object(a.a)(t,2),c=n[0],s=n[1],l=i.a.useState(!1),d=Object(a.a)(l,2),u=d[0],b=d[1],p=function(e){b(!u),s(e)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("div",{className:"content pt-sm-2 px-sm-4",children:Object(O.jsxs)("div",{className:"row",children:[u&&Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)(o.a,{time:function(){switch(c){case"pa":return e.pickupAfter;case"pb":return e.pickupBefore;case"da":return e.deliverAfter;case"db":return e.deliverBefore;default:return""}}(),onChange:function(t){switch(c){case"pa":return e.pickupAfterTimeChange(t);case"pb":return e.pickupBeforeTimeChange(t);case"da":return e.deliverAfterTimeChange(t);case"db":return e.deliverBeforeTimeChange(t);default:return}},onDoneClick:function(){return p("")},switchToMinuteOnHourSelect:!0})}),Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h4",{className:"title",children:e.heading}),e.extraFields,Object(O.jsx)(v,Object(r.a)({},Object(r.a)(Object(r.a)({},e),{},{toggleTimekeeper:p})))]}),!u&&e.detailsPanel]})})})})}},847:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(73),c=n(0),i=n(42),s=n(53),o=n(24),l=n(30),d=n(46),u=n(47),b=n(364),p=n.n(b),j=n(180),f=n.n(j),m=n(660),h=n.n(m),O=n(696),v=n(98),g=n(1);function x(e){var t=e.laundry,n=e.handleServiceChange,r=e.service,a="STANDARD"===r,c="URGENT"===r,i="EXPRESS"===r;return Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsxs)("h4",{children:["Your are about to ask ",t.name," come to pickup"]}),"They provide following services. Change according to your need",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsx)(p.a,{label:"Standard: ".concat(t.timeStandard),input:{name:"serviceType",value:"STANDARD",onChange:function(e){return n(e.target.value)},checked:a},disabled:""===t.timeStandard}),Object(g.jsx)(p.a,{label:"Urgent: ".concat(t.timeUrgent),input:{name:"serviceType",value:"URGENT",onChange:function(e){return n(e.target.value)},checked:c},disabled:""===t.timeUrgent}),Object(g.jsx)(p.a,{label:"Express: ".concat(t.timeExpress),input:{name:"serviceType",value:"EXPRESS",onChange:function(e){return n(e.target.value)},checked:i},disabled:""===t.timeExpress})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{className:"text-muted",children:[c?"Note: Urgent services normally cost double than standard.":"",i?"Note: Express services will be most expensive.":""]})]})}var N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)(O.a,Object(r.a)({heading:this.props.laundry.name+" - Quick Pickup",detailsPanel:x(this.props),extraFields:(e=this.props,Object(g.jsxs)(g.Fragment,{children:["ADDRESS ",Object(g.jsx)(h.a,{children:"Zebo will come on this address to pickup and deliver on same address. We will share this number to zebo."}),Object(g.jsx)("div",{className:"d-flex flex-column",children:Object(g.jsx)(f.a,{type:"dropDownAddNew",label:"Pickup and delivery: ",onChange:function(t){return e.handleAddressChange(Object(v.d)(t))},options:e.addresses.map((function(e){return{value:e,label:e}})),defaultValue:Object(v.i)(e.selectedAddress)})}),Object(g.jsx)("br",{})]}))},this.props));var e}}]),n}(c.Component),k=n(86),C=n(17),y=n(363),A=n.n(y),S=n(16),B=n(63),w=n(271),T=n(153),E=n(31),D=n(39),P=n.n(D),R=n(224);var U={updateUserContact:k.g,updateUserAddress:k.f,updateStoreReceive:T.updateStoreReceive,updateStoreSend:T.updateStoreSend};t.default=Object(i.o)(Object(s.b)((function(e){return{pickupAfter:e.loginState.user.preferences.preferredPickupAfter,pickupBefore:e.loginState.user.preferences.preferredPickupBefore,deliverAfter:e.loginState.user.preferences.preferredDeliverAfter,deliverBefore:e.loginState.user.preferences.preferredDeliverBefore,contacts:e.loginState.user.preferences.contactNumbers,email:e.loginState.user.emailCorrespondence,isLoading:A.a.isInProgress(C.m,e.aPICallsState.calls),laundry:e.quickJobState.laundry,cancelDestination:e.quickJobState.cancelDestination,addresses:e.loginState.user.preferences.deliveryAddress}}),U)((function(e){var t=function(e){return{laundryId:e.laundry.id,ppAfter:e.pickupAfter,ppBefore:e.pickupBefore,ppNotes:"",pdAfter:e.deliverAfter,pdBefore:e.deliverBefore,pdNotes:"",address:e.addresses.length>0?e.addresses[0]:"",number:e.contacts.length>0?e.contacts[0]:"",email:e.email,service:"STANDARD",localDateTime:Object(w.currentDateTime)()}}(e),n=Object(c.useState)(t),s=Object(a.a)(n,2),o=s[0],l=s[1],d=function(){e.updateStoreSend(C.m),Object(B.y)(Object(r.a)(Object(r.a)({},o),{},{localDateTime:Object(w.currentDateTime)()})).then((function(t){P.a.sucs(t.message),e.history.goBack()})).catch(E.notifyErr).finally((function(){return e.updateStoreReceive(C.m)}))},u=Object(r.a)(Object(r.a)({},e),{},{deliverNote:o.pdNotes,pickupNote:o.ppNotes,selectedAddress:o.address,contactNumber:o.number,service:o.service,email:o.email,pickupAfter:o.ppAfter,pickupBefore:o.ppBefore,deliverAfter:o.pdAfter,deliverBefore:o.pdBefore,pickupAfterTimeChange:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{ppAfter:e.formatted12}))},pickupBeforeTimeChange:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{ppBefore:e.formatted12}))},deliverAfterTimeChange:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{pdAfter:e.formatted12}))},deliverBeforeTimeChange:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{pdBefore:e.formatted12}))},handleCancelJob:function(){return e.history.replace(e.cancelDestination)},validateAndHandlePostJob:function(){var e=Object(R.b)(o.email);o.address?o.number?e?P.a.warn(e+" "+o.email):d():P.a.warn("Select or enter contact number"):P.a.warn("Select or enter address")},contactNumberChange:function(t){e.updateUserContact(t),l(Object(r.a)(Object(r.a)({},o),{},{number:t}))},deliverNoteChange:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{pdNotes:e}))},pickupNoteChange:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{ppNotes:e}))},updateEmailJob:function(e){return l(Object(r.a)(Object(r.a)({},o),{},{email:e}))},handleAddressChange:function(t){e.updateUserAddress(t),l(Object(r.a)(Object(r.a)({},o),{},{address:t}))},handleServiceChange:function(e){l(Object(r.a)(Object(r.a)({},o),{},{service:e}))}});return-1===e.laundry.id?Object(g.jsx)(i.c,{to:S.d,push:!1}):Object(g.jsx)(N,Object(r.a)({},u))})))}}]);