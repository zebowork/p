(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[12],{592:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(48),l=a.n(n),r=a(79),c=a(67),i=a(21),s=a(55),o=a(226);function m(){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(s.j)(),e.next=3,Object(c.c)(i.e);case 3:if(!(a=e.sent)){e.next=7;break}return Object(o.a)(t),e.abrupt("return",a.response);case 7:return e.abrupt("return",Object(o.a)(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(s.k)(0,0),e.next=3,Object(c.c)(i.g);case 3:if(!(a=e.sent)){e.next=7;break}return Object(o.b)(t),e.abrupt("return",Promise.resolve({db:a.response,api:t}));case 7:return e.abrupt("return",Promise.resolve({db:[],api:Object(o.b)(t)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},635:function(e,t,a){},754:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a(25),r=a(78),c=a(37),i=a(38),s=a(53),o=a(2),m=a(0),u=a.n(m),d=a(676),p=a.n(d),b=a(714),f=a.n(b),E=(a(722),a(723)),g=a.n(E),N=a(9),h=a.n(N),v=(a(635),a(84)),y=a(170),x=(a(328),a(30)),j=a(106),w=a(582),O=a(611),k=a(591),C=function(e){var t=Object(m.useState)(!1),a=Object(v.a)(t,2),n=a[0],l=a[1],r=Object(m.useState)(new Array),c=Object(v.a)(r,2),i=c[0],s=c[1],o=Object(m.useState)(!1),d=Object(v.a)(o,2),p=d[0],b=d[1],f=e.items,E=e.submissionDateTime,g=e.totalPrice,N=e.deliveryCost,h=e.errors,C=e.warnings,S=e.jobDescriptionComponent,D=e.status;return u.a.createElement("div",{className:"row text-wrap m-0 pb-0 mb-0"},u.a.createElement("div",{className:"col-sm-12 col-md-6 rounded text-wrap r-border bg-detail"},u.a.createElement("div",{className:"row m-0 p-0"},u.a.createElement("div",{className:"col p-0 text-left"},u.a.createElement("div",{className:"pt-2 pl-2"},u.a.createElement("span",null,E)),f.map((function(e){return u.a.createElement("div",{className:"card my-1 border-0",key:Object(j.a)()},u.a.createElement("div",{className:"d-flex flex-row  rounded bg-detail"},u.a.createElement("div",{className:"d-flex align-items-start flex-column align-self-center"},u.a.createElement("div",{className:"align-self-center align-self-stretch"},u.a.createElement("span",{className:"circleNum"},Object(x.k)(e.count)))),u.a.createElement("div",{className:"d-flex align-items-start flex-column pl-2  w-100"},u.a.createElement("div",{className:"d-flex pt-2 w-100"},u.a.createElement("div",{className:"p-0 "},u.a.createElement("span",{className:"wr font-weight-bold"}," ",Object(x.j)(e.name,19))," ",e.hanger&&u.a.createElement("i",{className:"icofont-hanger","aria-hidden":"true"}),"  ",e.imageUrls.length>0&&u.a.createElement(w.a,{className:"btn btn-xs",onClick:function(t){return function(e){l(!0),s(e)}(e.imageUrls)}},u.a.createElement("i",{className:"icofont-ui-camera opc6 cBlack","aria-hidden":"true","data-testid":"camera"}))),u.a.createElement("div",{className:"pt-2 ",style:{fontSize:"10px",textAlign:"right"}},"OTHER"===e.fabric?"":e.fabric)),u.a.createElement("div",{className:"d-flex justify-content-between p-0"},e.operationsOnItem.map((function(e){return Object(x.b)(e)})).join(", ")),u.a.createElement("div",{className:"d-flex justify-content-between p-0"}," ",u.a.createElement("i",{className:"icofont-database icofont-sm opc6 pt-2","aria-hidden":"true"}),u.a.createElement("span",null,e.priceLine)))))}))),u.a.createElement("div",{className:"col p-0 pt-4 text-left"},u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("div",null,"Status: ",u.a.createElement("span",{className:"font-weight-bold",style:{color:Object(O.b)(D)}},D),u.a.createElement(k.a,null,Object(O.c)(D)))),u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("div",null,"Delivery: ",u.a.createElement("span",{className:"font-weight-bold"},N))),u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("div",null,"Total: ",u.a.createElement("span",{className:"font-weight-bold"},g))),(h.length>0||C.length>0)&&u.a.createElement("div",{className:"d-flex flex-row  rounded pl-0"},u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("button",{className:"btn btn-xs",onClick:function(){return b(!0)}},"Notes")))))),S,u.a.createElement(y.a,{show:n,onHide:function(){l(!1),s([])},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"xl",centered:!0},u.a.createElement(y.a.Header,{closeButton:!0,translate:"yes"},"Images"),u.a.createElement(y.a.Body,{style:{backgroundColor:"white"}},i.map((function(e){return u.a.createElement("div",{className:"img-wrap m-2"},u.a.createElement("img",{src:e,alt:"item",className:"img-fluid","data-testid":"image"}))})))),u.a.createElement(y.a,{show:p,onHide:function(){return b(!1)},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0},u.a.createElement(y.a.Header,{closeButton:!0,translate:"yes"},"Warnings"),u.a.createElement(y.a.Body,{style:{backgroundColor:"white"}},u.a.createElement("ul",{className:"text-danger"},h&&h.map((function(e){return u.a.createElement("li",null,e)}))),u.a.createElement("ul",{className:"text-warning"},C&&C.map((function(e){return u.a.createElement("li",null,e)}))))))},S=function(e){var t=u.a.useState({show:!1,status:""}),a=Object(v.a)(t,2),n=a[0],l=a[1],r=function(e){l({show:!0,status:e})},c=function(){l({show:!1,status:""})},i=e.handleContactClick,s=e.status,o=e.handleStatusChange,m=e.id;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"buttons-with-margin"},u.a.createElement("button",{className:"btn btn-fill btn-primary",onClick:i},u.a.createElement("i",{className:"icofont-headphone-alt icofont-md","aria-hidden":"true"})),function(e){return e===O.a.INITIAL||e===O.a.SUBMITTED||e===O.a.BID||e===O.a.ASSIGN}(s)&&u.a.createElement(w.a,{variant:"warning",onClick:function(){return r(O.a.CANCEL)}},"Cancel Job"),function(e){return e===O.a.CANCEL||e===O.a.COMPLETE}(s)&&u.a.createElement(w.a,{variant:"danger",onClick:function(){return r(O.a.DELETE)}},u.a.createElement("i",{className:"icofont-trash icofont-md","aria-hidden":"true"}))),u.a.createElement(y.a,{show:n.show,onHide:c,dialogClassName:"modal-dialog","aria-labelledby":"contained-modal-title-center",size:"sm",centered:!0},u.a.createElement(y.a.Header,{translate:"yes"},u.a.createElement(y.a.Title,null,u.a.createElement("i",{className:"icofont-barricade icofont-md","aria-hidden":"true"})," ",n.status," job?")),u.a.createElement(y.a.Footer,null,u.a.createElement(w.a,{variant:"primary",onClick:function(){var e=n.status;l({show:!1,status:""}),o(m,e)}},u.a.createElement("i",{className:"icofont-tick-mark","aria-hidden":"true"})," Yes"),u.a.createElement(w.a,{variant:"secondary",onClick:c},u.a.createElement("i",{className:"icofont-close","aria-hidden":"true"})," No"))))},D=function(e){var t=e.contactNumber,a=e.deliverAfter,n=e.deliverBefore,l=e.deliverNote,r=e.pickupAfter,c=e.pickupBefore,i=e.pickupDeliveryAddress,s=e.pickupNote,o=e.laundryName,m=e.type,d=e.emailCorrespondence;return u.a.createElement("div",{className:"col-sm-12 col-md-6 r-border bg-detail"},u.a.createElement("div",{className:"card pb-0 border-0"},u.a.createElement("ul",{className:"list-group list-group-flush pb-0 border-0"},u.a.createElement("li",{className:"list-group-item pb-0 px-0 bg-detail"},u.a.createElement("span",{className:"font-weight-bold"},o)),u.a.createElement("li",{className:"list-group-item py-0 px-0 pt-2 bg-detail"},"Type: ",u.a.createElement("span",{className:"font-weight-bold"},m)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},c)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup After:"," ",u.a.createElement("span",{className:"font-weight-bold"},r)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},s)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},n)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery After:"," ",u.a.createElement("span",{className:"font-weight-bold"},a)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},l)),u.a.createElement("li",{className:"list-group-item py-0 px-0 pt-2 bg-detail"},t),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},d),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},i),u.a.createElement("li",{className:"list-group-item px-0 pb-0 bg-detail"},u.a.createElement("div",{className:"float-right pb-0"},u.a.createElement(S,e))))))},A=function(e){var t=e.contactNumber,a=e.deliverAfter,n=e.deliverBefore,l=e.deliverNote,r=e.pickupAfter,c=e.pickupBefore,i=e.pickupDeliveryAddress,s=e.pickupNote,o=e.laundryName,m=e.type,d=e.emailCorrespondence;return u.a.createElement("div",{className:"col-sm-12 col-md-6 r-border bg-detail"},u.a.createElement("div",{className:"row m-0 p-0 pb-1"},u.a.createElement("div",{className:"col p-0 text-left"},u.a.createElement("ul",{className:"list-group list-group-flush pb-0 border-0 bg-detail"},u.a.createElement("li",{className:"list-group-item pb-2 px-0 bg-detail"},u.a.createElement("span",{className:"p-0 font-weight-bold"},o)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},c)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup After:"," ",u.a.createElement("span",{className:"font-weight-bold"},r)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},s)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delviery Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},n)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery After:"," ",u.a.createElement("span",{className:"font-weight-bold"},a)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},l)))),u.a.createElement("div",{className:"col p-0 py-1 text-left"},u.a.createElement("ul",{className:"list-group list-group-flush pb-0 border-0 bg-detail"},u.a.createElement("li",{className:"list-group-item py-2 px-0 bg-detail"},"Type: ",u.a.createElement("span",{className:"font-weight-bold"},m)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},u.a.createElement("span",null,t)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},u.a.createElement("span",null,d)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},u.a.createElement("span",null,i))))),u.a.createElement("div",{className:"float-right pb-2","data-testid":"contact"},u.a.createElement(S,e)))},B=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.isMobile;return u.a.createElement("div",null,e&&u.a.createElement(C,Object.assign({},this.props,{jobDescriptionComponent:u.a.createElement(D,this.props)})),!e&&u.a.createElement(C,Object.assign({},this.props,{jobDescriptionComponent:u.a.createElement(A,this.props)})))}}]),a}(u.a.Component),F=Object(s.b)((function(e){return{isMobile:e.layoutState.isMobile}}))(B),T=function(e,t,a,n){var l=e?e.map((function(e){return((t=e).count>1?t.count+" ":"")+t.name;var t})).join(" + "):"";return u.a.createElement("div",null,u.a.createElement("button",{className:"btn btn-fill btn-primary",onClick:function(){return n(t)}},u.a.createElement("i",{className:"icofont-basket icofont-md","aria-hidden":"true"}))," ",l)},H=function(e){return u.a.createElement("span",null,e.toLocaleLowerCase())},M={className:"r-background",renderer:function(e){return u.a.createElement(F,e)},showExpandColumn:!0,expandByColumnOnly:!1,expandHeaderColumnRenderer:function(e){return e.isAnyExpands?u.a.createElement("i",{className:"icofont-minus","aria-hidden":"true"}):u.a.createElement("i",{className:"icofont-plus","aria-hidden":"true"})},expandColumnRenderer:function(e){return e.expanded?u.a.createElement("i",{className:"icofont-simple-up icofont-md text-primary","aria-hidden":"true"}):u.a.createElement("i",{className:"icofont-simple-down icofont-md text-primary","aria-hidden":"true"})}},P=function(e){return[{dataField:"items",text:"Items",formatter:T,formatExtraData:e},{dataField:"status",text:"Status",formatter:H},{dataField:"submissionDateTime",text:"Posted on",sort:!0},{dataField:"type",text:"Type"}]},I=function(e){return P(e).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{hidden:"items"!==e.dataField})}))},L=function(e){var t=e.columns,a=e.onColumnToggle,n=e.toggles;return u.a.createElement("div",{className:"buttons-with-margin","data-toggle":"buttons"},t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{toggle:n[e.dataField]})})).filter((function(e){return"items"!==e.dataField})).map((function(e){return u.a.createElement("button",{type:"button",key:e.dataField,className:"btn btn-primary ".concat(e.toggle?"active":""),"data-toggle":"button","aria-pressed":e.toggle?"true":"false",onClick:function(){return a(e.dataField)}},e.text)})))},J=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleCreateBasketFromHistory,n=e.data,l=e.handleContactFromHistory,r=e.handleStatusChange,c=n.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{handleContactClick:function(){return l(e.id)},handleStatusChange:r})}));return u.a.createElement("div",{className:h()("container-fluid",{"mt-2":t})},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"header pt-sm-2 px-sm-4"},u.a.createElement("h4",null,"Job History ",u.a.createElement("i",{className:"icofont-history icofont-md"}))),u.a.createElement("div",{className:"content pt-sm-2 px-sm-4"},t?function(e,t){return u.a.createElement(g.a,{bootstrap4:!0,keyField:"id",data:e,columns:I(t),columnToggle:!0},(function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(L,e.columnToggleProps),u.a.createElement(p.a,Object.assign({expandRow:M,stripe:"true",noDataIndication:"No job posted yet!",pagination:f()()},e.baseProps)))}))}(c,a):function(e,t){return u.a.createElement(p.a,{bootstrap4:!0,keyField:"id",data:e,columns:P(t),expandRow:M,stripe:"true",noDataIndication:"No job posted yet!",pagination:f()()})}(c,a))))))}}]),a}(u.a.Component),z=a(169),R=a(31),U=a(54),_=function(e){var t=e.isMobile;return u.a.createElement("div",{className:"container text-center"},u.a.createElement("div",{className:h()("d-flex flex-row justify-content-center align-self-end r-height p-4",{"r-heightM":t})},u.a.createElement("div",{className:"d-flex align-self-center"},u.a.createElement("div",{className:"align-self-center"},u.a.createElement(U.b,{to:"job"},u.a.createElement("button",{className:h()("btn btn-success btn-fill btn-lg",{"btn-sm":t})},u.a.createElement("span",null,"Order Your First Laundry ",u.a.createElement("i",{className:"icofont-runner-alt-1 pr-2","aria-hidden":"true"}))))))),u.a.createElement("div",{className:h()("row m-1",{"mt-2":t})},u.a.createElement("div",{className:"col-12"},u.a.createElement("span",{className:h()("circlebg-sub1",{"circlebg-sub1M":t})},u.a.createElement("i",{className:"icofont-refree-jersey icofont-md","aria-hidden":"true"})),u.a.createElement("span",{className:h()("circlebg",{circlebgM:t})},u.a.createElement("i",{className:"icofont-washing-machine","aria-hidden":"true"})),u.a.createElement("span",{className:h()("circlebg-sub1",{"circlebg-sub1M":t})},u.a.createElement("i",{className:"icofont-refree-jersey icofont-md","aria-hidden":"true"})))))},G=a(741),Y=a(29),K=a(27),W=a(592),q=a(128),Q=a(226),V=a(55),X=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={data:void 0,page:void 0,size:void 0},l.updateJobHistoryStatus=l.updateJobHistoryStatus.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(W.b)().then((function(t){var a=t.db,n=t.api;return a.length>0&&e.setState({data:a}),n})).then((function(t){return e.setState({data:t})})).catch((function(t){R.a.err(Object(q.b)(t)),e.setState({data:[]})}))}},{key:"updateJobHistoryStatus",value:function(e,t){var a,n=this,l=this.state.data,r=function(){l&&l.length>0&&Object(Q.b)(Promise.resolve(l)),n.setState({data:l})};null===l||void 0===l||l.filter((function(t){return t.id===e})).forEach((function(e){a=e.status,e.status=t})),r(),Object(V.t)(e,t).catch((function(t){R.a.err(Object(q.b)(t)),null===l||void 0===l||l.filter((function(t){return t.id===e})).forEach((function(e){return e.status=a})),r()}))}},{key:"render",value:function(){var e=this.state.data;return e?e.length<=0?u.a.createElement(_,{isMobile:this.props.isMobile}):u.a.createElement(J,Object.assign({},this.props,{data:e.filter((function(e){return e.status!==O.a.DELETE})),handleStatusChange:this.updateJobHistoryStatus})):u.a.createElement(G.a,{variant:"info",animated:!0,now:75,label:"LOADING..."})}}]),a}(u.a.Component);t.default=Object(K.f)(Object(s.b)((function(e){return{isMobile:e.layoutState.isMobile}}),(function(e,t){return{handleCreateBasketFromHistory:function(a){e(function(e){return{type:z.a.CREATE_BASKET,history:e}}(a)),t.history.push(Y.f)},handleContactFromHistory:function(e){t.history.push({pathname:Y.c,state:{jobHistoryId:e}})}}}))(X))}}]);
//# sourceMappingURL=JobHistory.f8bf7015.chunk.js.map