(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{91:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t(1),o=t(18),c=t.n(o),a=t(10),s=t(3),l=t(2);function d(){var n=Object(s.a)(["\n  width: ",";\n  height: ",";;\n  margin-bottom: 25px;\n  margin-top: ",";\n"]);return d=function(){return n},n}function u(){var n=Object(s.a)(["\n      color: white;\n      background-color: black;\n      border-color: black;\n      "]);return u=function(){return n},n}function j(){var n=Object(s.a)(["\ndisplay: flex;\n    width: ",";\n    flex-wrap: wrap;\n    white-space:nowrap;\n    padding: ",";\n    background-color: ",";\n    border: 2px solid black;\n    color: ",";\n    text-decoration: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: 0.6s;\n    border-radius: 5px;\n    margin: 0;\n    font-size: 1.5rem;\n    :hover{\n        color: white;\n        background-color: black;\n        border-color: black;\n      }\n    ",";\n      @media only screen and (max-width: 480px){\n        font-size: 1rem;\n        width: 200px;\n      };\n"]);return j=function(){return n},n}function m(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  volume: silent;\n"]);return m=function(){return n},n}function b(){var n=Object(s.a)(["\n  @media only screen and (max-width: 480px){\n    flex-direction: column;\n  };\n  @media only screen and (min-width: 480px) and (max-width: 768px){\n    flex-direction: column;\n  };\n  @media only screen and (min-width: 768px){\n    flex-direction: column;\n  };\n  @media only screen and (min-width: 1380px){\n    flex-direction: row;\n  };\n "]);return b=function(){return n},n}function h(){var n=Object(s.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: ",";\n  justify-content: center;\n  align-items: ",";\n  align-content: ",";\n  max-width: ",";\n  display: ",";\n\n  ",";\n  @media only screen and (max-width: 480px){\n    font-size: 1.25rem;\n  };\n  @media only screen and (min-width: 480px) and (max-width: 768px){\n    font-size: 1.25rem;\n  };\n  @media only screen and (min-width: 768px){\n    font-size: 1.25rem;\n  };\n  @media only screen and (min-width: 1380px){\n    font-size: 1.5rem;\n  };\n"]);return h=function(){return n},n}function x(){var n=Object(s.a)(["\n    @media only screen and (max-width: 620px){\n      flex-direction: column;\n    };\n  "]);return x=function(){return n},n}function p(){var n=Object(s.a)(["\n  display: flex;\n  opacity: ",";\n  flex-direction: ",";\n  background-color: ",";\n  justify-content: center;\n  align-items: ",";\n  padding-bottom: ",";\n  padding: 2.5%;\n  margin: 0;\n  ",";\n"]);return p=function(){return n},n}var f=l.b.div(p(),(function(n){return n.opacity||1}),(function(n){return n.orientation||"row"}),(function(n){return n.backColor||"#F9F9F9"}),(function(n){return n.align||"center"}),(function(n){return n.padding||"0"}),(function(n){return n.footer&&Object(l.a)(x())})),w=l.b.div(h(),(function(n){return n.textColor||"black"}),(function(n){return n.orientation||"column"}),(function(n){return n.alignItems||"center"}),(function(n){return n.alignContent||"center"}),(function(n){return n.maxWidth||"80%"}),(function(n){return n.display||""}),(function(n){return n.row&&Object(l.a)(b())})),O=(l.b.iframe(m()),l.b.button(j(),(function(n){return n.width||"300px"}),(function(n){return n.padding||"20px"}),(function(n){return n.backColor||"#F9F9F9"}),(function(n){return n.color||"black"}),(function(n){return"true"===n.active&&Object(l.a)(u())}))),g=l.b.img(d(),(function(n){return n.width||"100%"}),(function(n){return n.height||"auto"}),(function(n){return n.marginTop||"0px"}));function y(){var n=Object(s.a)(["\n    volume: silent;\n    visibility: ",";\n    @media only screen and (min-width: 320px) and (max-width: 480px){\n      transform: scale(0.8);\n      height: 800px;\n      width: ",";\n    }\n    @media only screen and (min-width: 480px){\n      width: 100%;\n      height: 800px\n    }\n    @media only screen and (min-width: 950px) and (max-width: 1800px){\n      margin-left: 0px;\n      width: 55%;\n      height: 800px;\n    }\n    @media only screen and (min-width: 1800px){\n      margin-left: 64px;\n      width: 100%;\n      height: 800px;\n    }\n"]);return y=function(){return n},n}function v(){var n=Object(s.a)(["\n  \n  @media only screen and (min-width: 320px){\n    flex-direction: column;\n  }\n  @media only screen and (min-width: 1800px){\n    flex-direction: row;\n  }\n"]);return v=function(){return n},n}var k=Object(l.b)(w)(v()),z=l.b.iframe(y(),(function(n){return n.visibility||"visible"}),(function(n){return n.width||"auto"}));var S=function(){var n=function(){var n="undefined"!==typeof window;function e(){return{width:n?window.innerWidth:null,height:n?window.innerHeight:null}}var t=Object(r.useState)(e()),i=Object(a.a)(t,2),o=i[0],c=i[1];return Object(r.useEffect)((function(){if(n){var t=function(){c(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[n]),o}().width;return Object(i.jsx)(f,{padding:"5%",children:Object(i.jsxs)(k,{row:!0,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Develop the future of social with remixable applications"}),Object(i.jsxs)("p",{children:["Kojis are mini web applications that can be shared on all social platforms,\n                      embedded in any website, and sent via messengers and email. Everyday users can\n                      create Kojis in minutes by \u201cremixing\u201d templates and customizing them.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"As a developer, you can build the templates that power Kojis, and your\n                      templates will be remixed into custom web applications and shared by millions\n                      of people across the world."]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{style:{width:"300px"},children:Object(i.jsx)(O,{children:"Build your first template"})}),Object(i.jsx)("br",{})]}),Object(i.jsx)(z,{width:1.2*n,src:"https://withkoji.com/~JamesHole/kojidev"})]})})},C=function(){return Object(i.jsx)(f,{backColor:"#111111",children:Object(i.jsxs)(w,{alignItems:"left",textColor:"white",children:[Object(i.jsx)("h1",{children:"Kojis are JavaScript applications"}),Object(i.jsx)("p",{children:"Kojis are full-stack, modern JavaScript applications \n                  that take advantage of the latest web standards and emerging technologies. \n                  They are designed to be responsive, so that they can run on any browser and every device. \n                  They can embed multimedia, leverage web AR/VR support, facilitate e-commerce transactions, and more."}),Object(i.jsx)("br",{}),Object(i.jsx)("h1",{style:{marginTop:0},children:"Templates empower everyone to make amazing Kojis"}),Object(i.jsx)("p",{children:"Developers build \u201cremixable\u201d templates for any type of web application, \n                  such as interactive selfies, memes, games, and utilities. \n                  Non-developers can edit template elements without coding, \n                  such as images, text, and sounds, and create a custom version that they can share anywhere on the web. \n                  With the ability to create and share remixable, interactive content, \n                  the opportunities for creative new applications and experiences are endless."})]})})};function F(){var n=Object(s.a)(["\n    text-align: center;\n    width: 400px;\n    @media only screen and (max-width: 480px){\n        width: 300px;\n        height: auto;\n    };\n"]);return F=function(){return n},n}function M(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #111111;\n  color: white;\n  padding: 15px;\n  max-width: 600px;\n\n"]);return M=function(){return n},n}var T=l.b.div(M()),K=l.b.p(F()),D=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(f,{backColor:"#111111",orientation:"column",children:[Object(i.jsx)(w,{orientation:"row",row:!0,children:Object(i.jsx)("h1",{style:{color:"white",marginTop:20},children:"Koji for developers"})}),Object(i.jsxs)(w,{row:!0,children:[Object(i.jsx)(T,{children:Object(i.jsxs)(K,{children:[Object(i.jsx)("b",{children:"Make an impact"}),Object(i.jsx)("br",{}),"Designers, content creators, brands, and influencers need custom templates. You empower these communities."]})}),Object(i.jsx)(g,{src:"images/Bulb.png",alt:"Bulb",width:"80px"}),Object(i.jsx)(T,{children:Object(i.jsxs)(K,{children:[Object(i.jsx)("b",{children:"Get noticed"}),Object(i.jsx)("br",{}),"Milions of people remix your template and share their creations on social platforms like Facebook, Twitter, and Reddit."]})}),Object(i.jsx)(g,{src:"images/Money.png",alt:"Money",width:"100px"}),Object(i.jsx)(T,{children:Object(i.jsxs)(K,{children:[Object(i.jsx)("b",{children:"Make money"}),Object(i.jsx)("br",{}),"Koji developers get paid through licensing, asset packs, and other compensation programs."]})})]})]})})};function A(){var n=Object(s.a)(["\n  text-decoration: underline;\n  font-weight: bold;\n"]);return A=function(){return n},n}function E(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  background-color: #F9F9F9;\n  color: black;\n  cursor: pointer;\n  padding: 8px;\n  margin: 1%;\n  width: 400px;\n  height: 400px;\n  border-radius: 10px;\n  transition: 0.6s;\n  :hover {\n    background-color: black;\n    color: white;\n  }\n  @media only screen and (max-width: 480px){\n    width: 300px;\n    height: 350px;\n  }\n"]);return E=function(){return n},n}var J=l.b.div(E()),P=l.b.p(A()),B=function(){return Object(i.jsxs)(f,{orientation:"column",children:[Object(i.jsx)(w,{orientation:"row",row:!0,children:Object(i.jsx)("h1",{style:{color:"black",marginTop:20},children:"Get started"})}),Object(i.jsxs)(w,{orientation:"row",row:!0,children:[Object(i.jsxs)(J,{children:[Object(i.jsx)(g,{src:"images/FlyOffKoji.png",alt:"Money",width:"auto",height:"100px",marginTop:"20px"}),Object(i.jsx)(P,{children:"Build your first template"}),Object(i.jsx)("p",{style:{textAlign:"center"},children:"Follow this block by block blueprint to get started quickly and publish your first web application on Koji."})]}),Object(i.jsxs)(J,{children:[Object(i.jsx)(g,{src:"images/ExploreKoji.png",alt:"Money",width:"auto",height:"100px",marginTop:"20px"}),Object(i.jsx)(P,{children:"Explore a Koji project"}),Object(i.jsx)("p",{style:{textAlign:"center"},children:"See the unique elements of a Koji web application and learn what powers the magic of customization."})]}),Object(i.jsxs)(J,{children:[Object(i.jsx)(g,{src:"images/CommunityKoji.png",alt:"Money",width:"auto",height:"100px",marginTop:"20px"}),Object(i.jsx)(P,{children:"Connect with the community"}),Object(i.jsx)("p",{style:{textAlign:"center"},children:"Share tips and partner with other JavaScript developers, graphic designers, multimedia experts, and content creators."})]})]})]})},L=(t(54),t(22)),H=t.n(L),I=t(23),N=t.n(I);function R(){var n=Object(s.a)(["\n    @media only screen and (min-width: 520px){\n      transition: 0.4s;\n      :hover{\n        transform: translate(10px, 0);\n      }\n    };\n"]);return R=function(){return n},n}function V(){var n=Object(s.a)(["\n    @media only screen and (min-width: 520px){\n      transition: 0.4s;\n      :hover{\n        transform: translate(-10px, 0);\n      }\n    };\n"]);return V=function(){return n},n}function _(){var n=Object(s.a)(["\n      width: 25%;\n      height: auto;\n      border-radius: 4px;\n      @media only screen and (max-width: 480px){\n        width: 80%;\n      };\n      @media only screen and (min-width: 480px) and (max-width: 768px){\n        width: 60%;\n      };\n      @media only screen and (min-width: 768px){\n        width: 35%;\n      };\n      @media only screen and (min-width: 1380px){\n        width: 25%;\n      };\n"]);return _=function(){return n},n}function q(){var n=Object(s.a)(["\n    height: auto;\n    width: 25%;\n    border-radius: 12px;\n    @media only screen and (max-width: 480px){\n      width: 80%;\n    };\n    @media only screen and (min-width: 480px) and (max-width: 768px){\n      width: 60%;\n    };\n    @media only screen and (min-width: 768px){\n      width: 35%;\n    };\n    @media only screen and (min-width: 1380px){\n      width: 25%;\n    };\n"]);return q=function(){return n},n}function G(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  text-align: center;\n"]);return G=function(){return n},n}function Q(){var n=Object(s.a)(["\n      color: white;\n      background-color: black;\n      border-color: black;\n      "]);return Q=function(){return n},n}function W(){var n=Object(s.a)(["\n    display: flex;\n    width: 300px;\n    flex-wrap: wrap;\n    white-space:nowrap;\n    padding: 5px;\n    background-color: #F9F9F9;\n    border: 2px solid black;\n    margin: 10px;\n    color: black;\n    font-size: 1.25rem;\n    text-decoration: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: 0.6s;\n    border-radius: 5px;\n    :hover{\n        color: white;\n        background-color: black;\n        border-color: black;\n      }\n    ",";\n      @media only screen and (max-width: 480px){\n        font-size: 1rem;\n      };\n\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #F9F9F9;\n  color: black;\n  padding: 5px;\n  padding-bottom: 15px;\n  margin: 1%;\n  @media only screen and (max-width: 480px){\n    flex-direction: column;\n  };\n  @media only screen and (min-width: 480px) and (max-width: 768px){\n    flex-direction: column;\n  };\n  @media only screen and (min-width: 768px){\n    flex-direction: column;\n  };\n  @media only screen and (min-width: 1380px){\n    flex-direction: row;\n  };\n"]);return X=function(){return n},n}var U=l.b.div(X()),Y=l.b.button(W(),(function(n){return"true"===n.active&&Object(l.a)(Q())})),Z=(l.b.div(G()),l.b.img(q())),$=l.b.video(_()),nn=(Object(l.b)(H.a)(V()),Object(l.b)(N.a)(R()),function(){return Object(i.jsx)(Z,{src:"images/React.png"})}),en=function(){return Object(i.jsx)($,{controls:!0,loop:!0,muted:!0,autoPlay:!0,src:"videos/DefineCustomEl.mp4"})},tn=function(){return Object(i.jsx)($,{controls:!0,loop:!0,muted:!0,autoPlay:!0,src:"videos/SetCustomVal.mp4"})},rn=function(){return Object(i.jsx)(Z,{src:"images/ShareKoji2.png"})},on=function(){var n=Object(r.useState)([!0,!1,!1,!1]),e=Object(a.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(Object(i.jsx)(nn,{})),s=Object(a.a)(c,2),l=s[0],d=s[1],u=[Object(i.jsx)(nn,{}),Object(i.jsx)(en,{}),Object(i.jsx)(tn,{}),Object(i.jsx)(rn,{})];function j(n){var e=function(n){var e=[!1,!1,!1,!1];return e[n]=!0,e}(n);o(e),d(u[n])}return Object(i.jsxs)(f,{padding:"5%",orientation:"column",children:[Object(i.jsx)(w,{children:Object(i.jsx)("h1",{style:{textAlign:"center"},children:"How to build remixable templates"})}),Object(i.jsxs)(U,{children:[Object(i.jsx)(Y,{onClick:function(){return j(0)},active:"".concat(t[0]),children:"Start from a scaffold"}),Object(i.jsx)(Y,{onClick:function(){return j(1)},active:"".concat(t[1]),children:"Define customizable elements"}),Object(i.jsx)(Y,{onClick:function(){return j(2)},active:"".concat(t[2]),children:"Dynamically set custom values"}),Object(i.jsx)(Y,{onClick:function(){return j(3)},active:"".concat(t[3]),children:"Publish to the Koji network"})]}),l]})},cn=t(24),an=t.n(cn),sn=t(25),ln=t.n(sn),dn=t(26),un=t.n(dn),jn=t(27),mn=t.n(jn),bn=t(28),hn=t.n(bn),xn=t(29),pn=t.n(xn),fn=t(30),wn=t.n(fn),On=t(31),gn=t.n(On),yn=t(32),vn=t.n(yn),kn=t(33),zn=t.n(kn),Sn=t(34),Cn=t.n(Sn),Fn=t(35),Mn=t.n(Fn),Tn=t(36),Kn=t.n(Tn),Dn=t(37),An=t.n(Dn),En=t(38),Jn=t.n(En),Pn=t(39),Bn=t.n(Pn),Ln=t(40),Hn=t.n(Ln),In=t(41),Nn=t.n(In),Rn=t(42),Vn=t.n(Rn),_n=t(43),qn=t.n(_n),Gn=t(44),Qn=t.n(Gn),Wn=t(45),Xn=t.n(Wn);function Un(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: row !important;\n    width: 21px;\n    margin-right: 0;\n"]);return Un=function(){return n},n}var Yn=[{id:1,icon:[Object(i.jsx)(an.a,{style:{fontSize:18}})],name:"About",link:"https://withkoji.com/resources/about"},{id:2,icon:[Object(i.jsx)(ln.a,{style:{fontSize:18}})],name:"Plugins",link:"https://withkoji.com/resources/plugins"},{id:3,icon:[Object(i.jsx)(un.a,{style:{fontSize:18}})],name:"Tutorials",link:"https://www.youtube.com/channel/UCc5jM6NwVNQc7b5APigEsMw"},{id:4,icon:[Object(i.jsx)(mn.a,{style:{fontSize:18}})],name:"Blog",link:"https://blog.withkoji.com/"},{id:5,icon:[Object(i.jsx)(hn.a,{style:{fontSize:18}})],name:"Privacy policy",link:"https://withkoji.com/resources/privacy"},{id:6,icon:[Object(i.jsx)(pn.a,{style:{fontSize:18}})],name:"Terms of use",link:"https://withkoji.com/resources/terms"},{id:7,icon:[Object(i.jsx)(wn.a,{style:{fontSize:18}})],name:"Copyright policy",link:"https://withkoji.com/resources/copyright"},{id:8,icon:[Object(i.jsx)(gn.a,{style:{fontSize:18}})],name:"Media kit",link:"https://drive.google.com/drive/folders/1us80XaJqpoj408HX4TeXxbPIc3ZjtM5y"},{id:9,icon:[Object(i.jsx)(vn.a,{style:{fontSize:18}})],name:"Status",link:"http://www.kojistatus.com/"}],Zn=[{id:1,icon:[Object(i.jsx)(zn.a,{style:{fontSize:18}})],name:"Developer documentation",link:"https://developer.withkoji.com/"},{id:2,icon:[Object(i.jsx)(Cn.a,{style:{fontSize:18}})],name:"Scaffolds",link:"https://withkoji.com/create/scaffolds"},{id:3,icon:[Object(i.jsx)(Mn.a,{style:{fontSize:18}})],name:"Create an asset pack",link:"https://www.youtube.com/watch?v=Ka4FYGHbiAM"},{id:4,icon:[Object(i.jsx)(Kn.a,{style:{fontSize:18}})],name:"Create an extension",link:"https://developer.withkoji.com/"},{id:5,icon:[Object(i.jsx)(An.a,{style:{fontSize:18}})],name:"My monetized assets",link:"https://withkoji.com/partners/registered-assets"}],$n=[{id:1,icon:[Object(i.jsx)(Jn.a,{style:{fontSize:18}})],name:"Browse campaigns",link:"https://withkoji.com/campaigns"},{id:2,icon:[Object(i.jsx)(Bn.a,{style:{fontSize:18}})],name:"My campaign links",link:"https://withkoji.com/campaigns/activity/posts"},{id:3,icon:[Object(i.jsx)(Hn.a,{style:{fontSize:18}})],name:"My campaign submissions",link:"https://withkoji.com/campaigns/activity/submissions"},{id:4,icon:[Object(i.jsx)(Nn.a,{style:{fontSize:18}})],name:"Campaign manager",link:"https://withkoji.com/campaigns/sponsor"}],ne=l.b.img(Un()),ee=[{id:1,icon:[Object(i.jsx)(ne,{src:"images/discordIcon.png"})],name:"",link:"https://discord.com/invite/eQuMJF6"},{id:2,icon:[Object(i.jsx)(Vn.a,{style:{fontSize:18}})],name:"",link:"https://twitter.com/madewithkoji"},{id:3,icon:[Object(i.jsx)(qn.a,{style:{fontSize:18}})],name:"",link:"https://www.facebook.com/madewithkoji/"},{id:4,icon:[Object(i.jsx)(Qn.a,{style:{fontSize:18}})],name:"",link:"https://www.linkedin.com/company/withkoji/"},{id:5,icon:[Object(i.jsx)(Xn.a,{style:{fontSize:18}})],name:"",link:"https://www.youtube.com/channel/UCc5jM6NwVNQc7b5APigEsMw"}];function te(){var n=Object(s.a)(["\n    \n"]);return te=function(){return n},n}function ie(){var n=Object(s.a)(["\n    display: flex;\n    background-color: #111111;\n    color: white;\n    flex-direction: ",";\n    justify-content: left;\n    align-items: left;\n    margin: 3%;\n"]);return ie=function(){return n},n}function re(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: left;\n    margin: 0;\n    background-color: #111111;\n    border-radius: 8px;\n    color: white;\n    :hover{\n      background-color: #666666;\n    }\n  "]);return re=function(){return n},n}function oe(){var n=Object(s.a)(["\n    font-size: 14px;\n    margin-left: 8px;\n    font-weight: bold;\n    margin: 12px;\n    text-align: left;\n  "]);return oe=function(){return n},n}function ce(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-left: 8px;\n    font-size: 50px;\n  "]);return ce=function(){return n},n}var ae=l.b.div(ce()),se=l.b.p(oe()),le=l.b.div(re()),de=l.b.div(ie(),(function(n){return n.orientation||"column"})),ue=(l.b.a(te()),function(){var n=Yn.map((function(n){return Object(i.jsx)("a",{href:n.link,target:"_blank",style:{textDecoration:"none"},children:Object(i.jsxs)(le,{children:[Object(i.jsx)(ae,{children:n.icon}),Object(i.jsx)(se,{children:n.name})]})})})),e=Zn.map((function(n){return Object(i.jsx)("a",{href:n.link,target:"_blank",style:{textDecoration:"none"},children:Object(i.jsxs)(le,{children:[Object(i.jsx)(ae,{children:n.icon}),Object(i.jsx)(se,{children:n.name})]})})})),t=$n.map((function(n){return Object(i.jsx)("a",{href:n.link,target:"_blank",style:{textDecoration:"none"},children:Object(i.jsxs)(le,{children:[Object(i.jsx)(ae,{children:n.icon}),Object(i.jsx)(se,{children:n.name})]})})})),r=ee.map((function(n){return Object(i.jsx)("a",{href:n.link,target:"_blank",style:{textDecoration:"none"},children:Object(i.jsx)(le,{children:Object(i.jsx)(ae,{style:{margin:"4px"},children:n.icon})})})}));return Object(i.jsxs)(f,{backColor:"#111111",orientation:"row",align:"flex-start",footer:!0,children:[Object(i.jsxs)(de,{children:[Object(i.jsx)(se,{style:{marginLeft:"8px",textTransform:"uppercase"},children:"Resources"}),n]}),Object(i.jsxs)(de,{children:[Object(i.jsx)(se,{style:{marginLeft:"8px",textTransform:"uppercase"},children:"Developers"}),e]}),Object(i.jsxs)(de,{children:[Object(i.jsx)(se,{style:{marginLeft:"8px",textTransform:"uppercase"},children:"Campaigns"}),t]}),Object(i.jsxs)(de,{children:[Object(i.jsx)(se,{style:{marginLeft:"9px",textTransform:"uppercase"},children:"Contact"}),Object(i.jsx)(de,{orientation:"row",children:r})]})]})});var je=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(S,{}),Object(i.jsx)(C,{}),Object(i.jsx)(on,{}),Object(i.jsx)(D,{}),Object(i.jsx)(B,{}),Object(i.jsx)(ue,{})]})};c.a.render(Object(i.jsx)(je,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.393723bf.chunk.js.map