(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=a(1),u=a(2),s=a(3),i=a(5),m=a(4),p=(a(39),a(6)),h=a(7),d=a.n(h),g=a(10),f=a(9),b=a.n(f),E=new(function(){function e(){var t=this;Object(u.a)(this,e),this.handleUpload=function(){var e=Object(g.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.auth.post("/upload",a);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.auth=b.a.create({baseURL:"https://carslovers.herokuapp.com",withCredentials:!0})}return Object(s.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"garage",value:function(e){return this.auth.get("/cars/garage/".concat(e)).then((function(e){return e.data}))}},{key:"carDetail",value:function(e){return this.auth.get("/cars/carDetail/".concat(e)).then((function(e){return e.data}))}},{key:"deleteCar",value:function(e){return this.auth.get("/cars/garage/".concat(e)).then((function(e){return e.data}))}},{key:"profile",value:function(e){return this.auth.get("/profile/".concat(e)).then((function(e){return e.data}))}},{key:"edituser",value:function(e){return this.auth.get("/profile/edituser/"+e).then((function(e){return e.data}))}},{key:"editcar",value:function(e){return this.auth.get("/profile/editcar"+e).then((function(e){return e.data}))}}]),e}()),v=r.a.createContext(),y=v.Consumer,C=v.Provider,j=function(e){return function(t){Object(i.a)(n,t);var a=Object(m.a)(n);function n(){return Object(u.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(y,null,(function(a){var n=a.login,l=a.signup,c=a.user,o=a.logout,u=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:l,user:c,logout:o,isLoggedin:u},t.props))}))}}]),n}(n.Component)},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.username,n=t.password;E.signup({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.username,n=t.password;E.login({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){E.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e.edituser=function(e){E.edituser(e).then((function(e){return e})).catch((function(e){return console.log(e)}))},e.editcar=function(e){E.editcar(e).then((function(e){return e})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,l=this.login,c=this.logout,o=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(C,{value:{isLoggedin:a,user:n,login:l,logout:c,signup:o}},this.props.children)}}]),a}(r.a.Component),O=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout,e.isLoggedin);return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",className:"home-btn"},r.a.createElement("img",{src:"https://res.cloudinary.com/dtsag4ss2/image/upload/v1607963082/Fotos/kisspng-auto-show-car-logo-drawing-5affb4fbf28da1.0945702815267074519935_juiqfo.png",alt:"Logo"}))),t?r.a.createElement("div",{className:"navbar-logged"},r.a.createElement("button",{className:"navbar-button",onClick:this.props.logout},"Logout"),r.a.createElement("button",{className:"navbar-button"},r.a.createElement(o.b,{to:"/profile"},"Profile"))):r.a.createElement("div",{className:"navbar-logged"},r.a.createElement(o.b,{to:"/login"},r.a.createElement("button",{className:"navbar-button"},"Login")),r.a.createElement(o.b,{to:"/signup"},r.a.createElement("button",{className:"navbar-button"},"SignUp"))))}}]),a}(n.Component));var k=j((function(e){return r.a.createElement("div",{className:"parking"},r.a.createElement("h1",null,"Entra en tu garage"),r.a.createElement("h2",null,"El lugar donde almacenar tus coches"))})),x=a(15),N=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.signup({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(x.a)({},n,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login-header"},r.a.createElement("h1",null,"Sign Up")),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("h3",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("h3",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Sign Up",className:"login-button"}),r.a.createElement("div",{className:"cuenta"},r.a.createElement("p",null,"Already have account?"),r.a.createElement(o.b,{to:"/login"}," Login"))))))}}]),a}(n.Component)),S=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.login({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(x.a)({},n,r))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"login-header"}),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("h3",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("h3",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login",className:"login-button"})))))}}]),a}(n.Component)),F=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",this.props.user.username))}}]),a}(n.Component)),U=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={userId:e.props.user._id,user:{}},e.getProfile=Object(g.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.profile(e.userId);case 3:return a=t.sent,t.next=6,b.a.get("".concat("https://carslovers.herokuapp.com","/profile/car/").concat(e.props.user._id));case 6:n=t.sent,e.setState({user:a,car:n.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){return r.a.createElement("div",{className:"profileBackground"},r.a.createElement("section",null,r.a.createElement("div",{className:"titleProfile"},r.a.createElement("h1",null,"Welcome ",this.props.user.username))),r.a.createElement("section",null,r.a.createElement("div",{className:"botones"},r.a.createElement(o.b,{to:"/editUser/".concat(this.props.user._id)},r.a.createElement("button",{className:"profileButton"},"Edit Profile")),r.a.createElement(o.b,{to:"/garage/".concat(this.props.user._id)},r.a.createElement("button",{className:"profileButton"},"My Garage")))))}}]),a}(n.Component)),L=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.age,l=t.country,c=t.city,o=t.image;b.a.put("".concat("https://carslovers.herokuapp.com","/profile/").concat(n.props.match.params.id,"/editUser"),{username:a,age:r,country:l,city:c,image:o}).then((function(){n.props.history.push("/profile")})).catch((function(e){return console.log(e)}))},n.handleFormEdit=function(e){b.a.get("".concat("https://carslovers.herokuapp.com","/profile/").concat(n.props.user._id)).then((function(e){n.setState({username:e.data.username,age:e.data.age,country:e.data.country,city:e.data.city,image:e.data.image}),console.log(e,"222222222222")})).catch((function(e){return console.log(e)}))},n.handleChangeUser=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(x.a)({},a,r))},n.handleFileUpload=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("image",t.target.files[0]),e.prev=2,e.next=5,E.handleUpload(a);case 5:r=e.sent,n.setState({image:r.secure_url}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),n.state={username:n.props.user.username,age:n.props.user.age,country:n.props.user.country,city:n.props.user.city,image:n.props.user.image},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.handleFormEdit()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"editProfileBackground"},r.a.createElement("div",{className:"edit"},r.a.createElement("hr",null),r.a.createElement("h1",null,"Edit User"),r.a.createElement("form",{className:"edit-info",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChangeUser(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Age: "),r.a.createElement("input",{type:"text",name:"age",value:this.state.age,onChange:function(t){return e.handleChangeUser(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Country: "),r.a.createElement("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleChangeUser(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"City: "),r.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:function(t){return e.handleChangeUser(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Image: "),r.a.createElement("input",{type:"file",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("br",null),r.a.createElement("div",{className:"submit"},r.a.createElement("input",{className:"login-button",type:"submit",value:"Submit"})),r.a.createElement(o.b,{to:"/profile"},r.a.createElement("button",{className:"login-button"},"Go back")))))}}]),a}(n.Component)),D=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.brand,r=t.model,l=t.year,c=t.engine,o=t.power,u=t.traction,s=t.fuel,i=t.image;b.a.post("".concat("https://carslovers.herokuapp.com","/cars/").concat(n.props.match.params.id,"/createcar"),{brand:a,model:r,year:l,engine:c,power:o,traction:u,fuel:s,image:i}).then((function(){})).catch((function(e){return console.log(e)})),n.props.history.push("/garage/".concat(n.props.match.params.id))},n.handleCreateCar=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(x.a)({},a,r))},n.handleFileUpload=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("image",t.target.files[0]),e.prev=2,e.next=5,E.handleUpload(a);case 5:r=e.sent,n.setState({image:r.secure_url}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),n.state={brand:"",model:"",year:"",engine:"",power:"",traction:"",fuel:"",image:"",owner:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"createCarBackground"},r.a.createElement("h1",{className:"titleCreate"},"Create your car"),r.a.createElement("form",{className:"edit-info",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Brand: "),r.a.createElement("input",{type:"text",name:"brand",value:this.state.brand,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Model: "),r.a.createElement("input",{type:"text",name:"model",value:this.state.model,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Year: "),r.a.createElement("input",{type:"text",name:"year",value:this.state.year,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Engine: "),r.a.createElement("input",{type:"text",name:"engine",value:this.state.engine,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Power: "),r.a.createElement("input",{type:"text",name:"power",value:this.state.power,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Traction: "),r.a.createElement("input",{type:"text",name:"traction",value:this.state.traction,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Fuel: "),r.a.createElement("input",{type:"text",name:"fuel",value:this.state.fuel,onChange:function(t){return e.handleCreateCar(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Image: "),r.a.createElement("input",{type:"file",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement(o.b,{to:"/garage/".concat(this.props.user._id)},r.a.createElement("button",{className:"login-button"},"Go back"))))}}]),a}(n.Component)),_=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.brand,r=t.model,l=t.year,c=t.engine,o=t.power,u=t.traction,s=t.fuel,i=t.image;b.a.put("".concat("https://carslovers.herokuapp.com","/cars/").concat(n.props.match.params.id,"/editcar"),{brand:a,model:r,year:l,engine:c,power:o,traction:u,fuel:s,image:i}).then((function(){n.props.history.push("/garage/".concat(n.props.user._id))})).catch((function(e){console.log(e)}))},n.handleChangeCar=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(x.a)({},a,r))},n.handleFormEdit=function(e){b.a.get("".concat("https://carslovers.herokuapp.com","/cars/").concat(n.props.match.params.id)).then((function(e){n.setState({brand:e.data.brand,model:e.data.model,year:e.data.year,engine:e.data.engine,power:e.data.power,traction:e.data.traction,fuel:e.data.fuel,image:e.data.image})})).catch((function(e){return console.log(e)}))},n.handleFileUpload=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("image",t.target.files[0]),e.prev=2,e.next=5,E.handleUpload(a);case 5:r=e.sent,n.setState({image:r.secure_url}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),n.state={brand:n.props.brand,model:n.props.model,year:n.props.year,engine:n.props.engine,power:n.props.power,traction:n.props.traction,fuel:n.props.fuel,image:n.props.image,owner:n.props.owner},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.handleFormEdit()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit your car"),r.a.createElement("form",{className:"edit-info",onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Brand: "),r.a.createElement("input",{type:"text",name:"brand",value:this.state.brand,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Model: "),r.a.createElement("input",{type:"text",name:"model",value:this.state.model,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Year: "),r.a.createElement("input",{type:"text",name:"year",value:this.state.year,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Engine: "),r.a.createElement("input",{type:"text",name:"engine",value:this.state.engine,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Power: "),r.a.createElement("input",{type:"text",name:"power",value:this.state.power,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Traction: "),r.a.createElement("input",{type:"text",name:"traction",value:this.state.traction,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Fuel: "),r.a.createElement("input",{type:"text",name:"fuel",value:this.state.fuel,onChange:function(t){return e.handleChangeCar(t)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Image: "),r.a.createElement("input",{type:"file",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement(o.b,{to:"/garage/".concat(this.props.user._id)},r.a.createElement("button",{className:"login-button"},"Go back"))))}}]),a}(n.Component)),B=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={userId:e.props.user._id,cars:[]},e.getGarage=Object(g.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.garage(e.props.match.params.id);case 3:a=t.sent,e.setState({cars:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getGarage()}},{key:"render",value:function(){return r.a.createElement("div",{className:"garageBackground"},r.a.createElement("section",null,r.a.createElement("div",{className:"titleGarage"},r.a.createElement("h1",null,"My Garage"))),r.a.createElement("section",null,r.a.createElement("section",{className:"garage"},this.state.cars?this.state.cars.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"cardGarage"},r.a.createElement(o.b,{to:"/carDetail/".concat(e._id)},r.a.createElement("img",{src:e.image,alt:"Car Image"})),r.a.createElement("h4",null,"Brand: ",e.brand),r.a.createElement("br",null),r.a.createElement("h4",null,"Model: ",e.model)))})):null,r.a.createElement("section",null,r.a.createElement("div",{className:"botones"},r.a.createElement(o.b,{to:"/createcar/".concat(this.props.user._id)},r.a.createElement("button",{className:"garageButton"},"Add your car")),r.a.createElement(o.b,{to:"/profile"},r.a.createElement("button",{className:"garageButton"},"Go back")))))))}}]),a}(n.Component)),P=j(function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).getSingleCarDetail=Object(g.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.carDetail(n.props.match.params.id);case 3:t=e.sent,n.setState({car:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.deleteCar=function(){var e=n.props.match.params;b.a.delete("".concat("https://carslovers.herokuapp.com","/cars/").concat(e.id,"/delete")).then((function(){n.props.history.push("/garage/".concat(n.props.user._id))})).catch((function(e){console.log(e)}))},n.state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getSingleCarDetail()}},{key:"render",value:function(){var e=this;return console.log(this.state.car,"ooooooooooooo"),r.a.createElement("div",{className:"detailsBackground"},r.a.createElement("section",null,r.a.createElement("div",{className:"titleCardDetails"},r.a.createElement("h1",null,"Car Details"))),r.a.createElement("section",null,r.a.createElement("div",{className:""},r.a.createElement("img",{src:this.state.car&&this.state.car.image,alt:"Car Image"}),r.a.createElement("p",null,r.a.createElement("b",null,"Brand: "),this.state.car&&this.state.car.brand),r.a.createElement("p",null,r.a.createElement("b",null,"Model: "),this.state.car&&this.state.car.model),r.a.createElement("p",null,r.a.createElement("b",null,"Year: "),this.state.car&&this.state.car.year),r.a.createElement("p",null,r.a.createElement("b",null,"Engine: "),this.state.car&&this.state.car.engine),r.a.createElement("p",null,r.a.createElement("b",null,"Power: "),this.state.car&&this.state.car.power),r.a.createElement("p",null,r.a.createElement("b",null,"Traction: "),this.state.car&&this.state.car.traction),r.a.createElement("p",null,r.a.createElement("b",null,"Fuel: "),this.state.car&&this.state.car.fuel)),r.a.createElement("div",{className:""},r.a.createElement(o.b,{to:"/garage/".concat(this.props.user._id)},r.a.createElement("button",{className:""},"Go back")),this.props.user.id===this.state._id?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"",onClick:function(){return e.deleteCar()}},"Delete Car"),r.a.createElement(o.b,{to:"/editcar/".concat(this.props.match.params.id)},r.a.createElement("button",{className:""},"Edit car"))):null)))}}]),a}(n.Component)),M=a(18),G=j((function(e){var t=e.component,a=e.isLoggedin,n=Object(M.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(p.a,{to:"/profile"}):r.a.createElement(t,e)}}))})),I=j((function(e){var t=e.component,a=e.isLoggedin,n=Object(M.a)(e,["component","isLoggedin"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))})),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:k}),r.a.createElement(G,{exact:!0,path:"/signup",component:N}),r.a.createElement(G,{exact:!0,path:"/login",component:S}),r.a.createElement(I,{exact:!0,path:"/profile",component:U}),r.a.createElement(I,{exact:!0,path:"/editUser/:id",component:L}),r.a.createElement(I,{exact:!0,path:"/editcar/:id",component:_}),r.a.createElement(I,{exact:!0,path:"/createcar/:id",component:D}),r.a.createElement(I,{exact:!0,path:"/garage/:id",component:B}),r.a.createElement(I,{exact:!0,path:"/cardetail/:id",component:P}),r.a.createElement(I,{exact:!0,path:"/private",component:F}))))}}]),a}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1970970e.chunk.js.map