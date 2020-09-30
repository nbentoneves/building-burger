(this["webpackJsonpbuilding-burger"]=this["webpackJsonpbuilding-burger"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,,,,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,function(e,t,a){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=(a(22),a(3)),o=a(4),s=a(5),d=a(6),u=a(12),m=a.n(u),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Toolbar, SideDrawer, Backdrop"),r.a.createElement("main",{className:m.a.Content},e.children))},h=a(7),g=a(16),b=a(13),_=a.n(b),B=a(1),E=a.n(B),f=function(e){var t;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:E.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:E.a.BreadTop},r.a.createElement("div",{className:E.a.Seeds1}),r.a.createElement("div",{className:E.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:E.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:E.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:E.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:E.a.Bacon});break;default:t=null}return t},v=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(g.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(f,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:_.a.Burger},r.a.createElement(f,{type:"bread-top"}),t,r.a.createElement(f,{type:"bread-bottom"}))},C=a(8),k=a.n(C),y=a(2),S=a.n(y),N=function(e){return r.a.createElement("div",{className:S.a.BuildControl},r.a.createElement("div",{className:S.a.Label},e.label),r.a.createElement("button",{className:S.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:S.a.More,onClick:e.added},"More"))},O=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],w=function(e){return r.a.createElement("div",{className:k.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),O.map((function(t){return r.a.createElement(N,{key:t.label,label:t.label,disabled:e.disabled[t.type],added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}})})),r.a.createElement("button",{className:k.a.OrderButton,onClick:e.ordered,disabled:!e.purchasable},"ORDER NOW"))},j=a(14),I=a.n(j),M=a(15),T=a.n(M),x=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked}):null},P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:I.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},L=a(9),H=a.n(L),F=function(e){return r.a.createElement("button",{className:[H.a.Button,H.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},Y=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Your order:"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(F,{btnType:"Danger",clicked:e.purchaseCanceled},"CANCEL"),r.a.createElement(F,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},D={salad:.5,cheese:.4,meat:1.3,bacon:.7},A=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("You continue!")},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(h.a)({},e.state.ingredients);n[t]=a;var r=D[t],l=e.state.totalPrice+r;e.setState({ingredients:n,totalPrice:l}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(h.a)({},e.state.ingredients);r[t]=n;var l=D[t],c=e.state.totalPrice-l;e.setState({ingredients:r,totalPrice:c}),e.updatePurchaseState(r)}},e}return Object(o.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(h.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(Y,{price:this.state.totalPrice,ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(v,{ingredients:this.state.ingredients}),r.a.createElement(w,{price:this.state.totalPrice,disabled:e,ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,ordered:this.purchaseHandler,purchasable:this.state.purchasable}))}}]),a}(n.Component),R=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement(A,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.74537e7d.chunk.js.map