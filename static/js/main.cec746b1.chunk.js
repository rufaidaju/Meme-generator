(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(7),o=a.n(m),r=a(2),c=a(3),s=a(5),i=a(4);var u=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Trollface"}),l.a.createElement("p",null,"Meme Generator"))},h=a(8),p=a(1),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;console.log(a),e.setState({allMemeImgs:a}),console.log(e.state.allMemeImgs[0])}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(h.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t];this.setState({randomImg:a.url})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),l.a.createElement("button",null,"Gen")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:"Random image"}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(g,null))}}]),a}(n.Component);o.a.render(l.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.cec746b1.chunk.js.map