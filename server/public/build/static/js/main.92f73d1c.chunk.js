(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(31),i=n.n(s),r=n(6),o=n(2),l=n(3),d=n(5),u=n(4),h=c.a.createContext(),j=n(7),b=n.n(j),p=b.a.create({baseURL:"https://yoursuper.herokuapp.com/api",withCredentials:!0});function m(e){if(e.response)throw console.log(e.response.data.message),e.response.data;throw e}var O={service:p,signup:function(e){return p.post("/auth/signup",e).then((function(e){return e.data})).catch(m)},signin:function(e){return p.post("/auth/signin",e).then((function(e){return e.data})).catch(m)},isLoggedIn:function(){return p.get("/auth/isLoggedIn").then((function(e){return e.data})).catch(m)},logout:function(){return p.get("/auth/logout").catch(m)},subscribe:function(e){return p.post("/user/subscribe",e).then((function(e){return e.data})).catch(m)}},x=n(0),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={user:null,isLoggedIn:!1,isLoading:!0},e.removeUser=function(){O.logout().then((function(){e.setState({user:null,isLoggedIn:!1})}))},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading,removeUser:this.removeUser,setUser:this.setUser};return Object(x.jsx)(h.Provider,{value:e,children:this.props.children})}}]),n}(c.a.Component),f=n(8),v=(n(57),function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("section",{className:"SectionHome1",children:Object(x.jsx)("div",{children:"HomeSection1"})})})});var y=function(e){var t=e.productImg,n=e.name,a=e.productId,c=e.quantity,s=e.handleSubmit;return Object(x.jsxs)("div",{className:"IngredientCard",children:[Object(x.jsxs)(r.b,{to:"/products/".concat(a),children:[Object(x.jsx)("img",{src:t,alt:n}),Object(x.jsx)("p",{children:n})]}),c?Object(x.jsx)("button",{name:a,onClick:function(){return s(a)},children:"Add to cart"}):Object(x.jsx)("p",{children:"Sold Out"})]})},C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:[]},e.handleSubmit=function(e){var t={quantity:1,product:e};b.a.post("http://localhost:5000/api/cart/",t,{withCredentials:!0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/product/").then((function(t){e.setState({products:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.products?Object(x.jsx)("div",{children:this.state.products.map((function(t){return Object(x.jsx)(y,{name:t.name,productImg:t.productImg,quantity:t.quantity,productId:t._id,handleSubmit:e.handleSubmit},t._id)}))}):null}}]),n}(c.a.Component),N=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("section",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("div",{children:"HomeSection2"}),Object(x.jsx)(C,{})]})})},w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(N,{})]})}}]),n}(c.a.Component),S=n(15),k=function(e){return function(t){return Object(x.jsx)(h.Consumer,{children:function(n){return Object(x.jsx)(e,Object(S.a)(Object(S.a)({},t),{},{context:n}))}})}},P=(n(66),k((function(e){var t=e.context;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("nav",{children:[Object(x.jsx)("div",{id:"logo",children:Object(x.jsx)(r.c,{exact:!0,to:"/",children:Object(x.jsx)("img",{id:"logo",src:"https://cdn.shopify.com/s/files/1/1523/0666/t/194/assets/logo.png?v=83684454748928667",alt:"YourSuper Logo"})})}),Object(x.jsxs)("ul",{className:"nav-list",children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",exact:!0,to:"/products",style:{textDecoration:"none",color:"black"},children:"Products"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",exact:!0,to:"/press+media",style:{textDecoration:"none",color:"black"},children:"Press + Media"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",exact:!0,to:"/about",style:{textDecoration:"none",color:"black"},children:"Our Story"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",exact:!0,to:"/subscribe",style:{textDecoration:"none",color:"black"},children:"Subscribe"})})]}),Object(x.jsxs)("ul",{className:"nav-list",children:[!t.isLoggedIn&&Object(x.jsx)(c.a.Fragment,{children:Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",to:"/login",style:{textDecoration:"none",color:"black"},children:"Login"})})}),t.isLoggedIn&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",to:"/dashboard",style:{textDecoration:"none",color:"black"},children:Object(x.jsx)("i",{className:"fas fa-user-circle"})})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",exact:!0,to:"/cart",style:{textDecoration:"none",color:"black"},children:Object(x.jsx)("i",{className:"fas fa-shopping-cart"})})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.c,{className:"navlink",to:"/",onClick:function(){t.removeUser()},style:{textDecoration:"none",color:"black"},children:"Logout"})})]})]})]})})}))),I=(n(67),function(){return Object(x.jsx)("footer",{id:"footer",children:"ich bin ein sch\xf6ne Footer "})}),F=n(10),D=(n(68),function(e){var t=e.text;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("button",{className:"button-component",children:t})})}),B=k(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",isMember:!1,flashMessage:!1},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(F.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),O.subscribe(e.state).then((function(t){e.props.context.setUser(t),e.setState({isMember:t.isMember})})).catch((function(e){console.log(e)})),console.log(e.props.context);var n=e.props.context.user;null===n&&e.setState({flashMessage:!0}),n.isMember&&e.setState({isMember:!0})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("section",{children:[Object(x.jsxs)("form",{autoComplete:"off",className:"form",onSubmit:this.handleSubmit,action:"",children:[Object(x.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"}),Object(x.jsx)(D,{text:"Subscribe"})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:["To become a privileged member ",Object(x.jsx)(r.b,{to:"/signup",children:"create your account"})," first"]})}),this.state.flashMessage&&Object(x.jsx)("div",{className:"flashMessage",children:"Please sign up first to become a member"}),this.state.isMember&&Object(x.jsx)("div",{className:"flashMessage",children:"Congrats you're a member ! Enjoy ;)"})]})}}]),n}(c.a.Component)),L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsx)("h1",{children:"Become a member"}),Object(x.jsx)(B,{})]})}}]),n}(c.a.Component),q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsx)("h1",{children:"ProducList Page"}),Object(x.jsx)(C,{})]})}}]),n}(c.a.Component);var M=function(e){var t=e.name,n=e.ingredientImg,a=e.description;return Object(x.jsxs)("div",{className:"IngredientCard",children:[Object(x.jsx)("h3",{children:t}),Object(x.jsx)("img",{src:n,alt:t}),Object(x.jsx)("p",{children:a})]})},A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={product:null,quantity:1},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;c<1&&(c=1),e.setState(Object(F.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n={quantity:e.state.quantity,product:e.state.product._id};b.a.post("http://localhost:5000/api/cart/",n,{withCredentials:!0}).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;b.a.get("http://localhost:5000/api/product/"+t).then((function(t){e.setState({product:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.product?Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsxs)("div",{className:"OneProduct-container",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:this.state.product.name}),Object(x.jsx)("img",{src:this.state.product.productImg,alt:this.state.product.name})]}),Object(x.jsx)("div",{children:this.state.product.ingredients.map((function(e){return Object(x.jsx)(M,{name:e.name,ingredientImg:e.ingredientImg,description:e.description},e._id)}))})]}),Object(x.jsxs)("div",{className:"OneProduct-container",children:[Object(x.jsx)("p",{children:this.state.product.description}),Object(x.jsxs)("form",{autoComplete:"off",className:"OneProduct-form",onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{children:"Quantity"}),Object(x.jsx)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange}),Object(x.jsxs)("div",{children:[(this.state.quantity*this.state.product.price).toFixed(2)," \u20ac"]}),Object(x.jsx)("button",{onClick:this.handleSubmit,children:"Add to cart"})]})]})]}):null}}]),n}(c.a.Component),V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={quantity:e.props.quantity},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;c<1&&(c=1),e.setState(Object(F.a)({},a,c))},e.handleDelete=function(t){b.a.delete("http://localhost:5000/api/cart/"+t,{withCredentials:!0}).then((function(){e.props.onDelete(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"CardProductCard",children:[Object(x.jsx)("img",{src:this.props.productImg,alt:this.props.productName}),Object(x.jsx)("p",{children:this.props.productName}),Object(x.jsxs)("form",{autoComplete:"off",className:"CardProductCard-form ",onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{children:"Quantity : "}),Object(x.jsx)("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange}),Object(x.jsxs)("div",{children:[(this.state.quantity*this.props.productPrice).toFixed(2)," \u20ac"]})]}),Object(x.jsx)("button",{onClick:function(){return e.handleDelete(e.props.productId)},children:"Delect"})]})}}]),n}(c.a.Component),U=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={cartProducts:[]},e.handleDeleteProduct=function(t){console.log(t);var n=e.state.cartProducts.filter((function(e){return e.product._id!==t}));e.setState({cartProducts:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/cart/",{withCredentials:!0}).then((function(t){e.setState({cartProducts:t.data.products})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state.cartProducts),this.state.cartProducts?Object(x.jsx)("div",{children:this.state.cartProducts.map((function(t){return Object(x.jsx)(V,{productId:t.product._id,productName:t.product.name,productImg:t.product.productImg,onDelete:e.handleDeleteProduct,productPrice:t.product.price,quantity:t.quantity},t.product._id)}))}):null}}]),n}(c.a.Component),_=n(33),Y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={cartProducts:[],shipping:3.73},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/cart/",{withCredentials:!0}).then((function(t){e.setState({cartProducts:t.data.products})})).catch((function(e){console.log(e)}))}},{key:"calculSubTotal",value:function(){var e=Object(_.a)(this.state.cartProducts),t=[],n=0;return e.map((function(e){return t.push(e.quantity*e.product.price),t})),t.forEach((function(e){return n+=e})),n=n.toFixed(2)}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("h2",{children:"Your Order"}),Object(x.jsxs)("span",{children:["SubTotal :  ",this.calculSubTotal()," \u20ac"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:["Estimated Shipping : ",this.state.shipping," \u20ac"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:["Total : ",Number(this.calculSubTotal())+this.state.shipping,"\u20ac"]}),Object(x.jsx)("br",{})]})}}]),n}(c.a.Component),T=k(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsx)("h2",{children:"Cart"}),Object(x.jsx)(U,{}),Object(x.jsx)(Y,{})]})}}]),n}(c.a.Component)),E=(n(69),k(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={firstName:"",lastName:"",profileImg:"",email:"",password:"",address:"",isMember:!1,isSubmitted:!1},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(F.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n={firstName:e.state.firstName,lastName:e.state.lastName,profileImg:e.state.profileImg,email:e.state.email,password:e.state.password,address:e.state.address};b.a.post("http://localhost:5000/api/user/",n,{withCredentials:!0}).then((function(){e.setState({isSubmitted:!0})})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/user/",{withCredentials:!0}).then((function(t){var n=t.data;e.setState({firstName:n.firstName,lastName:n.lastName,profileImg:n.profileImg,email:n.email,password:n.password,address:n.address,isMember:n.isMember})})).catch((function(e){console.log(e)})),console.log("------------- THIS.PROPS ------------"),console.log(this.props)}},{key:"render",value:function(){return this.state.isSubmitted?Object(x.jsx)(f.a,{to:"/dashboard"}):Object(x.jsxs)("div",{className:"standard-section profile",children:[Object(x.jsx)("h1",{children:"Update profile"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{className:"picture",children:[Object(x.jsx)("img",{src:this.state.profileImg,alt:this.state.firstName}),Object(x.jsx)("label",{htmlFor:"image",children:"Update profile picture :"}),Object(x.jsx)("input",{type:"file",name:"image",id:"image",onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"formtext",children:[Object(x.jsxs)("div",{className:"section",children:[Object(x.jsx)("h2",{children:"Name"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"firstName",children:"First name :"}),Object(x.jsx)("input",{type:"text",name:"firstName",id:"firstName",value:this.state.firstName,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"lastName",children:"Last name :"}),Object(x.jsx)("input",{type:"text",name:"lastName",id:"lastName",value:this.state.lastName,onChange:this.handleChange})]})]}),Object(x.jsxs)("div",{className:"section",children:[Object(x.jsx)("h2",{children:"Email"}),Object(x.jsx)("input",{type:"email",name:"email",id:"email",value:this.state.email,onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"section",children:[Object(x.jsx)("h2",{children:"Password"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"currentPassword",children:"Current password :"}),Object(x.jsx)("input",{type:"text",name:"currentPassword",id:"currentPassword",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"newPassword",children:"New password :"}),Object(x.jsx)("input",{type:"text",name:"newPassword",id:"newPassword",onChange:this.handleChange})]})]})]}),Object(x.jsxs)("div",{className:"section",children:[Object(x.jsx)("h2",{children:"Address"}),Object(x.jsx)("input",{type:"address",name:"address",id:"address",value:this.state.address,onChange:this.handleChange})]}),Object(x.jsxs)("div",{className:"section",children:[Object(x.jsx)("h2",{children:"Membership"}),this.props.context.user.isMember&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{children:"You are a Your Super member !"}),Object(x.jsx)("p",{children:"Great news ! You get 20% off every single order and if you check your email you'll find our weekly yummy recipes."})]}),!this.props.context.user.isMember&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{children:"You are not a member yet"}),Object(x.jsx)("p",{children:"Wanna get 20% off every single order and receive our weekly yummy recipes ?"}),Object(x.jsx)(r.b,{to:"/subscribe",children:"Subscribe now !"})]})]}),Object(x.jsx)(D,{text:"Update now"})]})]})]})}}]),n}(c.a.Component))),H=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={userOrders:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/order/",{withCredentials:!0}).then((function(t){e.setState({userOrders:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Order History"}),this.state.userOrders.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:["Order # ",e.number]}),Object(x.jsxs)("div",{children:["Date : ",e.createdAt.slice(0,10)]})]},e.number)}))]})}}]),n}(c.a.Component),z=(n(70),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={user:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/user/",{withCredentials:!0}).then((function(t){e.setState({user:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"standard-section dashboard",children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("h1",{children:"My Dashboard"}),Object(x.jsxs)("div",{className:"update-profile",children:[Object(x.jsx)(r.b,{className:"link",style:{textDecoration:"none",color:"black",margin:"3vh"},to:"/profile",children:"Update my profile"}),Object(x.jsx)("img",{src:this.state.user.profileImg,alt:this.state.user.firstName,className:"profile-picture"})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{className:"hello",children:["Hello ",this.state.user.firstName," !"]}),Object(x.jsx)(H,{})]}),Object(x.jsx)(U,{}),Object(x.jsx)(Y,{})]})]})}}]),n}(c.a.Component));var J=function(e){var t=e.link,n=e.img,a=e.brand,c=e.preview;return Object(x.jsxs)(r.b,{to:t,children:[Object(x.jsx)("img",{width:"150",src:n,alt:a}),Object(x.jsx)("p",{children:c}),Object(x.jsx)("div",{children:"READ MORE ..."})]})};var R=function(){return Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"They talk about us in the press !"}),Object(x.jsx)(J,{link:"https://www.forbes.com/sites/sboyd/2018/05/31/your-super/#5ae9ed526c26",img:"https://res.cloudinary.com/debzbm2xr/image/upload/v1623257191/YourSuper/Press/Forbes_opdgdd.png",brand:"Forbes",preview:"Beyond Meat Investor Leads Your Super's $10 Million Series B Funding"}),Object(x.jsx)(J,{link:"https://www.builtinla.com/companies/best-places-to-work-los_angeles-2020",img:"https://res.cloudinary.com/debzbm2xr/image/upload/v1623257191/YourSuper/Press/LA_lerzcv.png",brand:"Built In LA",preview:"50 Best Paying Companies in Los Angeles | 2020"}),Object(x.jsx)(J,{link:"https://www.forbes.com/sites/sboyd/2018/05/31/your-super/#5ae9ed526c26",img:"https://res.cloudinary.com/debzbm2xr/image/upload/v1623257191/YourSuper/Press/30_o1cqul.png",brand:"Forbes",preview:"Kristel De Groot in Forbes 30 Under 30"})]}),Object(x.jsxs)("section",{children:[Object(x.jsx)("h1",{children:"You might have seen us on TV"}),Object(x.jsx)("iframe",{width:"300",src:"https://www.youtube.com/embed/ayqiN4Db_JU",title:"YouTube video player"}),Object(x.jsx)("iframe",{width:"300",src:"https://www.youtube.com/embed/uLSJ4nYMIVM",title:"YouTube video player"}),Object(x.jsx)("iframe",{width:"300",src:"https://www.youtube.com/embed/NcKTxGr_Tg0",title:"YouTube video player"})]})]})},G=n(18),K=["component","context"],Q=k((function(e){var t=e.component,n=e.context,a=Object(G.a)(e,K);return console.log(n),n.isLoading?null:n.isLoggedIn?Object(x.jsx)(f.b,Object(S.a)(Object(S.a)({},a),{},{render:function(e){return Object(x.jsx)(t,Object(S.a)({},e))}})):Object(x.jsx)(f.a,{to:"/connection"})})),W=["component","context"],$=k((function(e){var t=e.component,n=e.context,a=Object(G.a)(e,W);return n.isLoading?null:n.isLoggedIn&&!0===n.user.isAdmin?Object(x.jsx)(f.b,Object(S.a)(Object(S.a)({},a),{},{render:function(e){return Object(x.jsx)(t,Object(S.a)({},e))}})):Object(x.jsx)(f.a,{to:"/connection"})})),X=k(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(F.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),O.signup(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.context.isLoggedIn?Object(x.jsx)(f.a,{to:"/"}):Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsxs)("form",{autoComplete:"off",className:"form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(x.jsx)("h1",{children:"Create account"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{className:"label",htmlFor:"firstName",children:"First name"}),Object(x.jsx)("input",{className:"input",id:"firstName",type:"text",name:"firstName"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{className:"label",htmlFor:"lastName",children:"Last Name"}),Object(x.jsx)("input",{className:"input",id:"lastName",type:"text",name:"lastName"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{className:"input",id:"email",type:"email",name:"email"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{className:"input",id:"password",type:"password",name:"password"})]}),Object(x.jsx)(D,{text:"Sign up"})]}),Object(x.jsxs)("div",{className:"form-section link",children:[Object(x.jsx)("p",{children:"Already have an account? "}),Object(x.jsx)(r.b,{to:"/login",children:"Log in"})]})]})}}]),n}(a.Component)),Z=k(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(F.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),O.signin(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.context.isLoggedIn?Object(x.jsx)(f.a,{to:"/"}):Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)(r.b,{to:"/signup",children:"Sign up"}),Object(x.jsxs)("form",{autoComplete:"off",className:"form",onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{className:"label",htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.email,className:"input",id:"email",type:"email",name:"email"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{className:"label",htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{onChange:this.handleChange,value:this.state.password,className:"input",id:"password",type:"password",name:"password"})]}),Object(x.jsx)(D,{text:"Log in"}),Object(x.jsx)(r.b,{to:"/signup",children:"Don't have an account yet? Sign up !"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Can't log in ? If you didn't set up an account when you purchased, then you need to "}),Object(x.jsx)(r.b,{to:"/signup",children:"create one now !"})]})]})}}]),n}(c.a.Component)),ee=(n(71),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={products:[]},e.handleDelete=function(t){b.a.delete("http://localhost:5000/api/product/"+t).then((function(n){e.setState({products:e.state.products.filter((function(e){return e._id!==t}))})})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:5000/api/product/").then((function(t){e.setState({products:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"AdminProductList",children:[Object(x.jsx)("h1",{children:"YourSuper - Admin - Dashboard"}),Object(x.jsx)(r.b,{to:"/admin/createproduct",children:"Create Product"}),this.state.products.map((function(t){return Object(x.jsxs)("div",{className:"Product",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.productImg,alt:t.name})}),Object(x.jsx)("h4",{children:t.name}),Object(x.jsx)("button",{onClick:function(){return e.handleDelete(t._id)},children:"Delete"}),Object(x.jsx)(r.b,{to:"/admin/edit/".concat(t._id),children:"Edit"})]},t._id)}))]})}}]),n}(c.a.Component)),te=(n(72),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleChange=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,productImg:e.state.productImg,description:e.state.description,price:e.state.price,quantity:e.state.quantity,reference:e.state.reference,ingredients:e.state.ingredients,saleByPercentage:e.state.saleByPercentage,saleByValue:e.state.saleByValue};b.a.post("http://localhost:5000/api/product/",n).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",id:"name",value:this.state.name,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"image",children:"Image"}),Object(x.jsx)("input",{type:"text",name:"image",id:"image",value:this.state.productImg,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description"}),Object(x.jsx)("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"price",children:"Price"}),Object(x.jsx)("input",{type:"number",name:"price",id:"price",value:this.state.price,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"description",children:"quantity"}),Object(x.jsx)("input",{type:"number",name:"quantity",id:"quantity",value:this.state.quantity,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"reference",children:"reference"}),Object(x.jsx)("input",{type:"text",name:"reference",id:"reference",value:this.state.reference,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"ingredients",children:"ingredients"}),Object(x.jsx)("input",{type:"text",name:"ingredients",id:"ingredients",value:this.state.ingredients,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"saleByPercentage",children:"saleByPercentage"}),Object(x.jsx)("input",{type:"number",name:"saleByPercentage",id:"saleByPercentage",value:this.state.saleByPercentage,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"saleByValue",children:"saleByValue"}),Object(x.jsx)("input",{type:"number",name:"saleByValue",id:"saleByValue",value:this.state.saleByValue,onChange:this.handleChange})]}),Object(x.jsx)("button",{type:"submit",children:"Submit New Product"})]}),Object(x.jsx)(r.b,{to:"/admin",children:"Back"})]})}}]),n}(a.Component)),ne=(n(73),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:"",productImg:"",description:"",price:0,quantity:0,reference:"",ingredients:[],saleByPercentage:0,saleByValue:0},e.handleChange=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.props.match.params.id,a={name:e.state.name,productImg:e.state.productImg,description:e.state.description,price:e.state.price,quantity:e.state.quantity,reference:e.state.reference,ingredients:e.state.ingredients,saleByPercentage:e.state.saleByPercentage,saleByValue:e.state.saleByValue};b.a.patch("http://localhost:5000/api/product/"+n,a).then((function(t){e.props.history.push("/admin")})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;b.a.get("http://localhost:5000/api/product/"+t).then((function(t){var n=t.data;e.setState({name:n.name,productImg:n.productImg,description:n.description,price:n.price,quantity:n.quantity,reference:n.reference,ingredients:n.ingredients,saleByPercentage:n.saleByPercentage,saleByValue:n.saleByValue})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("h2",{children:["Edit Product : ",this.state.name]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name : "}),Object(x.jsx)("input",{type:"text",name:"name",id:"name",value:this.state.name,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"image",children:"Image : "}),Object(x.jsx)("input",{type:"text",name:"image",id:"image",value:this.state.productImg,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"description",children:"Description : "}),Object(x.jsx)("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"price",children:"Price : "}),Object(x.jsx)("input",{type:"number",name:"price",id:"price",value:this.state.price,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"description",children:"quantity : "}),Object(x.jsx)("input",{type:"number",name:"quantity",id:"quantity",value:this.state.quantity,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"reference",children:"reference : "}),Object(x.jsx)("input",{type:"text",name:"reference",id:"reference",value:this.state.reference,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"ingredients",children:"ingredients : "}),Object(x.jsx)("input",{type:"text",name:"ingredients",id:"ingredients",value:this.state.ingredients,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"saleByPercentage",children:"saleByPercentage : "}),Object(x.jsx)("input",{type:"number",name:"saleByPercentage",id:"saleByPercentage",value:this.state.saleByPercentage,onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"saleByValue",children:"saleByValue : "}),Object(x.jsx)("input",{type:"number",name:"saleByValue",id:"saleByValue",value:this.state.saleByValue,onChange:this.handleChange})]}),Object(x.jsx)("button",{type:"submit",children:"Submit"})]}),Object(x.jsx)(r.b,{to:"/admin",children:"Back"})]})}}]),n}(a.Component)),ae=function(){return Object(x.jsxs)("div",{className:"standard-section",children:[Object(x.jsx)("h2",{children:"4.0.4"}),Object(x.jsx)("h2",{children:"Page Not Found"}),Object(x.jsx)("h3",{children:":("})]})};n(74);var ce=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(P,{}),Object(x.jsxs)(f.d,{children:[Object(x.jsx)(f.b,{exact:!0,path:"/",component:w}),Object(x.jsx)(f.b,{exact:!0,path:"/subscribe",component:L}),Object(x.jsx)(f.b,{exact:!0,path:"/products",component:q}),Object(x.jsx)(f.b,{exact:!0,path:"/products/:id",component:A}),Object(x.jsx)(f.b,{exact:!0,path:"/press+media",component:R}),Object(x.jsx)(Q,{exact:!0,path:"/cart",component:T}),Object(x.jsx)(Q,{exact:!0,path:"/profile",component:E}),Object(x.jsx)(Q,{exact:!0,path:"/dashboard",component:z}),Object(x.jsx)(f.b,{exact:!0,path:"/login",component:Z}),Object(x.jsx)(f.b,{exact:!0,path:"/signup",component:X}),Object(x.jsx)($,{exact:!0,path:"/admin",component:ee}),Object(x.jsx)($,{exact:!0,path:"/admin/createproduct",component:te}),Object(x.jsx)($,{exact:!0,path:"/admin/edit/:id",component:ne}),Object(x.jsx)(f.b,{component:ae})]}),Object(x.jsx)(I,{})]})};n(75);i.a.render(Object(x.jsx)(r.a,{children:Object(x.jsx)(g,{children:Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(ce,{})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.92f73d1c.chunk.js.map