(this["webpackJsonpdjango-react-boilerplate"]=this["webpackJsonpdjango-react-boilerplate"]||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(3),r=n(5),c=n(6),l=n(0),s=n.n(l),u=n(4),i=n.n(u),p=(n(13),n(14),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).myChangeHandler=function(e){console.log("myChangeHandler"),o.setState({username:e.target.value});var t={username:e.target.value};console.log(JSON.stringify(t)),fetch("http://127.0.0.1:8000/api/data/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("Response:",e)})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))},o.state={username:""},o}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("h1",null,"Hello ",this.state.username),s.a.createElement("p",null,"Enter your name:"),s.a.createElement("input",{type:"text",onChange:this.myChangeHandler}))}}]),n}(s.a.Component));i.a.render(s.a.createElement(p,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.7164a85e.chunk.js.map